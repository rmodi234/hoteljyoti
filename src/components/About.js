import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'

const About = () => {
    const dd =
        <Container>
            <Row>
                <Col md={12}>
                    <Card style={{padding:20}}>
                   <h1 style={{color:'#8E233D',fontFamily:"Marcellus SC', serif"}}>About Us</h1> 
                   <p>Hotel Jyoti, Bikaner is a perfect for business and leisure travelers. The hotel is situated on main ganganagar road, just in front of Urmul dairy. The hotel is situated on a walking distance from main rajasthan roadways bus stand. Hotel Jyoti, Bikaner is one of the best Hotels in Rajasthan. Apart from it's comfortable rooms with all modern amenities, it also provides excellent cuisine and local delicacies. The rooms available to travelers at this hotel are provided with twin and single beds. All the rooms have air-conditioners installed for your comfort. Other facilities available in the rooms are refrigerators, satellite televisions and telephones with international direct dialing facility. There are safety deposit boxes in the rooms. The bathrooms are all attached to the living rooms. The rooms are well decorated. There is a travel desk in the hotel that will help travelers to go for sightseeing or excursions. The hotel accepts all kinds of cards thus making payment an easy business. The laundry service will take care of your clothes. You can park your car at the parking place here. The dining facility of the hotel is very good. The restaurants serve cuisines in a very relaxing ambiance. The bar has good stocks of beverages. The Hotel Jyoti, Bikaner is also good for business travelers because they can avail various business facilities here. They can arrange meetings and seminars at the conference room of the hotel. They can also make use of the fax machines and the Internet facility. As far as recreation is concerned the hotel offers safaris and excursions for their guests. Thus the Hotel Jyoti, Bikaner is a good place to book a room if you want to enjoy your stay in Bikaner.</p>                    
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

export default About;
