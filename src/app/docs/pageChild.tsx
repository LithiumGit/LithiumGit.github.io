"use client"

import { Fragment } from "react";
import { Constants, DocumentMenus, useMultiState } from "../../lib";
import { ZIndexes } from "../../lib/constants/ZIndexes";
import { ChangesView } from "./ChangesView";
import { CloneView } from "./CloneView";
import { CommitsView } from "./CommitsView";
import { ConfigView } from "./Config";
import { CreateView } from "./CreateView";
import { GetStarted } from "./GetStarted";
import { GraphView } from "./GraphView";
import { RecentsView } from "./Recents";
import { SingleMenu } from "./SingleMenu";
import { StashView } from "./StashView";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface IState{
    menuExpaned:boolean;
}

export function PageChild(){
    const [state,setState] = useMultiState<IState>({menuExpaned:false});

    return <Fragment>
        <div className={`menus overflow-auto ps-1 position-absolute bg-color ${state.menuExpaned?"d-block":""}`} 
            style={{top:Constants.navHeight,left:0 , height:`calc(100% - ${Constants.navHeight} - ${Constants.footerHeight})`
            ,zIndex:ZIndexes.DocsNav}} >
            {DocumentMenus.list.map(m=>(
                <SingleMenu key={m.name} menu={m} />
            ))}

            {state.menuExpaned && <span className="menu-collapse position-absolute pe-1" style={{top:0,right:0}}
             onClick={()=> setState({menuExpaned:false})}><FaAngleLeft /></span>}
        </div>
        {!state.menuExpaned && <span className="menus-expand position-absolute" onClick={()=> setState({menuExpaned:true})}
        style={{top:Constants.navHeight,left:0
            ,zIndex:ZIndexes.DocsNav}} >
                <FaAngleRight />
            </span>}
        <div className={`menus-placeholder ${state.menuExpaned?"d-block":""}`} />
        <div className="content h-100 overflow-auto border-start">
            <GetStarted />
            <ChangesView />
            <GraphView />
            <CommitsView />
            <StashView />
            <ConfigView />
            <CloneView />
            <RecentsView />
            <CreateView />
        </div>
    </Fragment>
}