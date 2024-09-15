"use client"

import { useEffect, useRef } from 'react';
import { EnumTheme, Routes, StorageUtils, useMultiState } from '../../lib';
import icon from '../images/icon.png';
import { FaBahai } from 'react-icons/fa';

interface IState{
    theme:EnumTheme;
    path:string;
}

export function Nav(){
    const ref = useRef({isMounted:false});
    const [state,setState] = useMultiState<IState>({theme:EnumTheme.Dark,path:""});

    const toogleTheme=()=>{
        let newTheme = state.theme === EnumTheme.Light? EnumTheme.Dark:EnumTheme.Light;        
        setState({theme:newTheme});
    }
    
    useEffect(()=>{
        if(!ref.current.isMounted)
            return;
        if(state.theme === EnumTheme.Light){
            window.document.documentElement.setAttribute("data-theme",EnumTheme.Light);
        }else{
            window.document.documentElement.setAttribute("data-theme",EnumTheme.Dark);
        }
        StorageUtils.setTheme(state.theme);
    },[state.theme])

    useEffect(()=>{
        ref.current.isMounted = true;
        const theme = StorageUtils.getTheme();
        if(state.theme !== theme){
            setState({theme});
        }

        setState({path:window.location.pathname})
    },[])

    return (
        <nav className="d-flex align-items-center" style={{height: '7rem'}}>
            <a href="/" className="d-flex h-100 align-items-center no-decoration">
                <div className="h-100 d-flex align-items-center ps-5">
                    <img src={icon.src} style={{height: '75%', width: 'auto'}} alt="icon.png" />
                </div>
                <div className="">
                    <div title='The powerful git client' className="font-weight-bold" style={{fontSize: '2em'}}>
                        <span className="font-weight-bold">Lithium</span><span><i>Git</i></span>
                    </div>
                    <div>
                        The powerful git client
                    </div>            
                </div>
            </a>
            
            <div className='px-2' />

            <div className="nav-item px-3">
                <a href={Routes.Docs} className={`no-decoration ${state.path === Routes.Docs?"selected-color":""}`}>Docs</a>
            </div>
            <div className="nav-item px-3 no-decoration">
                <a href={Routes.Download} className={`no-decoration ${state.path === Routes.Download?"selected-color":""}`}>Download</a>
            </div>
            <div className="nav-item px-3">
                <a href="#" className={`no-decoration ${state.path === Routes.About?"selected-color":""}`}>About</a>
            </div>
    
            <div className='flex-grow-1 text-end'>
                <div className='pe-3'>
                    <FaBahai onClick={()=> toogleTheme()} title={`Switch to ${state.theme == EnumTheme.Dark?"light":"dark"} theme.`} className={`h3 cur-point border border-secondary rounded-circle p-1 ${state.theme === EnumTheme.Light?"text-light":""}`} />
                </div>
            </div>
        </nav>    
      );

}