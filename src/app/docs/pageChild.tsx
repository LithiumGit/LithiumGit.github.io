"use client"

import { Fragment, useEffect } from "react";
import { Constants, DocumentMenus, useMultiState } from "../../lib";
import { ZIndexes } from "../../lib/constants/ZIndexes";
import { ChangesView } from "./ChangesView";
import { CloneView } from "./CloneView";
import { CommitsView } from "./CommitsView";
import { ConfigView } from "./Config";
import { CreateView } from "./CreateView";
import { GetStarted } from "./GetStarted";
import { GraphView } from "./GraphView";
import { ImportExportChangesView } from "./ImportExportChangesView";
import { RecentsView } from "./Recents";
import { SingleMenu } from "./SingleMenu";
import { StashView } from "./StashView";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { HtmlIds } from "@/lib/constants/HtmlIds";

interface IState{
    menuExpaned:boolean;
    selectedMenu?:string;
}

export function PageChild(){
    const [state,setState] = useMultiState<IState>({menuExpaned:false});

    return <Fragment>
        <div className={`menus overflow-auto ps-1 position-absolute bg-color ${state.menuExpaned?"d-block":""}`} 
            style={{top:Constants.navHeight,left:0 , height:`calc(100% - ${Constants.navHeight} - ${Constants.footerHeight})`
            ,zIndex:ZIndexes.DocsNav}} >
            {DocumentMenus.list.map(m=>(
                <SingleMenu key={m.name} menu={m} isSelected={state.selectedMenu === m.name} onMenuSelect={()=> setState({selectedMenu:m.name})} />
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
            <GetStarted onViewPort={()=> setState({selectedMenu:DocumentMenus.list[0].name})}/>
            <ChangesView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[1].name})}/>
            <ImportExportChangesView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[2].name})}/>
            <GraphView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[3].name})}/>
            <CommitsView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[4].name})}/>
            <StashView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[5].name})}/>
            <ConfigView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[6].name})}/>
            <CloneView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[7].name})}/>
            <RecentsView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[8].name})}/>
            <CreateView onViewPort={()=> setState({selectedMenu:DocumentMenus.list[9].name})}/>
        </div>
    </Fragment>
}
