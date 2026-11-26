"use client";

import { useEffect, useState } from "react";
import { Routes } from "../../../lib";

interface IEnvelope<T>{
    isSuccess?:boolean; IsSuccess?:boolean; data?:T; Data?:T; message?:string; Message?:string;
}
interface IProfile{
    fullName?:string; FullName?:string; emailAddress?:string; EmailAddress?:string;
}
interface ISubscription{subscription?:string; Subscription?:string;}

const apiUrl=process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/,"")||"";

export default function AccountSettings(){
    const [profile,setProfile]=useState<{fullName:string;emailAddress:string}|null>(null);
    const [subscription,setSubscription]=useState("");
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        const token=window.sessionStorage.getItem("lithiumgit.accessToken");
        if(!token){
            window.location.replace(`${Routes.SignIn}?returnTo=${encodeURIComponent(Routes.AccountSettings)}`);
            return;
        }
        if(!apiUrl){
            setError("Account settings are not configured yet.");
            setLoading(false);
            return;
        }

        (async()=>{
            try{
                const headers={Authorization:`Bearer ${token}`};
                const [profileResponse,subscriptionResponse]=await Promise.all([
                    fetch(`${apiUrl}/Auth/profile`,{headers}),
                    fetch(`${apiUrl}/Subscription`,{headers}),
                ]);
                if(profileResponse.status===401||subscriptionResponse.status===401){
                    window.sessionStorage.removeItem("lithiumgit.accessToken");
                    window.sessionStorage.removeItem("lithiumgit.accountEmail");
                    window.sessionStorage.removeItem("lithiumgit.accountName");
                    window.location.replace(`${Routes.SignIn}?returnTo=${encodeURIComponent(Routes.AccountSettings)}`);
                    return;
                }
                const [profileEnvelope,subscriptionEnvelope]=await Promise.all([
                    profileResponse.json() as Promise<IEnvelope<IProfile>>,
                    subscriptionResponse.json() as Promise<IEnvelope<ISubscription>>,
                ]);
                const profileData=profileEnvelope.data||profileEnvelope.Data;
                const subscriptionData=subscriptionEnvelope.data||subscriptionEnvelope.Data;
                if(!profileResponse.ok||!(profileEnvelope.isSuccess??profileEnvelope.IsSuccess)||!profileData)
                    throw new Error(profileEnvelope.message||profileEnvelope.Message||"Could not load your profile.");
                if(!subscriptionResponse.ok||!(subscriptionEnvelope.isSuccess??subscriptionEnvelope.IsSuccess)||!subscriptionData)
                    throw new Error(subscriptionEnvelope.message||subscriptionEnvelope.Message||"Could not load your subscription.");
                const fullName=profileData.fullName||profileData.FullName||"";
                const emailAddress=profileData.emailAddress||profileData.EmailAddress||"";
                const plan=subscriptionData.subscription||subscriptionData.Subscription||"FREE";
                setProfile({fullName,emailAddress});
                setSubscription(plan.toUpperCase());
                if(emailAddress) window.sessionStorage.setItem("lithiumgit.accountEmail",emailAddress);
                if(fullName) window.sessionStorage.setItem("lithiumgit.accountName",fullName);
            }
            catch(loadError){
                setError(loadError instanceof Error?loadError.message:"Could not load account settings.");
            }
            finally{
                setLoading(false);
            }
        })();
    },[]);

    if(loading) return <div className="account-settings-shell"><p>Loading account settings…</p></div>;
    if(error) return <div className="account-settings-shell">
        <span className="pricing-eyebrow">LithiumGit account</span>
        <h1>Account settings</h1>
        <p className="text-danger" role="alert">{error}</p>
    </div>;

    const isPremium=subscription==="PREMIUM";

    return <div className="account-settings-shell">
        <header className="account-settings-heading">
            <span className="pricing-eyebrow">LithiumGit account</span>
            <h1>Account settings</h1>
            <p>View your profile and subscription plan.</p>
        </header>
        <div className="account-settings-grid">
            <section className="account-settings-card" aria-labelledby="profile-heading">
                <h2 id="profile-heading">Profile</h2>
                <dl>
                    <div><dt>Full name</dt><dd>{profile?.fullName||"—"}</dd></div>
                    <div><dt>Email</dt><dd>{profile?.emailAddress||"—"}</dd></div>
                </dl>
            </section>
            <section className="account-settings-card" aria-labelledby="subscription-heading">
                <h2 id="subscription-heading">Subscription</h2>
                <div className="account-settings-plan-row">
                    <div>
                        <div className="account-settings-plan-name">{isPremium?"Premium":"Free"}</div>
                        <p>{isPremium?"Premium features are enabled for your account.":"Your account is on the Free plan."}</p>
                    </div>
                    <span className={`account-settings-plan-badge${isPremium?" is-premium":""}`}>{isPremium?"Active":"Current plan"}</span>
                </div>
                {!isPremium&&<a className="pricing-button pricing-button-primary" href={Routes.Pricing}>View Premium plans</a>}
            </section>
        </div>
    </div>;
}
