"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import { SectionShowreel } from "./SectionShowreel";
import { SectionTestimonials } from "./SectionTestimonials";
// import { SectionTechstack } from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionProjects } from "./SectionProjects";
import { SectionProjectsMobile } from "./SectionProjectsMobile";
import { SectionKPI } from "./SectionKPI";
import "./main.css";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";
import { SectionSkill } from "./SectionSkill";
import Loading from "../loading";

const Main = () => {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const lenis = useLenis();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userInfo) return;

      const response = await fetch("/api/user-info");
      const data = await response.json();
      setUserInfo(data);
    };

    fetchUserInfo();
  }, [userInfo]);

  useLayoutEffect(() => {
    if (progress === 100) {
      setFadeOut(true);
      lenis?.start();
    }
  }, [progress, lenis]);

  useEffect(() => {
    // Function to preload all images and assets
    const preloadAssets = async () => {
      try {
        // Add all your asset URLs here
        const assets = [
          // Spline scenes
          'https://prod.spline.design/IvpvzUJpHli4Moba/scene.splinecode',
          'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',
          // Add other assets like images, etc.
        ];

        // Create an array of promises for loading assets
        const loadPromises = assets.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        });

        // Wait for all assets to load
        await Promise.all(loadPromises);

        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 500); // Match this with your CSS transition duration
        }, 500);
      } catch (error) {
        console.error('Error preloading assets:', error);
        // Even if there's an error, we should show the content
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  return (
    <ReactLenis root>
      {isLoading && (
        <div className={`initial-loading-screen ${fadeOut ? "fade-out" : ""}`}>
          <div className="loading-screen">
            <Loading />
          </div>
        </div>
      )}
      <SectionHero />
      <div className="normal-padding" />
      <SectionShowreel />
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      {/* <SectionServices /> */}
      {/* <div className="normal-padding" /> */}
      <SectionProjects />
      <SectionProjectsMobile />
      {/* <div className="normal-padding" /> */}
      {/* <SectionTechstack /> */}
      <SectionSkill />
      <div className="normal-padding" />
      <SectionTestimonials />
      {/* <div className="normal-padding" />
      <SectionKPI /> */}
      <div className="normal-padding" />
      <SectionFlower />
      <div className="normal-padding" />
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
