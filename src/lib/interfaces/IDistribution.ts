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

export const ArchTypeNames:Record<ArchType,string> = {
    [ArchType.x64]:"x64",
    [ArchType.x86]:"x86",
    [ArchType.arm64]:"arm64"
}