import { Metadata } from "next";
import { Constants } from "../constants";
import { OSType } from "../enums";
import { IHeaderInfo } from "../interfaces/IHeaderInfo";

export class UiUtils{
    static getOSPlatform() {
        //@ts-ignore
        const platform = window.navigator.userAgentData ? window.navigator.userAgentData.platform : window.navigator.platform;;
    
        if (/Mac/i.test(platform)) {
            return OSType.Mac;
        }
        else if (/Win/i.test(platform)) {
            return OSType.Windows;
        }
        return OSType.Linux;        
    }
    
    static getMinHeighOfMainPanel(){
        return `calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`;
    }

    static getCommonHeaderInfo(){
        return {
            title:'LithiumGit | The most powerful Git client application.',
            description:'Most popular Git client application. LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically.LithiumGit is origin independent application. That means it can be used for any git project having any origin platform such as Github, GitLab, BitBucket,Gerrit or others. The most useful feature of LithiumGit which a user may find is the graph view. In graph view the overall state of change history can be viewed. From the graph view user can easily view the changes of any commit, do merge, rebase, cherry-pick, create branch and more other functionalities.',
            keywords:'LithiumGit,Git client,Git GUI, Desktop application,Cross platform Git client appliction,Cross platform Git GUI appliction',
            openGraph: {
                images: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                title:'LithiumGit | The most powerful Git client application.',
                description:'Most popular Git client application. LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically.',
                url:'https://lithiumgit.github.io',
                type:'website',
            },            
        } as Metadata;
    }
}