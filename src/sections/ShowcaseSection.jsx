import React, {useRef} from 'react'
import { gsap} from "gsap/gsap-core";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left*/}
                    
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img className="cursor-pointer" loading="lazy" onClick={() => window.open("https://jobjolt-ai.streamlit.app/", "_blank")} src="/images/project1-ww.png" alt="JobJolt"/>
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
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]"> {/*yha se backgound color change hoga*/}
                                <img loading="lazy" src="/images/project22.png" alt="Library Management Platform" />
                            </div>
                            <h2>The Library Management Platform</h2>
                            <p className="text-white-50 md:text-xl">
                                Tech: Next.js,PostgreSQL,ImageKit,TypeScript,Tailwind CSS
                            </p>
                        </div>

                        <div className="project">
                            <div className="image-wrapper bg-[#ffe7eb]"> {/*yha se backgound color change hoga*/}
                                <img className="cursor-pointer" loading="lazy" onClick={() => window.open("https://jobjolt-ai.streamlit.app/", "_blank")} src="/images/project3-jj.png" alt="YC Directory" />
                            </div>
                            <h2>AI-based Resume Roll Classifier</h2>
                            <p className="text-white-50 md:text-xl">
                                Tech: Python, Scikit-learn
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
