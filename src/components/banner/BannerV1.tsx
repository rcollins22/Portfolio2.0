import { Link } from 'react-router-dom';
import SocialShareV1 from '../social/SocialShareV1';
import illustration1 from "/assets/img/illustration/1.png";
import shape1 from "/assets/img/shape/1.png"
import shape3 from "/assets/img/shape/3.png"
import { ReactTyped } from 'react-typed';

const BannerV1 = () => {

    return (
        <>
            <div className="banner-style-one-area bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-one-items">
                                <div className="info">
                                    <h1>Hello👋 I'm Rashad Collins</h1>
                                    <h2>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <ReactTyped
                                                        strings={[
                                                            '<b className="">Software Engineer</b>',
                                                            '<b className="">Full Stack Developer</b>',
                                                            '<b className="">Blockchain Architect</b>'
                                                        ]} typeSpeed={35} backSpeed={35} backDelay={2000} loop>
                                                    </ReactTyped>
                                                </span>
                                            </span>
                                        </span>
                                    </h2>
                                    <p>
                                    Software Engineer passionate about building scalable web applications and clean, intuitive user experiences. Actively developing personal and open-source projects at the intersection of AI and blockchain, with a solid foundation in modern JavaScript frameworks, responsive design, and full-stack architecture.
                                    </p>
                                    <div className="flex-social mt-40">
                                        <div className="button">
                                            <Link className="btn-style-regular" to="/contact"><span>Let's Connect</span> <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                        <ul className="social-info">
                                            <SocialShareV1 />
                                        </ul>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src={illustration1} alt="Image Not Found" />
                                    <img src={shape1} alt="Image Not Found" />
                                    <img src={shape3} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;