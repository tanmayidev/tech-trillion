import PopularCourses from './Components/PopularCourses'
import PopularService from './Components/PopularServices'
import Testimonials from './Components/Testimonials'
import Counter from './Components/Counter'
import CarouselBox from './Components/CarouselBox'

export default function Home() {
    return (
        <>
        <CarouselBox />
        <PopularCourses />
        <br/>
        <br/>
        <PopularService />
        <br/>
        <br/>
        <Testimonials />
        <br/>
        <br/>
        <br/>
        <Counter />
        </>
    )
}