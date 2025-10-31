"use client";
import React, { useState, useRef, useEffect } from "react";
import { Zap } from "lucide-react";
import { ReactLenis } from 'lenis/react'
import SplitText from "gsap/src/SplitText";
import "./css/skills.css";
import gsap from "gsap";

const skills = [
    {
        key: "backend",
        title: "BACKEND",
        color: "#333333",
        img: "'/skill/react.png",
        desc: (
            <>
                <p className="code-title">BACKEND</p>
                <p><span>Duration:</span>4 Years</p>
                <p><span>Experience</span>PHP, SQL, NodeJS, Ruby</p>
            </>
        ),
    },
    {
        key: "frontend",
        title: "FRONTEND",
        color: "#16A085",
        img: "https://i.imgur.com/f8WewU1.png",
        desc: (
            <>
                <p className="code-title">FRONTEND</p>
                <p><span>Duration:</span>6 Years</p>
                <p><span>Experience: </span>
                    {"\u00A0"}HTML, CSS, Javascript, TypeScript
                </p>
            </>
        ),
    },
    {
        key: "html",
        title: "HTML5",
        color: "#E34C26",
        img: "https://i.imgur.com/CHmGJ8M.png",
        desc: (
            <>
                <p className="code-title">HTML5</p>
                <p><span>Duration:</span>6 Years</p>
                <p><span>Experience</span>HTML5 (most recent)</p>
            </>
        ),
    },
    {
        key: "css",
        title: "CSS3",
        color: "#0083de",
        img: "https://i.imgur.com/kUSks3I.png",
        desc: (
            <>
                <p className="code-title">CSS3</p>
                <p><span>Duration:</span>6 Years</p>
                <p><span>Experience</span>CSS3 (most recent)</p>
            </>
        ),
    },
    {
        key: "javascript",
        title: "JAVASCRIPT",
        color: "#8cc84b",
        img: "https://i.imgur.com/5B9usMm.png",
        desc: (
            <>
                <p className="code-title">JAVASCRIPT</p>
                <p><span>Duration:</span>4 Years</p>
                <p><span>Experience</span>Javascript, Jquery, AngularJS, NodeJS</p>
            </>
        ),
    },
    {
        key: "gui",
        title: "USER INTERFACE",
        color: "#2C3E52",
        img: "https://i.imgur.com/3dXtbto.png",
        desc: (
            <>
                <p className="code-title">USER INTERFACE</p>
                <p><span>Duration:</span>4 Years</p>
                <p><span>Experience</span>Wordpress, Custom GUI Creation</p>
            </>
        ),
    },
    {
        key: "seo",
        title: "SEO",
        color: "#C0392B",
        img: "https://i.imgur.com/FkEYVo6.png",
        desc: (
            <>
                <p className="code-title">SEO</p>
                <p><span>Duration:</span>4 Years</p>
                <p><span>Experience</span>Up-to-date SEO Practices</p>
            </>
        ),
    },
];


const skillGrid = [
    ["backend", "frontend"],
    ["html", "css", "javascript"],
    ["gui", "seo"],
];

export const SectionSkill = () => {
    const [active, setActive] = useState('frontend');


    const titleRef = useRef()
    const subtitleRef1 = useRef()
    const subtitleRef2 = useRef()
    const descriptionRef = useRef()
    const lineRef = useRef()
    const skillsItemRef1 = useRef()
    const carouselWrapperRef = useRef()
    const subdescriptionRef1 = useRef()
    const subdescriptionRef2 = useRef()
    const industryImageRef1 = useRef()
    const industryImageRef2 = useRef()
    const industryImageRef3 = useRef()
    const industryImageRef4 = useRef()
    const subheadlineBoxRef1 = useRef()
    const subheadlineBoxRef2 = useRef()

    useEffect(() => {

        // headline text animation
        const titleSplit = new SplitText(titleRef.current, { type: "chars" });
        gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

        // description text animation
        gsap.to(descriptionRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.6 })

        // line animation
        gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, delay: 0.5 })

        // work carousel items animation
        gsap.to(skillsItemRef1.current, { delay: 0.4, opacity: 0, duration: 1, ease: 'power1' });

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

    return (
        <ReactLenis root>
            <section className="skills">
                <div className="skills-content">
                    <div className="skills-industries">
                        <div className="skills-subtextbox">
                            {/* <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef1} >
                                <Zap className="subheadline-box-icon" />
                                <h2 className="small-description grey" >Industries we serve</h2>
                            </div> */}
                            <div className="titlebox">
                                {/* <div className="titlebox-medium-gradient" /> */}
                                <h1 className="subheadline white" ref={subtitleRef1} >My Skills</h1>
                            </div>
                            {/* <p className="description grey" ref={subdescriptionRef1} >Our product designers have completed projects in different niches. They know how to add business value and provide.</p> */}
                        </div>
                        <div className="skills-industries-container">
                            <div className="skills-industries-divider" />
                            <div className="skills-industries-item" >
                                <div className="skills-industries-item-left">
                                    <h2 className="small-subheadline white" >Frontend Development</h2>
                                </div>
                                <div className="skills-industries-item-right">
                                    <div className="skills-industries-item-right-imagebox" ref={industryImageRef1} >
                                        <img src="/images/frontend-skill.jpg" className="skills-industries-item-right-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="skills-industries-divider" />
                            <div className="skills-industries-item">
                                <div className="skills-industries-item-left">
                                    <h2 className="small-subheadline white" >UI Libraries</h2>
                                </div>
                                <div className="skills-industries-item-right">
                                    <div className="skills-industries-item-right-imagebox" ref={industryImageRef2} >
                                        <img src="/images/uiux.jpg" className="skills-industries-item-right-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="skills-industries-divider" />
                            <div className="skills-industries-item">
                                <div className="skills-industries-item-left">
                                    <h2 className="small-subheadline white" >E-commerce && CMS</h2>
                                </div>
                                <div className="skills-industries-item-right">
                                    <div className="skills-industries-item-right-imagebox" ref={industryImageRef3} >
                                        <img src="/images/cms.jpg" className="skills-industries-item-right-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="skills-industries-divider" />
                            <div className="skills-industries-item">
                                <div className="skills-industries-item-left">
                                    <h2 className="small-subheadline white" >Backend Development</h2>
                                </div>
                                <div className="skills-industries-item-right">
                                    <div className="skills-industries-item-right-imagebox" ref={industryImageRef4} >
                                        <img src="/images/backend.jpg" className="skills-industries-item-right-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="skills-industries-divider" />
                        </div>
                    </div>
                </div>
            </section>
        </ReactLenis >
    );
};