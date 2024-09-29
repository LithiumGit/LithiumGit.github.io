"use client"

import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap';
import '../styles/download.scss';
import { Distributions, OSType, useMultiState } from '../../lib';
import { IReleaseItem } from '../../lib/interfaces';
import { useEffect, useMemo } from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';
import { FaDebian } from 'react-icons/fa6';
import inst1 from '../images/installation/step1.png';
import inst2 from '../images/installation/step2.png';
import inst3 from '../images/installation/step3.png';
import inst5 from '../images/installation/step5.png';
import "../styles/download.scss";

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
    

    return <main className='w-100 download'>
        <div className='w-100 d-flex align-items-center justify-content-center'>
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
        <div className='row g-0 py-5'>
            <div className='col-md-3' />
            <div className='col-12 col-md-6 ps-2'>
                <h4>Installation Steps</h4>
                <div className=''>
                    <h5>-Download the installer</h5>
                    <h5>-Execute the installer after download</h5>
                    <div className='pt-3'>
                        <img className='step-img' src={inst1.src} alt="step1" />
                        <h5>-Accept the agreement</h5>
                    </div>
                    <div className='pt-3'>
                        <img className='step-img' src={inst2.src} alt="step2" />
                        <h5>-Choose the user. The default selected option(Only for me) is recommended.</h5>
                    </div>
                    <div className='pt-3'>
                        <img className='step-img' src={inst3.src} alt="step2" />
                        <h5>-Select the destination folder, click install and wait some for a moment.</h5>
                    </div><div className='pt-3'>
                        <img className='step-img' src={inst5.src} alt="step2" />
                        <h5>-Click Finish. Installation completed.</h5>
                    </div>
                    <p className='pt-3'>NB:*Antivirus may prevent the download and installation process as the code signature not yet added to LithiumGit. In this case you have to download and install it forcely.</p>
                </div>
            </div>
            <div className='col-md-3' />
        </div>
    </main>
}