import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import "./css/footer.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {
  const topRef1 = useRef();
  const topRef2 = useRef();
  const topRef3 = useRef();
  const centerRef1 = useRef();
  const bottomRef1 = useRef();
  const bottomRef2 = useRef();

  useEffect(() => {
    gsap.fromTo(topRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(topRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(topRef3.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.4, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(centerRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: centerRef1.current, start: "top 95%" } });
    gsap.fromTo(bottomRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef1.current, start: "top 95%" } });
    gsap.fromTo(bottomRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef2.current, start: "top 95%" } });
  }, []);

  return (
    <section className="footer">
      <div className="footer-background">
        <div className="footer-background-gradient-1"></div>
        <div className="footer-background-gradient-2"></div>
      </div>

      <div className="footer-content">
        <div className="footer-content-left" ref={topRef1}>
          <div className="footer-branding">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-container">
                <img
                  src="/images/logo.png"
                  className="footer-logo"
                  alt="Lucas Oliveira Logo"
                  loading="lazy"
                />
              </div>
              <div className="footer-branding-content">
                <h1 className="subheadline white footer-title">Lucas Oliveira</h1>
                <p className="description grey footer-description">
                  Senior AI Full Stack Engineer building production LLM systems, scalable backends, and modern web platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-contact" ref={topRef2}>
            <h2 className="footer-heading">Contact</h2>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon-container">
                  <Mail strokeWidth={1.25} className="footer-contact-icon" />
                </div>
                <a href="mailto:lucas.de.oliveira0512@outlook.com" className="small-description grey hover-text-grey">lucas.de.oliveira0512@outlook.com</a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-container">
                  <MapPin strokeWidth={1.25} className="footer-contact-icon" />
                </div>
                <span className="small-description grey">Contagem, Minas Gerais, Brazil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content-right" ref={topRef3}>
          <div className="footer-content-right-column">
            <h2 className="footer-heading">Services</h2>
            <div className="footer-services-list">
              <div className="footer-service-item">
                <span className="small-description grey">AI & LLM Integration</span>
              </div>
              <div className="footer-service-item">
                <span className="small-description grey">Full Stack Development</span>
              </div>
              <div className="footer-service-item">
                <span className="small-description grey">Cloud & Platform Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" ref={centerRef1}></div>

      <div className="footer-content-bottom">
        <p className="small-description grey copyright-text" ref={bottomRef1}>© {new Date().getFullYear()} Lucas Oliveira. All Rights Reserved.</p>
        <div className="footer-socials" ref={bottomRef2}>
          <a href="https://www.linkedin.com/in/lucas-oliveira-6a5a93378" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
            <FaLinkedin className="footer-socials-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
