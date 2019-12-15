import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col'
import logo from '../images/logo.png'  
function Header(){
    return(
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <img src={logo} alt="some" />
                    </Col>
                </Row>
            </Container>    
        </div>
    );


}    

export default Header;
