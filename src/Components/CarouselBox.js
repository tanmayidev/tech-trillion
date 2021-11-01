import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import './CarouselBox.css'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function CarouselBox() {
    return (
        <AliceCarousel disableDotsControls={true} autoPlay={true} infinite={true} autoPlayInterval="2000">
            <div id="slide1">
                <img alt="" src="/Images/onlineClass-banner.jpg"/>
                <h1>Amazing Courses!</h1>
                <Link to="/courses"><Button className="button">Learn More!</Button></Link>
            </div>
            <div id="slide2">
                <img alt="" src="/Images/guidance-banner.jpg"/>
                <h1>Expert Guidance</h1>
                <Link to="/services"><Button className="button">Learn More!</Button></Link>
            </div>
            <div id="slide3">
                <img alt="" src="/Images/aboutUs-banner.jpg"/>
                <h1>Amazing Tutorials</h1>
                <Link to="/about"><Button className="button">Learn More!</Button></Link>
            </div>
        </AliceCarousel>
    )
}