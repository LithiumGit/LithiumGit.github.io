"use client";

import { FormEvent, useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ILogin { token?: string; Token?: string; emailAddress?: string; EmailAddress?: string; fullName?:string; FullName?:string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function SignInForm() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [returnTo, setReturnTo] = useState(Routes.Pricing);
    const [desktopParams, setDesktopParams] = useState<{state:string;challenge:string;callbackScheme:"lithiumgit"|"lithiumgit-dev"}|null>(null);

    useEffect(() => {
        const params=new URLSearchParams(window.location.search);
        const requested = params.get("returnTo");
        if (requested?.startsWith("/") && !requested.startsWith("//")) setReturnTo(requested);
        if(params.get("desktop")==="1"){
            const state=params.get("state")||"";
            const challenge=params.get("code_challenge")||"";
            const callbackScheme=params.get("callback_scheme")||"lithiumgit";
            if(/^[A-Za-z0-9_-]{43}$/.test(state) && /^[A-Za-z0-9_-]{43}$/.test(challenge)
                && (callbackScheme === "lithiumgit" || callbackScheme === "lithiumgit-dev"))
                setDesktopParams({state,challenge,callbackScheme});
            else setError("The desktop sign-in request is invalid. Return to LithiumGit and try again.");
        }
    }, []);

    const signIn = async (event: FormEvent) => {
        event.preventDefault(); setBusy(true); setError("");
        try {
            if (!apiUrl) throw new Error("Sign in is not configured yet.");
            const resumePath=desktopParams
                ? `${Routes.SignIn}?desktop=1&state=${encodeURIComponent(desktopParams.state)}&code_challenge=${encodeURIComponent(desktopParams.challenge)}&callback_scheme=${encodeURIComponent(desktopParams.callbackScheme)}`
                : returnTo;
            const response = await fetch(`${apiUrl}/Auth`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userName, password, returnTo:resumePath }) });
            const envelope = await response.json() as IEnvelope<ILogin>;
            const account = envelope.data || envelope.Data;
            const token = account?.token || account?.Token;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess) || !token) throw new Error(envelope.message || envelope.Message || "Sign in failed.");
            sessionStorage.setItem("lithiumgit.accessToken", token);
            const email = account?.emailAddress || account?.EmailAddress;
            if (email) sessionStorage.setItem("lithiumgit.accountEmail", email);
            const fullName=account?.fullName||account?.FullName;
            if(fullName) sessionStorage.setItem("lithiumgit.accountName",fullName);
            if(desktopParams){
                const codeResponse=await fetch(`${apiUrl}/Auth/desktop-code`,{
                    method:"POST",
                    headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},
                    body:JSON.stringify({codeChallenge:desktopParams.challenge}),
                });
                const codeEnvelope=await codeResponse.json() as IEnvelope<{code?:string;Code?:string}>;
                const codeData=codeEnvelope.data||codeEnvelope.Data;
                const code=codeData?.code||codeData?.Code;
                if(!codeResponse.ok || !(codeEnvelope.isSuccess??codeEnvelope.IsSuccess) || !code)
                    throw new Error(codeEnvelope.message||codeEnvelope.Message||"Could not complete desktop sign-in.");
                window.location.assign(`${desktopParams.callbackScheme}://auth/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(desktopParams.state)}`);
                return;
            }
            window.location.assign(returnTo);
        } catch (signInError) {
            setError(signInError instanceof Error ? signInError.message : "Sign in failed."); setBusy(false);
        }
    };

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span><h1>Sign in</h1>
            <p>Sign in to manage your subscription and use Premium features.</p>
            <form className="pricing-web-checkout" onSubmit={signIn}>
                <label htmlFor="signin-email">Email</label><input id="signin-email" type="email" autoComplete="email" value={userName} onChange={e => setUserName(e.target.value)} required />
                <label htmlFor="signin-password">Password</label><input id="signin-password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />
                {error && <p className="text-danger" role="alert">{error}</p>}
                <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
            </form>
            <p className="signin-pricing-link"><a href={Routes.ForgotPassword}>Forgot your password?</a></p>
            <p className="signin-pricing-link">New to LithiumGit? <a href={`${Routes.SignUp}?returnTo=${encodeURIComponent(desktopParams ? `${Routes.SignIn}?desktop=1&state=${desktopParams.state}&code_challenge=${desktopParams.challenge}&callback_scheme=${desktopParams.callbackScheme}` : returnTo)}`}>Create an account</a></p>
        </section>
    </main>;
}


