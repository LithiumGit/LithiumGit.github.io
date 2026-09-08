import { useInViewPort } from "@/lib/hooks/useInViewPort";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import conflictEditorImage from "../images/conflict_editor.png";
import { useEffect } from "react";

interface IProps{
    onViewPort:()=>void
}

export function ConflictsView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.conflicts,"#"+HtmlIds.scrollContainer);

    useEffect(()=>{
        if(inViewPort)
            props.onViewPort();
    },[inViewPort])

    return <div id={HtmlIds.conflicts}>
        <h4>Resolve conflicts</h4>
        <p>When a merge, rebase or cherry-pick leaves conflicting files, a <strong>Conflicts</strong> tab appears
            in the changes view along with Modified and Staged. Select a conflicted file to open it in the conflict editor.</p>
        <img src={conflictEditorImage.src} alt="Resolve merge conflicts in the LithiumGit conflict editor" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>The upper part of the editor compares the two sides of the conflict side by side &mdash;
            <strong> Incoming changes</strong> on the left and <strong>Current changes</strong> on the right.
            Ticking the checkbox beside a conflicting block takes that side into the result, so a conflict can be
            resolved without editing the text by hand.</p>
        <p>The lower pane shows the merged file itself with the git conflict markers. Above each conflict block
            the <strong>Accept Current Change</strong>, <strong>Accept Incoming Change</strong> and
            <strong> Accept Both Changes</strong> actions apply the corresponding resolution. The file stays editable,
            so a resolution can also be typed in directly.</p>
        <p>The <strong>Resolved</strong> counter in the top bar tracks how many of the conflicts in the file have been
            settled. Once they are resolved, an <strong>Apply</strong> button appears in the top bar &mdash; click it
            to mark the file as resolved. Repeat for each conflicted file, then commit to complete the merge.</p>
    </div>
}
