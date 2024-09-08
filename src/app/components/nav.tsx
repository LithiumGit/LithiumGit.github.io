import { Routes } from '../../lib';
import icon from '../images/icon.png';

export function Nav(){

    return (
        <nav className="d-flex align-items-center" style={{height: '7rem'}}>
            <a href="/" className="d-flex h-100 align-items-center">
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
                <a href={Routes.Docs} className="">Docs</a>
            </div>
            <div className="nav-item ps-5">
                <a href="#" className="">Download</a>
            </div>
            <div className="nav-item ps-5">
                <a href="#" className="">About</a>
            </div>
    
        </nav>    
      );

}