import { HtmlIds } from "../../lib/constants/HtmlIds";

export function ChangesView(){
    return <div id={HtmlIds.changes}>
        <h4>View local changes</h4>
        <p>After opening a git project in LithiumGit click to changes tab.</p>
    </div>
}