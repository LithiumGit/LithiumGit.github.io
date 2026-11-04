"use client";

import { FormEvent, useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface IAccount { token?: string; Token?: string; emailAddress?: string; EmailAddress?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function SignUpForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [returnTo, setReturnTo] = useState(Routes.Pricing);

    useEffect(() => {
        const requested = new URLSearchParams(window.location.search).get("returnTo");
        if (requested?.startsWith("/") && !requested.startsWith("//")) setReturnTo(requested);
    }, []);

    const signUp = async (event: FormEvent) => {
        event.preventDefault(); setError("");
        if (password !== confirmPassword) { setError("Passwords do not match."); return; }
        setBusy(true);
        try {
            if (!apiUrl) throw new Error("Account creation is not configured yet.");
            const response = await fetch(`${apiUrl}/Auth/register`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, userName, password }),
            });
            const envelope = await response.json() as IEnvelope<IAccount>;
            const account = envelope.data || envelope.Data;
            const token = account?.token || account?.Token;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess) || !token)
                throw new Error(envelope.message || envelope.Message || "Could not create your account.");
            sessionStorage.setItem("lithiumgit.accessToken", token);
            sessionStorage.setItem("lithiumgit.accountEmail", account?.emailAddress || account?.EmailAddress || email);
            window.location.assign(returnTo);
        } catch (signUpError) {
            setError(signUpError instanceof Error ? signUpError.message : "Could not create your account."); setBusy(false);
        }
    };

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span><h1>Create your account</h1>
            <p>Create a free account to subscribe and access Premium features.</p>
            <form className="pricing-web-checkout" onSubmit={signUp}>
                <label htmlFor="signup-fullname">Full name</label><input id="signup-fullname" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} minLength={2} maxLength={100} required />
                <label htmlFor="signup-email">Email</label><input id="signup-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={256} required />
                <label htmlFor="signup-username">Username</label><input id="signup-username" autoComplete="username" value={userName} onChange={e => setUserName(e.target.value)} pattern="[a-zA-Z0-9._-]{3,32}" title="Use 3–32 letters, numbers, periods, underscores, or hyphens." required />
                <label htmlFor="signup-password">Password</label><input id="signup-password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} minLength={4} maxLength={100} required />
                <label htmlFor="signup-confirm-password">Confirm password</label><input id="signup-confirm-password" type="password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={4} maxLength={100} required />
                {error && <p className="text-danger" role="alert">{error}</p>}
                <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
            </form>
            <p className="signin-pricing-link">Already have an account? <a href={`${Routes.SignIn}?returnTo=${encodeURIComponent(returnTo)}`}>Sign in</a></p>
        </section>
    </main>;
}
