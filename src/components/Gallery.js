import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'
import sliderdata from '../data/sliderdata'
const Gallery = () => {
    const dd =
        <Container >
            <Row>
                <Col md={12}>
                    <Card style={{ padding: 20 }}>
                        <h1 style={{ color: '#8E233D', fontFamily: "Marcellus SC', serif" }} >Gallery</h1>




                        <Container style={{ padding: 20 }}>
                            <Row>
                                {

                                    sliderdata.map((u, i) => {
                                        return <Col md={4}>
                                            <img style={{ display: "inline",marginTop:20 }} src={u.image} alt='slider' key={i} height={150} width={200} />
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>



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

export default Gallery;
