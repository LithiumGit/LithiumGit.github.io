"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

declare global {
    interface Window {
        Paddle?: {
            Initialize: (options: {
                token: string;
                eventCallback: (event: { name?: string; data?: unknown }) => void;
            }) => void;
            Checkout: {
                open: (options: { transactionId: string }) => void;
            };
        };
    }
}

interface IApiEnvelope<T> {
    isSuccess?: boolean;
    IsSuccess?: boolean;
    data?: T;
    Data?: T;
    message?: string;
    Message?: string;
}

interface ILoginResult {
    token?: string;
    Token?: string;
}

interface ICheckoutResult {
    checkoutUrl?: string;
    CheckoutUrl?: string;
}

const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";
const paddleClientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "";

export default function PaddleCheckout() {
    const [transactionId, setTransactionId] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [busyPlan, setBusyPlan] = useState("");
    const [error, setError] = useState("");
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    useEffect(() => {
        setTransactionId(new URLSearchParams(window.location.search).get("_ptxn") || "");
    }, []);

    const initializePaddle = useCallback(() => {
        if (!transactionId) return;
        if (!paddleClientToken || !window.Paddle) {
            setError("Online checkout is not configured yet.");
            return;
        }
        window.Paddle.Initialize({
            token: paddleClientToken,
            eventCallback: event => {
                if (event.name === "checkout.completed") setCheckoutComplete(true);
            },
        });
        window.Paddle.Checkout.open({ transactionId });
    }, [transactionId]);

    const startCheckout = async (period: "monthly" | "yearly") => {
        setBusyPlan(period);
        setError("");
        try {
            if (!apiUrl) throw new Error("Online checkout is not configured yet.");
            if (!userName.trim() || !password) throw new Error("Enter your LithiumGit username and password.");
            const loginResponse = await fetch(`${apiUrl}/Auth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });
            const loginEnvelope = await loginResponse.json() as IApiEnvelope<ILoginResult>;
            const login = loginEnvelope.data || loginEnvelope.Data;
            const token = login?.token || login?.Token;
            if (!loginResponse.ok || !(loginEnvelope.isSuccess ?? loginEnvelope.IsSuccess) || !token)
                throw new Error(loginEnvelope.message || loginEnvelope.Message || "Sign in failed.");

            const checkoutResponse = await fetch(`${apiUrl}/Subscription/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ period }),
            });
            const checkoutEnvelope = await checkoutResponse.json() as IApiEnvelope<ICheckoutResult>;
            const checkout = checkoutEnvelope.data || checkoutEnvelope.Data;
            const checkoutUrl = checkout?.checkoutUrl || checkout?.CheckoutUrl;
            if (!checkoutResponse.ok || !(checkoutEnvelope.isSuccess ?? checkoutEnvelope.IsSuccess) || !checkoutUrl)
                throw new Error(checkoutEnvelope.message || checkoutEnvelope.Message || "Could not start checkout.");

            window.location.assign(checkoutUrl);
        } catch (checkoutError) {
            setError(checkoutError instanceof Error ? checkoutError.message : "Could not start checkout.");
            setBusyPlan("");
        }
    };

    return <>
        {transactionId && <Script
            src="https://cdn.paddle.com/paddle/v2/paddle.js"
            strategy="afterInteractive"
            onLoad={initializePaddle}
        />}
        {transactionId ? <p className="pricing-checkout-message" role="status">
            {checkoutComplete ? "Payment received. Premium will be enabled on your LithiumGit account shortly." : "Opening secure checkout…"}
            {error && <span className="text-danger"> {error}</span>}
        </p> : <form className="pricing-web-checkout" onSubmit={event => event.preventDefault()}>
            <p>Sign in with your LithiumGit account. Checkout opens securely in your browser.</p>
            <label htmlFor="pricing-username">Username</label>
            <input id="pricing-username" autoComplete="username" value={userName}
                onChange={event => setUserName(event.target.value)} required />
            <label htmlFor="pricing-password">Password</label>
            <input id="pricing-password" type="password" autoComplete="current-password" value={password}
                onChange={event => setPassword(event.target.value)} required />
            <button className="pricing-button pricing-button-primary" type="button" disabled={!!busyPlan}
                onClick={() => void startCheckout("monthly")}>
                {busyPlan === "monthly" ? "Opening checkout…" : "Subscribe monthly · US$2.99"}
            </button>
            <button className="pricing-button pricing-button-primary" type="button" disabled={!!busyPlan}
                onClick={() => void startCheckout("yearly")}>
                {busyPlan === "yearly" ? "Opening checkout…" : "Subscribe yearly · US$24.99"}
            </button>
            {error && <p className="text-danger" role="alert">{error}</p>}
        </form>}
    </>;
}
