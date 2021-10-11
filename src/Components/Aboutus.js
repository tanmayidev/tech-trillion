import { Card } from "react-bootstrap";
import './Aboutus.css'
import Counter from "./Counter";

function Aboutus() {
    return (
        <Card className="Aboutus">
            <Card.Body className="Aboutus-body">
            <center><h1>What we do?</h1></center>
            <br/><br/>
                <Card.Text>
                <img className="Aboutus-image-reach-out" alt="" src="/Images/reach-out.png" />
                <h2>We've got you covered!</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, lorem sit amet lobortis molestie, nulla dui tristique lorem, id dapibus turpis eros vitae eros. Nulla elit est, dignissim nec iaculis at, aliquet nec metus. Nulla facilisi. Vivamus elementum ex vel justo consectetur accumsan. Curabitur sed volutpat odio. Morbi vehicula posuere convallis. Quisque efficitur interdum mi ut feugiat. Maecenas vel interdum ex. Quisque in lacinia urna. Duis sit amet gravida erat, id vestibulum massa. Praesent mattis hendrerit lacus. Suspendisse at neque hendrerit, consectetur neque vitae, dapibus lorem. Phasellus fermentum laoreet pretium. Suspendisse nec nisl eu eros efficitur convallis. Fusce accumsan nisl in justo eleifend, tincidunt eleifend neque viverra.
                <br/><br/><img className="Aboutus-image-reach-grab" alt="" src="/Images/reach-grab.png" /><br/><br/>
                <h2>Join us!</h2>
                Nulla fermentum orci vel iaculis luctus. Nulla vulputate tempor pharetra. Nulla efficitur magna lectus, eget ultricies nibh gravida quis. Morbi ornare tortor in mi placerat, vitae porttitor libero mattis. Ut semper magna placerat, mollis risus non, fringilla elit. Mauris cursus felis et commodo condimentum. Proin mollis ipsum vel turpis facilisis, nec fringilla lacus posuere. Vestibulum quis aliquet erat, id sodales elit. Donec tempus ornare tortor, in aliquet mauris dictum quis. Praesent gravida sit amet nisl sit amet varius. Nunc vitae velit ut orci aliquet porttitor id in nulla. Sed sit amet augue nec odio tempor malesuada. Pellentesque urna mauris, mollis quis convallis vitae, convallis vitae est. Proin posuere urna ultricies euismod vulputate.
                <br/><br/><br/><br/><br/><br/>
                <center><h1>Why choose us?</h1></center>
                <br/><br/>
                <Counter />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Aboutus;