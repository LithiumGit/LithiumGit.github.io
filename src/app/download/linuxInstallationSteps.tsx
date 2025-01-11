import React from "react"
import inst1 from '../images/installation/step1.png';
import inst2 from '../images/installation/step2.png';
import inst3 from '../images/installation/step3.png';
import inst5 from '../images/installation/step5.png';


export function LinuxInstallationStepsComponent(){
    return <div className='col-12 col-md-6 ps-2'>
    <h4>Installation Steps</h4>
    <div className=''>
        <h5>-Download the installation package(.deb)</h5>
        <h5>-Open terminal in downloaded path</h5>
        <h5>-Run the command: sudo dpkg -i &lt;package&gt; </h5>
    </div>
</div>
}

export const LinuxInstallationSteps = React.memo(LinuxInstallationStepsComponent);