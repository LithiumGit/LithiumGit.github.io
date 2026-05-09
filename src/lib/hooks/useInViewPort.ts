import { useEffect } from "react";
import { UiUtils } from "../utilities/UiUtils";
import { useMultiState } from "./useMultiState";

interface IState {
    inViewPort: boolean;
}
export function useInViewPort(id: string,scrollContainer:string){
    const [state, setState] = useMultiState<IState>({
        inViewPort: false
    });

    const checkInViewPort = (element: HTMLElement,container:HTMLElement) => {
        const isInViewPort = UiUtils.isInViewport(element, container);
        if(isInViewPort){
            console.log(`Element with id ${id} is in viewport: ${isInViewPort}`);
        }        
        setState({ inViewPort: isInViewPort });
    }

    useEffect(()=>{
        if(typeof window === 'undefined') return;
        const container = document.querySelector(scrollContainer) as HTMLElement;
        const handleScroll = () => {
            const element = document.getElementById(id);
            if(element){
                checkInViewPort(element,container);
            }
        }
        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll",handleScroll);
        };
    },[]);

    return { inViewPort:state.inViewPort };
}