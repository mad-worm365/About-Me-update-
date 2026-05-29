/* eslint-disable react/jsx-key */
import React, { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { Send } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTestimonials = () => {

    const subheadlineBoxRef = useRef()
    const titleRef = useRef()
    const emblaWrapperRef = useRef()

    // GSAP ANIMATIONS

    useEffect(() => {

        // subheadline box animation
        gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

        // headline text animation
        const titleSplit = new SplitText(titleRef.current, { type: "words" });
        gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

        // embla wrapper animation
        gsap.to(emblaWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: emblaWrapperRef.current, start: "top 95%" } });

    }, [])


    const testimonials = [
        {
            name: "Michael Rodriguez",
            role: "Engineering Director at Nexus Data Solutions",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            text: "Delivered our production RAG platform and LLM orchestration stack—cut retrieval latency dramatically and made AI features reliable at scale."
        },
        {
            name: "Emily Chen",
            role: "Head of Product at Pivot Analytics Corp",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            text: "Built our real-time analytics experience and ML recommendations—engagement climbed while dashboards stayed fast under heavy daily event volume."
        },
        {
            name: "David Patel",
            role: "VP of Engineering at Vortex Technologies",
            img: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            text: "Led architecture for our multi-tenant SaaS and natural-language analytics—secure, scalable, and trusted by enterprise customers worldwide."
        },
        {
            name: "Sophia Kim",
            role: "Product Lead at CloudCart Commerce",
            img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            text: "Shipped performant e-commerce flows and payment integrations that improved checkout completion and gave us clear revenue visibility."
        },
        {
            name: "James Wilson",
            role: "CTO at Nexus Data Solutions",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            text: "A full-stack leader on AI and platform work—from Kafka pipelines and Kubernetes deployments to polished React systems in production."
        },
    ];

    // EMBLA CAROUSEL

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onScroll(emblaApi)
        emblaApi
            .on("reInit", onScroll)
            .on("scroll", onScroll)
            .on("slideFocus", onScroll)
    }, [emblaApi, onScroll])

    return (
        <section className="testimonials">
            <div className="testimonials-content">
                <div className="textbox testimonials-content-textbox">
                    {/* <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
                        <Send className="subheadline-box-icon" />
                        <h2 className="small-description grey" >Accounting on autopilot</h2>
                    </div> */}
                    <div className="titlebox">
                        <div className="titlebox-big-gradient" />
                        <h1 className="subheadline white" ref={titleRef} >Client{"'"}s Reviews</h1>
                    </div>
                </div>
                <div className="opacity-blur" ref={emblaWrapperRef} >
                    <div className="testimonials-carousel" ref={emblaRef} >
                        <div className="testimonials-carousel-row">
                            <div className="testimonials-item-padding" />
                            {testimonials.map((t, idx) => (
                                <div className="testimonials-item" key={idx}>
                                    <div className="testimonials-item-content">
                                        <div className="testimonials-item-profile">
                                            <img src={t.img} alt={t.name} />
                                        </div>
                                        <div className="testimonials-item-center">
                                            <p className="big-description white">{t.name}</p>
                                            <p className="description grey">{t.role}</p>
                                        </div>
                                        <p className="description white">{t.text}</p>
                                    </div>
                                    <div className="testimonials-item-grid" />
                                </div>
                            ))}
                            <div className="testimonials-item-padding" />
                        </div>
                    </div>
                </div>

                <div className="testimonials-content-bottom">
                    <div className="testimonials-content-bottom-buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                    <div className="embla__progress">
                        <div
                            className="embla__progress__bar"
                            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};