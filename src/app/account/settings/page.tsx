import { Constants } from "../../../lib";
import AccountSettings from "./page-client";
import "../../styles/pricing.scss";

export default function AccountSettingsPage(){
    return <main className="pricing-page account-settings-page" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
        <AccountSettings />
    </main>;
}
