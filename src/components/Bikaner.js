import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'

const Bikaner = () => {
    const dd =
        <Container >
            <Row>
                <Col md={12}>
                    <Card style={{padding:20}}>
                   <h1 style={{color:'#8E233D',fontFamily:"Marcellus SC', serif"}} >Bikaner</h1> 
                   <p>The desert city of Bikaner was founded in 1488 A.D, by Rao Bika, the son of the king of Jodhpur. Strategically located on the important trade routes, Bikaner soon became a prosperous urban centre, famous for its cuisine, arts and crafts, and also for its camels. For the visitor, Bikaner gives a taste of the real desert life. guests can admire the beautiful old forts and palaces, visit the medival havelis in the old city, taste the local culinary delicacies and even head out into the desert for a camel ride and a camp fire with local musicians and dancers. Bikaner is known for its invincible fort, palaces, royal cenatophs, the temple with thousands of rats, havelis, desert camping and sweets. Bikaneri bhujia is famous world over. This mouth tingling preperation has given bikaner a unique approach worldover in the food snacks industry. Lying in the north of the desert state, the city is dotted with scores of sand dunes. Bikaner retains the medieval grandeur that permeates the city's lifestyle. More readily called the camel country, the city is distinguished for the best riding camels in the world and hence boasts of having one of the largest Camel research and breeading farm in the world. The ship of the desert is an inseparable part of life here. A camel besides doing transportation duties, also works on wells. These are built on high plinths with slender minarets on each of the four corners and can be noticed even from a distance. You can get to Bikaner by train, but it is best to drive there. From Jaipur to Bikaner (449 km) runs a superb road, National Highway No. 11. From Delhi it is 510 km via Rohtak Hissar (Haryana), Sadulpur and Ratangarh, another good highway. From Jodhpur to Bikaner is 240 km The Jaipur-Bikaner road is a remarkable highway. It runs straight as an arrow across the dead land to the distant horizon. On either side the relentless earth reflects the sun in a dazzling haze. Falcons swoop on lizard and rat, chattering babblers flutter from thorn to scrub. A sudden herd of chinkara twinkles past, like a corps de ballet on points, so delicate are their tiny hooves and so amazing their startled leaps in the air. The old part of Bikaner city is surrounded by a stone wall that is 15ï¿½30 feet (5ï¿½9 m) high and has five gates. Bikaner is now a trade centre for wool, hides, building stone, salt, and grain. Bikaneri woolen shawls, blankets, carpets, and sugar candy are famous, and there are also ivory and lacquerware handicrafts. The city has electrical and mechanical engineering works, railway workshops, and factories that manufacture glass, pottery, felts, chemicals, shoes, and cigarettes. The old part of the city is overlooked by a fort and has numerous buildings of bright red and yellow sandstone. Within the fort are several palaces of different periods, a museum housing Rajput miniature paintings, and a library of Sanskrit and Persian manuscripts. The city's colleges (including a medical school and a teachers' training institute) are affiliated with the University of Rajasthan. Bikaner is situated in an arid tract of undulating sand hills where the breeding of camels, horses, and sheep is the principal occupation. Because there are no rivers, irrigation is chiefly by means of deep tube wells. Bajra (pearl millet), jowar (sorghum), and pulses are the chief crops grown in the locality.</p>                    
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

export default Bikaner;
