import './PopularCourses.css'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const techtrillion = "https://techtrillion.in"
const localhost = "http://localhost:3000"

function PopularCourses() {
    return (
        <>
        <center><h1>Our Popular Courses</h1></center>
            <div className='animatedParent'>
                <div className="overlay-card-container">
                    <div className="animated bounceIn">
                        <div className="overlay-card" style={{backgroundImage:`url(${techtrillion}/Images/pythonPopular.png`}}>
                            <div className="card-content">
                                <h3>PYTHON</h3>
                                <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/courses">CHECK OUT</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div className="animated bounceInDown">
                        <div className="overlay-card"  style={{backgroundImage:`url(${techtrillion}/Images/javaPopular.png`}}>
                            <div className="card-content">
                                <h3>JAVA</h3>
                                <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/courses">CHECK OUT</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div className="animated bounceIn">
                        <div className="overlay-card"  style={{backgroundImage:`url(${techtrillion}/Images/cPopular.png`}}>
                            <div className="card-content">
                                <h3>C LANGUAGE</h3>
                                <Button className="btn btn-default btn-lg btn-block responsive-width" style={{ width: "60%", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "0.98rem" }} variant=""><Link style={{ textDecoration: "none", color: "#000" }} to="/courses">CHECK OUT</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopularCourses;