export interface IGitClientItem{
    name:string;
    description:string;
    price:string;    
    os:string;
    imageUrl?:string;
    website:string;
}

type t = { [x: string]: never; };

export interface IMetadataParams{
    params:{};
}