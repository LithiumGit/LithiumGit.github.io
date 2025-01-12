import React from "react"
import inst1 from '../images/installation/step1.png';
import inst2 from '../images/installation/step2.png';
import inst3 from '../images/installation/step3.png';
import inst5 from '../images/installation/step5.png';


export function WinInstallationStepsComponent(){
    return <div className='col-12 col-md-6 ps-2'>
    <h4>Installation Steps</h4>
    <div className=''>
        <h5>-Download the installer</h5>
        <h5>-Execute the installer after download</h5>
        <div className='pt-3'>
            <img className='step-img' src={inst1.src} alt="step1" />
            <h5>-Accept the agreement</h5>
        </div>
        <div className='pt-3'>
            <img className='step-img' src={inst2.src} alt="step2" />
            <h5>-Choose the user. The default selected option(Only for me) is recommended.</h5>
        </div>
        <div className='pt-3'>
            <img className='step-img' src={inst3.src} alt="step2" />
            <h5>-Select the destination folder, click install and wait some for a moment.</h5>
        </div><div className='pt-3'>
            <img className='step-img' src={inst5.src} alt="step2" />
            <h5>-Click Finish. Installation completed.</h5>
        </div>
        <p className='pt-3'>NB:*Antivirus may prevent the installation process as the standard code signature has been added under open source license to LithiumGit. In this case you have to download and install it forcely.</p>
    </div>
</div>
}

export const WinInstallationSteps = React.memo(WinInstallationStepsComponent);