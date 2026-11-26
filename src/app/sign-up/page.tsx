import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import SignUpForm from "./page-client";

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "sign-up");
    data.title = "Create an account | LithiumGit";
    data.description = "Create a LithiumGit account to subscribe and access Premium features.";
    data.openGraph!.title = data.title;
    data.openGraph!.description = data.description;
    return data;
}

export default function SignUpPage() { return <SignUpForm />; }
