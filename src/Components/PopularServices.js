import './PopularServices.css'
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function PopularServices() {
    return (
        <>
            <center><h1>Our Popular Services</h1></center>
            <div className="PopularServices">
                <CardGroup>
                    <Card>
                        <div className="animated bounceIn">
                            <center>
                                <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/softskills.jpg"} />
                                <Card.Body>
                                    <Card.Title>SOFT SKILLS</Card.Title>
                                    <Card.Text>
                                        Soft skills, also known as power skills, common skills or core skills, are skills applicable to all professions.
                                    </Card.Text>
                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/services">EXPLORE</Link></Button>
                                </Card.Body>
                            </center>
                        </div>
                    </Card>
                    <Card>
                        <div className="animated bounceIn">
                            <center>
                                <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/internship.jpg"} />
                                <Card.Body>
                                    <Card.Title>INTERNSHIP</Card.Title>
                                    <Card.Text>
                                        A period of time during which a student, a newly qualified professional or a recent graduate gets practical experience in a job
                                    </Card.Text>
                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/services">EXPLORE</Link></Button>
                                </Card.Body>
                            </center>
                        </div>
                    </Card>
                    <Card>
                        <div className="animated bounceIn">
                            <center>
                                <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/tuitions.jpg"} />
                                <Card.Body>
                                    <Card.Title>ON-CAMPUS TRAINING</Card.Title>
                                    <Card.Text>
                                        Technical training is a type of training meant to teach the new employee the technological aspects of the job. In a retail environment, technical training might include teaching someone how to use the computer system to ring up customers.
                                    </Card.Text>
                                    <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/services">EXPLORE</Link></Button>
                                </Card.Body>
                            </center>
                        </div>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default PopularServices;