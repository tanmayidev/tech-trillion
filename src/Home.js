import PopularCourses from './Components/PopularCourses'
import PopularService from './Components/PopularServices'
import Testimonials from './Components/Testimonials'
import Counter from './Components/Counter'
import CarouselBox from './Components/CarouselBox'

export default function Home() {
    return (
        <>
        <CarouselBox />
        <div className="animatedParent">
        <PopularCourses />
        </div>
        <br/>
        <br/>
        <div className="animatedParent">
        <PopularService />
        </div>
        <br/>
        <br/>
        <div className="animatedParent">
        <Testimonials />
        </div>
        <br/>
        <br/>
        <br/>
        <Counter />
        </>
    )
}