import { useEffect, useState } from 'react';
import shape3 from "/assets/img/shape/3.png"
import shape8 from "/assets/img/shape/8.png"
import team14 from "/assets/img/team/14.jpg"
import team15 from "/assets/img/team/15.jpg"
import team16 from "/assets/img/team/16.jpg"
import team17 from "/assets/img/team/17.jpg"
import about1 from "/assets/img/about/1.jpg"
import about2 from "/assets/img/about/2.jpg"
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {

    // Modal Video
    const [isOpen, setOpen] = useState(false);

    // Scroll Animation 
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <>
            <div id="about" className="about-style-one-area bg-gray default-padding">
                <div className="shape-style-one">
                    <img src={shape3} alt="Image Not Found" />
                    <img className="upDownScrol" src={shape8} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="fun-fact-style-one-items">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"> <CountUp end={5} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Years of Professional Experience</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={50} enableScrollSpy={true} /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Projects Delivered</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-one-info">
                                <p>
                                    As a Software Engineer with experience at leading tech companies, I specialize in building robust, scalable applications that solve real-world problems. My expertise spans full-stack development, from crafting intuitive user interfaces to architecting efficient backend systems. I'm passionate about writing clean, maintainable code and delivering exceptional user experiences.
                                </p>
                                <Link className="btn-style-regular btn-border" to="/resume" ><span>View Resume</span> <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;