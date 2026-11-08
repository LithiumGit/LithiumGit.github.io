"use client";

import { FormEvent, useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ILogin { token?: string; Token?: string; emailAddress?: string; EmailAddress?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function SignInForm() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [returnTo, setReturnTo] = useState(Routes.Pricing);

    useEffect(() => {
        const requested = new URLSearchParams(window.location.search).get("returnTo");
        if (requested?.startsWith("/") && !requested.startsWith("//")) setReturnTo(requested);
    }, []);

    const signIn = async (event: FormEvent) => {
        event.preventDefault(); setBusy(true); setError("");
        try {
            if (!apiUrl) throw new Error("Sign in is not configured yet.");
            const response = await fetch(`${apiUrl}/Auth`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userName, password, returnTo }) });
            const envelope = await response.json() as IEnvelope<ILogin>;
            const account = envelope.data || envelope.Data;
            const token = account?.token || account?.Token;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess) || !token) throw new Error(envelope.message || envelope.Message || "Sign in failed.");
            sessionStorage.setItem("lithiumgit.accessToken", token);
            const email = account?.emailAddress || account?.EmailAddress;
            if (email) sessionStorage.setItem("lithiumgit.accountEmail", email);
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
                <label htmlFor="signin-username">Username</label><input id="signin-username" autoComplete="username" value={userName} onChange={e => setUserName(e.target.value)} required />
                <label htmlFor="signin-password">Password</label><input id="signin-password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />
                {error && <p className="text-danger" role="alert">{error}</p>}
                <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
            </form>
            <p className="signin-pricing-link"><a href={Routes.ForgotPassword}>Forgot your password?</a></p>
            <p className="signin-pricing-link">New to LithiumGit? <a href={`${Routes.SignUp}?returnTo=${encodeURIComponent(returnTo)}`}>Create an account</a></p>
        </section>
    </main>;
}


