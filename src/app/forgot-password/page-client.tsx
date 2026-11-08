"use client";

import { FormEvent, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    const requestReset = async (event: FormEvent) => {
        event.preventDefault(); setBusy(true); setError("");
        try {
            if (!apiUrl) throw new Error("Password reset is not configured yet.");
            const response = await fetch(`${apiUrl}/Auth/forgot-password`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const envelope = await response.json() as IEnvelope<boolean>;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess))
                throw new Error(envelope.message || envelope.Message || "Could not request a password reset.");
            setSent(true);
        } catch (resetError) {
            setError(resetError instanceof Error ? resetError.message : "Could not request a password reset.");
        }
        setBusy(false);
    };

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span><h1>Forgot your password?</h1>
            {sent ? <>
                <p>If a confirmed LithiumGit account uses <strong>{email}</strong>, we&apos;ve sent it a link to choose a new password. Check your inbox and spam folder.</p>
                <a className="pricing-button pricing-button-secondary" href={Routes.SignIn}>Back to sign in</a>
            </> : <>
                <p>Enter the email address of your account and we&apos;ll send you a link to choose a new password.</p>
                <form className="pricing-web-checkout" onSubmit={requestReset}>
                    <label htmlFor="forgot-email">Email</label><input id="forgot-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={256} required />
                    {error && <p className="text-danger" role="alert">{error}</p>}
                    <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</button>
                </form>
                <p className="signin-pricing-link"><a href={Routes.SignIn}>Back to sign in</a></p>
            </>}
        </section>
    </main>;
}
