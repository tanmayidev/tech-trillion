import './PopularCourses.css'
import { Button, Card, CardGroup } from 'react-bootstrap';

function PopularCourses() {
    return (
        <>
        <center><h1>OUR Popular Courses</h1></center>
        <div className="PopularCourses">
            <CardGroup>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="/Images/python.png" />
                    <Card.Body>
                        <Card.Title>Learn Python</Card.Title>
                        <Card.Text>
                            8h 35min
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/courses" style={{ width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button>
                    </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="/Images/devops.png" />
                    <Card.Body>
                        <Card.Title>Dev Ops</Card.Title>
                        <Card.Text>
                            30h 35min
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/courses" style={{  width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button>
                    </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" src="/Images/cloud.png" />
                    <Card.Body>
                        <Card.Title>Cloud Computing</Card.Title>
                        <Card.Text>
                            10h 35min
                        </Card.Text>
                        <Button className="btn btn-default btn-lg btn-block responsive-width" href="/courses" style={{  width:"60%",background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"0.98rem" }} variant="">EXPLORE</Button>
                    </Card.Body>
                    </center>
                </Card>
            </CardGroup>
        </div>
        </>
    )
}

export default PopularCourses;