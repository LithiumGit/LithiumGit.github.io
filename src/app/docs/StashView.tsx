import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import stashImg from "../images/stashes.png";

export function StashView(){
    return (
        <div id={HtmlIds.stash}>
        <h4>Stash list</h4>
        <img src={stashImg.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>All the stashes are listed here. Stash actions such as pop, apply and delete can be performed here from this view.</p>
    </div>
    )
}