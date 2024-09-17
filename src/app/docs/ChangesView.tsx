import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import changesImage from '../images/changes.png';
import stashImage from '../images/stash_all.png';

export function ChangesView(){
    return <div id={HtmlIds.changes}>
        <h4>View local changes</h4>
        <p>After opening a git project in LithiumGit click to changes tab.</p>
        <img src={changesImage.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Local changes can be viewed here. User can commit or amend the changes.</p>
        <br />
        <img src={stashImage.src} alt="changes" style={{width:'400px',height:'auto'}} />
        <p>There is a caret icon beside commit button. On click this icon "Stash All" menu will appear. On click this option all local changes will be moved to stash list.</p>
    </div>
}