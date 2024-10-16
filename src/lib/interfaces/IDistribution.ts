import { OSType } from "../enums";

export interface IReleaseItem{
    version:string;
    files:IFile[];
}

export interface IDistribution{
    os:OSType;
    releases:IReleaseItem[];
}

export interface IFile{
    type:FileType,
    url:string;
}

export enum FileType{
    EXE,
    DEV,
    AppImage
}