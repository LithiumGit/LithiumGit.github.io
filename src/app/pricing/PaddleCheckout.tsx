"use client";

import { FormEvent, useEffect, useState } from "react";
import { Routes } from "../../lib";

interface IApiEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ICheckoutResult { checkoutUrl?: string; CheckoutUrl?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";
const tokenKey = "lithiumgit.accessToken";
const emailKey = "lithiumgit.accountEmail";

export default function PaddleCheckout() {
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [period, setPeriod] = useState<"monthly" | "yearly">("yearly");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setToken(sessionStorage.getItem(tokenKey) || "");
        setEmail(sessionStorage.getItem(emailKey) || "");
    }, []);

    const signOut = () => {
        sessionStorage.removeItem(tokenKey);
        sessionStorage.removeItem(emailKey);
        setToken("");
        setEmail("");
    };

    const purchase = async (event: FormEvent) => {
        event.preventDefault(); setError(""); setBusy(true);
        try {
            if (!apiUrl) throw new Error("Online checkout is not configured yet.");
            const checkoutResponse = await fetch(`${apiUrl}/Subscription/checkout`, {
                method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ period }),
            });
            if (checkoutResponse.status === 401) {
                signOut();
                throw new Error("Your session has expired. Sign in again to continue.");
            }
            const checkoutEnvelope = await checkoutResponse.json() as IApiEnvelope<ICheckoutResult>;
            const checkout = checkoutEnvelope.data || checkoutEnvelope.Data;
            const checkoutUrl = checkout?.checkoutUrl || checkout?.CheckoutUrl;
            if (!checkoutResponse.ok || !(checkoutEnvelope.isSuccess ?? checkoutEnvelope.IsSuccess) || !checkoutUrl)
                throw new Error(checkoutEnvelope.message || checkoutEnvelope.Message || "Checkout could not be started. Please try again.");
            window.location.assign(checkoutUrl);
        } catch (purchaseError) {
            setError(purchaseError instanceof Error ? purchaseError.message : "Could not continue to checkout.");
            setBusy(false);
        }
    };

    if (token === null) return null;

    const errorMessage = error && <p className="text-danger" role="alert">{error}</p>;

    if (!token) return <div className="pricing-web-checkout">
        <p>Sign in to your LithiumGit account to continue. New to LithiumGit? Create a free account first. We&apos;ll email you a link to confirm it.</p>
        {errorMessage}
        <a className="pricing-button pricing-button-primary" href={`${Routes.SignIn}?returnTo=${encodeURIComponent(Routes.Checkout)}`}>Sign in</a>
        <a className="pricing-button pricing-button-secondary" href={`${Routes.SignUp}?returnTo=${encodeURIComponent(Routes.Checkout)}`}>Create an account</a>
    </div>;

    return <form className="pricing-web-checkout" onSubmit={purchase}>
        {email && <p>Signed in as <strong>{email}</strong>. <a href={Routes.Checkout} onClick={e => { e.preventDefault(); signOut(); }}>Sign out</a></p>}
        <label htmlFor="checkout-period">Billing period</label>
        <select id="checkout-period" value={period} onChange={e => setPeriod(e.target.value as "monthly" | "yearly")}>
            <option value="yearly">Yearly — US$24.99</option>
            <option value="monthly">Monthly — US$2.99</option>
        </select>
        {errorMessage}
        <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? "Preparing secure checkout…" : "Continue to payment"}</button>
    </form>;
}
