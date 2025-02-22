import  "../styles/docs.scss";
import { UiUtils } from "../../lib/utilities/UiUtils"
import { PageChild } from "./pageChild";


export function generateMetadata(){
    const data = UiUtils.getCommonHeaderInfo();
    return data;
}
export default function Docs(){
    return <main className="docs d-flex w-100 overflow-auto">
        <PageChild />
    </main>
}