"use client"

import { Dropdown, DropdownItem, DropdownToggle } from "react-bootstrap"
import { Distributions, OSType, StringUtils, useMultiState } from "../../lib";
import { ArchTypeNames, IReleaseItem } from "../../lib/interfaces";
import { Fragment, useEffect, useMemo } from "react";
import { UiUtils } from "../../lib/utilities/UiUtils";
import { FaApple, FaWindows } from "react-icons/fa";
import { FaDebian } from "react-icons/fa6";
import { WinInstallationSteps } from "./winInstallationSteps";
import { LinuxInstallationSteps } from "./linuxInstallationSteps";
import { MacInstallationSteps } from "./macInstallationSteps";


interface ITargeOS{
    name:string;
    os:OSType;
}

interface IState{
    selectedOS:ITargeOS;
    selectedVersion?:IReleaseItem;
}

export function PageChild(){
    const osses:ITargeOS[] = [
        {name:"Windows",os:OSType.Windows},
        {name:"MacOSX",os:OSType.Mac},
        {name:"Linux",os:OSType.Linux},
    ] 
    const [state,setState] = useMultiState<IState>({
        selectedOS: osses[0],
        selectedVersion:Distributions.list.find(_=> _.os === OSType.Windows)!.releases[0],
    });
    
    const versions = useMemo(()=>{
        const dist = Distributions.list.find(_=> _.os === state.selectedOS.os)!;
        return dist.releases;
    },[state.selectedOS])

    useEffect(()=>{
        setState({selectedVersion:versions[0]});
    },[versions])

    useEffect(()=>{
        const osType = UiUtils.getOSPlatform();
        const os = osses.find(_=>_.os === osType);
        setState({selectedOS:os});
    },[]) 
    
    const getOsIcon = ()=>{
        if(state.selectedOS.os === OSType.Windows)
            return <FaWindows />
        if(state.selectedOS.os === OSType.Mac)
            return <FaApple />
        return <FaDebian />
    }
    return <Fragment>
        <div className="py-4 px-2 bg-second-color text-center">Please make sure that Git is installed on your system. You can download it from <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="underline text-primary">here</a>.</div>
        <div className='w-100 d-flex align-items-center justify-content-center pt-3'>
            <Dropdown className=''>
                <DropdownToggle variant="" id="" className="rounded-0 d-flex align-items-center">
                    {getOsIcon()}
                    <span className='px-1' />
                    {state.selectedOS.name}
                </DropdownToggle>
                <Dropdown.Menu className="no-radius">
                    {osses.map(o=>(
                        <DropdownItem key={o.os} onClick={()=> setState({selectedOS:o})} className="">{o.name}</DropdownItem>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className=''>
                <DropdownToggle variant="" id="" className="rounded-0">
                    {/* <FaEllipsisH /> */}
                    {state.selectedVersion?.version || "Not available"}
                </DropdownToggle>
                <Dropdown.Menu className="no-radius">
                    {versions.map(o=>(
                        <DropdownItem key={o.version} onClick={()=> setState({selectedVersion:o})} className="">{o.version}</DropdownItem>
                    ))}                
                </Dropdown.Menu>
            </Dropdown>        
        </div>
        {
            state.selectedVersion?.files.map((f)=>(
                <div key={f.url} className='d-flex align-items-center justify-content-center pt-2'>
                    <a href={f.url}  className='hover-effect underline px-3 py-2 hover'>
                        {StringUtils.getLastPart(f.url)} 
                    </a>
                    <span> | {ArchTypeNames[f.arch]}</span>
                </div>
            ))
        }        
        <br />
        <div className='row g-0 py-5'>
            <div className='col-md-3' />
            <div className='col-12 col-md-6 ps-2'>
                {state.selectedOS.os === OSType.Windows && <WinInstallationSteps />}
                {state.selectedOS.os === OSType.Linux && <LinuxInstallationSteps />}
                {state.selectedOS.os === OSType.Mac && <MacInstallationSteps />}
            </div>
            
            <div className='col-md-3' />
        </div>
    </Fragment>
}