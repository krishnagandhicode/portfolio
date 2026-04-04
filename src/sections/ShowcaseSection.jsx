import React, { useRef, useState, useEffect } from 'react'
import { gsap} from "gsap/gsap-core";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "BrainWave AI: Full-Stack AI Chat App",
        desc: "Production-deployed AI chat platform with secure auth, persistent chat history, Gemini-powered responses, image uploads, and polished UX. Tech: React 19, Vite, Node.js, Express, MongoDB Atlas, Clerk, Gemini, ImageKit.",
        imgPath: "/images/project3-jj.webp",
        alt: "BrainWave AI Full-Stack Chat App",
        className: "bg-[#ffe7eb]",
        link: "https://brain-wave-ai-dev.vercel.app/",
    },
    {
        title: "LILIPET: Vanilla UI E-Commerce Design",
        desc: "A multi-page e-commerce frontend built entirely without frameworks. Designed to master semantic HTML5 and responsive Vanilla CSS architecture, featuring custom media queries, flexbox layouts, and interactive DOM manipulation. Tech: HTML5, CSS3, JavaScript (Vanilla).",
        imgPath: "/images/project22.webp",
        alt: "LILIPET Vanilla UI E-Commerce Design",
        className: "bg-[#eaf4ff]",
        link: "https://lilipet.netlify.app/",
    },
];

const IframePreview = ({ src, title, onClick }) => {
    const containerRef = useRef(null);
    const [dims, setDims] = useState({ scale: 0.3, height: 300 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            if (width > 0) setDims({ scale: width / 1440, height });
        });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative overflow-hidden rounded-xl cursor-pointer"
            onClick={onClick}
        >
            <iframe
                src={src}
                title={title}
                loading="lazy"
                style={{
                    width: '1440px',
                    height: dims.scale > 0 ? `${dims.height / dims.scale}px` : '1000px',
                    border: 'none',
                    transform: `scale(${dims.scale})`,
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

const ShowcaseSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.set(".first-project-wrapper, .project", { y: 40, opacity: 0 });

        gsap.to(".first-project-wrapper, .project", {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
            },
        });
    }, { scope: sectionRef, dependencies: [] })

    const leftProjectLink = "https://waywiseapp.tech/";

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left*/}

                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <IframePreview
                                src={leftProjectLink}
                                title="Real-Time Intelligent Navigation Assistant"
                                onClick={() => window.open(leftProjectLink, "_blank")}
                            />
                        </div>
                        <div className="text-content">
                            <h2>Real-Time Intelligent Navigation Assistant</h2>
                            <p className="text-white-50 md:text-xl">
                                AI-based tool suggesting optimal nearby stops without route deviation.<br></br>
                                Tech: Python, Flask, JS, Google Maps API, Leaflet.js
                            </p>
                        </div>
                    </div>


                    {/* Right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        {projects.map((project) => (
                            <div key={project.title} className="project">
                                <div className={`image-wrapper ${project.link !== "#" ? "bg-transparent p-0" : project.className}`}>
                                    {project.link !== "#" ? (
                                        <IframePreview
                                            src={project.link}
                                            title={project.title}
                                            onClick={() => window.open(project.link, "_blank")}
                                        />
                                    ) : (
                                        <img
                                            loading="lazy"
                                            src={project.imgPath}
                                            alt={project.alt}
                                        />
                                    )}
                                </div>
                                <h2>{project.title}</h2>
                                <p className="text-white-50 md:text-xl">{project.desc}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
