import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bgimagef from '../images/footer_bg.png'
import {
Link

  } from "react-router-dom";

function Navbars() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        {/* <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <Nav.Link href="/gallery">Hotel Gallery</Nav.Link>
                                    <Nav.Link href="/bikaner">Bikaner</Nav.Link>
                                    <Nav.Link href="/reservation">Reservation</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar> */}
                                <div style={{ backgroundImage: `url(${bgimagef})`,height:100,textAlign:"center",paddingTop:40 }}>
                                    {/* <span style={{color:'#fff'}}>Hotel jyoti</span>*/}
                                    <ul style={{listStyleType:"none",color:'#FFF',fontWeight:"bold"}}>
                                        <li style={{display:"inline",padding:50}}><Link to="/" style={{color:'#FFF'}}>Home</Link></li>
                                        <li style={{display:"inline",padding:50}}><Link to="/about" style={{color:'#FFF'}}>About Us</Link></li>
                                        <li style={{display:"inline",padding:50}}><Link to="/gallery" style={{color:'#FFF'}}>Gallery</Link></li>
                                        <li style={{display:"inline",padding:50}}><Link to="/bikaner" style={{color:'#FFF'}}>Bikaner</Link></li>
                                        <li style={{display:"inline",padding:50}}><Link to="/reservation" style={{color:'#FFF'}}>Reservation</Link></li>
                                        <li style={{display:"inline",padding:50}}><Link to="/contact" style={{color:'#FFF'}}>Contact</Link></li>
                                    </ul>
                                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export default Navbars;
