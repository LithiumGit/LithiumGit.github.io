"use client"

import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap';
import '../styles/download.scss';
import { OSType, useMultiState } from '../../lib';

interface ITargeOS{
    name:string;
    os:OSType;
}

interface IState{
    selectedOS:ITargeOS;
}

export default function Download(){
    const osses:ITargeOS[] = [
        {name:"Windows",os:OSType.Windows},
        {name:"MacOSX",os:OSType.Mac},
        {name:"Debian(Linux)",os:OSType.Debian},
    ]

    const [state,setState] = useMultiState<IState>({selectedOS:osses[0]});

    return <div className='d-flex justify-content-center'>
        <Dropdown className=''>
            <DropdownToggle variant="" id="" className="rounded-0">
                {/* <FaEllipsisH /> */}
                {state.selectedOS.name}
            </DropdownToggle>
            <Dropdown.Menu className="no-radius">
                {osses.map(o=>(
                    <DropdownItem key={o.os} onClick={()=> setState({selectedOS:o})} className="">{o.name}</DropdownItem>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    </div>
}