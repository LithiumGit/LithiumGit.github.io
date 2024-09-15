import { IMenu } from "../interfaces";
import { HtmlIds } from "./HtmlIds";

export class DocumentMenus{

    static readonly list:IMenu[]=[
        {
            name:"Getting Started",
            url:HtmlIds.get_started,
            subMenus:[],
        },
        {
            name:"Changes",
            url:"#changes",
            subMenus:[],
        },
        {
            name:"Graph",
            url:"#graph",
            subMenus:[],
        },
        {
            name:"Commits",
            url:"#commits",
            subMenus:[],
        },
        {
            name:"Stashes",
            url:"#stashes",
            subMenus:[],
        },
        {
            name:"Configs",
            url:"#stashes",
            subMenus:[],
        },
        {
            name:"Clone",
            url:"#clone",
            subMenus:[],
        },
        {
            name:"Recents",
            url:"#recents",
            subMenus:[],
        },
        {
            name:"Create",
            url:"#create",
            subMenus:[],
        }
    ]
}