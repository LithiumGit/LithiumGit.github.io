import { OSType } from "../enums";
import { ArchType, FileType, IDistribution } from "../interfaces";

export class Distributions{
    static readonly list:IDistribution[]=[
        {
            os:OSType.Windows,
            releases:[
                {
                    version:"1.0.4(latest)",
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-win-x64-1.0.4.exe",
                            arch:ArchType.x64,
                        },                                                
                    ]
                },
                {
                    version:"1.0.3",
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-win-x64-1.0.3.exe",
                            arch:ArchType.x64,
                        },                                                
                    ]
                },
                {
                    version:"1.0.2",
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-win-x64-1.0.2.exe",
                            arch:ArchType.x64,
                        },                                                
                    ]
                },
                {
                    version:"1.0.1",
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-win-x64-1.0.1.exe",
                            arch:ArchType.x64,
                        },                                                
                    ]
                },
                {
                    version:"1.0.0",
                    files:[
                        {
                            type:FileType.EXE,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-win-x64-1.0.0.exe",
                            arch:ArchType.arm64,
                        }                        
                    ]
                },                                                
            ]
        },
        {
            os:OSType.Mac,
            releases:[
                {
                    version:"1.0.4(latest)",
                    files:[
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-mac-arm64-1.0.4.dmg",
                            arch:ArchType.arm64,
                        },
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-mac-x64-1.0.4.dmg",
                            arch:ArchType.x64,
                        }
                    ]
                },
                {
                    version:"1.0.3",
                    files:[
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-mac-arm64-1.0.3.dmg",
                            arch:ArchType.arm64,
                        },
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-mac-x64-1.0.3.dmg",
                            arch:ArchType.x64,
                        }
                    ]
                },
                {
                    version:"1.0.2",
                    files:[
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-mac-arm64-1.0.2.dmg",
                            arch:ArchType.arm64,
                        },
                        {
                            type:FileType.DMG,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-mac-x64-1.0.2.dmg",
                            arch:ArchType.x64,
                        }
                    ]
                },
                {
                    version:"1.0.1",
                    files:[{
                        type:FileType.DMG,
                        url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-mac-arm64-1.0.1.dmg",
                        arch:ArchType.arm64,
                    },
                    {
                        type:FileType.DMG,
                        url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.1/LithiumGit-Setup-mac-x64-1.0.1.dmg",
                        arch:ArchType.x64,
                    }
                ]
                },                
                {
                version:"1.0.0",
                files:[{
                    type:FileType.DMG,
                    url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-mac-x64-1.0.0.dmg",
                    arch:ArchType.x64,
                }]
            }]
        },
        {
            os:OSType.Linux,
            releases:[
                {
                    version:"1.0.4(latest)",
                    files:[
                        {
                            type:FileType.DEV,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-linux-amd64-1.0.4.deb",
                            arch:ArchType.x64,
                        },
                        {
                            type:FileType.AppImage,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.4/LithiumGit-Setup-linux-x86_64-1.0.4.AppImage",
                            arch:ArchType.x64,
                        },
                    ],                    
                },
                {
                    version:"1.0.3",
                    files:[
                        {
                            type:FileType.DEV,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-linux-amd64-1.0.3.deb",
                            arch:ArchType.x64,
                        },
                        {
                            type:FileType.AppImage,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.3/LithiumGit-Setup-linux-x86_64-1.0.3.AppImage",
                            arch:ArchType.x64,
                        },
                    ],                    
                },
                {
                    version:"1.0.2",
                    files:[
                        {
                            type:FileType.DEV,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-linux-amd64-1.0.2.deb",
                            arch:ArchType.x64,
                        },
                        {
                            type:FileType.AppImage,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.2/LithiumGit-Setup-linux-x86_64-1.0.2.AppImage",
                            arch:ArchType.x64,
                        },
                    ],                    
                },
                {
                    files:[
                        {
                            type:FileType.DEV,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-amd64-1.0.0.deb",
                            arch:ArchType.x64,
                        },
                        {
                            type:FileType.AppImage,
                            url:"https://github.com/TulshiDas39/LithiumGit/releases/download/v1.0.0/LithiumGit-Setup-linux-x86_64-1.0.0.AppImage",
                            arch:ArchType.x64,
                        },
                    ],
                    version:"1.0.0",
                }
            ],
        }
    ];
}