import { Card } from "react-bootstrap";
import './Aboutus.css'
import Counter from "./Counter";

function Aboutus() {
    return (
        <div className="animatedParent">
        <Card className="Aboutus">
        <div className="animated growIn">
            <Card.Body className="Aboutus-body">
            <center><h1>What we do?</h1></center>
            <br/><br/>
                <Card.Text>
                <div className="animated rotateIn">
                <img className="Aboutus-image-reach-out" alt="" src= {process.env.PUBLIC_URL + "/Images/reachOut.png"}/>
                </div>
                <h2>We've got you covered!</h2>
                Software development courses make TechTrillion to be an exclusive and best training center among various players in Bangalore. According to us, every student is special and unique. Few are placed in the first attempt of the interview, whereas the rest are more equipped and enabling them to shine in the next attempt. We arrange for unlimited interviews and never fail to support the individuals. TechTrillion provides globally accredited certificate courses in Bangalore for IT related subjects. The training program at TechTrillion provides a very interactive classroom training for theory lessons and focuses more on practical, lab sessions. They also provide regular test series and doubt clearing sessions to make sure that the students are well-trained. The curriculum for the different courses is designed according to the latest requirements of the IT industry. We have had thousands of students who have enrolled themselves at Besant Technologies, and we have helped them climb the ladder of success. The IT industry is booming, and the demand for skilled workers is high in the professional world. TechTrillion provides adequate training and placement assistance to get lucrative jobs. Besant Technologies conducts placement assistance sessions like mock interviews, and personality development sessions to make students ready for any job interview. The IT world does not have only demand great skills and knowledge but also wants employees with great communication skills and an enthralling personality. TechTrillion provides just that through the various sessions. TechTrillion have a fully operational placement cell for aspiring candidates. TechTrillion has arranged for more than 1000 interviews with leading IT forms and has attained a 95% success rate. It has more than 2000 students placed successfully in leading job posts. You can check the list of the successfully placed students in the placements category of TechTrillion. TechTrillion have a fully operational placement cell for aspiring candidates. TechTrillion has arranged for more than 1000 interviews with leading IT forms and has attained a 95% success rate. It has more than 2000 students placed successfully in leading job posts. You can check the list of the successfully placed students in the placements category of TechTrillion.
                <br/><br/><div className="animated rotateIn"><img className="Aboutus-image-reach-grab" alt="" src={process.env.PUBLIC_URL + "/Images/reach-grab.png"} /></div><br/><br/>
                <h2>Join us!</h2>
                We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs. Our open culture focuses on teamwork, integrity and transparency. We don’t have fixed ideologies and expect you to fit into the system. We encourage innovation and out-of-the-box thinking. We want our people to tell us how they can create more business value for our clients through smarter ways of working.
                <br/><br/><br/><br/><br/><br/>
                <center><h1>Why choose us?</h1></center>
                <br/><br/>
                <Counter />
                </Card.Text>
            </Card.Body>
            </div>
        </Card>
        </div>
    )
}

export default Aboutus;