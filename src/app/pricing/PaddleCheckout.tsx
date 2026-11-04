"use client";

import { FormEvent, useState } from "react";
import { Routes } from "../../lib";

interface IApiEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface IAccount { token?: string; Token?: string; emailAddress?: string; EmailAddress?: string; }
interface ICheckoutResult { checkoutUrl?: string; CheckoutUrl?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function PaddleCheckout() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [period, setPeriod] = useState<"monthly" | "yearly">("yearly");
    const [accountToken, setAccountToken] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    const purchase = async (event: FormEvent) => {
        event.preventDefault(); setError("");
        if (!accountToken && password !== confirmPassword) { setError("Passwords do not match."); return; }
        setBusy(true);
        try {
            if (!apiUrl) throw new Error("Online checkout is not configured yet.");
            let token = accountToken;
            if (!token) {
                const registerResponse = await fetch(`${apiUrl}/Auth/register`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullName, email, userName, password }),
                });
                const registerEnvelope = await registerResponse.json() as IApiEnvelope<IAccount>;
                const account = registerEnvelope.data || registerEnvelope.Data;
                token = account?.token || account?.Token || "";
                if (!registerResponse.ok || !(registerEnvelope.isSuccess ?? registerEnvelope.IsSuccess) || !token) {
                    const message = registerEnvelope.message || registerEnvelope.Message || "Could not create your account.";
                    const duplicate = /already|exists|taken|duplicate/i.test(message);
                    throw new Error(duplicate ? `${message} If you already have a LithiumGit account, sign in to continue.` : message);
                }
                setAccountToken(token);
                sessionStorage.setItem("lithiumgit.accessToken", token);
                sessionStorage.setItem("lithiumgit.accountEmail", account?.emailAddress || account?.EmailAddress || email);
            }

            const checkoutResponse = await fetch(`${apiUrl}/Subscription/checkout`, {
                method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ period }),
            });
            const checkoutEnvelope = await checkoutResponse.json() as IApiEnvelope<ICheckoutResult>;
            const checkout = checkoutEnvelope.data || checkoutEnvelope.Data;
            const checkoutUrl = checkout?.checkoutUrl || checkout?.CheckoutUrl;
            if (!checkoutResponse.ok || !(checkoutEnvelope.isSuccess ?? checkoutEnvelope.IsSuccess) || !checkoutUrl)
                throw new Error(checkoutEnvelope.message || checkoutEnvelope.Message || "Your account was created, but checkout could not be started. Please try again.");
            window.location.assign(checkoutUrl);
        } catch (purchaseError) {
            setError(purchaseError instanceof Error ? purchaseError.message : "Could not continue to checkout.");
            setBusy(false);
        }
    };

    return <form className="pricing-web-checkout" onSubmit={purchase}>
        <label htmlFor="checkout-fullname">Full name</label>
        <input id="checkout-fullname" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} minLength={2} maxLength={100} required disabled={!!accountToken} />
        <label htmlFor="checkout-email">Email</label>
        <input id="checkout-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={256} required disabled={!!accountToken} />
        <label htmlFor="checkout-username">Username</label>
        <input id="checkout-username" autoComplete="username" value={userName} onChange={e => setUserName(e.target.value)} pattern="[a-zA-Z0-9._-]{3,32}" title="Use 3–32 letters, numbers, periods, underscores, or hyphens." required disabled={!!accountToken} />
        <label htmlFor="checkout-password">Password</label>
        <input id="checkout-password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} minLength={4} maxLength={100} required disabled={!!accountToken} />
        <label htmlFor="checkout-confirm-password">Confirm password</label>
        <input id="checkout-confirm-password" type="password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={4} maxLength={100} required disabled={!!accountToken} />
        <label htmlFor="checkout-period">Billing period</label>
        <select id="checkout-period" value={period} onChange={e => setPeriod(e.target.value as "monthly" | "yearly")}>
            <option value="yearly">Yearly — US$24.99</option>
            <option value="monthly">Monthly — US$2.99</option>
        </select>
        {error && <p className="text-danger" role="alert">{error} { /already|exists|taken|duplicate/i.test(error) && <a href={`${Routes.SignIn}?returnTo=${encodeURIComponent(Routes.Checkout)}`}>Sign in</a>}</p>}
        <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Preparing secure checkout…" : "Continue to payment"}</button>
    </form>;
}
