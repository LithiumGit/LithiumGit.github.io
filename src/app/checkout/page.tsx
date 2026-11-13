import { Constants } from "../../lib";
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import PaddleCheckout from "../pricing/PaddleCheckout";
import "../styles/pricing.scss";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "checkout");
    data.title = "Checkout | LithiumGit Premium";
    data.description = "Choose a LithiumGit Premium subscription and continue to secure checkout.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function CheckoutPage() {
    return <main className="pricing-page signin-page" style={{ minHeight: `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})` }}>
        <section className="signin-card">
            <span className="pricing-eyebrow">LithiumGit Premium</span>
            <h1>Checkout</h1>
            <p>On Windows, checkout continues in LithiumGit through Microsoft Store. On other platforms, you’ll continue through Paddle.</p>
            <PaddleCheckout />
        </section>
    </main>;
}
