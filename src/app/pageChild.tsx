"use client"

import { Fragment, useEffect, useMemo } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { FaWindows, FaApple, FaCodeBranch, FaLayerGroup, FaList, FaArchive } from "react-icons/fa";
import { FaDebian } from "react-icons/fa6";
import { useMultiState, OSType, Distributions, Routes } from "../lib";
import { FileType, ArchType } from "../lib/interfaces";
import { UiUtils } from "../lib/utilities/UiUtils";
import { ExampleCarouselImage } from "./components";
import graphImage from './images/graph.png';
import changesImage from './images/changes.png';
import commitsImage from './images/commits.png';
import stashImage from './images/stashes.png';

interface IState{
    osType:OSType;
}

const features = [
  {
    icon: <FaCodeBranch size={28} />,
    title: "Interactive Graph",
    desc: "Visualize your full commit history as an interactive, color-coded graph. Merge, rebase, cherry-pick, and branch — all from one view.",
  },
  {
    icon: <FaLayerGroup size={28} />,
    title: "Local Changes",
    desc: "Stage files, review diffs, and craft your commits with a clean side-by-side diff viewer. No command-line needed.",
  },
  {
    icon: <FaList size={28} />,
    title: "Commit History",
    desc: "Browse, search, and filter your full commit history. Inspect any commit's changes at a glance.",
  },
  {
    icon: <FaArchive size={28} />,
    title: "Stash Management",
    desc: "Save, apply, pop, and delete stashes effortlessly. Keep your working tree clean without losing progress.",
  },
];

const glanceItems = [
  {
    src: graphImage.src,
    alt: "LithiumGit interactive graph view showing Git commit history",
    title: "Interactive Graph",
    desc: "The interactive graph gives you a full overview of the change history. Perform merges, checkouts, rebases, cherry-picks, and branch creation directly from the graph view.",
  },
  {
    src: changesImage.src,
    alt: "LithiumGit local changes view for staging files and committing",
    title: "Local Changes",
    desc: "Stage individual files or hunks, review your diffs side-by-side, and write meaningful commit messages — all without touching the terminal.",
  },
  {
    src: commitsImage.src,
    alt: "LithiumGit commits list view with search and filter",
    title: "Commit History",
    desc: "A searchable, filterable commit list lets you quickly find any change in your project's history. Inspect file diffs per commit with one click.",
  },
  {
    src: stashImage.src,
    alt: "LithiumGit stash management view - pop, apply and delete stashes",
    title: "Stash Management",
    desc: "View all stashes at a glance. Pop, apply, or delete them with a single action — keeping your workflow fast and clean.",
  },
];

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

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__text">
          <h1 className="home-hero__headline">No fear,<br />just play with Git.</h1>
          <p className="home-hero__sub">
            LithiumGit is a free, open-source Git GUI for Windows, macOS, and Linux.
            Powerful enough for pros, simple enough for beginners.
          </p>
          <div className="home-hero__cta">
            <a href={latestFile.url} className="home-dl-btn">
              {getOsIcon()}
              <span>Download {latestVersion}</span>
            </a>
            <a href={Routes.Download} className="home-dl-other">
              Also available for {remainingOses.join(" and ")}
            </a>
          </div>
        </div>
        <div className="home-hero__carousel">
          <Carousel className="w-100">
            <CarouselItem interval={3000}>
              <ExampleCarouselImage text="LithiumGit interactive graph view - visualize Git commit history" src={graphImage.src} />
            </CarouselItem>
            <CarouselItem interval={3000}>
              <ExampleCarouselImage text="LithiumGit local changes view - stage files and write commits" src={changesImage.src} />
            </CarouselItem>
            <CarouselItem interval={3000}>
              <ExampleCarouselImage text="LithiumGit commits list with search and filter" src={commitsImage.src} />
            </CarouselItem>
            <CarouselItem interval={3000}>
              <ExampleCarouselImage text="LithiumGit stash management view" src={stashImage.src} />
            </CarouselItem>
          </Carousel>
        </div>
      </section>

      {/* ── Feature cards ────────────────────────────────────────── */}
      <section className="home-features">
        <h2 className="home-section-title">Everything you need, nothing you don't</h2>
        <p className="home-section-sub">A full Git workflow — visually.</p>
        <div className="home-features__grid">
          {features.map((f) => (
            <div key={f.title} className="home-feature-card">
              <div className="home-feature-card__icon">{f.icon}</div>
              <h3 className="home-feature-card__title">{f.title}</h3>
              <p className="home-feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── At a glance ──────────────────────────────────────────── */}
      <section className="home-glance">
        <h2 className="home-section-title">LithiumGit at a glance</h2>
        <p className="home-section-sub">See the features that make your Git workflow smoother.</p>

        {glanceItems.map((item, i) => (
          <div key={item.title} className={`home-glance__row${i % 2 === 1 ? ' home-glance__row--reverse' : ''}`}>
            <div className="home-glance__img-wrap">
              <img src={item.src} alt={item.alt} className="home-glance__img" />
            </div>
            <div className="home-glance__body">
              <h3 className="home-glance__title">{item.title}</h3>
              <p className="home-glance__desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────── */}
      <section className="home-footer-cta">
        <p>
          Want to see every feature?{" "}
          <a href={Routes.Docs} className="home-footer-cta__link">Browse the documentation →</a>
        </p>
      </section>

    </Fragment>
}