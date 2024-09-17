import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import createImage from "../images/create.png";

export function CreateView(){
    return (
        <div id={HtmlIds.create}>
        <h4>Create git project</h4>
        <img src={createImage.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>An empty git project can be created as it is created by "git init" command.</p>
    </div>
    )
}