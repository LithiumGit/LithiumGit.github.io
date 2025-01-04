import { OSType } from "../enums";

export class UiUtils{
    static getOSPlatform() {
        //@ts-ignore
        const platform = window.navigator.userAgentData ? window.navigator.userAgentData.platform : window.navigator.platform;;
    
        if (/Mac/i.test(platform)) {
            return OSType.Mac;
        }
        else if (/Win/i.test(platform)) {
            return OSType.Mac;
        }
        return OSType.Linux;        
    }    
}