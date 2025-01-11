import React from "react"
import inst1 from '../images/installation/step1_mac.png';


export function MacInstallationStepsComponent(){
    return <div className='col-12 col-md-6 ps-2'>
    <h4>Installation Steps</h4>
    <div className=''>
        <h5>-Download the package(.dmg)</h5>
        <h5>-Execute the package after download</h5>
        <div className='pt-3'>
            <img className='step-img' src={inst1.src} alt="step1" />
            <h5>-Drag and drop to application</h5>
        </div>        
    </div>
</div>
}

export const MacInstallationSteps = React.memo(MacInstallationStepsComponent);