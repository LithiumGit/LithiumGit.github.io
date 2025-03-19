export interface IGitClientItem{
    name:string;
    description:string;
    price:string;    
    os:string;
    imageUrl?:string;
    website:string;
}

export interface IMetadataParams{
    params:{};
    path:string;
}