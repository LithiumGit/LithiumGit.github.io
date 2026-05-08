import { HtmlIds } from "../../lib/constants/HtmlIds";
import step1 from '../images/open/step1.png';
import step2 from '../images/open/step2.png';
import step3 from '../images/open/step3.png';
import step4 from '../images/open/step4.png';

export function GetStarted(){
    const imgWidth = "100%";

    return <div id={HtmlIds.get_started}>
        <h4>Getting started</h4>
        <div className="docs-note">
            Please make sure that Git is installed on your system. You can download it from{' '}
            <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="text-primary">git-scm.com/downloads</a>.
        </div>
        <p>To open an existing git project in LithiumGit follow the steps below:</p>

        <div className="docs-step">
            <div className="step-number">1</div>
            <div className="step-content">
                <p>Select the <strong>Open</strong> tab and click <strong>Browse</strong>.</p>
                <img src={step1.src} className="h-auto" alt="Step 1 — select Open tab" style={{width:imgWidth}} />
            </div>
        </div>
        <div className="docs-step">
            <div className="step-number">2</div>
            <div className="step-content">
                <p>Navigate to the project folder and select it.</p>
                <img src={step2.src} className="h-auto" alt="Step 2 — navigate to folder" style={{width:imgWidth}} />
            </div>
        </div>
        <div className="docs-step">
            <div className="step-number">3</div>
            <div className="step-content">
                <p>Click <strong>Open</strong>.</p>
                <img src={step3.src} className="h-auto" alt="Step 3 — click Open" style={{width:imgWidth}} />
            </div>
        </div>
        <div className="docs-step">
            <div className="step-number">4</div>
            <div className="step-content">
                <p>The project opens and the graph view is displayed.</p>
                <img src={step4.src} className="h-auto" alt="Step 4 — graph view" style={{width:imgWidth}} />
            </div>
        </div>
    </div>
}