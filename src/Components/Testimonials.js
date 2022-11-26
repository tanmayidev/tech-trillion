import './Testimonials.css'
import { Card, CardGroup } from 'react-bootstrap';

function Testimonials() {
    return (
        <>
        <center><h1>Testimonials</h1></center>
        <div className="Testimonials">
            <CardGroup>
                <Card>
                <div className="animated rotateIn">
                    <center>
                    <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/Harsh.jpg"} />
                    <Card.Body>
                        <Card.Title>Harsh</Card.Title>
                        <Card.Text>
                            In terms of feedback, I've really enjoyed what I've been able to do on the course and have found the lectures helpful, certainly in terms of demonstration. It's certainly felt worthwhile and added more scope to just the basic course.
                        </Card.Text>
                    </Card.Body>
                    </center>
                    </div>
                </Card>
                <Card>
                <div className="animated rotateIn">
                    <center>
                    <Card.Img alt="" variant="top" src={process.env.PUBLIC_URL + "/Images/Jane Doe.jpg"} />
                    <Card.Body>
                        <Card.Title>Jane Doe</Card.Title>
                        <Card.Text>
                            Practice, practice and more practice. You can't become a programmer if you only read books. Ive been programming for couple of years and this website helped me to develop my coding skills really fast.
                        </Card.Text>
                    </Card.Body>
                    </center>
                    </div>
                </Card>
                <Card>
                <div className="animated rotateIn">
                    <center>
                    <Card.Img alt="" src={process.env.PUBLIC_URL + "/Images/Lakshmi.jpg"} />
                    <Card.Body>
                        <Card.Title>Lakshmi</Card.Title>
                        <Card.Text >
                            I'm impressed with the course so far. The tasks are challenging, but the immediate feedback I get on the website has been tremendously helpful. The amount of high-quality content in TecTrillion is amazing.
                        </Card.Text>
                    </Card.Body>
                    </center>
                    </div>
                </Card>
            </CardGroup>
        </div>
        </>
    )
}

export default Testimonials;