import { OSType } from "../enums";

export interface IReleaseItem{
    version:string;
    url:string;
}

export interface IDistribution{
    os:OSType;
    releases:IReleaseItem[];
}