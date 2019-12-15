import React from 'react'
import bgimagef from '../images/footer_bg.png'


const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${bgimagef})`,height:100,textAlign:"center",paddingTop:40 }}>
             <span style={{color:'#fff'}}>Hotel jyoti</span>               
        </div>
    );
}

export default Footer;
