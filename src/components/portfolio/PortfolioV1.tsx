import shape from "/assets/img/shape/9.png"
import { Link } from "react-router-dom";
import IsotopeGallery from '../project/IsotopeGallery.js'

interface DataType {
    sectionClass?: string;
    hasTitle?: React.ReactNode;
}

const PortfolioV1 = ({ sectionClass, hasTitle }: DataType) => {
    return (
        <>
            <div id="portfolio" className={`portfolio-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-top-left">
                    <img src={shape} alt="Image Not Found" />
                </div>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Portfolio</h4>
                                    <h2 className="title">My Recent Work</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 gallery-content">
                            <div className="magnific-mix-gallery gallery-masonary">
                                <IsotopeGallery />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV1;