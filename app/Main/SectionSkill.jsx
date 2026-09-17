"use client";
import React, { useState, useRef, useEffect } from "react";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./css/skills.css";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionSkill = () => {
  const subtitleRef1 = useRef();
  const industryImageRef1 = useRef();
  const industryImageRef2 = useRef();
  const industryImageRef3 = useRef();
  const industryImageRef4 = useRef();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const imageRefs = [
      industryImageRef1,
      industryImageRef2,
      industryImageRef3,
      industryImageRef4,
    ];

    const tweens = [];

    if (subtitleRef1.current) {
      const subtitleSplit1 = new SplitText(subtitleRef1.current, {
        type: "words",
      });
      tweens.push(
        gsap.fromTo(
          subtitleSplit1.words,
          { opacity: 0, yPercent: 40 },
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: subtitleRef1.current,
              start: "top 90%",
              once: true,
            },
          }
        )
      );
    }

    // GPU-friendly reveal: scaleX instead of width (avoids layout thrash on scroll)
    if (!prefersReducedMotion) {
      imageRefs.forEach((ref) => {
        if (!ref.current) return;
        gsap.set(ref.current, {
          scaleX: 0,
          transformOrigin: "left center",
          force3D: true,
        });
        tweens.push(
          gsap.to(ref.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "top 45%",
              scrub: 0.4,
            },
          })
        );
      });
    } else {
      imageRefs.forEach((ref) => {
        if (ref.current) gsap.set(ref.current, { scaleX: 1 });
      });
    }

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section className="skills">
      <div className="skills-content">
        <div className="skills-industries">
          <div className="skills-subtextbox">
            <div className="titlebox">
              <h1 className="subheadline white" ref={subtitleRef1}>
                My Skills
              </h1>
            </div>
          </div>
          <div className="skills-industries-container">
            <div className="skills-industries-divider" />
            <div className="skills-industries-item">
              <div className="skills-industries-item-left">
                <h2 className="small-subheadline white">AI & LLM Systems</h2>
              </div>
              <div className="skills-industries-item-right">
                <div
                  className="skills-industries-item-right-imagebox"
                  ref={industryImageRef1}
                >
                  <img
                    src="/images/frontend-skill.jpg"
                    className="skills-industries-item-right-image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="skills-industries-divider" />
            <div className="skills-industries-item">
              <div className="skills-industries-item-left">
                <h2 className="small-subheadline white">
                  Full Stack Engineering
                </h2>
              </div>
              <div className="skills-industries-item-right">
                <div
                  className="skills-industries-item-right-imagebox"
                  ref={industryImageRef2}
                >
                  <img
                    src="/images/uiux.jpg"
                    className="skills-industries-item-right-image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="skills-industries-divider" />
            <div className="skills-industries-item">
              <div className="skills-industries-item-left">
                <h2 className="small-subheadline white">Cloud & DevOps</h2>
              </div>
              <div className="skills-industries-item-right">
                <div
                  className="skills-industries-item-right-imagebox"
                  ref={industryImageRef3}
                >
                  <img
                    src="/images/cms.jpg"
                    className="skills-industries-item-right-image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="skills-industries-divider" />
            <div className="skills-industries-item">
              <div className="skills-industries-item-left">
                <h2 className="small-subheadline white">
                  Data & Real-Time Platforms
                </h2>
              </div>
              <div className="skills-industries-item-right">
                <div
                  className="skills-industries-item-right-imagebox"
                  ref={industryImageRef4}
                >
                  <img
                    src="/images/backend.jpg"
                    className="skills-industries-item-right-image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="skills-industries-divider" />
          </div>
        </div>
      </div>
    </section>
  );
};
