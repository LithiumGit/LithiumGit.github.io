"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { Routes } from "../../lib";

declare global {
    interface Window {
        Paddle?: {
            Initialize: (options: { token: string; eventCallback: (event: { name?: string; data?: unknown }) => void }) => void;
            Checkout: { open: (options: { transactionId: string }) => void };
        };
    }
}
interface IApiEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ICheckoutResult { checkoutUrl?: string; CheckoutUrl?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";
const paddleClientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "";

export default function PaddleCheckout() {
    const [transactionId, setTransactionId] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [accountEmail, setAccountEmail] = useState("");
    const [busyPlan, setBusyPlan] = useState("");
    const [error, setError] = useState("");
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    useEffect(() => {
        setTransactionId(new URLSearchParams(window.location.search).get("_ptxn") || "");
        setAccessToken(sessionStorage.getItem("lithiumgit.accessToken") || "");
        setAccountEmail(sessionStorage.getItem("lithiumgit.accountEmail") || "");
    }, []);

    const initializePaddle = useCallback(() => {
        if (!transactionId) return;
        if (!paddleClientToken || !window.Paddle) { setError("Online checkout is not configured yet."); return; }
        window.Paddle.Initialize({ token: paddleClientToken, eventCallback: event => { if (event.name === "checkout.completed") setCheckoutComplete(true); } });
        window.Paddle.Checkout.open({ transactionId });
    }, [transactionId]);

    const startCheckout = async (period: "monthly" | "yearly") => {
        setBusyPlan(period); setError("");
        try {
            if (!apiUrl) throw new Error("Online checkout is not configured yet.");
            if (!accessToken) throw new Error("Please sign in to continue.");
            const response = await fetch(`${apiUrl}/Subscription/checkout`, {
                method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
                body: JSON.stringify({ period }),
            });
            const envelope = await response.json() as IApiEnvelope<ICheckoutResult>;
            const checkoutUrl = (envelope.data || envelope.Data)?.checkoutUrl || (envelope.data || envelope.Data)?.CheckoutUrl;
            if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess) || !checkoutUrl)
                throw new Error(envelope.message || envelope.Message || "Could not start checkout.");
            window.location.assign(checkoutUrl);
        } catch (checkoutError) {
            setError(checkoutError instanceof Error ? checkoutError.message : "Could not start checkout."); setBusyPlan("");
        }
    };

    return <>
        {transactionId && <Script src="https://cdn.paddle.com/paddle/v2/paddle.js" strategy="afterInteractive" onLoad={initializePaddle} />}
        {transactionId ? <p className="pricing-checkout-message" role="status">{checkoutComplete ? "Payment received. Premium will be enabled on your LithiumGit account shortly." : "Opening secure checkout…"}{error && <span className="text-danger"> {error}</span>}</p>
            : accessToken ? <div className="pricing-web-checkout">
                <p>{accountEmail ? `Signed in as ${accountEmail}` : "You are signed in to your LithiumGit account."}</p>
                <button className="pricing-button pricing-button-primary" type="button" disabled={!!busyPlan} onClick={() => void startCheckout("monthly")}>{busyPlan === "monthly" ? "Opening checkout…" : "Subscribe monthly · US$2.99"}</button>
                <button className="pricing-button pricing-button-primary" type="button" disabled={!!busyPlan} onClick={() => void startCheckout("yearly")}>{busyPlan === "yearly" ? "Opening checkout…" : "Subscribe yearly · US$24.99"}</button>
                {error && <p className="text-danger" role="alert">{error}</p>}
            </div> : <div className="pricing-web-checkout">
                <p>Sign in to your LithiumGit account to subscribe securely.</p>
                <a className="pricing-button pricing-button-primary" href={`${Routes.SignIn}?returnTo=${encodeURIComponent(Routes.Pricing)}`}>Sign in to subscribe</a>
            </div>}
    </>;
}
