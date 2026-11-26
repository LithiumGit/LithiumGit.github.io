"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Distributions, Routes } from "../../lib";
import { FiCheck, FiChevronDown } from "react-icons/fi";

interface IApiEnvelope<T> { isSuccess?: boolean; IsSuccess?: boolean; data?: T; Data?: T; message?: string; Message?: string; }
interface ICheckoutResult { checkoutUrl?: string; CheckoutUrl?: string; }
const apiUrl = process.env.NEXT_PUBLIC_LITHIUMGIT_API_URL?.replace(/\/+$/, "") || "";
const tokenKey = "lithiumgit.accessToken";
const emailKey = "lithiumgit.accountEmail";

function isWindowsPlatform(){
    const navigatorWithHints = navigator as Navigator & { userAgentData?: { platform?: string } };
    const platform = navigatorWithHints.userAgentData?.platform || navigator.platform || navigator.userAgent;
    return /win/i.test(platform);
}

export default function PaddleCheckout() {
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [period, setPeriod] = useState<"monthly" | "yearly">("yearly");
    const [periodMenuOpen,setPeriodMenuOpen]=useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [appLaunchFailed, setAppLaunchFailed] = useState(false);
    const periodMenuRef=useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(!periodMenuOpen) return;
        const closeOnOutsideClick=(event:PointerEvent)=>{
            if(!periodMenuRef.current?.contains(event.target as Node)) setPeriodMenuOpen(false);
        };
        const closeOnEscape=(event:KeyboardEvent)=>{
            if(event.key==="Escape") setPeriodMenuOpen(false);
        };
        window.addEventListener("pointerdown",closeOnOutsideClick);
        window.addEventListener("keydown",closeOnEscape);
        return ()=>{
            window.removeEventListener("pointerdown",closeOnOutsideClick);
            window.removeEventListener("keydown",closeOnEscape);
        };
    },[periodMenuOpen]);

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
            if (isWindowsPlatform()) {
                setAppLaunchFailed(false);
                window.location.href = `lithiumgit://store/checkout?period=${encodeURIComponent(period)}`;
                window.setTimeout(() => {
                    if (document.hasFocus()) setAppLaunchFailed(true);
                    setBusy(false);
                }, 1800);
                return;
            }
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
        <label id="checkout-period-label" htmlFor="checkout-period">Billing period</label>
        <div className="checkout-period-dropdown" ref={periodMenuRef}>
            <button id="checkout-period" type="button" className="checkout-period-trigger"
                aria-haspopup="listbox" aria-expanded={periodMenuOpen} aria-labelledby="checkout-period-label checkout-period"
                onClick={()=>setPeriodMenuOpen(open=>!open)}>
                <span>{period==="yearly"?"Yearly — US$24.99":"Monthly — US$2.99"}</span>
                <FiChevronDown aria-hidden="true" />
            </button>
            {periodMenuOpen&&<div className="checkout-period-options" role="listbox" aria-labelledby="checkout-period-label">
                <button type="button" role="option" aria-selected={period==="yearly"}
                    className={`checkout-period-option${period==="yearly"?" is-selected":""}`}
                    onClick={()=>{setPeriod("yearly");setPeriodMenuOpen(false);}}>
                    <span>Yearly — US$24.99</span>{period==="yearly"&&<FiCheck aria-hidden="true" />}
                </button>
                <button type="button" role="option" aria-selected={period==="monthly"}
                    className={`checkout-period-option${period==="monthly"?" is-selected":""}`}
                    onClick={()=>{setPeriod("monthly");setPeriodMenuOpen(false);}}>
                    <span>Monthly — US$2.99</span>{period==="monthly"&&<FiCheck aria-hidden="true" />}
                </button>
            </div>}
        </div>
        {errorMessage}
        {appLaunchFailed && <p role="status">LithiumGit did not open? <a href={Distributions.MsStoreLink} target="_blank" rel="noreferrer">Install LithiumGit from Microsoft Store</a>, then return here to continue.</p>}
        <button className="pricing-button pricing-button-primary" type="submit" disabled={busy}>{busy ? (isWindowsPlatform() ? "Opening LithiumGit…" : "Preparing secure checkout…") : "Continue to payment"}</button>
    </form>;
}
