import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import cloneImage from "../images/clone.png";

export function CloneView(){
    return (
        <div id={HtmlIds.clone}>
            <h4>Clone Repository</h4>
            <img src={cloneImage.src} alt="changes" style={{width:Constants.docsImageWidth, height:'auto'}} />
            <p>Any git repository can be cloned from this view.</p>
        </div>
        
    )
}