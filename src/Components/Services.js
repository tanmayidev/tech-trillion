import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <>
            <h1 className="ser-header">SERVICES</h1>
            <div className="services">
                <div className="animatedParent">
                    <Card>
                        <div className="animated fadeInUp">
                            <Card.Title id="ser-title">On-Campus</Card.Title>
                            <Card.Body>The college campus training course is a full-fledged course that enables engineering students to gain absolute exposure and fine knowledge of the outside world while still at campus.

                                The college campus training is an important part of student’s educational journey as it teaches all the important attributes very necessary for a student to know before entering the corporate life.

                                TechTrillion targets students to provide them with knowledge that makes them better than the lot and a first choice for the employers. All branches of inspizone provide quality practical knowledge of the corporate world to the students.</Card.Body>
                            <Button className="btn btn-default btn-lg btn-block responsive-width"
                                style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%", borderRadius: "25px", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "medium" }} variant="">
                                LEARN MORE
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="animatedParent">
                    <Card>
                        <div className="animated fadeInUp">
                            <Card.Title id="ser-title">Intership Projects</Card.Title>
                            <Card.Body>A period of time during which a student, a newly qualified professional or a recent graduate gets practical experience in a job</Card.Body>
                            <Button className="btn btn-default btn-lg btn-block responsive-width"
                                style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%", borderRadius: "25px", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "medium" }} variant="">
                                LEARN MORE
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="animatedParent">
                    <Card>
                        <div className="animated fadeInUp">
                            <Card.Title id="ser-title">Soft Skills</Card.Title>
                            <Card.Body>Soft skills, also known as power skills, common skills or core skills, are skills applicable to all professions.</Card.Body>
                            <Button className="btn btn-default btn-lg btn-block responsive-width"
                                style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%", marginBottom: "2%", borderRadius: "25px", background: "rgba(143, 201, 254, 1)", fontFamily: "Roboto", fontSize: "medium" }} variant="">
                                LEARN MORE
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Services;