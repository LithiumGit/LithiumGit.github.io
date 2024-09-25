"use client"

import { Constants, DocumentMenus } from "../../lib"
import { ZIndexes } from "../../lib/constants/ZIndexes"
import { ChangesView } from "./ChangesView"
import { CloneView } from "./CloneView"
import { CommitsView } from "./CommitsView"
import { ConfigView } from "./Config"
import { CreateView } from "./CreateView"
import { GetStarted } from "./GetStarted"
import { GraphView } from "./GraphView"
import { RecentsView } from "./Recents"
import { SingleMenu } from "./SingleMenu"
import { StashView } from "./StashView"
import  "../styles/docs.scss";
import { FaGreaterThan } from "react-icons/fa"

export default function Docs(){
    return <main className="docs d-flex w-100 overflow-auto">
        <div className="menus overflow-auto ps-1 position-absolute" 
            style={{top:Constants.navHeight,left:0 , height:`calc(100% - ${Constants.navHeight} - ${Constants.footerHeight})`
            ,zIndex:ZIndexes.DocsNav}} >
            {DocumentMenus.list.map(m=>(
                <SingleMenu key={m.name} menu={m} />
            ))}
        </div>
        <span className="menus-expand position-absolute h4 text-primary" style={{top:Constants.navHeight,left:0
            ,zIndex:ZIndexes.DocsNav}} >
                &gt;
            </span>
        <div className="menus-placeholder" />
        <div className="content h-100 overflow-auto ps-3 border-start">
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

    </main>
}