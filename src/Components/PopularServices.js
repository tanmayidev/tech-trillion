import './PopularServices.css'
import { Card, CardGroup, Button } from 'react-bootstrap';

function  PopularServices() {
    return (
        <>
        <center><h1>Our Popular Services</h1></center>
        <div className="PopularServices">
            <CardGroup>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="/Images/softskills.png" />
                    <Card.Body>
                        <Card.Title>SOFT SKILLS</Card.Title>
                        <Card.Text>
                            I like this website a lot, This website helped me achieve several things
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/services" style={{  width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button><br/><br/><br/>  
                    </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="/Images/internship.png" />
                    <Card.Body>
                        <Card.Title>INTERNSHIP</Card.Title>
                        <Card.Text>
                            I like this website a lot, This website helped me achieve several things
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/services" style={{  width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button><br/><br/><br/>                     
                        </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" src="/Images/tuitions.png" />
                    <Card.Body>
                        <Card.Title>TUITIONS</Card.Title>
                        <Card.Text>
                            I like this website a lot, This website helped me achieve several things
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/services" style={{  width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button><br/><br/><br/>                    
                        </Card.Body>
                    </center>
                </Card>
            </CardGroup>
        </div>
        </>
    )
}

export default PopularServices;