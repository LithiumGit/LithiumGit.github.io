import { useInViewPort } from "@/lib/hooks/useInViewPort";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import  configImage  from "../images/config.png";
import  remotesImage  from "../images/remotes.png";
import { useEffect } from "react";

interface IProps{
    onViewPort:()=>void
}

export function ConfigView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.config,"#"+HtmlIds.scrollContainer);
        
    useEffect(()=>{
        if(inViewPort) 
            props.onViewPort();
    },[inViewPort])

    return (
        <div id={HtmlIds.config}>
        <h4>Config</h4>
        <img src={configImage.src} alt="changes" style={{width:Constants.docsImageWidth, height:'auto'}} />
        <p>User configuration can be viewed and edited from this ui.</p>
        <img src={remotesImage.src} alt="changes" style={{width:Constants.docsImageWidth, height:'auto'}} />
        <p>Remote(origin) url can be viewed, new origin can be added or deleted from this ui.</p>
    </div>
    )
}