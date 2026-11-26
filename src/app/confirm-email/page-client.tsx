"use client";

import { useEffect, useState } from "react";
import { Constants, Routes } from "../../lib";
import "../styles/pricing.scss";

interface IEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ILogin { token?:string; Token?:string; emailAddress?:string; EmailAddress?:string; fullName?:string; FullName?:string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";

export default function ConfirmEmail() {
    const [status, setStatus] = useState<"working" | "confirmed" | "failed">("working");
    const [error, setError] = useState("");
    const [returnTo, setReturnTo] = useState(Routes.Pricing);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const requested = params.get("returnTo");
        const safeReturnTo=requested?.startsWith("/") && !requested.startsWith("//") ? requested : Routes.Pricing;
        setReturnTo(safeReturnTo);
        const userId = params.get("userId");
        const token = params.get("token");

        (async () => {
            try {
                if (!apiUrl) throw new Error("Email confirmation is not configured yet.");
                if (!userId || !token) throw new Error("This confirmation link is incomplete. Open the link from your email again.");
                const response = await fetch(`${apiUrl}/Auth/confirm-email`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId, token }),
                });
                const envelope = await response.json() as IEnvelope<ILogin>;
                const account=envelope.data||envelope.Data;
                const accessToken=account?.token||account?.Token;
                if (!response.ok || !(envelope.isSuccess ?? envelope.IsSuccess) || !accessToken)
                    throw new Error(envelope.message || envelope.Message || "Could not confirm your email.");
                sessionStorage.setItem("lithiumgit.accessToken",accessToken);
                const email=account?.emailAddress||account?.EmailAddress;
                if(email) sessionStorage.setItem("lithiumgit.accountEmail",email);
                const fullName=account?.fullName||account?.FullName;
                if(fullName) sessionStorage.setItem("lithiumgit.accountName",fullName);
                setStatus("confirmed");
                const resumeUrl=new URL(safeReturnTo,window.location.origin);
                const destination=resumeUrl.pathname===Routes.SignIn && resumeUrl.searchParams.get("desktop")==="1"
                    ? Routes.Pricing
                    : safeReturnTo;
                window.location.assign(destination);
            } catch (confirmError) {
                setError(confirmError instanceof Error ? confirmError.message : "Could not confirm your email.");
                setStatus("failed");
            }
        })();
    }, []);

    const signInLink = returnTo.startsWith(`${Routes.SignIn}?desktop=1&`)
        ? returnTo
        : `${Routes.SignIn}?returnTo=${encodeURIComponent(returnTo)}`;

    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span>
            {status === "working" && <><h1>Confirming your email…</h1><p>This only takes a moment.</p></>}
            {status === "confirmed" && <>
                <h1>Email confirmed</h1>
                <p>Your LithiumGit account is ready and you are now signed in.</p>
                <a className="pricing-button pricing-button-primary" href={signInLink}>Sign in</a>
            </>}
            {status === "failed" && <>
                <h1>Couldn&apos;t confirm your email</h1>
                <p className="text-danger" role="alert">{error}</p>
                <a className="pricing-button pricing-button-secondary" href={signInLink}>Go to sign in</a>
            </>}
        </section>
    </main>;
}
