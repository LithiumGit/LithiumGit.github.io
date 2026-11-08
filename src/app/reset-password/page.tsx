import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import ResetPasswordForm from "./page-client";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "reset-password");
    data.title = "Choose a new password | LithiumGit";
    data.description = "Choose a new password for your LithiumGit account.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function ResetPasswordPage() { return <ResetPasswordForm />; }
