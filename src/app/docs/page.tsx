"use client"

import { Constants, DocumentMenus } from "../../lib"
import { ChangesView } from "./ChangesView"
import { CommitsView } from "./CommitsView"
import { GetStarted } from "./GetStarted"
import { GraphView } from "./GraphView"
import { SingleMenu } from "./SingleMenu"
import { StashView } from "./StashView"

export default function Docs(){
    const menuWidth = 200;
    return <div className="d-flex w-100 overflow-auto">
        <div className="overflow-auto ps-1 position-absolute" 
            style={{top:Constants.navHeight,left:0,width:menuWidth , height:`calc(100% - ${Constants.navHeight} - ${Constants.footerHeight})`}} >
            {DocumentMenus.list.map(m=>(
                <SingleMenu key={m.name} menu={m} />
            ))}
        </div>
        <div style={{width:menuWidth}}/>
        <div className="h-100 overflow-auto ps-3 border-start" style={{width:`100% - ${menuWidth}px`}}>
            <GetStarted />
            <ChangesView />
            <GraphView />
            <CommitsView />
            <StashView />
        </div>

    </div>
}