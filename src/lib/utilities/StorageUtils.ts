import { EnumTheme, StorageKey } from "../enums";

export class StorageUtils{
    static setValue(key:StorageKey,value:any){
        if((typeof localStorage) !== 'undefined'){
            localStorage.setItem(key,value);
        }
    }
    static getValue(key:StorageKey){
        if((typeof localStorage) === 'undefined')
            return null;
        return localStorage.getItem(key);
    }

    static getTheme(){
        const theme = StorageUtils.getValue(StorageKey.Theme) || EnumTheme.Dark;
        return theme as EnumTheme;
    }

    static setTheme(value:EnumTheme){
        StorageUtils.setValue(StorageKey.Theme,value);
    }
}