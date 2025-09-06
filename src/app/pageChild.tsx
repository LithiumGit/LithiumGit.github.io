"use client"

import { Fragment, useEffect, useMemo } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { FaWindows, FaApple } from "react-icons/fa";
import { FaDebian } from "react-icons/fa6";
import { useMultiState, OSType, Distributions, Routes } from "../lib";
import { FileType, ArchType } from "../lib/interfaces";
import { UiUtils } from "../lib/utilities/UiUtils";
import { ExampleCarouselImage } from "./components";
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';
import graphIcon from './images/graph.png';
import changesIcon from './images/changes.png';
import commitsIcon from './images/commits.png';
import stashesIcon from './images/stashes.png';

interface IState{
    osType:OSType;
}

export function PageChild(){
    const [state,setState] = useMultiState<IState>({osType:OSType.Windows});
  useEffect(()=>{
    setState({osType:UiUtils.getOSPlatform()});
  },[])

  const remainingOses = useMemo(()=>{
    const maps:{os:OSType,name:string}[] = [
      {os:OSType.Windows,name:'Windows'},
      {os:OSType.Mac,name:'MacOS'},
      {os:OSType.Linux,name:'Linux'}
    ];
    return maps.filter(_=>_.os !== state.osType).map(_=>_.name);
  },[state.osType])

  const latestRelease = Distributions.list.find(_ => _.os === state.osType)!.releases[0];
  const latestFile = useMemo(()=>{
    if(state.osType === OSType.Windows){
      return latestRelease.files.find(_=>_.type  === FileType.EXE && _.arch === ArchType.x64)!;
    }else if(state.osType === OSType.Mac){
      return latestRelease.files.find(_=>_.type  === FileType.DMG && _.arch === ArchType.arm64)!;
    }
    else
      return latestRelease.files.find(_=>_.type  === FileType.DEV && _.arch === ArchType.x64)!;
  },[state.osType])
  
  const latestVersion = latestRelease.version;

  const getOsIcon = ()=>{
    if(state.osType === OSType.Windows)
        return <FaWindows />
    if(state.osType === OSType.Mac)
        return <FaApple />
    return <FaDebian />
  }
  
    return <Fragment>
        <div className='row g-0 align-items-center'>
          <div className='col-sm-12 col-md-3 text-center pb-2'>
              <h2 className='font-weight-bold' style={{fontSize:'2.5em'}}>No fear, just play with Git</h2>
              <p className='pt-3'>
                LithiumGit is a Git client application that optimizes Git activities to your advantage. And LithiumGit is free.
              </p>
              <div className="d-flex flex-column align-items-center justify-content-center pt-3">
                <div className='d-flex bg-brand align-items-center px-3 py-2 hover'>
                  <a href={latestFile.url} className='text-light'>
                    {getOsIcon()} <span className='ps-2'>Download LithiumGit-{latestVersion}</span>
                  </a>
                </div>
                <a href={Routes.Download} className=''>
                  <span className='small underline text-secondary'>Available for {remainingOses.join(" and ")}</span>
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
                The interactive graph allows you to view an overview of the change history.
                View change details of a specific commit, merge, checkout, rebase, cherry-pick, or creating a branch. Regular Git actions can also be performed from this view.
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

            <div className='d-flex justify-content-center py-5'>
              <p className='w-75'>
                To see more features, please check the <a href={Routes.Docs} className='underline'>documentation page</a>.
              </p>
            </div>
            
            <div className='py-5' />
            
          </div>
        </div>
    </Fragment>
}