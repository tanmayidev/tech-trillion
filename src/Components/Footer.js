import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="Footer" >
            <div style={{backgroundColor:"#000", marginTop:"5%"}}>
            <div className="container">
                    <br/>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/">TERMS AND CONDITIONS</Link>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/">REFUNDS AND CANCELLATIONS</Link>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/">PRIVACY POLICY</Link>
            </div>
            <p>© 2021 – Tech Trillion Pvt.Ltd</p>
            <div className="container">
            <Link style={{textDecoration:"none", color:"#000"}} to="/"> 
            <img alt="" src={process.env.PUBLIC_URL + "/Images/twitter.png"} />
            </Link> 
            <Link style={{textDecoration:"none", color:"#000"}} to="/">    
            <img alt="" src={process.env.PUBLIC_URL + "/Images/linkedin.png"} />
            </Link>
            </div>
            </div>
            
            
        </div>
    )
}

export default Footer