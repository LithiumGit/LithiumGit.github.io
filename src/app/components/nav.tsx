"use client"

import { useEffect, useRef } from 'react';
import { Constants, EnumTheme, Routes, StorageUtils, useMultiState } from '../../lib';
import icon from '../images/icon.png';
import { FaBahai, FaGit, FaGithub } from 'react-icons/fa';
import { Navbar, NavItem } from 'react-bootstrap';
import { ZIndexes } from '../../lib/constants/ZIndexes';

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
        <Navbar collapseOnSelect expand="md" className="d-flex align-items-center position-relative" style={{zIndex:ZIndexes.Nav,height:Constants.navHeight}}>
            <Navbar.Brand href="/" className='h-100'>
                <div className="d-flex h-100 align-items-center no-decoration">
                    <div className="h-100 d-flex align-items-center ps-2">
                        <img src={icon.src} style={{height: '60%', width: 'auto'}} alt="icon.png" />
                    </div>
                    <div className="">
                        <div title='The powerful git client' className="font-weight-bold" style={{fontSize: '2em'}}>
                            <span className="font-weight-bold">Lithium</span><span><i>Git</i></span>
                        </div>
                        <div className='' style={{fontWeight:'normal'}}>
                            The powerful git client
                        </div>            
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse className='' style={{top:'100%'}} id="responsive-navbar-nav" >
                <NavItem>
                    <div className="px-3">
                        <a href={Routes.Docs} className={`no-decoration ${state.path === Routes.Docs?"selected-color":""}`}>Docs</a>
                    </div>
                </NavItem>

                <NavItem>
                    <div className="px-3 no-decoration">
                        <a href={Routes.Download} className={`no-decoration ${state.path === Routes.Download?"selected-color":""}`}>Download</a>
                    </div>
                </NavItem>

                <NavItem>
                    <div className="px-3">
                        <a href={Routes.About} className={`no-decoration ${state.path === Routes.About?"selected-color":""}`}>About</a>
                    </div>
                </NavItem>
                <NavItem className='flex-grow-1 text-end'>
                    <div className='pe-3 d-flex align-items-center justify-content-end'>
                        <span className='pe-2'>
                            <a target='_blank' href="https://github.com/TulshiDas39/LithiumGit"><FaGithub /></a>
                        </span>
                        <span className='ps-5'>
                            <FaBahai onClick={()=> toogleTheme()} title={`Switch to ${state.theme == EnumTheme.Dark?"light":"dark"} theme.`} className={`h3 cur-point border border-secondary rounded-circle p-1 ${state.theme === EnumTheme.Light?"":"text-slight"}`} />
                        </span>
                    </div>
                </NavItem>
            </Navbar.Collapse>
            {/* <NavItem className='h-100'>
                
            </NavItem> */}
            

            {/* <NavItem className='flex-grow-1 text-end'>
                <div className='pe-3'>
                    <FaBahai onClick={()=> toogleTheme()} title={`Switch to ${state.theme == EnumTheme.Dark?"light":"dark"} theme.`} className={`h3 cur-point border border-secondary rounded-circle p-1 ${state.theme === EnumTheme.Light?"":"text-slight"}`} />
                </div>
            </NavItem> */}

            {/* <div className="nav-item px-3">
                <a href={Routes.Docs} className={`no-decoration ${state.path === Routes.Docs?"selected-color":""}`}>Docs</a>
            </div>
            <div className="nav-item px-3 no-decoration">
                <a href={Routes.Download} className={`no-decoration ${state.path === Routes.Download?"selected-color":""}`}>Download</a>
            </div>
            <div className="nav-item px-3">
                <a href={Routes.About} className={`no-decoration ${state.path === Routes.About?"selected-color":""}`}>About</a>
            </div>
    
            <div className='flex-grow-1 text-end'>
                <div className='pe-3'>
                    <FaBahai onClick={()=> toogleTheme()} title={`Switch to ${state.theme == EnumTheme.Dark?"light":"dark"} theme.`} className={`h3 cur-point border border-secondary rounded-circle p-1 ${state.theme === EnumTheme.Light?"":"text-slight"}`} />
                </div>
            </div> */}
        </Navbar>    
      );

}