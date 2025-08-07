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
                                                    <h4>Software Engineer</h4>
                                                    <p>
                                                        Blockdots
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2021 - Present</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Leading development of scalable web applications using modern JavaScript frameworks. 
                                                    Collaborating with cross-functional teams to deliver high-quality software solutions. 
                                                    Implementing best practices in code architecture, testing, and deployment processes.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>UI/UX Designer</h4>
                                                    <p>
                                                        Previous Role
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2018 - 2021</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Designed and prototyped user-centered digital experiences with focus on usability 
                                                    and accessibility. Created wireframes, mockups, and interactive prototypes. 
                                                    Conducted user research and usability testing to inform design decisions.
                                                </p>
                                            </div>
                                        </div>
                                    </ReactWOW>

                                    {/* Single Item */}
                                    <ReactWOW animation="fadeInUp">
                                        <div className="timeline-style-one-item">
                                            <div className="timeline-header">
                                                <div className="left">
                                                    <h4>Junior Developer</h4>
                                                    <p>
                                                        Early Career
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <span>2016 - 2018</span>
                                                </div>
                                            </div>
                                            <div className="timeline-body">
                                                <p>
                                                    Built foundational skills in web development and software engineering. 
                                                    Contributed to various projects while learning industry best practices. 
                                                    Developed proficiency in multiple programming languages and frameworks.
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