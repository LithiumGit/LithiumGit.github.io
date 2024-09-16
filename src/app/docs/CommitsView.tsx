import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import commitsImg from "../images/commits.png";


export function CommitsView(){
    return (
        <div id={HtmlIds.commits}>
        <h4>Commits</h4>
        <img src={commitsImg.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>All the commits are listed here as it is in git log result.</p>
    </div>
    )
}