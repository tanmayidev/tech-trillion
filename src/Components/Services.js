import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Services.css'

const Services = () =>{
    return(
        <div className="services">
            <h1 className="ser-header">SERVICES</h1>
                <Card>
                    <Card.Title id="ser-title">8-10th Tutions</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
               <Button className="btn btn-default btn-lg btn-block responsive-width" 
                    style={{ marginLeft:"5%", marginRight:"5%", marginTop:"2%",marginBottom:"2%", borderRadius:"25px", background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"medium"}} variant="">
                        LEARN MORE
               </Button>
                </Card>
            
                <Card>
                    <Card.Title id="ser-title">Intership Projects</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
               <Button className="btn btn-default btn-lg btn-block responsive-width" 
                    style={{ marginLeft:"5%", marginRight:"5%", marginTop:"2%",marginBottom:"2%", borderRadius:"25px",  background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"medium"}} variant="">
                        LEARN MORE
               </Button>
                </Card>
                
                <Card>
                    <Card.Title id="ser-title">Soft Skills</Card.Title>
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Body>
               <Button className="btn btn-default btn-lg btn-block responsive-width" 
                    style={{ marginLeft:"5%", marginRight:"5%", marginTop:"2%",marginBottom:"2%", borderRadius:"25px",  background: "rgba(143, 201, 254, 1)", fontFamily:"Roboto", fontSize:"medium"}} variant="">
                        LEARN MORE
               </Button>
                </Card>
        </div>
    )
}
export default Services;