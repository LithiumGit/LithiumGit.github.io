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
    type:FileType;
    url:string;
    arch:ArchType;
}

export enum FileType{
    EXE,
    DEV,
    AppImage,
    DMG
}

export enum ArchType{
    x64,
    x86,
    arm64
}