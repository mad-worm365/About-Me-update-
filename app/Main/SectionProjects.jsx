"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import './css/experience.css'
import { ReactLenis } from 'lenis/react'
import { PrevButton, NextButton, usePrevNextButtons } from "../Main/Carousel/EmblaCarouselArrowButtons"

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjects = () => {

  const titleRef = useRef()
  const subtitleRef1 = useRef()
  const subtitleRef2 = useRef()
  const descriptionRef = useRef()
  const subdescriptionRef1 = useRef()
  const subdescriptionRef2 = useRef()
  const lineRef = useRef()
  const carouselWrapperRef = useRef()
  const worksItemRef1 = useRef()
  const worksItemRef2 = useRef()
  const worksItemRef3 = useRef()
  const industryImageRef1 = useRef()
  const industryImageRef2 = useRef()
  const industryImageRef3 = useRef()
  const industryImageRef4 = useRef()
  const subheadlineBoxRef1 = useRef()
  const subheadlineBoxRef2 = useRef()
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

    // description text animation
    gsap.to(descriptionRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.6 })

    // line animation
    gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, delay: 0.5 })

    // work carousel items animation
    gsap.to(worksItemRef1.current, { delay: 0.4, opacity: 0, duration: 1, ease: 'power1' });

    // industry images
    gsap.fromTo(industryImageRef1.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef1.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef2.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef2.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef3.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef3.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef4.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef4.current, start: "top bottom", end: "center center", scrub: true } });

    // case studies wrapper animation
    gsap.to(carouselWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%" } });

    // subheadline box animation
    gsap.to(subheadlineBoxRef1.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef1.current, start: "top 95%" } });
    gsap.to(subheadlineBoxRef2.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef2.current, start: "top 95%" } });

    // subtitle text animation
    const subtitleSplit1 = new SplitText(subtitleRef1.current, { type: "words" });
    const subtitleSplit2 = new SplitText(subtitleRef2.current, { type: "words" });
    gsap.fromTo(subtitleSplit1.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%" } });
    gsap.fromTo(subtitleSplit2.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef2.current, start: "top 95%" } });

    // description text animation
    const subdescriptionSplit1 = new SplitText(subdescriptionRef1.current, { type: "words" });
    const subdescriptionSplit2 = new SplitText(subdescriptionRef2.current, { type: "words" });
    gsap.fromTo(subdescriptionSplit1.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef1.current, start: "top 95%" } });
    gsap.fromTo(subdescriptionSplit2.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef2.current, start: "top 95%" } });

  }, [])

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  // EMBLA CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ dragFree: true });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);

  const {
    prevBtnDisabled: prevBtnDisabled1,
    nextBtnDisabled: nextBtnDisabled1,
    onPrevButtonClick: onPrevButtonClick1,
    onNextButtonClick: onNextButtonClick1,
  } = usePrevNextButtons(emblaApi);

  const {
    prevBtnDisabled: prevBtnDisabled2,
    nextBtnDisabled: nextBtnDisabled2,
    onPrevButtonClick: onPrevButtonClick2,
    onNextButtonClick: onNextButtonClick2,
  } = usePrevNextButtons(emblaApi2);

  const onScroll = useCallback((emblaApi, setProgress) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleScroll = () => onScroll(emblaApi, setScrollProgress);
    handleScroll();
    emblaApi.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);

    return () => emblaApi.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi, onScroll]);

  useEffect(() => {
    if (!emblaApi2) return;

    const handleScroll = () => onScroll(emblaApi2, setScrollProgress2);
    handleScroll();
    emblaApi2.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);

    return () => emblaApi2.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi2, onScroll]);


  return (
    <ReactLenis root>
      <section className="experiences">
        <div className="experiences-content" >
          <div className="experiences-content-top">
            <div className="experiences-content-top-text">
              <div className="experiences-content-textbox">
                <div className="titlebox">
                  {/* <div className="subpage-titlebox-gradient" /> */}
                  <h1 className="headline white" ref={titleRef} >My Recent Projects</h1>
                </div>
                <p className="description grey opacity-blur" ref={descriptionRef} >These are my previous projects. (Web || Shopify)</p>
              </div>
              <div className="experiences-content-top-divider" ref={lineRef} />
            </div>
            <div className="experiences-carousel-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <div className="experiences-carousel-wrapper-overlay" ref={worksItemRef1} ></div>
              <div className="experiences-carousel" ref={emblaRef2} >
                <div className="experiences-carousel-row">
                  <div className="experiences-item-padding" />
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >DOCTORIDE</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Next.js</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TailwindCss</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TypeScript</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Material-UI</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/heave.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="Heavecorp project" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >THE COFFEE JACKET</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Shopify Theme</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Liquid</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >CSS</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >JavaScript</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/essentia.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >BIGBRO.AI</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Nuxt.js</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TailwindCss</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/kinimatic.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >PORTFOLIO</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Next.js</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TailwindCss</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/peak.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >

                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >MOSS DEKK</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Next.js</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TailwindCss</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >JavaScript</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/vitalenta.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  <div className="experiences-item" >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >HENDY</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >React.js</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Bootstrap</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Ant Design</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TypeScript</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/rev.webp" className="experiences-item-content-image" width={750} height={750} unoptimized loading="lazy" alt="" />
                    </div>
                    <div className="experiences-item-border" />
                  </div>
                  {/* <div className="experiences-item" >
                    <div className="experiences-item-last-content" >
                      <p className="description white" >Be our next client in this section!</p>
                      <h2 className="subheadline white" >Let us get you a coffee.</h2>
                      <div className="contact-button-wrapper">
                        <button className="contact-button-white" >
                          <span>
                            <span className="contact-button-container-white">
                              <span className="contact-button-primary-white"></span>
                              <span className="contact-button-complimentary-white"></span>
                            </span>
                          </span>
                          <span className="description black" >Book a call</span>
                        </button>
                      </div>
                    </div>
                    <div className="experiences-item-border" />
                  </div> */}
                  <div className="experiences-item-padding" />
                </div>
              </div>
              <div className="casestudies-carousel-bottom">
                <div className="casestudies-carousel-bottom-buttons">
                  <PrevButton onClick={onPrevButtonClick2} disabled={prevBtnDisabled2} />
                  <NextButton onClick={onNextButtonClick2} disabled={nextBtnDisabled2} />
                </div>
                <div className="embla__progress">
                  <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress2}%,0px,0px)` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};