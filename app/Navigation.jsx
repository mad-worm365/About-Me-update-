"use client";
import { ArrowUpRight, ChevronDown, MousePointer, Sparkles, Circle, MousePointerClick } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import SplashCursor from './Main/cursor/cursorAnimation';
import GlowCursor from './Main/cursor/GlowCursor';
import BubbleCursor from './Main/cursor/BubbleCursor';
import SmoothFollower from './Main/cursor/smoothCursor';
import CanvasCursor from './Main/cursor/CanvasCursor';

export const Navigation = () => {

    const navigationBar = useRef()
    const navigationBarCenter = useRef()
    const navigationBarCenterRef1 = useRef()
    const navigationBarCenterRef2 = useRef()
    const navigationBarCenterRef3 = useRef()
    const navigationBarCenterRef4 = useRef()
    const selectContainerRef = useRef()
    const [selectedCursor, setSelectedCursor] = useState("canvas");
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [animatingIcon, setAnimatingIcon] = useState(false);
    const dropdownRef = useRef();
    const welcomeTextRef = useRef();
    const [headerOpen, setHeaderOpen] = useState(false);

    useLayoutEffect(() => {
        gsap.to(navigationBar.current, { opacity: 1, rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", duration: 0.75, ease: 'power1', delay: 0.75 })

        // Width animation will trigger header open state
        gsap.fromTo(navigationBar.current,
            { width: "25%" },
            {   
                width: "100%",
                duration: 0.75,
                ease: "power1",
                delay: 1.75,
                onComplete: () => setHeaderOpen(true)
            }
        )

        gsap.fromTo(navigationBarCenter.current, { display: "none" }, { display: "flex", duration: 0.01, delay: 1.75 })
        gsap.to(navigationBarCenterRef1.current, { opacity: 1, duration: 1, delay: 1.75 })
        gsap.to(navigationBarCenterRef2.current, { opacity: 1, duration: 1, delay: 1.85 })
        gsap.to(navigationBarCenterRef3.current, { opacity: 1, duration: 1, delay: 1.95 })
        gsap.to(navigationBarCenterRef4.current, { opacity: 1, duration: 1, delay: 2.05 })
    }, [])

    // Separate effect for welcome text animation that triggers when header opens
    useEffect(() => {
        if (headerOpen && welcomeTextRef.current) {
            // First make it visible
            gsap.set(welcomeTextRef.current, { display: 'flex' });

            // Then animate it in
            gsap.fromTo(welcomeTextRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            );

            // Start the continuous subtle animation after initial entrance
            setTimeout(() => {
                gsap.to(welcomeTextRef.current, {
                    backgroundPosition: "400px",
                    duration: 8,
                    repeat: -1,
                    ease: "none"
                });
            }, 1000);
        }
    }, [headerOpen]);

    useEffect(() => {
        // Load saved cursor preference from localStorage
        const savedCursor = localStorage.getItem('selectedCursor');
        if (savedCursor === 'rainbow') {
            // Migrate removed rainbow option to glow
            setSelectedCursor('glow');
            localStorage.setItem('selectedCursor', 'glow');
        } else if (savedCursor) {
            setSelectedCursor(savedCursor);
        } else {
            // If no saved preference, set default to canvas
            setSelectedCursor("canvas");
            localStorage.setItem('selectedCursor', "canvas");
        }

        // Click outside to close select dropdown
        const handleClickOutside = (event) => {
            if (selectContainerRef.current && !selectContainerRef.current.contains(event.target)) {
                setIsSelectOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const router = useRouter();
    const pathname = usePathname();
    let isAnimating = false;

    const handleNavigate = (path) => {
        router.push(path);
    };

    const handleCursorChange = (value) => {
        setSelectedCursor(value);
        localStorage.setItem('selectedCursor', value);
        setIsSelectOpen(false);
        setAnimatingIcon(true);

        setTimeout(() => {
            setAnimatingIcon(false);
        }, 1000);

        // Animate dropdown closing
        if (dropdownRef.current) {
            gsap.to(dropdownRef.current, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power3.out",
                onComplete: () => setIsSelectOpen(false)
            });
        }
    };

    const toggleSelect = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    const getCurrentCursorIcon = () => {
        const option = cursorOptions.find(opt => opt.value === selectedCursor);
        return option?.icon || <MousePointer size={16} />;
    };

    // Map of cursor options
    const cursorOptions = [
        { value: "canvas", label: "Default Cursor", icon: <MousePointer size={16} /> },
        { value: "splash", label: "Splash Effect", icon: <Sparkles size={16} /> },
        { value: "glow", label: "Glow Trail", icon: <MousePointerClick size={16} /> },
        { value: "bubble", label: "Bubble Effect", icon: <Circle size={16} /> },
        { value: "smooth", label: "Smooth Effect", icon: <MousePointer size={16} /> },
    ];

    return (
        <>
            {selectedCursor === "canvas" && <CanvasCursor />}
            {selectedCursor === "splash" && <SplashCursor />}
            {selectedCursor === "glow" && (
                <GlowCursor
                    overlay
                    color="#67E8F9"
                    secondaryColor="#A78BFA"
                    trailLength={40}
                    trailWidth={8}
                    trailTaper={0.8}
                    followSpeed={0.16}
                    glowIntensity={3.15}
                    glowSpread={1.2}
                    hotspot={0.65}
                    brightness={2.5}
                    opacity={1}
                    pulseSpeed={1.1}
                    noiseStrength={0.035}
                    idleFade
                    idleTimeout={700}
                    fadeDuration={900}
                    blendMode="screen"
                />
            )}
            {selectedCursor === "bubble" && <BubbleCursor />}
            {selectedCursor === "smooth" && <SmoothFollower />}

            <div className="navigation-wrapper">
                <div className="navigation-inside" ref={navigationBar} >
                    <div className="navigation-inside-left">
                        <Link href="/">
                            <img src="/images/logo.webp" className="navigation-inside-left-image" alt="" />
                        </Link>
                    </div>
                    <div
                        className="welcome-text"
                        ref={welcomeTextRef}
                        style={{
                            display: 'none',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            fontFamily: "'Montserrat', sans-serif",
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(180,180,180,0.8) 50%, rgba(255,255,255,1) 100%)',
                            backgroundSize: "200% auto",
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 2px 10px rgba(255,255,255,0.1)',
                            fontSize: '1.35rem',
                            transform: 'translateY(2px)',
                            position: 'relative',
                            padding: '0 20px'
                        }}
                    >
                        Welcome To My Portfolio
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-8px',
                                width: '40px',
                                height: '2px',
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)',
                                borderRadius: '2px'
                            }}
                        />
                    </div>
                    <div
                        className="cursor-selector"
                        ref={selectContainerRef}
                        style={{
                            position: 'relative',
                            userSelect: 'none',
                            zIndex: 100
                        }}
                    >
                        <div
                            className="custom-select-header"
                            onClick={toggleSelect}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'rgba(30, 30, 30, 0.8)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: '12px',
                                padding: '12px 16px',
                                cursor: 'pointer',
                                minWidth: '220px',
                                backdropFilter: 'blur(8px)',
                                transition: 'all 0.3s ease',
                                boxShadow: isSelectOpen
                                    ? '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                                transform: isSelectOpen ? 'translateY(-1px)' : 'translateY(0)'
                            }}
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, {
                                    backgroundColor: 'rgba(40, 40, 40, 0.8)',
                                    borderColor: 'rgba(255, 255, 255, 0.25)',
                                    duration: 0.3
                                });
                            }}
                            onMouseLeave={(e) => {
                                if (!isSelectOpen) {
                                    gsap.to(e.currentTarget, {
                                        backgroundColor: 'rgba(30, 30, 30, 0.8)',
                                        borderColor: 'rgba(255, 255, 255, 0.15)',
                                        duration: 0.3
                                    });
                                }
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    animation: animatingIcon ? 'pulse 1s infinite' : 'none',
                                }}>
                                    {getCurrentCursorIcon()}
                                </div>
                                <span style={{
                                    fontWeight: '500',
                                    fontSize: '15px',
                                    letterSpacing: '0.3px'
                                }}>
                                    {cursorOptions.find(option => option.value === selectedCursor)?.label || "Default Cursor"}
                                </span>
                            </div>
                            <ChevronDown
                                size={18}
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0)',
                                    opacity: 0.8
                                }}
                            />
                        </div>

                        {isSelectOpen && (
                            <div
                                className="custom-select-options"
                                ref={dropdownRef}
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    left: 0,
                                    right: 0,
                                    background: 'rgba(25, 25, 25, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    zIndex: 100,
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '6px'
                                }}
                            >
                                {cursorOptions.map((option, index) => (
                                    <div
                                        key={option.value}
                                        className="custom-select-option"
                                        onClick={() => handleCursorChange(option.value)}
                                        style={{
                                            padding: '12px 16px',
                                            cursor: 'pointer',
                                            color: selectedCursor === option.value ? '#fff' : 'rgba(255, 255, 255, 0.8)',
                                            backgroundColor: selectedCursor === option.value ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                            transition: 'all 0.2s ease',
                                            fontSize: '15px',
                                            fontWeight: selectedCursor === option.value ? '500' : 'normal',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            borderRadius: '8px',
                                            marginBottom: index < cursorOptions.length - 1 ? '2px' : 0
                                        }}
                                        onMouseEnter={(e) => {
                                            gsap.to(e.currentTarget, {
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                duration: 0.2
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedCursor !== option.value) {
                                                gsap.to(e.currentTarget, {
                                                    backgroundColor: 'transparent',
                                                    duration: 0.2
                                                });
                                            }
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: selectedCursor === option.value ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                            color: 'white'
                                        }}>
                                            {option.icon}
                                        </div>
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="navigation-inside-right-mobile">
                    <div className="navigation-inside-right-mobile-line" />
                    <div className="navigation-inside-right-mobile-line" />
                    <div className="navigation-inside-right-mobile-line" />
                </div>
            </div >
        </>
    );
};