import { Constants } from "../../lib";
import DesktopSession from "./page-client";
import "../styles/pricing.scss";

export const metadata = {
    title: "Signing in to LithiumGit",
    referrer: "no-referrer" as const,
};

export default function DesktopSessionPage(){
    return <main className="pricing-page signin-page" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit account</span>
            <h1>Signing you in</h1>
            <DesktopSession />
        </section>
    </main>;
}
