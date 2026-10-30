"use client"

import { useEffect, useRef } from 'react';
import { EnumTheme, Routes, StorageUtils, useMultiState } from '../../lib';
import icon from '../images/icon.png';
import { FaGithub } from 'react-icons/fa';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { ZIndexes } from '../../lib/constants/ZIndexes';

interface IState{
    theme:EnumTheme;
    path:string;
    menuOpen:boolean;
}

const links = [
    { href: Routes.Docs, label: "Docs" },
    { href: Routes.Blogs, label: "Blogs" },
    { href: Routes.About, label: "About" },
];

export function Nav(){
    const ref = useRef({isMounted:false});
    const [state,setState] = useMultiState<IState>({theme:EnumTheme.Dark,path:"",menuOpen:false});

    const toogleTheme=()=>{
        let newTheme = state.theme === EnumTheme.Light? EnumTheme.Dark:EnumTheme.Light;
        setState({theme:newTheme});
    }

    // A section stays highlighted on its sub-pages too, e.g. Blogs on /blogs/<post>.
    const isActive = (route:string) =>
        state.path === route || state.path === route + ".html" || state.path.startsWith(route + "/");

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

    useEffect(()=>{
        if(!state.menuOpen)
            return;
        const closeOnEscape = (e:KeyboardEvent) => { if(e.key === "Escape") setState({menuOpen:false}); };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    },[state.menuOpen])

    const themeLabel = `Switch to ${state.theme === EnumTheme.Dark ? "light" : "dark"} theme`;

    return (
        <nav className="site-nav" aria-label="Main" style={{zIndex:ZIndexes.Nav}}>
            <div className="site-nav-inner">
                <a href="/" className="site-nav-brand">
                    <span className="site-nav-logo">
                        <img src={icon.src} alt="" />
                    </span>
                    LithiumGit
                </a>

                <ul className="site-nav-links">
                    {links.map(link => (
                        <li key={link.href}>
                            <a href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="site-nav-actions">
                    <a className="site-nav-icon-btn site-nav-github" href="https://github.com/LithiumGit/LithiumGit" target="_blank" rel="noopener noreferrer" aria-label="LithiumGit on GitHub" title="LithiumGit on GitHub">
                        <FaGithub />
                    </a>
                    <button type="button" className="site-nav-icon-btn" onClick={toogleTheme} aria-label={themeLabel} title={themeLabel}>
                        {state.theme === EnumTheme.Dark ? <FiSun /> : <FiMoon />}
                    </button>
                    <a href={Routes.Download} className="site-nav-cta">Download</a>
                    <button type="button" className="site-nav-icon-btn site-nav-menu-btn" onClick={()=> setState({menuOpen:!state.menuOpen})}
                        aria-expanded={state.menuOpen} aria-controls="site-nav-menu" aria-label={state.menuOpen ? "Close menu" : "Open menu"}>
                        {state.menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {state.menuOpen && (
                <div id="site-nav-menu" className="site-nav-menu">
                    <ul>
                        {links.map(link => (
                            <li key={link.href}>
                                <a href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}</a>
                            </li>
                        ))}
                        <li>
                            <a href="https://github.com/LithiumGit/LithiumGit" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                    <a href={Routes.Download} className="site-nav-cta">Download LithiumGit</a>
                </div>
            )}
        </nav>
    );
}
