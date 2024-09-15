"use client"

import { DocumentMenus } from "../../lib"
import { GetStarted } from "./GetStarted"
import { SingleMenu } from "./singleMenu"

export default function Docs(){
    return <div className="d-flex w-100">
        <div className="w-20 overflow-auto pe-2 border-end">
            {DocumentMenus.list.map(m=>(
                <SingleMenu key={m.name} menu={m} />
            ))}
        </div>
        <div className="ps-3 ">
            <GetStarted />
        </div>
    </div>
}