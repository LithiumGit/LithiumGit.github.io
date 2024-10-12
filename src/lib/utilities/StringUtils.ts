export class StringUtils{
    static getLastPart(str:string){
        if(!str)
            return "";
        return str.split("/").pop();
    }
}