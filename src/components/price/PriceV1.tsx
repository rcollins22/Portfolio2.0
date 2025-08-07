import ReactWOW from "react-wow";
import shape15 from "/assets/img/shape/15.png"
import { Link } from "react-router-dom";

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode
}

const PriceV1 = ({ sectionClass, hasTitle }: DataType) => {
    return (
        <>
            <div id="pricing" className={`pricing-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-right-top">
                    <img src={shape15} alt="Image Not Found" />
                </div>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Pricing</h4>
                                    <h2 className="title">The best pricing plans to get your best</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">

                        {/* Single Item */}
                        <div className="col-lg-6 pricing-one-single">
                            <ReactWOW animation="fadeInUp" delay="100ms">
                                <div className="pricing-style-one">
                                    <div className="pricing-top">
                                        <div className="right">
                                            <i className="fab fa-wordpress" />
                                        </div>
                                        <div className="left">
                                            <h4>Web Application Development</h4>
                                            <p>
                                                Custom web applications built with modern technologies
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <h2><sup>$</sup>85</h2>
                                        </div>
                                        <ul>
                                            <li>React/Next.js Frontend</li>
                                            <li>Custom UI/UX Design</li>
                                            <li>Responsive Design</li>
                                            <li>API Integration</li>
                                            <li>Performance Optimization</li>
                                            <li>Testing & Documentation</li>
                                        </ul>
                                        <div className="button mt-30">
                                            <Link className="btn-style-regular" to="/contact"><span>Get Quote</span> <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>

                        {/* Single Item */}
                        <div className="col-lg-6 pricing-one-single">
                            <ReactWOW animation="fadeInUp" delay="300ms">
                                <div className="pricing-style-one">
                                    <div className="pricing-top">
                                        <div className="right">
                                            <i className="fab fa-bootstrap" />
                                        </div>
                                        <div className="left">
                                            <h4>Full Stack Solution</h4>
                                            <p>
                                                Complete application with backend and database
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <h2><sup>$</sup>120</h2>
                                        </div>
                                        <ul>
                                            <li>Frontend + Backend</li>
                                            <li>Database Design</li>
                                            <li>Responsive Design</li>
                                            <li>Authentication System</li>
                                            <li>API Development</li>
                                            <li>Deployment & Hosting</li>
                                        </ul>
                                        <div className="button mt-30">
                                            <Link className="btn-style-regular btn-border" to="/contact"><span>Get Quote</span> <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;