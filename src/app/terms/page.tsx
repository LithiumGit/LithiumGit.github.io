import { Constants, Routes } from "../../lib";

export default function TermsOfService(){
    return (
        <main className="px-5 pt-3 d-flex justify-content-center" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
            <div className="px-5" style={{maxWidth:700}}>
                <h3>Terms of use of LithiumGit</h3>
                <p className="pt-2">
                    LithiumGit is allowed to use for users globally. Any misuse of the software or using source code to build maleware
                    or virus is strictly prohibited. LithiumGit is free and open source and before using it the user
                    makes sure that he/she trusts the <a href="https://github.com/TulshiDas39/LithiumGit/blob/master/LICENSE">License</a> and <a href={Routes.Privacy} className="text-primary">privacy policy</a> of LithiumGit.
                </p>
                <p>
                    LithiumGit is being contiously developed and new features integratation and bug fixing are happening.
                    To submit any bug, feature request or any feedback please create an issue to LitiumGit <a className="text-primary" target="_blank" href="https://github.com/TulshiDas39/LithiumGit">repository</a>.
                </p>
                
            </div>
            
        </main>
    )
}