import { Fragment } from 'react';
import { ExampleCarouselImage } from './components';
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';
import { Carousel,CarouselItem } from 'react-bootstrap';
import './styles/home.scss';
import { FaWindows } from 'react-icons/fa';
import { Constants } from '../lib';
import graphIcon from './images/graph.png';
import changesIcon from './images/changes.png';
import commitsIcon from './images/commits.png';
import stashesIcon from './images/stashes.png';

export default function Home() {
  return (
    <Fragment>
      <main>
        <div className='d-flex align-items-center'>
          <div className='w-25 text-center'>
              <h2 className='font-weight-bold' style={{fontSize:'2.5em'}}>No feare, just play with the Git</h2>
              <p className='pt-3'>
                LithiumGit is a Git client application which make the use of the git activities 
                at most of your favour. And LithiumGit is free.
              </p>
              <div className="d-flex align-items-center justify-content-center pt-3">
                <div className='d-flex bg-brand align-items-center px-3 py-2 hover'>
                  <a href={Constants.winInstallerUrl} className='text-light'>
                    <FaWindows /> <span className='ps-2'>Download LithiumGit-{Constants.latestVersion}</span>
                  </a>                
                </div>
                
              </div>
          </div>
          <div className='w-75 d-flex justify-content-center'>
              <Carousel className='text-center'>
                <CarouselItem interval={3000}>
                  <ExampleCarouselImage text="First slide" src={graphImage.src} />
                  {/* <CarouselCaption className='text-danger'>
                    <h3>Interactive Graph</h3>
                    <p>Do your most regular git actions without hassle.</p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000}>
                  <ExampleCarouselImage text="Second slide" src={changesImage.src} />
                  {/* <CarouselCaption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000}>
                  <ExampleCarouselImage text="Third slide" src={commitsImage.src} />
                  {/* <CarouselCaption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </CarouselCaption> */}
                </CarouselItem>
                <CarouselItem interval={3000}>
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
    </Fragment>
  );
}
