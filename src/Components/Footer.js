import './Footer.css'

function Footer() {
    return (
        <div className="Footer" >
            <div style={{backgroundColor:"#000", marginTop:"5%"}}>
            <div className="container">
                    <br/>
                    <a href = "/">TERMS AND CONDITIONS</a>
                    <a href = "/">REFUNDS AND CANCELLATION</a>
                    <a href = "/">PRIVACY POLICY</a>
            </div>
            <p>© 2021 – Tech Trillion Pvt.Ltd</p>
            <div className="container">
             <a href="/">   
            <img alt="" src="./Images/twitter.png" />
            </a>
            <a href="/">   
            <img alt="" src="./Images/linkedin.png" />
            </a>
            </div>
            </div>
            
            
        </div>
    )
}

export default Footer