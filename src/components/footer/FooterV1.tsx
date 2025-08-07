import { Link } from "react-router-dom";
import logo from "/assets/img/logo.png"

const FooterV1 = () => {
    return (
        <>
            <footer className="default-padding bg-cover" style={{ backgroundImage: 'url(assets/img/shape/1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="footer-items text-center">
                                <Link to="/" className="footer-logot"><img src={logo} alt="Image Not Found" /></Link>
                                <ul className="foter-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/service">Skills</Link></li>
                                    <li><Link to="/projects/2">Portfolio</Link></li>
                                    <li><Link to="/blog-with-sidebar">Blog</Link></li>
                                </ul>
                                <p>Copyright  &copy; {(new Date().getFullYear())} Antux. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;