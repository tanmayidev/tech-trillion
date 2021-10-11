import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import './CarouselBox.css'

export default function CarouselBox() {
    return(
        <div className="slide">
            <AliceCarousel disableDotsControls={true} autoPlay={true} infinite={true} autoPlayInterval="2000">
                <img alt="" src={process.env.PUBLIC_URL + "/Images/tutorial-banner.png"} className="slidering" />
                <img alt="" src={process.env.PUBLIC_URL + "/Images/guidance-banner.png"} className="slidering" />
                <img alt="" src={process.env.PUBLIC_URL + "/Images/developer-banner.png"} className="slidering" />
            </AliceCarousel>
        </div>
    )
}