"use client";

import { FormEvent, useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function ResetPasswordForm() {
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUserId(params.get("userId") || "");
        setToken(params.get("token") || "");
    }, []);

    const resetPassword = async (event: FormEvent) => {
        event.preventDefault(); setError("");
        if (password !== confirmPassword) { setError("Passwords do not match."); return; }
        setBusy(true);
        try {
            if (!apiUrl) throw new Error("Password reset is not configured yet.");
            if (!userId || !token) throw new Error("This reset link is incomplete. Open the link from your email again.");
            const response = await fetch(`${apiUrl}/Auth/reset-password`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, token, password }),
            });
            const envelope = await response.json() as IEnvelope<boolean>;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess))
                throw new Error(envelope.message || envelope.Message || "Could not reset your password.");
            setDone(true);
        } catch (resetError) {
            setError(resetError instanceof Error ? resetError.message : "Could not reset your password.");
        }
        setBusy(false);
    };

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span>
            {done ? <>
                <h1>Password changed</h1>
                <p>Your password has been updated. Sign in with your new password.</p>
                <a className="pricing-button pricing-button-primary" href={Routes.SignIn}>Sign in</a>
            </> : <>
                <h1>Choose a new password</h1>
                <form className="pricing-web-checkout" onSubmit={resetPassword}>
                    <label htmlFor="reset-password">New password</label><input id="reset-password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} minLength={4} maxLength={100} required />
                    <label htmlFor="reset-confirm-password">Confirm new password</label><input id="reset-confirm-password" type="password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={4} maxLength={100} required />
                    {error && <p className="text-danger" role="alert">{error} {/expired|invalid|incomplete/i.test(error) && <a href={Routes.ForgotPassword}>Request a new link</a>}</p>}
                    <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Saving…" : "Save new password"}</button>
                </form>
            </>}
        </section>
    </main>;
}
