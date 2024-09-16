import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import graphImg from "../images/graph.png";

export function GraphView(){
    return <div id={HtmlIds.graph}>
        <h4>Graph</h4>
        <img src={graphImg.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>The interactive graph provide the overview of overall state of the change history.
                Viewing change details of a specific commit,merge, checkout, rebase, cherry-pick, creating branch etc. regular git actions
                can be performed from this view.</p>
    </div>
}