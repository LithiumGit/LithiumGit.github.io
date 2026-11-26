"use client";

import { useEffect, useRef, useState } from "react";
import { Routes } from "../../lib";

interface IEnvelope<T>{
    isSuccess?:boolean;
    IsSuccess?:boolean;
    data?:T;
    Data?:T;
    message?:string;
    Message?:string;
}

interface IAccountSession{
    token?:string;
    Token?:string;
    emailAddress?:string;
    EmailAddress?:string;
    fullName?:string;
    FullName?:string;
}

const apiUrl=process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/,"") || "";

export default function DesktopSession(){
    const started=useRef(false);
    const [error,setError]=useState("");

    useEffect(()=>{
        if(started.current)
            return;
        started.current=true;

        const code=new URLSearchParams(window.location.hash.slice(1)).get("code") || "";
        window.history.replaceState(null,"",Routes.DesktopSession);
        if(!/^[A-Za-z0-9_-]{43}$/.test(code)){
            setError("This app sign-in link is invalid or expired. Return to LithiumGit and try again.");
            return;
        }

        void (async()=>{
            try{
                if(!apiUrl)
                    throw new Error("Sign in is not configured yet.");

                const response=await fetch(`${apiUrl}/Auth/browser-session-exchange`,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({code}),
                    cache:"no-store",
                });
                const envelope=await response.json() as IEnvelope<IAccountSession>;
                const account=envelope.data||envelope.Data;
                const token=account?.token||account?.Token;
                if(!response.ok || !(envelope.isSuccess??envelope.IsSuccess) || !token)
                    throw new Error(envelope.message||envelope.Message||"Could not sign in to the website.");

                window.sessionStorage.setItem("lithiumgit.accessToken",token);
                const email=account?.emailAddress||account?.EmailAddress;
                const fullName=account?.fullName||account?.FullName;
                if(email) window.sessionStorage.setItem("lithiumgit.accountEmail",email);
                if(fullName) window.sessionStorage.setItem("lithiumgit.accountName",fullName);
                window.location.replace(Routes.Pricing);
            }
            catch(signInError){
                setError(signInError instanceof Error ? signInError.message : "Could not sign in to the website.");
            }
        })();
    },[]);

    if(error)
        return <p className="text-danger" role="alert">{error} <a href={Routes.SignIn}>Sign in</a></p>;
    return <p>Connecting your LithiumGit account to this browser...</p>;
}
