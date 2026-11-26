import { Constants } from "../../lib"
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import "../styles/privacy.scss";

export function generateMetadata(args:IMetadataParams){
    const data = UiUtils.getCommonHeaderInfo(args,"privacy");
    return data;
}

const contactEmail = "tulshidas37@gmail.com";

export default function Privacy(){
    return (
        <main className="px-2 pt-3" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
            <div className="row g-0">
                <div className="col-md-2" />
                <div className="col-12 col-md-8">
                    <h3>LithiumGit Privacy Policy</h3>
                    <br />
                    <h5>Last updated: 6 November, 2026</h5>
                    <p className="pt-2">
                        This policy explains what information LithiumGit collects, why, and who it is shared with. It covers the
                        LithiumGit desktop app, this website (lithiumgit.com), and the LithiumGit account and subscription service.
                        LithiumGit is developed and maintained by <a target="_blank" href="https://www.linkedin.com/in/tulshi-das-29b9bb125">Tulshi Chandra Das</a> and
                        published under the terms of its <a target="_blank" href="https://github.com/LithiumGit/LithiumGit/blob/master/LICENSE">License</a>.
                    </p>

                    <h5 className="pt-3">Using the app</h5>
                    <p>
                        LithiumGit works with your repositories through the Git installed on your computer. Your repositories, files,
                        commits and Git credentials stay on your computer, or travel directly between your computer and your Git hosting
                        service (such as GitHub), secured by Git. LithiumGit does not collect them. The app contains no analytics,
                        tracking or advertising, and its settings (such as recent repositories and theme) are stored only on your computer.
                    </p>
                    <p>
                        The macOS and Linux versions check GitHub for new releases, which shares your IP address with GitHub under
                        GitHub’s privacy statement. The Windows version is updated by the Microsoft Store.
                    </p>

                    <h5 className="pt-3">Your LithiumGit account</h5>
                    <p>A LithiumGit account is only needed for Premium. When you create one, we store:</p>
                    <ul>
                        <li>your username, email address and full name, and</li>
                        <li>your password, stored only as a salted hash that we cannot read.</li>
                    </ul>
                    <p>We use this to sign you in, provide Premium, and contact you about your account or subscription.</p>

                    <h5 className="pt-3">Subscriptions and payments</h5>
                    <p>
                        LithiumGit never receives or stores your card or other payment details. We store your plan (Free or Premium)
                        and the date it runs until, so Premium works on every device where you sign in.
                    </p>
                    <ul>
                        <li>
                            <strong>Website purchases</strong> are processed by <a target="_blank" href="https://www.paddle.com/legal/privacy">Paddle</a>,
                            our reseller, which handles payment, taxes and invoices under its own privacy policy. We send Paddle your
                            LithiumGit account ID to connect the purchase to your account, and Paddle tells us the subscription’s status
                            and the date it is paid until.
                        </li>
                        <li>
                            <strong>Microsoft Store purchases</strong> (Windows) are processed by Microsoft with your Microsoft account,
                            under the <a target="_blank" href="https://privacy.microsoft.com/privacystatement">Microsoft Privacy Statement</a>.
                            When you subscribe, the app asks the Microsoft Store for a purchase key for your Microsoft account and sends
                            it to our server, which uses it to check your subscription with Microsoft. We store that key and the
                            subscription’s ID, product, status and expiry date. We do not receive your Microsoft account’s name, email
                            address or payment details.
                        </li>
                    </ul>

                    <h5 className="pt-3">This website</h5>
                    <p>
                        This website uses Google Analytics to understand how visitors use it, such as pages visited, approximate
                        location, device and browser. Google Analytics uses cookies and works under <a target="_blank" href="https://policies.google.com/privacy">Google’s Privacy Policy</a>.
                        You can block these cookies in your browser or use Google’s <a target="_blank" href="https://tools.google.com/dlpage/gaoptout">opt-out add-on</a>.
                        When you sign in on the website, your sign-in session is kept in your browser’s session storage and is removed
                        when you close the tab. Your theme choice is kept in your browser’s local storage.
                    </p>

                    <h5 className="pt-3">Server logs</h5>
                    <p>
                        Our server records technical information, such as errors and the requests it receives, to keep the service
                        running. This can include your LithiumGit account ID and an
                        approximate location derived from your IP address, but never your password or payment details.
                    </p>

                    <h5 className="pt-3">Sharing</h5>
                    <p>
                        We do not sell your information or use it for advertising. We share it only with the services described above
                        (Paddle, Microsoft and Google) and the providers that host and monitor our server, or when the law requires it.
                    </p>

                    <h5 className="pt-3">Keeping and deleting your information</h5>
                    <p>
                        We keep your account information while your account exists. To delete your account and its information, email
                        us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We delete it, except records we must keep by law,
                        such as for tax or accounting.
                    </p>
                    <p>
                        Deleting your account does not cancel a subscription. Cancel a Microsoft Store subscription
                        at <a target="_blank" href="https://account.microsoft.com/services">account.microsoft.com/services</a>, and a
                        website subscription at <a target="_blank" href="https://paddle.net">paddle.net</a> or by emailing us.
                    </p>

                    <h5 className="pt-3">Your rights</h5>
                    <p>
                        Depending on where you live, you may have the right to access, correct, export or delete your information, or
                        to object to how it is used. Email us to make a request.
                    </p>

                    <h5 className="pt-3">Children</h5>
                    <p>LithiumGit is not directed at children under 13, and we do not knowingly collect their information.</p>

                    <h5 className="pt-3">Changes</h5>
                    <p>When this policy changes, we update this page and its “Last updated” date.</p>

                    <h5 className="pt-3">Contact</h5>
                    <p>For questions about this policy, email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
                </div>
            </div>
        </main>
    )
}
