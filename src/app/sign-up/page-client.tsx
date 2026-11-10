"use client";

import { FormEvent, useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface IAccount { emailAddress?: string; EmailAddress?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function SignUpForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [sentTo, setSentTo] = useState("");
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
                body: JSON.stringify({ fullName, email, password, returnTo }),
            });
            const envelope = await response.json() as IEnvelope<IAccount>;
            const account = envelope.data || envelope.Data;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess))
                throw new Error(envelope.message || envelope.Message || "Could not create your account.");
            setSentTo(account?.emailAddress || account?.EmailAddress || email);
            setBusy(false);
        } catch (signUpError) {
            setError(signUpError instanceof Error ? signUpError.message : "Could not create your account."); setBusy(false);
        }
    };

    const signInLink = returnTo.startsWith(`${Routes.SignIn}?desktop=1&`)
        ? returnTo
        : `${Routes.SignIn}?returnTo=${encodeURIComponent(returnTo)}`;

    if (sentTo) return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span><h1>Check your email</h1>
            <p>We sent a confirmation link to <strong>{sentTo}</strong>. Open it to activate your account and you&apos;ll be signed in automatically.</p>
            <p>Can&apos;t find it? Check your spam folder. Signing in also sends a new link.</p>
            <a className="pricing-button pricing-button-primary" href={signInLink}>Go to sign in</a>
        </section>
    </main>;

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span><h1>Create your account</h1>
            <p>Create a free account to subscribe and access Premium features.</p>
            <form className="pricing-web-checkout" onSubmit={signUp}>
                <label htmlFor="signup-fullname">Full name</label><input id="signup-fullname" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} minLength={2} maxLength={100} required />
                <label htmlFor="signup-email">Email</label><input id="signup-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={256} required />
                <label htmlFor="signup-password">Password</label><input id="signup-password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} minLength={4} maxLength={100} required />
                <label htmlFor="signup-confirm-password">Confirm password</label><input id="signup-confirm-password" type="password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={4} maxLength={100} required />
                {error && <p className="text-danger" role="alert">{error}</p>}
                <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
            </form>
            <p className="signin-pricing-link">Already have an account? <a href={signInLink}>Sign in</a></p>
        </section>
    </main>;
}
