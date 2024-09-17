import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import recentImage from "../images/recents.png";

export function RecentsView(){
    return (
        <div id={HtmlIds.recents}>
        <h4>Recents</h4>
        <img src={recentImage.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Recently opened projects are listed in this view.</p>
    </div>
    )
}