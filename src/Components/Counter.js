import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import './Counter.css'


function Counter() {
    return (
        <div className="Counter">
            <div className="item" >
                <center>
                    <img src={process.env.PUBLIC_URL + "/Images/hourglass.png"} alt="" />
                    <div>
                        <div>
                            <CountUp end={5} duration={1} suffix="+">
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div>
                            Years of Experience
                        </div>
                    </div>
                </center>
            </div>
            <div className="item">
                <center>
                <img src={process.env.PUBLIC_URL + "/Images/class.png"} alt="" />
                <div>
                    <div>
                        <CountUp end={600} duration={1} suffix="+">
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>
                    </div>
                    <div>
                        Classes Conducted
                    </div>
                </div>
                </center>
            </div>
            <div className="item">
                <center>
                <img src={process.env.PUBLIC_URL + "/Images/people.png"} alt="" />
                <div>
                    <div >
                        <CountUp end={2000} duration={1} suffix="+">
                            {({ countUpRef, start }) => (
                                <ReactVisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />
                                </ReactVisibilitySensor>
                            )}
                        </CountUp>
                    </div>
                    <div >
                        Professionals Trained
                    </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Counter;