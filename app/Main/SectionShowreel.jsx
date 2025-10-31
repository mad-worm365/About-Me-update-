import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionShowreel = () => {

  const data = [
    {
      title: "2023 ~ 2025",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Senior Frontend Engineer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Spearheaded a migration from a monolithic React SPA to a Next.js ISR architecture, reducing Time to Interactive by 55% and boosting SEO organic sessions by 30% within three months. Developed a custom Shopify Plus headless storefront using React and GraphQL, integrating real-time personalization features that increased average order value from $75 to $92. Architected a complex Chrome Extension using Manifest V3 and background scripts to scrape competitive pricing data and feed insights into an internal analytics dashboard—used daily by 50+ product managers. Implemented dynamic email templates using MJML and Handlebars for automated lifecycle campaigns, achieving an open rate of 28% and a click-through rate of 7% across multi-language audiences. Introduced Cypress visual regression testing into CI/CD, catching UI regressions before production deployments, reducing post-release bug reports by 40%.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <img src="/logos/yums.png" alt="universal yums" width={70} height={70} className="rounded-full" />
            <p className="text-xl font-bold text-start text-neutral-500">
              Universal Yums
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2021 ~ 2023",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Lead Frontend Engineer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Led frontend redevelopment of a high-traffic recipe portal with Nuxt.js and SSR, delivering sub-1.5s full page loads and improving Core Web Vitals scores by 45%. Integrated a WebSocket-based live chat system with Phoenix Channels, reducing average customer support resolution time from 12h to 2h. Designed a modular Shopify theme using Liquid and Tailwind CSS, allowing marketing to launch seasonal campaigns without developer intervention, cutting time-to-market by 60%. Pioneered a Progressive Web App (PWA) implementation that enabled offline browsing of saved recipes, leading to a 20% increase in weekly active users. Collaborated with UX team to implement accessibility enhancements (WCAG 2.1 AA), resulting in 100% compliance and earning an internal accessibility award.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <img src="/logos/cook'd.webp" alt="cookd" width={70} height={70} className="rounded-full" />
            <p className="text-xl font-bold text-start text-neutral-500">
              Cook'd
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2020 ~ 2021",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Frontend & Full Stack Engineer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Built an analytics dashboard with Vue 3 Composition API and D3.js visualizations, supporting 10M+ events/day and enabling real-time KPI tracking for executive stakeholders. Developed a Svelte-based widget library to embed live data components on partner websites; adopted by three key clients, increasing partner integration revenue by $150K within six months. Deployed Node.js microservices in Docker containers orchestrated by Kubernetes on AWS EKS, achieving 99.9% uptime under peak loads. Mentored a team of five juniors, established best practices for Chrome Extension development, and led bi-weekly code reviews that improved code coverage from 60% to 85%.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <img src="/logos/cortex.png" alt="cortex" width={70} height={70} className="rounded-full" />
            <p className="text-xl font-bold text-start text-neutral-500">
              Cortex
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2018 ~ 2020",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Web Developer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Migrated five legacy WordPress and Magento sites onto Shopify Plus, preserving SEO rankings and migrating 100K+ products with automated scripts. Engineered responsive email campaigns with AMP for Email support, boosting click-to-open rates by 12% and reducing unsubscribes by 5%. Implemented lazy-loading strategies and responsive image sets, slashing page weight by 50% and improving Time to First Byte (TTFB) by 200ms. Collaborated with marketing to A/B test checkout flows using Optimizely, uncovering a variant that raised conversion by 8%.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <img src="/logos/outsized.jpg" alt="outsized" width={70} height={70} className="rounded-full" />
            <p className="text-xl font-bold text-start text-neutral-500">
              Outsized
            </p>
          </div>
        </div>
      ),
    },
  ];

  const videoRef = useRef();
  const playButtonRef = useRef();
  const showreelItemRef1 = useRef();
  const showreelItemRef2 = useRef();
  const showreelItemRef3 = useRef();
  const showreelItemRef4 = useRef();
  const titleRef = useRef()

  const showreelItems = [
  {
      ref: showreelItemRef1,
      img: "/logos/yums.png",
      title: "Universal Yums",
    },
    {
      ref: showreelItemRef2,
      img: "/logos/cook'd.webp",
      title: "Cook'd",
    },
    {
      ref: showreelItemRef3,
      img: "/logos/cortex.png",
      title: "Cortex",
    },
    {
      ref: showreelItemRef4,
      img: "/logos/outsized.jpg",
      title: "Outsized",
    },
  ];


  useEffect(() => {

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 100 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.085, duration: 1, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    gsap.to(videoRef.current, { rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", scrollTrigger: { trigger: ".showreel", start: "top bottom", end: "top top", scrub: true, markers: false } })

    gsap.to(showreelItemRef1.current, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef1.current, start: "top 95%" } });
    gsap.to(showreelItemRef2.current, { delay: 0.1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef2.current, start: "top 95%" } });
    gsap.to(showreelItemRef3.current, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef3.current, start: "top 95%" } });
    gsap.to(showreelItemRef4.current, { delay: 0.3, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: showreelItemRef4.current, start: "top 95%" } });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container" >
          <div className="showreel-video-playbutton" ref={playButtonRef} >
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox" >
            <div className="background">
              <div className="trail"></div>
            </div>
            <video src="/videos/ese.mp4" className="showreel-content-video" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
          </div>
        </div>

        <div className="showreel-content-col">
          <div className="w-full flex justify-center items-center pb-10">
            <h1 className="subheadline white">My Work Experience</h1>
          </div>
          <div className="showreel-content-row">
            {/* <div className="showreel-content-row-item opacity-blur" ref={showreelItemRef1} >
              <img src="/logos/librechat.svg" className="showreel-content-row-item-image" alt="" />
              <h1 className="subheadline white">LibreChat</h1>
              <div className="showreel-content-row-item-grid" />
            </div> */}
            {showreelItems.map((item, idx) => (
              <div
                className="showreel-content-row-item opacity-blur"
                ref={item.ref}
                key={item.title}
              >
                <img src={item.img} className="showreel-content-row-item-image" alt="" />
                <h1 className="subheadline white">{item.title}</h1>
                <div className="showreel-content-row-item-grid" />
              </div>
            ))}
          </div>
          <div className="flex w-full h-auto">
            <Timeline data={data} />
          </div>
        </div>

      </div>
    </section>
  );
};