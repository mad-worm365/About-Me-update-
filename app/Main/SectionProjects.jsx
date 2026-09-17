"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import './css/experience.css'
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
  const subheadlineBoxRef1 = useRef()
  const subheadlineBoxRef2 = useRef()

  useEffect(() => {

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

    // description text animation
    gsap.to(descriptionRef.current, { opacity: 1, duration: 1, delay: 0.6 })

    // line animation
    gsap.fromTo(lineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 })

    // work carousel items animation
    gsap.to(worksItemRef1.current, { delay: 0.4, opacity: 0, duration: 1, ease: 'power1' });

    // case studies wrapper animation
    gsap.to(carouselWrapperRef.current, { opacity: 1, duration: 1, ease: 'power1', scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%", once: true } });

    // subtitle text animation
    if (subtitleRef1.current) {
      const subtitleSplit1 = new SplitText(subtitleRef1.current, { type: "words" });
      gsap.fromTo(subtitleSplit1.words, { opacity: 0, yPercent: 50 }, { opacity: 1, yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%", once: true } });
    }
    if (subtitleRef2.current) {
      const subtitleSplit2 = new SplitText(subtitleRef2.current, { type: "words" });
      gsap.fromTo(subtitleSplit2.words, { opacity: 0, yPercent: 50 }, { opacity: 1, yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef2.current, start: "top 95%", once: true } });
    }

  }, [])

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
      <section className="experiences">
        <div className="experiences-content" >
          <div className="experiences-content-top">
            <div className="experiences-content-top-text">
              <div className="experiences-content-textbox">
                <div className="titlebox">
                  {/* <div className="subpage-titlebox-gradient" /> */}
                  <h1 className="headline white" ref={titleRef} >My Recent Projects</h1>
                </div>
                <p className="description grey opacity-blur" ref={descriptionRef} >Latest work from Threekit — including Kohler.com visual commerce experiences.</p>
              </div>
              <div className="experiences-content-top-divider" ref={lineRef} />
            </div>
            <div className="experiences-carousel-wrapper">
              <div className="experiences-carousel-wrapper-overlay" ref={worksItemRef1} ></div>
              <div className="experiences-carousel" ref={emblaRef2} >
                <div className="experiences-carousel-row">
                  <div className="experiences-item-padding" />
                  <a
                    className="experiences-item"
                    href="https://www.kohler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="experiences-item-content" >
                      <div className="experiences-item-content-textbox">
                        <h2 className="subheadline white" >KOHLER</h2>
                        <div className="experiences-item-content-textbox-row">
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >Threekit</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >React</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >3D / WebGL</p>
                          </div>
                          <div className="experiences-item-content-textbox-button">
                            <p className="small-description white" >TypeScript</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/kohler.png" className="experiences-item-content-image" width={750} height={750} loading="lazy" sizes="40vw" alt="Kohler.com — 3D product experiences" />
                    </div>
                    <div className="experiences-item-border" />
                  </a>
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
  );
};