import "./Header.css"

function Header() {

    return (
        <div className="Header">
            <div>
                <div className="container">
                    <a href="/">info@techtrillion.com</a>
                    <div style={{width:`150px`}}>
                        <img style={{width: "12px", height: "12px"}} src="/Images/phone-call.png" alt=""/>
                        <a>+91 6361 167 740 </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header