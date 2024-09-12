import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { Routes } from '../../lib';
import icon from '../images/icon.png';
import { FaBahai, FaEllipsisH } from 'react-icons/fa';

export function Nav(){

    return (
        <nav className="d-flex align-items-center" style={{height: '7rem'}}>
            <a href="/" className="d-flex h-100 align-items-center no-decoration">
                <div className="h-100 d-flex align-items-center ps-5">
                    <img src={icon.src} style={{height: '75%', width: 'auto'}} alt="icon.png" />
                </div>
                <div className="">
                    <div className="font-weight-bold" style={{fontSize: '2em'}}>
                        <span className="font-weight-bold">Lithium</span><span><i>Git</i></span>
                    </div>
                    <div>
                        The powerful git client
                    </div>            
                </div>
            </a>
            
            <div className="nav-item ps-5">
                <a href={Routes.Docs} className="no-decoration">Docs</a>
            </div>
            <div className="nav-item ps-5 no-decoration">
                <a href="#" className="no-decoration">Download</a>
            </div>
            <div className="nav-item ps-5">
                <a href="#" className="no-decoration">About</a>
            </div>
    
            <div className='flex-grow-1 text-end'>
                <div className='pe-3'>
                    <FaBahai title='Switch theme' className="h3 cur-point border border-secondary rounded-circle p-1" />
                </div>
            </div>
        </nav>    
      );

}