import './NavbarComp.css'
import {
    Navbar,  
    Nav, 
    Container,
} from 'react-bootstrap'
import {Link} from 'react-router-dom'


  function NavbarComp() {
    return (
        <div className="NavigationBar">
            <Navbar collapseOnSelect expand="lg" bg="transparent">
                <Container>
                    <Link className="navbar-brand" to="/tech-trillion">
                        <img alt="" src={process.env.PUBLIC_URL + "/Images/navlogo.png"} />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/tech-trillion" className="nav-link" style={{textDecoration:"none"}}>HOME</Link>
                                <Link to="/tech-trillion/courses" className="nav-link" style={{textDecoration:"none"}}>COURSES</Link>
                                <Link to="/tech-trillion/services" className="nav-link" style={{textDecoration:"none"}}>SERVICES</Link>
                                <Link to="/tech-trillion/about" className="nav-link" style={{textDecoration:"none"}}>ABOUT</Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default NavbarComp
