import { useEffect } from "react";
import { Constants } from "../../lib";
import { HtmlIds } from "../../lib/constants/HtmlIds";
import commitsImg from "../images/commits.png";
import { useInViewPort } from "@/lib/hooks/useInViewPort";

interface IProps{
    onViewPort:()=>void
}

export function CommitsView(props:IProps){
    const {inViewPort} = useInViewPort(HtmlIds.commits,"#"+HtmlIds.scrollContainer);
        
    useEffect(()=>{
        if(inViewPort) 
            props.onViewPort();
    },[inViewPort])

    return (
        <div id={HtmlIds.commits}>
        <h4>Commits</h4>
        <img src={commitsImg.src} alt="changes" style={{width:Constants.docsImageWidth,height:'auto'}} />
        <p>All the commits are listed here as it is in git log result.</p>
    </div>
    )
}