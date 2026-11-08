import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import ForgotPasswordForm from "./page-client";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "forgot-password");
    data.title = "Forgot password | LithiumGit";
    data.description = "Reset the password for your LithiumGit account.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function ForgotPasswordPage() { return <ForgotPasswordForm />; }
