import { OSType } from "../enums";
import { ArchType, FileType, IChangeLog, IDistribution } from "../interfaces";

export class Distributions{
    static readonly MsStoreLink = "https://apps.microsoft.com/detail/9pds1hllchxs?hl=en-us&gl=US&ocid=pdpshare";
    static readonly list:IDistribution[]=[
        {
            os:OSType.Windows,
            releases:[                
                {
                    version:"1.0.9",
                    isLatest:true,
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/LithiumGit/LithiumGit/releases/download/v1.0.9/LithiumGit_Installer.exe",
                            arch:ArchType.x64,
                        },                                                
                    ]
                },                                               
            ]
        },
        {
            os:OSType.Mac,
            releases:[
                {
                    version:"1.0.9",
                    isLatest:true,
                    files:[
                        {
                            type:FileType.DMG,
                            url:"https://github.com/LithiumGit/LithiumGit/releases/download/v1.0.9/LithiumGit-Setup-mac-arm64-1.0.9.dmg",
                            arch:ArchType.arm64,
                        },
                        {
                            type:FileType.DMG,
                            url:"https://github.com/LithiumGit/LithiumGit/releases/download/v1.0.9/LithiumGit-Setup-mac-x64-1.0.9.dmg",
                            arch:ArchType.x64,
                        }
                    ]
                }
            ]
        },
        {
            os:OSType.Linux,
            releases:[
                {
                    version:"1.0.9",
                    isLatest:true,
                    files:[
                        {
                            type:FileType.DEV,
                            url:"https://github.com/LithiumGit/LithiumGit/releases/download/v1.0.9/LithiumGit-Setup-linux-amd64-1.0.9.deb",
                            arch:ArchType.x64,
                        },
                        {
                            type:FileType.AppImage,
                            url:"https://github.com/LithiumGit/LithiumGit/releases/download/v1.0.9/LithiumGit-Setup-linux-x86_64-1.0.9.AppImage",
                            arch:ArchType.x64,
                        },
                    ],                    
                },                
            ],
        }
    ];

    static readonly changeLogs:IChangeLog[]=[
        {
            version:"1.0.9",
            newChanges:[
                {
                    type:"New Feature",
                    description:"Added a built-in editor to directly view file changes.",
                },
                {
                    type:"New Feature",
                    description:"Support for chunk-by-chunk staging and unstaging of changes.",
                },
                {
                    type:"Improvement",
                    description:"Enhanced conflict resolution powered by the new built-in editor.",
                },
                {
                    type:"UI/UX",
                    description:"Refined user interface for a cleaner and better user experience.",
                },
                {
                    type:"Performance",
                    description:"Optimized application speed and responsiveness.",
                },
                {
                    type:"Stability",
                    description:"General bug fixes and stability improvements.",
                },
            ]
        },
        {
            version:"1.0.8",
            newChanges:[
                {
                    type:"Improvement",
                    description:"Enhance user interface for better usability.",
                },
                {
                    type:"Improvement",
                    description:"Improve user experience.",
                },
                {
                    type:"Feature",
                    description:"Show file properties of binary files in diff view.",
                },
                {
                    type:"Feature",
                    description:"Force push from the UI.",
                },
                {
                    type:"Feature",
                    description:"Revert commits from the UI of graph.",
                },
                {
                    type:"Feature",
                    description:"User interface to display app information.",
                },
                {
                    type:"Feature",
                    description:"Show new changes of latest release.",
                },
                {
                    type:"Feature",
                    description:"Deleting repositories from recent list.",
                },
            ]
        }
    ]
}