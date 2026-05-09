import { useEffect } from "react";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import recentImage from "../images/recents.png";
import { useInViewPort } from "@/lib/hooks/useInViewPort";

interface IProps{
    onViewPort:()=>void
}

export function RecentsView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.recents,"#"+HtmlIds.scrollContainer);
        
    useEffect(()=>{
        if(inViewPort) 
            props.onViewPort();
    },[inViewPort])

    return (
        <div id={HtmlIds.recents}>
        <h4>Recents</h4>
        <img src={recentImage.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>Recently opened projects are listed in this view.</p>
    </div>
    )
}