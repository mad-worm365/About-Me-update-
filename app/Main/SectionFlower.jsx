/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFlower = () => {
  const sectionRef = useRef(null);
  const sequenceReady = useRef(false);

  const imageRef1 = useRef();
  const imageRef2 = useRef();

  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();
  const textRef5 = useRef();
  const textRef6 = useRef();
  const textRef7 = useRef();
  const textRef8 = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let sequenceTween;
    let cancelled = false;

    const imageSequence = (config) => {
      let playhead = { frame: 0 },
        canvas = gsap.utils.toArray(config.canvas)[0],
        ctx = canvas.getContext("2d"),
        curFrame = -1,
        onUpdate = config.onUpdate,
        images,
        updateImage = function () {
          let frame = Math.round(playhead.frame);
          if (frame !== curFrame && images[frame]?.complete) {
            config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images[frame], 0, 0);
            curFrame = frame;
            onUpdate && onUpdate.call(this, frame, images[frame]);
          }
        };

      images = config.urls.map((url, i) => {
        let img = new Image();
        img.decoding = "async";
        // Stagger network: first frame immediate, rest idle-friendly
        if (i === 0) {
          img.onload = updateImage;
          img.src = url;
        } else {
          const load = () => {
            if (!cancelled) img.src = url;
          };
          if ("requestIdleCallback" in window) {
            window.requestIdleCallback(load, { timeout: 2000 + i * 8 });
          } else {
            setTimeout(load, Math.min(i * 4, 1200));
          }
        }
        return img;
      });

      return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
        duration: images.length / (config.fps || 30),
        paused: !!config.paused,
        scrollTrigger: config.scrollTrigger,
      });
    };

    const startSequence = () => {
      if (sequenceReady.current || cancelled) return;
      sequenceReady.current = true;

      const frameCount = 300;
      const urls = new Array(frameCount)
        .fill()
        .map((_, i) => `/imageSequence/image${i + 1}.webp`);

      sequenceTween = imageSequence({
        urls,
        canvas: "#image-sequence",
        scrollTrigger: {
          trigger: ".flower",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    };

    // Only load ~10MB of frames when the section is near the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startSequence();
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      sequenceTween?.scrollTrigger?.kill();
      sequenceTween?.kill();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef1.current,
      { width: 0, opacity: 0 },
      {
        width: "5vw",
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: imageRef1.current, start: "top 95%" },
      }
    );
    gsap.fromTo(
      imageRef2.current,
      { width: 0, opacity: 0 },
      {
        width: "5vw",
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: imageRef2.current, start: "top 95%" },
      }
    );

    const textRefSplit1 = new SplitText(textRef1.current, { type: "chars" });
    const textRefSplit2 = new SplitText(textRef2.current, { type: "chars" });
    const textRefSplit3 = new SplitText(textRef3.current, { type: "chars" });
    const textRefSplit4 = new SplitText(textRef4.current, { type: "chars" });
    const textRefSplit5 = new SplitText(textRef5.current, { type: "chars" });
    const textRefSplit6 = new SplitText(textRef6.current, { type: "chars" });
    const textRefSplit7 = new SplitText(textRef7.current, { type: "chars" });
    const textRefSplit8 = new SplitText(textRef8.current, { type: "chars" });

    gsap.fromTo(textRefSplit1.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef1.current, start: "top 95%" } });
    gsap.fromTo(textRefSplit2.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef2.current, start: "top 95%" } });
    gsap.fromTo(textRefSplit3.chars, { opacity: 0.25 }, { delay: 0.5, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef3.current, start: "top 95%" } });

    gsap.fromTo(textRefSplit4.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef4.current, start: "top 95%" } });
    gsap.fromTo(textRefSplit5.chars, { opacity: 0.25 }, { delay: 0.6, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef5.current, start: "top 95%" } });
    gsap.fromTo(textRefSplit6.chars, { opacity: 0.25 }, { delay: 0.85, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef6.current, start: "top 95%" } });

    gsap.fromTo(textRefSplit7.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef7.current, start: "top 95%" } });
    gsap.fromTo(textRefSplit8.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef8.current, start: "top 95%" } });
  }, []);

  return (
    <section className="flower" ref={sectionRef}>
      <div className="flower-content">
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="flower-content-sequence">
          <canvas
            className="image-sequence-canvas"
            id="image-sequence"
            width="1920"
            height="1080"
          />
        </div>
        <div className="flower-content-textbox">
          <div className="flower-content-textbox-item">
            <span>
              <h1 className="subheadline white" ref={textRef1}>
                Grow
              </h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef2}>
                Your
              </h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef3}>
                Digital
              </h1>
            </span>
          </div>
          <div className="flower-content-textbox-item">
            <span>
              <h1 className="subheadline white" ref={textRef4}>
                Presence,
              </h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef5}>
                Let
              </h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef6}>
                Your
              </h1>
            </span>
          </div>
          <div className="flower-content-textbox-item">
            <span>
              <h1 className="subheadline white" ref={textRef7}>
                Vision
              </h1>
            </span>
            <span>
              <h1 className="subheadline white" ref={textRef8}>
                Bloom
              </h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
