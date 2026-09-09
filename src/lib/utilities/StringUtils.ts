export class StringUtils{
    static getLastPart(str:string){
        if(!str)
            return "";
        return str.split("/").pop();
    }

    static getVersionLabel(version:string,isLatest?:boolean){
        if(!version)
            return "";
        return isLatest? `${version}(latest)`:version;
    }
}