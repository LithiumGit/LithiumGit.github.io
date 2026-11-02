import { Constants, Routes } from "../../lib";
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import "../styles/pricing.scss";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "pricing");
    data.title = "LithiumGit Pricing | Free Git Client and Premium Features";
    data.description = "LithiumGit keeps core Git workflows free. Premium adds Insights and Diff Checker for US$2.99 monthly or US$24.99 yearly.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

const freeFeatures = [
    "Changes and staging",
    "Commit history and graph",
    "Branches and stashes",
    "Push, pull, merge, and rebase",
    "Repository configuration",
];

const premiumFeatures = [
    "Everything in Free",
    "Repository Insights",
    "Diff Checker",
];

export default function PricingPage() {
    return (
        <main className="pricing-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
            <header className="pricing-hero">
                <span className="pricing-eyebrow">Simple plans for your Git workflow</span>
                <h1>Powerful Git tools, with room to grow.</h1>
                <p>Keep using LithiumGit’s core Git workflows for free. Get more context and compare changes with Premium.</p>
            </header>

            <section className="pricing-plans" aria-label="LithiumGit plans">
                <article className="pricing-card">
                    <div className="pricing-card-heading">
                        <div>
                            <h2>Free</h2>
                            <p>Everything you need for your everyday Git workflow.</p>
                        </div>
                        <div className="pricing-price"><span>$0</span><small>forever</small></div>
                    </div>
                    <a className="pricing-button pricing-button-secondary" href={Routes.Download}>Download LithiumGit</a>
                    <h3>Included features</h3>
                    <ul>{freeFeatures.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                </article>

                <article className="pricing-card pricing-card-premium">
                    <div className="pricing-badge">Premium</div>
                    <div className="pricing-card-heading">
                        <div>
                            <h2>Premium</h2>
                            <p>More insight and a dedicated way to compare text.</p>
                        </div>
                        <div className="pricing-price pricing-price-premium">
                            <div><span>US$24.99</span><small>per year</small></div>
                            <div><span>US$2.99</span><small>per month</small></div>
                        </div>
                    </div>
                    <p className="pricing-savings">Save about 30% with annual billing.</p>
                    <button className="pricing-button pricing-button-primary" type="button" disabled>Subscriptions not available yet</button>
                    <h3>Free, plus</h3>
                    <ul>{premiumFeatures.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                </article>
            </section>

            <p className="pricing-note">Premium subscriptions and checkout are not available yet. You can download and use LithiumGit’s free Git features today.</p>
        </main>
    );
}
