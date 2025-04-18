import  "../styles/docs.scss";
import { UiUtils } from "../../lib/utilities/UiUtils"
import { PageChild } from "./pageChild";
import { IMetadataParams } from "../../lib/interfaces";


export function generateMetadata(args:IMetadataParams){    
    const data = UiUtils.getCommonHeaderInfo(args,"docs");
    return data;
}
export default function Docs(){
    return <main className="docs d-flex w-100 overflow-auto">
        <PageChild />
    </main>
}