import React from "react"
import inst0 from '../images/installation/no_step.png';
import inst1 from '../images/installation/step1.png';
import inst2 from '../images/installation/step2.png';
import inst3 from '../images/installation/step3.png';
import inst5 from '../images/installation/step5.png';


export function WinInstallationStepsComponent(){
    return <div className=''>
    <h4>Installation Steps</h4>
    <div className=''>
        <h5>-Download the installer</h5>
        <h5>-Execute the installer after download</h5>
        <div className='pt-3'>
            <img className='step-img' src={inst0.src} alt="step1" />
            <h5>Wait for the installation to complete</h5>
        </div>                
    </div>
</div>
}

export const WinInstallationSteps = React.memo(WinInstallationStepsComponent);