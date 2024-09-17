import { IMenu } from "../interfaces";
import { HtmlIds } from "./HtmlIds";

export class DocumentMenus{

    static readonly list:IMenu[]=[
        {
            name:"Getting Started",
            url:"#"+HtmlIds.get_started,
            subMenus:[],
        },
        {
            name:"Changes",
            url:"#"+ HtmlIds.changes,
            subMenus:[],
        },
        {
            name:"Graph",
            url:"#"+HtmlIds.graph,
            subMenus:[],
        },
        {
            name:"Commits",
            url:"#"+HtmlIds.commits,
            subMenus:[],
        },
        {
            name:"Stashes",
            url:"#"+HtmlIds.stash,
            subMenus:[],
        },
        {
            name:"Configs",
            url:"#"+HtmlIds.config,
            subMenus:[],
        },
        {
            name:"Clone",
            url:"#"+HtmlIds.clone,
            subMenus:[],
        },
        {
            name:"Recents",
            url:"#"+HtmlIds.recents,
            subMenus:[],
        },
        {
            name:"Create",
            url:"#"+HtmlIds.create,
            subMenus:[],
        }
    ]
}