import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
// import logo from '../images/logo.png'
import sliderdata from '../data/sliderdata'  
function Slider() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <Carousel>
                        {
                            sliderdata.map((u,i)=>{
                              return  <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100"
                                    src={u.image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            })
                        }

                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export default Slider;
