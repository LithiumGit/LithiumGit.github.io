import { Constants } from "../../lib"
import { IMetadataParams } from "../../lib/interfaces";
import { UiUtils } from "../../lib/utilities/UiUtils";
import "../styles/privacy.scss";

export function generateMetadata(args:IMetadataParams){
    args.path = "privacy";
    const data = UiUtils.getCommonHeaderInfo(args);
    return data;
}
export default function Privacy(){
    return (
        <main className="px-2 pt-3" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
            <div className="row g-0">
                <div className="col-md-2" />
                <div className="col-12 col-md-8">
                    <h3>LithiumGit Privacy Policy</h3>
                    <br />
                    <h5>Last Modified: 22 September, 2024</h5>
                    <p className="pt-2">LithiumGit is an open source and <a target="_blank" href="https://github.com/TulshiDas39/LithiumGit/blob/master/LICENSE">MIT</a> licensed software. It is maintained
                        by the developer <a target="_blank" href="https://www.linkedin.com/in/tulshi-das-29b9bb125">Tulshi Chandra Das</a>.
                        LithiumGit don't use or tracks any user information. LithiumGit neither use any third party web service/server 
                        nor store or share any data to that. LithiumGit is totally free and published with no interest in making profit
                        and so LithiumGit does not include any adventisments or promotional informations.
                    </p>
                    <p>
                        LithiumGit is a Git client application and it performs git functionalities through the installed git executable
                        on user computer. Therefore the data transaction in pull/push/fetch/login functions with origin server are secured by git itself.
                    </p>
                    <p>If there is any question related to privacy policy please send mail to <a href="mailto:tulshi.chandra2.das@gmail.com">tulshi.chandra2.das@gmail.com</a>.</p>

                </div>
            </div>
        </main>
    )
}