import { useEffect } from "react";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import cloneImage from "../images/clone.png";
import { useInViewPort } from "@/lib/hooks/useInViewPort";

interface IProps{
    onViewPort:()=>void
}

export function CloneView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.clone,"#"+HtmlIds.scrollContainer);
        
    useEffect(()=>{
        if(inViewPort) 
            props.onViewPort();
    },[inViewPort])

    return (
        <div id={HtmlIds.clone}>
            <h4>Clone Repository</h4>
            <img src={cloneImage.src} alt="changes" style={{width:Constants.docsImageWidth, height:'auto'}} />
            <p>Any git repository can be cloned from this view.</p>
        </div>
        
    )
}