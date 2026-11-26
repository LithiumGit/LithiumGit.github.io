import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import ConfirmEmail from "./page-client";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "confirm-email");
    data.title = "Confirm your email | LithiumGit";
    data.description = "Confirm the email address for your LithiumGit account.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function ConfirmEmailPage() { return <ConfirmEmail />; }
