import React from 'react'
import Header from './Header'
import Navbars from './Navbar'
import Slider from './Slider' 
import Footer from './Footer'
const  Layout = (props) =>{
    return(
        <React.Fragment>
         <Header />
        <Navbars />
        <Slider />
        {props.data}
        <Footer />
        </React.Fragment>
        
         
    );


}    

export default Layout;
