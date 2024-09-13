import { Fragment } from 'react';
import { ExampleCarouselImage, Nav } from './components';
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';
import { Carousel,CarouselCaption,CarouselItem } from 'react-bootstrap';
import './styles/home.scss';
import { FaWindows } from 'react-icons/fa';
import { Constants } from '../lib';


export default function Home() {
  return (
    <Fragment>
      <Nav />
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
    </Fragment>
  );
}
