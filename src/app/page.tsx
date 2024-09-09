import { Fragment } from 'react';
import { ExampleCarouselImage, Nav } from './components';
import icon from './images/icon.png';
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';
import { Carousel,CarouselCaption,CarouselItem } from 'react-bootstrap';


export default function Home() {
  return (
    <Fragment>
      <Nav />
      <div className='d-flex align-items-center'>
        <div className='w-25'>
            <h2 className='font-weight-bold' style={{fontSize:'2.5em'}}>No feare, just play with the Git</h2>
        </div>
        <div className='w-75 d-flex justify-content-center'>
            <Carousel className='text-center'>
              <CarouselItem interval={3000}>
                <ExampleCarouselImage text="First slide" src={graphImage.src} />
                <CarouselCaption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem interval={1000}>
                <ExampleCarouselImage text="Second slide" src={changesImage.src} />
                <CarouselCaption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem interval={1000}>
                <ExampleCarouselImage text="Third slide" src={commitsImage.src} />
                <CarouselCaption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem interval={1000}>
                <ExampleCarouselImage text="Third slide" src={stashImage.src} />
                <CarouselCaption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </CarouselCaption>
              </CarouselItem>
            </Carousel>
        </div>
      </div>
    </Fragment>
  );
}