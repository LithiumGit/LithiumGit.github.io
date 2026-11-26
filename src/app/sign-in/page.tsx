import { Constants } from "../../lib";
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import SignInForm from "./page-client";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "sign-in");
    data.title = "Sign in | LithiumGit";
    data.description = "Sign in to your LithiumGit account.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function SignInPage() {
    return <SignInForm />;
}

