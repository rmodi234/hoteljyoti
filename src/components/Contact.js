import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'
import GoogleMapReact from 'google-map-react';
const zoom = 14
const latlng = {
    lat: 28.03397,
    lng: 73.31044
}
const AnyReactComponent = ({ text }) => <div><img alt='dd' src="https://image.flaticon.com/icons/png/24/1290/premium/1290478.png"/></div>;
const Contact = () => {
    const dd =
        <Container >
            <Row>
                <Col md={12}>
                    <Card style={{ padding: 20 }}>
                        <h1 style={{ color: '#8E233D', fontFamily: "Marcellus SC', serif" }} >Contact</h1>
                        <Col md={12}>
                            <Row>
                                <Col md={6}>
                                    <Container>
                                       <h3 style={{ marginRight:20, marginTop:20, fontSize:"20px", color:'#666',fontFamily:'Spirax ,cursive',lineHeight:"30px"}}>Address:Hotel Jyoti<br/>
                                        Ganganagar Road<br/>
                                        Opp. Urmul Dairy<br/>
                                        Bikaner<br/>
                                        +91-151-2251080<br/>
                                        +91-7597239942<br/>
                                        +91-9828238745<br/>
                                        info@hoteljyotibikaner.com<br/>
                                        </h3>
                                    </Container>
                                </Col>
                                <Col md={6}>
                                    <Container style={{ width: 500, height: 400 }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyDvDNac0G2qnP71PBjWXrJA1qsjqyk6R2o' }}
                                            defaultCenter={latlng}
                                            defaultZoom={zoom}
                                        >
                                            <AnyReactComponent
                                                lat={28.03397}
                                                lng={73.31044}
                                                text="My Marker"
                                            />
                                        </GoogleMapReact >
                                    </Container>



                                </Col>
                            </Row>

                        </Col>

                    </Card>
                </Col>
            </Row>
        </Container>
    return (
        <div>
            <Layout data={dd} />
        </div>
    );
}

//  <Layout  /> 

export default Contact;
