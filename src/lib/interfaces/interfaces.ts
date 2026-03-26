export interface IGitClientItem{
    name:string;
    description:string;
    price:string;    
    os:string;
    imageUrl?:string;
    website:string;
    keyFeatures?:string[];
    firstReleaseYear?:number;
    iconWidth?:number;
    bestFor?:string;
    pros?:string[];
    cons?:string[];
}

type t = { [x: string]: never; };

export interface IMetadataParams{
    params:{};
}