import { HtmlIds } from "../../lib/constants/HtmlIds";
import step1 from '../images/open/step1.png';
import step2 from '../images/open/step2.png';
import step3 from '../images/open/step3.png';
import step4 from '../images/open/step4.png';

export function GetStarted(){
    const imgWidth = "70%";

    return <div id={HtmlIds.get_started}>
        <h4>Getting started</h4>
        <p>To open an existing git project in LithiumGit follow the steps below:</p>

        <div className="py-2">
            <img src={step1.src} className="h-auto" alt="step-1" style={{width:imgWidth}} />
            <p>-Select "Open" tab. Click "Browse".</p>
        </div>
        <div className="py-2">
            <img src={step2.src} className="h-auto" alt="step-2" style={{width:imgWidth}} />
            <p>-Navigate to the project folder and Select.</p>
        </div>
        <div className="py-2">
            <img src={step3.src} className="h-auto" alt="step-3" style={{width:imgWidth}} />
            <p>-Click "Open".</p>
        </div>
        <div className="py-2">
            <img src={step4.src} className="h-auto" alt="step-4" style={{width:imgWidth}} />
            <p>-Project will be opened and graph view will be displayed.</p>
        </div>
    </div>
}