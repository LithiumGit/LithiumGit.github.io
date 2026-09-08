import { useInViewPort } from "@/lib/hooks/useInViewPort";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import changesImage from '../images/changes.png';
import stagedChangesImage from '../images/staged_changes.png';
import stashImage from '../images/stash_all.png';
import { useEffect } from "react";

interface IProps{
    onViewPort:()=>void
}

export function ChangesView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.changes,"#"+HtmlIds.scrollContainer);

    useEffect(()=>{
        if(inViewPort)
            props.onViewPort();
    },[inViewPort])

    return <div id={HtmlIds.changes}>
        <h4>View local changes</h4>
        <p>After opening a git project in LithiumGit click to changes tab.</p>
        <img src={changesImage.src} alt="Local changes with side by side diff in LithiumGit" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Local changes can be viewed here. User can commit or amend the changes.</p>
        <p>The <strong>Modified</strong> tab lists the files that differ from the index. Select a file to see its
            side by side diff, where the left pane is the index and the right pane is the working directory.
            The counter at the top right shows how many changes the selected file has, and the arrows beside it
            move to the previous or next change.</p>
        <p>Changes can be staged either as a whole file or hunk by hunk. The <strong>+</strong> button above the
            file list stages the selected file completely, and the revert button beside it discards the local
            modifications of the file. To stage a single change instead, click the <strong>+</strong> marker shown
            in the gutter beside that change in the working directory pane. Only the hunks staged this way are
            moved to the index, so a file with several unrelated edits can be split across separate commits.</p>
        <p>The working directory pane is editable. The file can be corrected right in the diff &mdash; for example
            to drop a leftover debug line before staging it. Press <strong>Ctrl+S</strong> to save the edit to the
            file on disk.</p>

        <h4>Staged changes</h4>
        <img src={stagedChangesImage.src} alt="Staged changes in LithiumGit" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Staged files are listed under the <strong>Staged</strong> tab. The diff of a staged file compares
            HEAD with the index, so it shows exactly what the next commit will contain.</p>
        <p>Unstaging works the same way as staging. The <strong>&minus;</strong> button above the file list unstages
            the whole file and moves it back to the Modified tab, while the <strong>&minus;</strong> marker in the
            gutter beside a change unstages just that hunk.</p>
        <p>When some files are staged, only the staged files are committed. If nothing is staged, all the
            modified files are committed together.</p>
        <br />
        <img src={stashImage.src} alt="Stash all local changes in LithiumGit" style={{width:'400px',height:'auto'}} />
        <p>There is a caret icon beside commit button. On click this icon "Stash All" menu will appear. On click this option all local changes will be moved to stash list.</p>
    </div>
}
