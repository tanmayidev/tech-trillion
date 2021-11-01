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
                                        I like this website a lot, This website helped me achieve several things
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
                                        I like this website a lot, This website helped me achieve several things
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
                                    <Card.Title>TUITIONS</Card.Title>
                                    <Card.Text>
                                        I like this website a lot, This website helped me achieve several things
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