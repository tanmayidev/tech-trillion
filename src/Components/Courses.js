import './Courses.css'
import { Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import SyllabusModal from './SyllabusModal'
import { 
    ReactCourse, 
    CPP, 
    Python, 
    NodeJS, 
    Clanguage, 
    JavaFundamental, 
    MobileAppDevelopmentWithJava, 
    SQLite, 
    FrontendFundamentals } 
    from './Syllabus'

function Courses() {

    const [visibility, setVisibility] = useState(0)
    const [data, setData] = useState([])

    function handleClick(e) {
        setData(e)
        setVisibility(1)
    }

    function closeModal() {
        setVisibility(false)
    }

    return (
        <>
            
                <div className="Courses">
                    <h1 className="cour-header">COURSES</h1>
                    <CardGroup>
                        <Container>
                            {/* ROW-1 */}
                            <div className="animatedParent">
                            <Row>
                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/c.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>C LANGUAGE</Card.Title>
                                                    <Card.Text>
                                                        C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. It is ranked as the top two best languages to master.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(Clanguage)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/react.jpeg"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>REACT</Card.Title>
                                                    <Card.Text>
                                                        React is a free and open-source front-end JavaScript library for building user interfaces or UI components.It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(ReactCourse)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/node.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>NODE JS</Card.Title>
                                                    <Card.Text>
                                                        Node.js is an asynchronous event-driven JavaScript runtime, it is designed to build scalable network applications, many connections can be handled concurrently. It is the most widely used compiler for server side rendering of JavaScript.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(NodeJS)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>
                            </div>
                            {/* END OF ROW_1 */}

                            {/* ROW-2 */}
                            <div className="animatedParent">
                            <Row>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/frontend.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>FRONTEND FUNDAMENTALS</Card.Title>
                                                    <Card.Text>
                                                        Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(FrontendFundamentals)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/cpp.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>C++</Card.Title>
                                                    <Card.Text>
                                                        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(CPP)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/sqlite.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>SQLite</Card.Title>
                                                    <Card.Text>
                                                        SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(SQLite)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>
                            </div>
                            {/* END OF ROW_2 */}

                            {/* ROW-3 */}
                            <div className="animatedParent">
                            <Row>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/python.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>PYTHON PROGRAMMING</Card.Title>
                                                    <Card.Text>
                                                        Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(Python)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/java.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>JAVA</Card.Title>
                                                    <Card.Text>
                                                        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(JavaFundamental)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <div className="animated fadeIn">
                                            <center>
                                                <div className="animated rotateIn">
                                                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/madjava.png"} style={{ width: "100%" }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>MOBILE APP DEVELOPMENT WITH JAVA</Card.Title>
                                                    <Card.Text>
                                                        This course teaches you how to program core features and classes from the Java programming language that are used in Android, which is the dominant platform for developing and deploying mobile device apps.
                                                    </Card.Text>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" onClick={() => handleClick(MobileAppDevelopmentWithJava)} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/certificate">SAMPLE CERTIFICATE</Link></Button>
                                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                                </Card.Body>
                                            </center>
                                        </div>
                                    </Card>
                                </Col>

                            </Row>
                            </div>
                            {/* END OF ROW_3 */}

                        </Container>
                    </CardGroup>

                </div>

                {visibility && <SyllabusModal container={data} closeModal={closeModal} />}
        </>
    )
}

export default Courses;