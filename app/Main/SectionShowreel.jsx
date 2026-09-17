import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CompanyBadge = ({ initials }) => (
  <div className="company-badge" aria-hidden="true">{initials}</div>
);

export const SectionShowreel = () => {

  const data = [
    {
      title: "2022 ~ Present",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Senior Full Stack Engineer – AI, Backend & Platform Architecture
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Built and scaled Threekit&apos;s visual commerce platform for enterprise manufacturers in the US — powering real-time 3D product configuration, AR experiences, and high-traffic e-commerce integrations. Led full-stack delivery on customer-facing experiences including Kohler.com (3D faucet visualization, finish configuration, and immersive product discovery). Designed production RAG/LLM orchestration, cloud-native microservices (Node.js, NestJS, Python), Kafka pipelines, and Kubernetes deployments supporting large concurrent catalogs and configuration workloads.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <CompanyBadge initials="TH" />
            <div>
              <p className="text-xl font-bold text-start text-neutral-500">Threekit</p>
              <p className="text-sm text-neutral-400">United States</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 ~ 2022",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Senior Full Stack Developer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Developed a real-time analytics platform processing ~2M events per day, combining React dashboards with Node.js and Python APIs. Built interactive data exploration with live updates, advanced filtering, and role-based access. Implemented ML-powered recommendation and scoring features that improved engagement ~40%. Improved frontend performance through code splitting and optimized state management, reducing page load times ~45%. Designed reliable PostgreSQL schemas, replication, and automated testing across frontend and backend.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <CompanyBadge initials="PA" />
            <div>
              <p className="text-xl font-bold text-start text-neutral-500">Pivot Analytics Corp</p>
              <p className="text-sm text-neutral-400">Seattle, Washington, USA</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 ~ 2020",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Senior Full Stack Developer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Designed and maintained a multi-tenant SaaS platform supporting 1M+ daily active users with strict data isolation and enterprise security. Built React frontends and Node.js/Python backends for auth, reporting, and integrations. Delivered a natural-language data query interface for business users and executed large-scale customer migrations with near-zero downtime. Managed AWS infrastructure with Terraform for repeatable, consistent deployments.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <CompanyBadge initials="VT" />
            <div>
              <p className="text-xl font-bold text-start text-neutral-500">Vortex Technologies</p>
              <p className="text-sm text-neutral-400">Amsterdam, Netherlands</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2016 ~ 2018",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Full Stack Developer
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Built full-stack e-commerce solutions with complex catalogs, multi-currency pricing, and high-traffic customer journeys. Developed React frontends and Node.js services for orders, payments, and inventory. Integrated secure payment gateways with robust error handling and monitoring. Optimized performance to improve checkout completion and built analytics tools for sales and user behavior insights.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <CompanyBadge initials="CC" />
            <div>
              <p className="text-xl font-bold text-start text-neutral-500">CloudCart Commerce</p>
              <p className="text-sm text-neutral-400">Berlin, Germany</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2011 ~ 2015",
      content: (
        <div className='flex flex-col gap-2'>
          <p className="text-xl md:text-2xl font-bold text-start text-neutral-500">
            Bachelor of Science in Software Engineering
          </p>
          <p className="text-neutral-200 text-sm md:text-lg font-normal mb-8">
            University of São Paulo — foundational training in software engineering, algorithms, systems design, and full-cycle product development.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <CompanyBadge initials="USP" />
            <div>
              <p className="text-xl font-bold text-start text-neutral-500">University of São Paulo</p>
              <p className="text-sm text-neutral-400">Stockholm, Sweden</p>
            </div>
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
  const showreelItemRef5 = useRef();
  const titleRef = useRef()

  const showreelItems = [
    { ref: showreelItemRef1, initials: "TH", title: "Threekit" },
    { ref: showreelItemRef2, initials: "NW", title: "NextGen Web Solutions" },
    { ref: showreelItemRef3, initials: "IT", title: "Innovatech" },
    { ref: showreelItemRef5, initials: "SU", title: "Saxion University of Applied Sciences" },
  ];


  useEffect(() => {
    const tweens = [];
    const section = document.querySelector(".showreel");

    if (titleRef.current) {
      const titleSplit = new SplitText(titleRef.current, { type: "words" });
      tweens.push(
        gsap.fromTo(
          titleSplit.words,
          { opacity: 0, yPercent: 100 },
          {
            opacity: 1,
            yPercent: 0,
            stagger: 0.085,
            duration: 1,
            ease: "power2",
            scrollTrigger: { trigger: titleRef.current, start: "top 95%", once: true },
          }
        )
      );
    }

    if (videoRef.current) {
      tweens.push(
        gsap.to(videoRef.current, {
          rotateY: "0deg",
          scale: "1",
          rotateX: "0deg",
          translateY: "0vh",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: ".showreel",
            start: "top bottom",
            end: "top top",
            scrub: 0.45,
          },
        })
      );
    }

    [
      showreelItemRef1,
      showreelItemRef2,
      showreelItemRef3,
      showreelItemRef4,
      showreelItemRef5,
    ].forEach((ref, i) => {
      if (!ref.current) return;
      tweens.push(
        gsap.to(ref.current, {
          delay: i * 0.1,
          opacity: 1,
          duration: 1,
          ease: "power1",
          scrollTrigger: { trigger: ref.current, start: "top 95%", once: true },
        })
      );
    });

    // Play-button follow + video decode only while showreel is on screen
    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    let rafId = 0;
    let visible = false;
    const speed = 0.05;

    const tick = () => {
      if (!visible) {
        rafId = 0;
        return;
      }
      buttonX += (mouseX - buttonX) * speed;
      buttonY += (mouseY - buttonY) * speed;
      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate3d(${buttonX}px, ${buttonY}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const startRaf = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const handleMouseMove = (event) => {
      if (!visible) return;
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
      startRaf();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        const video =
          videoRef.current instanceof HTMLVideoElement
            ? videoRef.current
            : videoRef.current?.querySelector?.("video");
        if (visible) {
          video?.play?.().catch(() => {});
          startRaf();
        } else {
          video?.pause?.();
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = 0;
          }
        }
      },
      { rootMargin: "80px 0px" }
    );

    if (section) observer.observe(section);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
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
            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              muted
              playsInline
              loop
              preload="none"
              data-wf-ignore="true"
            />
          </div>
        </div>

        <div className="showreel-content-col">
          <div className="w-full flex justify-center items-center pb-10">
            <h1 className="subheadline white">My Work Experience</h1>
          </div>
          <div className="showreel-content-row">
            {showreelItems.map((item) => (
              <div
                className="showreel-content-row-item opacity"
                ref={item.ref}
                key={item.title}
              >
                <CompanyBadge initials={item.initials} />
                <h2 className="showreel-content-row-item-title">{item.title}</h2>
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
