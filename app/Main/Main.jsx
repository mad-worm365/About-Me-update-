"use client";
import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionHero } from "./SectionHero";
import "./main.css";
import Loading from "../loading";

gsap.registerPlugin(ScrollTrigger);

// Below-the-fold sections: load after hero paints
const SectionShowreel = dynamic(
  () =>
    import("./SectionShowreel").then((m) => ({ default: m.SectionShowreel })),
  { ssr: false }
);
const SectionProjects = dynamic(
  () =>
    import("./SectionProjects").then((m) => ({ default: m.SectionProjects })),
  { ssr: false }
);
const SectionProjectsMobile = dynamic(
  () =>
    import("./SectionProjectsMobile").then((m) => ({
      default: m.SectionProjectsMobile,
    })),
  { ssr: false }
);
const SectionSkill = dynamic(
  () => import("./SectionSkill").then((m) => ({ default: m.SectionSkill })),
  { ssr: false }
);
const SectionTestimonials = dynamic(
  () =>
    import("./SectionTestimonials").then((m) => ({
      default: m.SectionTestimonials,
    })),
  { ssr: false }
);
const SectionFlower = dynamic(
  () => import("./SectionFlower").then((m) => ({ default: m.SectionFlower })),
  { ssr: false }
);
const SectionFooter = dynamic(
  () => import("./SectionFooter").then((m) => ({ default: m.SectionFooter })),
  { ssr: false }
);

const LOADING_MIN_MS = 600;
const LOADING_MAX_MS = 1800;

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showBelowFold, setShowBelowFold] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef(null);

  const resizeLenis = () => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.resize();
    ScrollTrigger.refresh();
  };

  // Sync Lenis smooth scroll with GSAP ScrollTrigger (prevents scrub jank)
  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => ScrollTrigger.update();
    let lenis = lenisRef.current?.lenis;
    let tries = 0;
    const bind = window.setInterval(() => {
      lenis = lenisRef.current?.lenis;
      tries += 1;
      if (lenis || tries > 40) {
        window.clearInterval(bind);
        lenis?.on("scroll", onScroll);
        lenis?.resize();
      }
    }, 50);

    return () => {
      window.clearInterval(bind);
      gsap.ticker.remove(update);
      lenis?.off("scroll", onScroll);
    };
  }, []);

  // Mount only one projects section (avoids duplicate ScrollTriggers + DOM)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Fast loading gate — never block on remote Spline/assets
  useEffect(() => {
    const started = performance.now();
    let cancelled = false;

    const belowFoldTimer = window.setTimeout(() => {
      if (!cancelled) setShowBelowFold(true);
    }, 150);

    const finish = () => {
      if (cancelled) return;
      setFadeOut(true);
      const lenis = lenisRef.current?.lenis;
      lenis?.start();
      lenis?.resize();
      window.setTimeout(() => {
        if (!cancelled) setIsLoading(false);
        resizeLenis();
      }, 350);
    };

    const onReady = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, LOADING_MIN_MS - elapsed);
      window.setTimeout(finish, wait);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const maxTimer = window.setTimeout(finish, LOADING_MAX_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(maxTimer);
      window.clearTimeout(belowFoldTimer);
      window.removeEventListener("load", onReady);
    };
  }, []);

  // Analytics ping — idle, non-blocking
  useEffect(() => {
    const ping = () => {
      fetch("/api/user-info").catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(ping, { timeout: 4000 });
      return () => window.cancelIdleCallback?.(id);
    }

    const t = window.setTimeout(ping, 2500);
    return () => window.clearTimeout(t);
  }, []);

  // After below-fold sections mount, remeasure Lenis scroll limit
  useEffect(() => {
    if (!showBelowFold) return;
    const timers = [50, 200, 500, 1200].map((ms) =>
      window.setTimeout(resizeLenis, ms)
    );
    window.addEventListener("resize", resizeLenis);
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("resize", resizeLenis);
    };
  }, [showBelowFold, isMobile]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.12,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.85,
      }}
    >
      {isLoading && (
        <div className={`initial-loading-screen ${fadeOut ? "fade-out" : ""}`}>
          <div className="loading-screen">
            <Loading />
          </div>
        </div>
      )}
      <SectionHero />
      {showBelowFold && (
        <>
          <div className="normal-padding" />
          <SectionShowreel />
          <div className="border-padding">
            <div className="section-border"></div>
          </div>
          {isMobile ? <SectionProjectsMobile /> : <SectionProjects />}
          <SectionSkill />
          <div className="normal-padding" />
          <SectionTestimonials />
          <div className="normal-padding" />
          <SectionFlower />
          <div className="normal-padding" />
          <SectionFooter />
        </>
      )}
    </ReactLenis>
  );
};

export default Main;
