import ReactWOW from "react-wow";

interface DataType {
    sectionClass?: string;
}

const ResumeV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div id="resume" className={`timeline-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="time-line-style-one-box">
                        <div className="row guttex-xl">
                            <div className="col-lg-6">
                                <h2>My Expertise</h2>
                                <div className="time-style-one-items">

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Blockchain Architect</h4>
                                                    <p>
                                                        AutoDex
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2021 - 2024</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Led the development of a decentralized NFT ecosystem for vehicles using Hyperledger Fabric. Implemented ERC-721 compatibility with Truffle and Ganache to enhance platform interoperability. Built and maintained the AutoDex.io website with React, Tailwind, and Bootstrap. Used Docker to streamline blockchain network deployment and mentored junior engineers on smart contract best practices.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Full-Stack Engineer</h4>
                                                    <p>
                                                        Lorentine Green & Associates
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2020 - 2021</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                   Developed a full-stack applicant tracking and placement system for a job recuitment platform using the MERN stack. Integrated RESTful APIs to ensure seamless data flow and responsive UI/UX. Participated in Agile sprints, code reviews, and technical documentation. Contributed to onboarding resources and blog content to support platform adoption and developer engagement.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Front-End Developer</h4>
                                                    <p>
                                                        CoinFlip
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2017 - 2019</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                   Worked as part of a front-end team to develop an internal React-based dashboard monitoring over 70 Bitcoin ATMs nationwide. Helped integrate multiple APIs to visualize real-time metrics, system health, and transaction data, supporting over 200 daily transactions. Contributed to UI/UX updates for ATM interfaces to improve user experience and operational efficiency. Collaborated cross-functionally with engineering, product, and operations teams to align design with business goals.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h2>Education Background</h2>
                                <div className="time-style-one-items">

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Computer Science Degree</h4>
                                                    <p>
                                                        University Education
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2012 - 2016</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Comprehensive study of computer science fundamentals including algorithms, 
                                                    data structures, software engineering principles, and system design. 
                                                    Strong foundation in mathematics and problem-solving methodologies.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Web Development Certification</h4>
                                                    <p>
                                                        Professional Development
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2015 - 2016</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Intensive training in modern web development technologies and frameworks. 
                                                    Hands-on experience with HTML5, CSS3, JavaScript, and responsive design principles. 
                                                    Practical projects focusing on real-world application development.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Design Fundamentals</h4>
                                                    <p>
                                                        Continuing Education
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2014 - 2015</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Comprehensive study of design principles, color theory, and user experience fundamentals. 
                                                    Training in industry-standard design tools and methodologies. 
                                                    Focus on creating user-centered designs that balance aesthetics with functionality.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeV1;