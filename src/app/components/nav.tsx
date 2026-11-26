"use client"

import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { EnumTheme, Routes, StorageUtils, useMultiState } from '../../lib';
import icon from '../images/icon.png';
import { FaGithub } from 'react-icons/fa';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { ZIndexes } from '../../lib/constants/ZIndexes';

interface IState{
    theme:EnumTheme;
    path:string;
    menuOpen:boolean;
    accountEmail:string;
    accountName:string;
    profileOpen:boolean;
}

const links = [
    { href: Routes.Docs, label: "Docs" },
    { href: Routes.Pricing, label: "Pricing" },

    { href: Routes.Blogs, label: "Blogs" },
    { href: Routes.About, label: "About" },
];

export function Nav(){
    const ref = useRef({isMounted:false});
    const profileRef=useRef<HTMLDivElement>(null);
    const [state,setState] = useMultiState<IState>({theme:EnumTheme.Dark,path:"",menuOpen:false,accountEmail:"",accountName:"",profileOpen:false});

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

        setState({
            path:window.location.pathname,
            accountEmail:window.sessionStorage.getItem("lithiumgit.accountEmail") || "",
            accountName:window.sessionStorage.getItem("lithiumgit.accountName") || "",
        })
    },[])

    const signOut=(event:MouseEvent<HTMLButtonElement | HTMLAnchorElement>)=>{
        event.preventDefault();
        window.sessionStorage.removeItem("lithiumgit.accessToken");
        window.sessionStorage.removeItem("lithiumgit.accountEmail");
        window.sessionStorage.removeItem("lithiumgit.accountName");
        setState({accountEmail:"",accountName:"",menuOpen:false,profileOpen:false});
        window.location.assign(Routes.SignIn);
    };

    useEffect(()=>{
        if(!state.profileOpen)
            return;
        const closeOnOutsideClick=(event:PointerEvent)=>{
            if(!profileRef.current?.contains(event.target as Node))
                setState({profileOpen:false});
        };
        window.addEventListener("pointerdown",closeOnOutsideClick);
        return ()=>window.removeEventListener("pointerdown",closeOnOutsideClick);
    },[state.profileOpen]);

    useEffect(()=>{
        if(!state.menuOpen && !state.profileOpen)
            return;
        const closeOnEscape = (e:KeyboardEvent) => { if(e.key === "Escape") setState({menuOpen:false,profileOpen:false}); };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    },[state.menuOpen,state.profileOpen])

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
                    {state.accountEmail ? <div className="site-nav-profile" ref={profileRef}>
                        <button type="button" className="site-nav-avatar" aria-label="Account menu"
                            aria-expanded={state.profileOpen} aria-haspopup="true"
                            onClick={()=>setState({profileOpen:!state.profileOpen})}>
                            {(state.accountName || state.accountEmail).trim().charAt(0).toUpperCase() || "U"}
                        </button>
                        {state.profileOpen && <div className="site-nav-profile-card" role="group" aria-label="Account menu">
                            <div className="site-nav-profile-details">
                                <strong>{state.accountName || state.accountEmail}</strong>
                                {state.accountName && <span>{state.accountEmail}</span>}
                            </div>
                            <a className="site-nav-profile-link" href={Routes.AccountSettings} onClick={()=>setState({profileOpen:false})}>Account settings</a>
                            <button type="button" className="site-nav-profile-signout" onClick={signOut}>Sign out</button>
                        </div>}
                    </div> : <a href={Routes.SignIn} className="site-nav-sign-in" aria-current={isActive(Routes.SignIn) ? "page" : undefined}>Sign in</a>}
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
                        {state.accountEmail ? <>
                            <li><span>Signed in as {state.accountName || state.accountEmail}</span></li>
                            <li><a href={Routes.AccountSettings} aria-current={isActive(Routes.AccountSettings) ? "page" : undefined}>Account settings</a></li>
                            <li><a href={Routes.SignIn} onClick={signOut}>Sign out</a></li>
                        </> : <>
                            <li><a href={Routes.SignIn} aria-current={isActive(Routes.SignIn) ? "page" : undefined}>Sign in</a></li>
                            <li><a href={Routes.SignUp} aria-current={isActive(Routes.SignUp) ? "page" : undefined}>Sign up</a></li>
                        </>}
                        <li><a href="https://github.com/LithiumGit/LithiumGit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <a href={Routes.Download} className="site-nav-cta">Download LithiumGit</a>
                </div>
            )}
        </nav>
    );
}
