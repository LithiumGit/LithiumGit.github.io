import { useInViewPort } from "@/lib/hooks/useInViewPort";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import importExportImage from "../images/import_export_changes/import_export.png";
import saveImage from "../images/import_export_changes/save.png";
import selectPatchFileImage from "../images/import_export_changes/select_patch_file.png";
import { useEffect } from "react";

interface IProps{
    onViewPort:()=>void
}

export function ImportExportChangesView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.import_export_changes,"#"+HtmlIds.scrollContainer);

    useEffect(()=>{
        if(inViewPort)
            props.onViewPort();
    },[inViewPort])

    return <div id={HtmlIds.import_export_changes}>
        <h4>Import/Export changes</h4>
        <p>Use Import/Export Changes to share local work as a patch file or apply a patch file from another developer.</p>
        <img src={importExportImage.src} alt="Import and export changes in LithiumGit" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Open the Import/Export Changes action from the changes workflow.</p>
        <img src={saveImage.src} alt="Save local changes as a patch file in LithiumGit" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Save them as a patch file.</p>
        <img src={selectPatchFileImage.src} alt="Select a patch file to import in LithiumGit" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>To import changes, select the patch file and apply it to the current working tree.</p>
    </div>
}
