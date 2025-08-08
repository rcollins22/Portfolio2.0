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
                                                   Developed a full-stack applicant tracking and placement system for a job recruitment platform using the MERN stack. Integrated RESTful APIs to ensure seamless data flow and responsive UI/UX. Participated in Agile sprints, code reviews, and technical documentation. Contributed to onboarding resources and blog content to support platform adoption and developer engagement.
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
                                                    <span>2018 - 2020</span>
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
                                                    <h4>BS. Bio-Medical Engineering</h4>
                                                    <p>
                                                        East Carolina University
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2012 - 2016</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                   Completed foundational coursework in biomedical systems, engineering mathematics, and applied programming. Built a strong analytical skillset through studies in physiology, biomechanics, and systems modeling, with emphasis on problem-solving, data analysis, and cross-disciplinary engineering principles.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Blockchain Architect Certification</h4>
                                                    <p>
                                                        The Blockchain Counsel
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2020</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Completed intensive certification in Blockchain Architecture through the Blockchain Council, with in-depth training on distributed ledger technology, consensus algorithms, smart contracts, and system design. Gained hands-on experience designing scalable blockchain networks using Ethereum, Hyperledger Fabric, and related frameworks. Focused on real-world architectural use cases in DeFi, NFTs, and enterprise applications.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Full-Stack Engineer Certification</h4>
                                                    <p>
                                                        DigitalCrafts
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2020</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                   Completed a 1,500-hour full-time coding bootcamp at DigitalCrafts focused on modern full-stack web development. Gained hands-on experience building responsive applications using the MERN stack (MongoDB, Express, React, Node.js), RESTful APIs, and version control with Git. Developed and deployed multiple real-world projects in an Agile, team-based environment.
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