import { ExampleCarouselImage } from './components';
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';
import { Carousel,CarouselItem } from 'react-bootstrap';
import './styles/home.scss';
import { FaApple, FaWindows } from 'react-icons/fa';
import { Distributions, OSType, Routes } from '../lib';
import graphIcon from './images/graph.png';
import changesIcon from './images/changes.png';
import commitsIcon from './images/commits.png';
import stashesIcon from './images/stashes.png';
import { UiUtils } from '../lib/utilities/UiUtils';
import { useMemo } from 'react';
import { ArchType, FileType } from '../lib/interfaces';
import { FaDebian } from 'react-icons/fa6';

export default function Home() {
  const osType = useMemo(()=>{
    if(typeof window === 'undefined')
      return OSType.Windows;
    console.log("checking os platform");
    return UiUtils.getOSPlatform();
  },[])

  const latestRelease = Distributions.list.find(_ => _.os === osType)!.releases[0];
  const latestFile = useMemo(()=>{
    if(osType === OSType.Windows){
      return latestRelease.files.find(_=>_.type  === FileType.EXE && _.arch === ArchType.x64)!;
    }else if(osType === OSType.Mac){
      return latestRelease.files.find(_=>_.type  === FileType.DMG && _.arch === ArchType.arm64)!;
    }
    else
      return latestRelease.files.find(_=>_.type  === FileType.DEV && _.arch === ArchType.x64)!;
  },[osType])
  const latestVersion = latestRelease.version;

  const osIcon = useMemo(()=>{
    if(osType === OSType.Windows)
        return <FaWindows />
    if(osType === OSType.Mac)
        return <FaApple />
    return <FaDebian />
  },[osType])

  return (
      <main>
        <div className='row g-0 align-items-center'>
          <div className='col-sm-12 col-md-3 text-center pb-2'>
              <h2 className='font-weight-bold' style={{fontSize:'2.5em'}}>No feare, just play with the Git</h2>
              <p className='pt-3'>
                LithiumGit is a Git client application which make the use of the git activities 
                at most of your favour. And LithiumGit is free.
              </p>
              <div className="d-flex flex-column align-items-center justify-content-center pt-3">
                <div className='d-flex bg-brand align-items-center px-3 py-2 hover'>
                  <a href={latestFile.url} className='text-light'>
                    {osIcon} <span className='ps-2'>Download LithiumGit-{latestVersion}</span>
                  </a>
                </div>
                <a href={Routes.Download} className=''>
                  <span className='small underline text-secondary'>Available for macos and linux</span>
                </a>                
              </div>
          </div>
          <div className='col-sm-12 col-md-9 d-flex justify-content-center'>
              <Carousel className='text-center w-100'>
                <CarouselItem interval={3000} className='w-100 text-center'>
                  <ExampleCarouselImage text="First slide" src={graphImage.src} />
                  {/* <CarouselCaption className='text-danger'>
                    <h3>Interactive Graph</h3>
                    <p>Do your most regular git actions without hassle.</p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000} className='w-100 text-center'>
                  <ExampleCarouselImage text="Second slide" src={changesImage.src} />
                  {/* <CarouselCaption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000} className='w-100 text-center'>
                  <ExampleCarouselImage text="Third slide" src={commitsImage.src} />
                  {/* <CarouselCaption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000} className='w-100 text-center'>
                  <ExampleCarouselImage text="Third slide" src={stashImage.src} />
                  {/* <CarouselCaption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </CarouselCaption> */}
                </CarouselItem>
              </Carousel>
          </div>
        </div>
        <div className='pt-5 w-100'>
          <div className='w-100 text-center'>
            <h3>LithiumGit at a glance</h3>
            <div className='pt-2'>
              <img src={graphIcon.src} className='w-75' style={{height:'auto'}} alt="graph icon" />
            </div>
            <div className='d-flex justify-content-center'>
              <p className='w-75'>
                The interactive graph allow to view the overview of overall state of the change history.
                Viewing change details of a specific commit,merge, checkout, rebase, cherry-pick, creating branch etc. regular git actions
                can be performed from this view.
              </p>
            </div>

            <div className='py-5' />

            <div className='pt-2'>
              <img src={changesIcon.src} className='w-75' style={{height:'auto'}} alt="graph icon" />
            </div>
            <div className='d-flex justify-content-center'>
              <p className='w-75'>
                Making a commit and viewing the local changes.
              </p>
            </div>

            <div className='py-5' />

            <div className='pt-2'>
              <img src={commitsIcon.src} className='w-75' style={{height:'auto'}} alt="graph icon" />
            </div>
            <div className='d-flex justify-content-center'>
              <p className='w-75'>
                Commit list with search and filter. 
              </p>
            </div>

            <div className='py-5' />

            <div className='pt-2'>
              <img src={stashesIcon.src} className='w-75' style={{height:'auto'}} alt="graph icon" />
            </div>
            <div className='d-flex justify-content-center'>
              <p className='w-75'>
                Stash list with stash functionalities(pop,apply, delete stash).
              </p>
            </div>
            
            <div className='py-5' />
            
          </div>
        </div>
      </main>
  );
}
