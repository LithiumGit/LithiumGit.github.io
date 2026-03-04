import  "../styles/docs.scss";
import { UiUtils } from "../../lib/utilities/UiUtils"
import { PageChild } from "./pageChild";
import { IMetadataParams } from "../../lib/interfaces";


export function generateMetadata(args:IMetadataParams){    
    const data = UiUtils.getCommonHeaderInfo(args,"docs");
    data.title = "LithiumGit Documentation | Git GUI Client User Guide";
    data.description = "Full documentation for LithiumGit — learn how to clone repositories, view the interactive graph, manage commits, resolve merge conflicts, use stashes, and more.";
    data.openGraph!.title = "LithiumGit Documentation | Git GUI Client User Guide";
    data.openGraph!.description = "Full documentation for LithiumGit. Learn how to use the interactive graph, manage commits, resolve conflicts, and more.";
    (data as any).twitter = {
        ...(data as any).twitter,
        title: "LithiumGit Documentation | Git GUI Client User Guide",
        description: "Full documentation for LithiumGit — the free Git GUI client. Guides for all features.",
    };
    return data;
}
export default function Docs(){
    return <main className="docs d-flex w-100 overflow-auto">
        <PageChild />
    </main>
}