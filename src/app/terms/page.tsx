import { Constants, Routes } from "../../lib";
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import '../styles/terms.scss';

export function generateMetadata(args: IMetadataParams){
    const data = UiUtils.getCommonHeaderInfo(args,"terms");
    return data;
}

const contactEmail = "tulshidas37@gmail.com";

export default function TermsOfService(){
    return (
        <main className="px-2 pt-3" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
            <div className="row g-0">
                <div className="col-md-2" />
                <div className="col-12 col-md-8">
                    <h3>LithiumGit Terms of Use</h3>
                    <br />
                    <h5>Last updated: 27 November, 2026</h5>
                    <p className="pt-2">
                        These terms cover LithiumGit accounts, subscriptions, and use of lithiumgit.com. Software licensing terms
                        are in the <a href="https://github.com/LithiumGit/LithiumGit/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="text-primary">LithiumGit LICENSE file</a>.
                        How we handle personal information is described in the <a href={Routes.Privacy} className="text-primary">Privacy Policy</a>.
                    </p>

                    <h4 className="pt-3">Accounts and subscriptions</h4>
                    <ol type="a">
                        <li>
                            <strong>Account.</strong> A LithiumGit account is required for Premium features. Keep your sign-in
                            credentials secure and provide accurate account information.
                        </li>
                        <li>
                            <strong>Purchase.</strong> Premium subscriptions are purchased through Microsoft Store in the Store
                            version of LithiumGit, or through lithiumgit.com with Paddle. The purchase is also subject to the terms
                            of the payment provider used at checkout.
                        </li>
                        <li>
                            <strong>Billing and renewal.</strong> The billing period and price are shown at checkout. Subscriptions
                            renew automatically for the displayed period until cancelled through the relevant provider.
                        </li>
                        <li>
                            <strong>Cancellation.</strong> You can cancel a Microsoft Store subscription
                            at <a target="_blank" href="https://account.microsoft.com/services">account.microsoft.com/services</a>,
                            or a website subscription through <a target="_blank" rel="noopener noreferrer" href="https://paddle.net">Paddle.net</a>.
                            Cancellation stops future renewals. Premium access continues until the end of the current paid period.
                        </li>
                        <li>
                            <strong>Refunds.</strong> The Microsoft Store or Paddle handles refund requests under its policies and
                            applicable law.
                        </li>
                        <li>
                            <strong>Premium features and pricing.</strong> The features and prices offered may change. Any price
                            shown for a renewal is subject to the notice and confirmation requirements of the relevant payment
                            provider and applicable law.
                        </li>
                    </ol>

                    <h4 className="pt-4">Using this website</h4>
                    <p>
                        When you use lithiumgit.com or create an account, provide accurate information and do not misuse the
                        website or LithiumGit service. Examples of misuse include accessing another person&apos;s account without
                        permission, interfering with the service, or using the site or its content to build or spread malware.
                        We may suspend or close accounts involved in misuse.
                    </p>
                    <p>
                        We may update these terms and will revise the date above. Material changes to subscriptions will be handled
                        in accordance with applicable law and the payment provider&apos;s requirements.
                    </p>

                    <h4 className="pt-4">Contact</h4>
                    <p>For questions about accounts or subscriptions, email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
                </div>
            </div>
        </main>
    )
}
