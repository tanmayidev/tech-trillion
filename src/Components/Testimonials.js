import './Testimonials.css'
import { Card, CardGroup } from 'react-bootstrap';

function Testimonials() {
    return (
        <>
        <center><h1>Testimonials</h1></center>
        <div className="Testimonials">
            <CardGroup>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="./Images/speak.png" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            I like this website a lot, This website helped me achieve several things.
                            It made me get a placed in a good company. I am grateful for Tech Trillion.
                        </Card.Text>
                    </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" variant="top" src="./Images/speak.png" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            I like this website a lot, This website helped me achieve several things.
                            I got an A grade for my project in college. They not only helped me with finding the project but also explained it well.
                        </Card.Text>
                    </Card.Body>
                    </center>
                </Card>
                <Card>
                    <center>
                    <Card.Img alt="" src="./Images/speak.png" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text >
                            I like this website a lot, This website helped me achieve several things.
                            I got good scores in my classes after I joined the tuitions for engineering mathematics. The tuition prices are more affordable and quality is much better.
                        </Card.Text>
                    </Card.Body>
                    </center>
                </Card>
            </CardGroup>
        </div>
        </>
    )
}

export default Testimonials;