import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'

const Home = () => {
    const dd =
        <Container>
            <Row>
                <Col md={12}>
                    <Card>
                        <Container style={{padding:20}}>
                        <h3 style={{color:'#8E233D',fontFamily:"Marcellus SC', serif"}}>Welcome to Hotel Jyoti</h3>
                        <span> Hotel Jyoti, Bikaner is a perfect for business and leisure travelers. The hotel is situated inside the complex of one of the most beautiful palaces here, known as the Lallgarh Palace. Hotel Jyoti, Bikaner is one of the best Hotels in Rajasthan. Hotel Jyoti is a charming blend of Indian and European style of architecture. Apart from it's comfortable rooms with all modern amenities, it also provides excellent cuisine and local delicacies. Read more The feel, ambience and openness has been maintained and enhanced. We offer spacious, well furnished rooms with all modern amenities in pleasant, quite and luxurious surroundings. Each room is carved out in such a manner so as to give maximum space to the guest. Visit our photo gallery to explore our hotel. The desert city of Bikaner The desert city of Bikaner was founded in 1488 A.D, by Rao Bika, the son of the king of Jodhpur. Strategically located on the important trade routes, Bikaner soon became a prosperous urban centre, famous for its cuisine, arts and crafts, and also for its camels. For the visitor, Bikaner gives a taste of the real desert life The Hotel Jyoti, Bikaner is also good for business travelers because they can avail various business facilities here. They can arrange meetings and seminars at the conference room of the hotel. They can also make use of the fax machines and the Internet facility. As far as recreation is concerned the hotel offers safaris and excursions for their guests. Thus the Hotel Jyoti, Bikaner is a good place to book a room if you want to enjoy your stay in Bikaner.</span>
                        </Container>
                   </Card>
                </Col>
            </Row>
        </Container>
    return (
            <Layout data={dd} />
        );
}

//  <Layout  /> 

export default Home;
