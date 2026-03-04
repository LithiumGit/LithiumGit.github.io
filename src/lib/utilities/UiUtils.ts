import { Metadata } from "next";
import { Constants } from "../constants";
import { OSType } from "../enums";
import { IMetadataParams } from "../interfaces";

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

    static getCommonHeaderInfo(args: IMetadataParams,path:string){
        const canonicalUrl = path ? `https://lithiumgit.com/${path}` : 'https://lithiumgit.com/';
        return {
            title:'LithiumGit | The most powerful Git client application.',
            description:'LithiumGit is a free, cross-platform Git GUI client for Windows, Mac, and Linux. Visualize your Git history, manage branches, merge, rebase, cherry-pick, and more — no command line needed.',
            keywords:'LithiumGit, Git client, Git GUI, Git desktop application, cross-platform Git client, free Git GUI, Git GUI for Windows, Git GUI for Mac, Git GUI for Linux',
            openGraph: {
                images: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                title:'LithiumGit | The most powerful Git client application.',
                description:'LithiumGit is a free, cross-platform Git GUI client for Windows, Mac, and Linux. Visualize your Git history, manage branches, merge, rebase, cherry-pick, and more — no command line needed.',
                url: canonicalUrl,
                type:'website',
                locale: 'en_US',
            },
            twitter: {
                card: 'summary_large_image',
                title:'LithiumGit | The most powerful Git client application.',
                description:'LithiumGit is a free, cross-platform Git GUI client for Windows, Mac, and Linux. Visualize your Git history, manage branches, merge, rebase, cherry-pick, and more.',
                images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
            },
            alternates: {
                canonical: canonicalUrl,
            },
        } as Metadata;
    }
}