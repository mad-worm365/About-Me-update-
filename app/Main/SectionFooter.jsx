import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaDiscord, FaTelegram, FaMicrosoft, FaTwitter } from "react-icons/fa";
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
                  alt="Zhan Xiu Wei Logo"
                  loading="lazy"
                />
              </div>
              <div className="footer-branding-content">
                <h1 className="subheadline white footer-title">Zhan Xiu Wei</h1>
                <p className="description grey footer-description">
                  Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality
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
                <a href="mailto:geard.roas.tech@gmail.com" className="small-description grey hover-text-grey">zhan.tech.mail@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon-container">
                  <MapPin strokeWidth={1.25} className="footer-contact-icon" />
                </div>
                <span className="small-description grey">HK, Wan Chai District
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content-right" ref={topRef3}>
          <div className="footer-content-right-column">
            <h2 className="footer-heading">Services</h2>
            <div className="footer-services-list">
              <div className="footer-service-item">
                <span className="small-description grey">Frontend Development</span>
              </div>
              <div className="footer-service-item">
                <span className="small-description grey">Backend Development</span>
              </div>
              <div className="footer-service-item">
                <span className="small-description grey">Ecommerce Development(Shopify)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" ref={centerRef1}></div>

      <div className="footer-content-bottom">
        <p className="small-description grey copyright-text" ref={bottomRef1}>© {new Date().getFullYear()} Zhan Xiu Wei All Rights Reserved</p>
        <div className="footer-socials" ref={bottomRef2}>
          <a href="https://github.com/g-r-te" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
            <FaGithub className="footer-socials-icon" />
          </a>
          <a href="https://discord.com/users/440826277197250560" target="_blank" rel="noreferrer" aria-label="Discord" className="footer-social-link">
            <FaDiscord className="footer-socials-icon" />
          </a>
          <a href="https://t.me/DACE1013" target="_blank" rel="noreferrer" aria-label="Telegram" className="footer-social-link">
            <FaTelegram className="footer-socials-icon" />
          </a>
          <a href="https://twitter.com/DAcE1013" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-link">
            <FaTwitter className="footer-socials-icon" />
          </a>
          <a href="https://teams.live.com/l/invite/FBAW3PLnbwCTdnQMwI?v=g1" className="footer-social-link">
            <FaMicrosoft className="footer-socials-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};