import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'

const Reservation = () => {
    const dd =
        <Container >
            <Row>
                <Col md={12}>
                    <Card style={{padding:20}}>
                   <h1 style={{color:'#8E233D',fontFamily:"Marcellus SC', serif"}} >Reservation</h1> 
                    <Container>
                        <Row>
                            <Col md={12} style={{padding:20}}>
                                <h2 style={{justifyContent:'center',display: 'flex',color:"#7B1112"}}>Book your Room now</h2>
                                <div style={{justifyContent:'center',display: 'flex',border:"1px solid black"}}>
                                <form style={{padding:20,alignContent:"center"}}>
                                    <h3 style={{color:"#7B1112"}}>Personal Details</h3>
                                     <label style={{color:"#7B1112",fontSize:15}}>Name: <input type="text" /></label><br />
                                     
                                     <label style={{color:"#7B1112",fontSize:15}}>E-mail Id: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Nationality : </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Arrival Date: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Arrival Time: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Arrival By: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Departure Date: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>City : </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>State : </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Contact Number: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Full Address: </label>
                                     <h3 style={{color:"#7B1112"}}>Booking Details</h3>
                                     <label style={{color:"#7B1112",fontSize:15}}>Total Persons : </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Total Rooms: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Room Type: </label>
                                     <input type="text" /><br />
                                     <label style={{color:"#7B1112",fontSize:15}}>Remarks: </label>
                                     <input type="text" /><br />
                                     <button  className="btn btn-primary">Submit</button>
                                </form>         
                                </div>
                     
                            </Col>
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

export default Reservation;
