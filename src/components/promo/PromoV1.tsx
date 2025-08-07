import { Link } from "react-router-dom";

const PromoV1 = () => {
    return (
        <>
            <div className="promot-box-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="promo-box-items text-center">
                                <h2>{`Ready to bring your ideas to life?`}</h2>
                                <h4>Let's discuss your next project: <a href="https://www.linkedin.com/in/rashad-codes/"><i className="fab fa-linkedin" /> Connect on LinkedIn</a></h4>
                                <div className="button mt-40">
                                    <Link className="btn-style-regular" to="/contact"><span>Start a Project</span> <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoV1;