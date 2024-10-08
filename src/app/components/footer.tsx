import { Constants, Routes } from "../../lib";

export function Footer(){
    return (
        <footer style={{height:Constants.footerHeight}} className="w-100 text-center text-nowrap overflow-auto text-slight bg-brand py-1">
            <span className="px-2">&copy;2021-Present LithiumGit Contributors.</span>
            <a href={Routes.Privacy} className="underline px-2 hover">Privacy Policy</a>
            <a href={Routes.Terms} className="underline px-2 hover">Terms of Use</a>
        </footer>
    )
    

}