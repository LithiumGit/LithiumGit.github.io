"use client"

import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap';
import '../styles/download.scss';
import { Constants, Distributions, OSType, useMultiState } from '../../lib';
import { IReleaseItem } from '../../lib/interfaces';
import { useEffect, useMemo } from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';
import { FaDebian } from 'react-icons/fa6';

interface ITargeOS{
    name:string;
    os:OSType;
}

interface IState{
    selectedOS:ITargeOS;
    selectedVersion?:IReleaseItem;
}

export default function Download(){
    const osses:ITargeOS[] = [
        {name:"Windows",os:OSType.Windows},
        {name:"MacOSX",os:OSType.Mac},
        {name:"Debian(Linux)",os:OSType.Debian},
    ]
    
    const latestWindowRlease = Distributions.list.find(_=> _.os === OSType.Windows)!;

    const [state,setState] = useMultiState<IState>({
        selectedOS: osses[0],
        selectedVersion:latestWindowRlease.releases[0],
    });

    const versions = useMemo(()=>{
        const dist = Distributions.list.find(_=> _.os === state.selectedOS.os)!;
        return dist.releases;
    },[state.selectedOS])

    useEffect(()=>{
        setState({selectedVersion:versions[0]});
    },[versions])

    const getOsIcon = ()=>{
        if(state.selectedOS.os === OSType.Windows)
            return <FaWindows />
        if(state.selectedOS.os === OSType.Mac)
            return <FaApple />
        return <FaDebian />
    }
    

    return <div>
        <div className='d-flex align-items-center justify-content-center'>
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
        <div className='d-flex align-items-center justify-content-center pt-2'>
            <a href={state.selectedVersion?.url}  className='text-light bg-brand px-3 py-2 hover'>
                <span className='ps-2'>Download</span>
            </a>                
        </div>
        <br />
    </div>
}