import './Courses.css'
import { Card, CardGroup, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Courses() {

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* MODAL-FOR-SYLLABUS */}
            <Modal className="my-modal" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>SYLLABUS</Modal.Header>
                <Modal.Body>
                    <ul>
                        <li style={{ padding: "5px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li style={{ padding: "5px" }}>Aliquam tincidunt mauris eu risus.</li>
                        <li style={{ padding: "5px" }}>Vestibulum auctor dapibus neque.</li>
                        <li style={{ padding: "5px" }}>Nunc dignissim risus id metus.</li>
                        <li style={{ padding: "5px" }}>Cras ornare tristique elit.</li>
                        <li style={{ padding: "5px" }}>Vivamus vestibulum ntulla nec ante.</li>
                        <li style={{ padding: "5px" }}>Praesent placerat risus quis eros.</li>
                        <li style={{ padding: "5px" }}>Fusce pellentesque suscipit nibh.</li>
                        <li style={{ padding: "5px" }}>Integer vitae libero ac risus egestas placerat.</li>
                        <li style={{ padding: "5px" }}>Vestibulum commodo felis quis tortor.</li>
                        <li style={{ padding: "5px" }}>Ut aliquam sollicitudin leo.</li>
                        <li style={{ padding: "5px" }}>Cras iaculis ultricies nulla.</li>
                        <li style={{ padding: "5px" }}>Donec quis dui at dolor tempor interdum.</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} style={{ background: "rgba(143, 201, 254, 1)", borderRadius: "11px", height: "40px", width: "180px" }} variant=''>
                        Apply Now
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* END-OF-MODAL-FOR-SYLLABUS */}

            
            <div className="Courses">
            <h1 className="cour-header">COURSES</h1>
                <CardGroup>
                    <Container>
                        {/* ROW-1 */}
                        <Row>
                            <Col>
                                <Card >
                                    <center>
                                        <Card.Img alt="" variant="top" src="/Images/devops.png" />
                                        <Card.Body>
                                            <Card.Title>DEV OPS</Card.Title>
                                            <Card.Text>
                                            DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" variant="top" src="/Images/react.png" />
                                        <Card.Body>
                                            <Card.Title>REACT</Card.Title>
                                            <Card.Text>
                                            React is a free and open-source front-end JavaScript library for building user interfaces or UI components.It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/react-native.png" />
                                        <Card.Body>
                                            <Card.Title>REACT NATIVE</Card.Title>
                                            <Card.Text>
                                            React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                        </Row>
                        {/* END OF ROW_1 */}

                        {/* ROW-2 */}
                        <Row>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/hacking.png" />
                                        <Card.Body>
                                            <Card.Title>ETHICAL HACKING</Card.Title>
                                            <Card.Text>
                                            Certified Ethical Hacker is a qualification obtained by demonstrating knowledge of assessing the security of computer systems by looking for weaknesses and vulnerabilities in target systems
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/cloud.png" />
                                        <Card.Body>
                                            <Card.Title>AWS</Card.Title>
                                            <Card.Text>
                                            Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/sql.png" />
                                        <Card.Body>
                                            <Card.Title>SQL</Card.Title>
                                            <Card.Text>
                                            SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                        </Row>
                        {/* END OF ROW_2 */}

                        {/* ROW-3 */}
                        <Row>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/python.png" />
                                        <Card.Body>
                                            <Card.Title>PYTHON PROGRAMMING</Card.Title>
                                            <Card.Text>
                                            Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/ruby.png" />
                                        <Card.Body>
                                            <Card.Title>RUBY ON THE RAILS</Card.Title>
                                            <Card.Text>
                                            Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection and just-in-time compilation.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <center>
                                        <Card.Img alt="" src="/Images/mobile-app-dev.png" />
                                        <Card.Body>
                                            <Card.Title>MOBILE APP DEVELOPMENT</Card.Title>
                                            <Card.Text>
                                            Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.
                                            </Card.Text>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width"  onClick={handleShow} style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SYLLABUS</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">PREREQUISITES</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE LECTURE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="/certificate" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">SAMPLE CERTIFICATE</Button>
                                            <Button className="btn btn-default btn-lg btn-block responsive-width" href="#" style={{ width: "70%", background: "rgba(143, 201, 254, 1)", margin: "2%", fontFamily: "Roboto", fontSize: "medium" }} variant="">APPLY NOW</Button>
                                        </Card.Body>
                                    </center>
                                </Card>
                            </Col>

                        </Row>
                        {/* END OF ROW_3 */}

                    </Container>
                </CardGroup>
            </div>
        </>
    )
}

export default Courses;