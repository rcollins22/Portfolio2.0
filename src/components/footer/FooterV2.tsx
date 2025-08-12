import { Link } from "react-router-dom";
import logoLight from "/assets/img/logo-light-2.png"

const FooterV2 = () => {
    return (
        <>
            <footer className="default-padding bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <Link to="/" className="footer-logot"><img src={logoLight} alt="Image Not Found" /></Link>
                                <ul className="foter-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/service">Skills</Link></li>
                                    <li><Link to="/projects">Portfolio</Link></li>
                                    <li><Link to="/blog-with-sidebar">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;