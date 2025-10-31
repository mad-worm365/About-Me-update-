import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite"
import { MorphingText } from "@/components/ui/morphing-text";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionHero = () => {

  const titleRef = useRef()
  const descriptionRef = useRef()
  const buttonRef1 = useRef()
  const buttonCircleRef1 = useRef()
  const buttonRef2 = useRef()
  const logosWrapperRef = useRef()
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)
  const animationRef = useRef(null)

  const texts = [
    "React.js && Next.js",
    "Vue.js && Nuxt.js",
    "Angular.js && Node.js",
    "Svelte && SvelteKit",
    "Shopify (Theme && App)",
    "Flutter && React Native",
    "Chrome Extension",
    "Email Template",
  ];

  const initAnimations = useCallback(() => {
    if (!titleRef.current) return;

    gsap.set(titleRef.current, { opacity: 1 })

    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    const titleAnimation = gsap.fromTo(
      titleSplit.chars,
      { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 },
      { delay: 0.4, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" }
    );

    const descriptionAnimation = gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      delay: 0.9
    });

    const button1Animation = gsap.to(buttonRef1.current, {
      delay: 1.1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: "power1"
    });

    const button2Animation = gsap.to(buttonRef2.current, {
      delay: 1.4,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: "power1"
    });

    const logosAnimation = gsap.to(logosWrapperRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      delay: 0.9
    });

    // Store animations for cleanup
    animationRef.current = {
      titleAnimation,
      descriptionAnimation,
      button1Animation,
      button2Animation,
      logosAnimation,
      titleSplit
    };
  }, []);

  useEffect(() => {
    initAnimations();

    return () => {
      // Cleanup animations
      if (animationRef.current) {
        const { titleAnimation, descriptionAnimation, button1Animation, button2Animation, logosAnimation, titleSplit } = animationRef.current;
        titleAnimation.kill();
        descriptionAnimation.kill();
        button1Animation.kill();
        button2Animation.kill();
        logosAnimation.kill();
        titleSplit.revert();
      }
    };
  }, [initAnimations]);

  const handleMouseMove = useCallback((event) => {
    if (!cursor.current) return;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    gsap.to(cursor.current, {
      left: mouseX,
      top: mouseY,
      duration: 0.1,
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    if (!cursor.current) return;

    gsap.to(cursor.current, {
      autoAlpha: showCursor ? 1 : 0,
      scale: showCursor ? 1 : 0,
      duration: 0.3,
      ease: showCursor ? 'power3.out' : 'power3.in'
    });
  }, [showCursor]);

  return (
    <section className="hero">
      <div className="w-full h-full absolute inset-0">
        <SplineScene
          scene="https://prod.spline.design/IvpvzUJpHli4Moba/scene.splinecode"
          className="w-full h-full "
        />
      </div>
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <h3 className="headline hero-headline white" ref={titleRef} >
                  <div className="flex items-start justify-start width-full">
                    <MorphingText texts={texts} />
                  </div>
                  I{"'"}m Zhan Xiu Wei.
                  <br />
                  Senior Frontend Engineer
                  <br />
                </h3>
              </div>
              <p className="big-description grey opacity-blur" ref={descriptionRef} >
                8 years of experience in frontend development.<br />
                Building scalable and user-friendly web and mobile applications.</p>
            </div>
          </div>
          <div className="hero-content-right" >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

        </div>
      </div >
    </section >
  );
};