import { useInViewPort } from "@/lib/hooks/useInViewPort";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import createImage from "../images/create.png";
import { useEffect } from "react";

interface IProps{
    onViewPort:()=>void
}

export function CreateView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.create,"#"+HtmlIds.scrollContainer);
        
    useEffect(()=>{
        if(inViewPort) 
            props.onViewPort();
    },[inViewPort])

    return (
        <div id={HtmlIds.create}>
        <h4>Create git project</h4>
        <img src={createImage.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>An empty git project can be created as it is created by "git init" command.</p>
    </div>
    )
}