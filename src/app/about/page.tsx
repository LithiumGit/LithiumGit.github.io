import { FaLinkedin } from 'react-icons/fa';
import faiz from '../images/contributors/faiz.jpg';
import zahid from '../images/contributors/zahid.jpg';
import shafi from '../images/contributors/shafi.jpg';
import { FaLocationPin } from 'react-icons/fa6';
import { Constants } from '../../lib';
import  "../styles/about.scss";
import { UiUtils } from '../../lib/utilities/UiUtils';

export function generateMetadata(){
    const data = UiUtils.getCommonHeaderInfo();
    return data;
}

export default function About(){
    const imageWidth = 200;
    const imageContainerWidth = imageWidth + 50;
    return (
        <main className="pt-3" style={{minHeight:`calc(100vh - ${Constants.navHeight} - ${Constants.footerHeight})`}}>
            <div className='row g-0 px-2'>
                <div className='col-md-3'></div>
                <div className="col-12 col-md-6">
                    <h3>About LithiumGit</h3>
                    <p>LithiumGit is a Git client or GUI application which provide a user friendly interface 
                        to perform git related functionalities graphically.
                    </p>
                    <p>LithiumGit is origin independent application. That means it can be used for any git project having any origin platform such as <a className="text-primary" target="_blank" href="https://github.com">Github</a>, <a className="text-primary" target="_blank" href="https://about.gitlab.com">GitLab</a>, <a className="text-primary" target="_blank" href="https://bitbucket.org">BitBucket</a>, 
                    <a className="text-primary" target="_blank" href="https://gerrithub.io">Gerrit</a> or others.
                    The most useful feature of LithiumGit which a user may find is the graph view. In graph view the overall state
                    of change history can be viewed. From the graph view user can easily view the changes of any commit, do merge, rebase, cherry-pick, create branch and more other functionalities.
                    </p>
                    <p>LithiumGit does not execute any git process itself. It uses the installed git on user computer to perform the tasks.
                        So git installation is required to use LithiumGit.
                    </p>
                    <p>Registration or login is not required to use LithiumGit. It is open source and free. The <a className="text-primary" target="_blank" href="https://github.com/TulshiDas39/LithiumGit">source code</a> is available at Github and contribution is welcomed.</p>
                    <br />

                    <h3>How to Contribute</h3>
                    <p>To integrate any new changes or bug fixing to LithiumGit please submit a <a className="text-primary" href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request">pull request</a> to Github <a className="text-primary" target="_blank" href="https://github.com/TulshiDas39/LithiumGit">repository</a>.</p>

                    <br />
                    <h3>Background</h3>
                    <p>The author of LithiumGit started development this project at jun, 2021 for personal use.
                        By continuous development it has become a real life application and published for all as open source.
                    </p>
                    <br />                    

                </div>
                <div className='col-md-3'></div>
            </div>
            
            <div className='row g-0 px-2'>
                <div className='col-md-3'/>
                <div className='col-12 col-md-6'>
                    <h3>Contributors</h3>
                    <p>Thanks to all contributors for the great support.</p>
                </div>
            </div>
            
            <div className="row px-2 g-0 align-items-stretch justify-content-center py-5">
                <div className='col-md-1 col-lg-2'/>
                <div className='col-12 col-md-10 col-lg-8 d-flex flex-wrap align-items-stretch justify-content-around'>
                    <div className='d-flex flex-column align-items-center py-2' style={{width:imageContainerWidth}}>
                        <div className="border rounded-circle overflow-hidden" style={{width:imageWidth,height:imageWidth}}>
                            <img src={faiz.src} style={{width:imageWidth,height:'auto'}} />
                        </div>
                        <p>
                            Faiz Ahmed, QA contributor <a target='_blank' href="https://www.linkedin.com/in/foyez-ahmed-rasel"><FaLinkedin /></a>
                        </p>
                        <p><FaLocationPin /> Dhaka, Bangladesh</p>
                    </div>
                    <div className='d-flex flex-column align-items-center py-2' style={{width:imageContainerWidth}}>
                        <div className="border rounded-circle overflow-hidden" style={{width:imageWidth,height:imageWidth}}>
                            <img src={zahid.src} style={{width:imageWidth,height:'auto'}} />
                        </div>
                        <p>
                            Zahid Hasan, Supporter/fan <a target='_blank' href="https://www.linkedin.com/in/zhdruvo"><FaLinkedin /></a>
                        </p>
                        <p><FaLocationPin /> Dhaka, Bangladesh</p>

                    </div>
                    <div className='d-flex flex-column align-items-center py-2' style={{width:imageContainerWidth}}>
                        <div className="border rounded-circle overflow-hidden" style={{width:imageWidth,height:imageWidth}}>
                            <img src={shafi.src} style={{width:imageWidth,height:'auto'}} />
                        </div>
                        <p>
                            Shafi Hossain, QA contributor <a target='_blank' href="https://www.linkedin.com/in/shafi-hossain"><FaLinkedin /></a>
                        </p>
                        <p><FaLocationPin /> Dhaka, Bangladesh</p>

                    </div>
                </div>
                <div className='col-md-1 col-lg-2' />
            </div>
            
        </main>
    )
}