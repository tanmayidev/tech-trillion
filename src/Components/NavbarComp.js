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
                    <Link className="navbar-brand" to="/">
                        <img alt="" src={process.env.PUBLIC_URL + "/Images/navlogo.png"} />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-link" style={{textDecoration:"none"}}>HOME</Link>
                                <Link to="/courses" className="nav-link" style={{textDecoration:"none"}}>COURSES</Link>
                                <Link to="/services" className="nav-link" style={{textDecoration:"none"}}>SERVICES</Link>
                                <Link to="/about" className="nav-link" style={{textDecoration:"none"}}>ABOUT</Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default NavbarComp
