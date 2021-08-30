

import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from"../../images/a.jpg"
import b from"../../images/b.jpg"
import c from"../../images/c.jpg"


 class Slide extends Component {

    componentDidMount(){
        this.slider.slickPlay();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false

          };
        return (
            
            <div style={{width:'80%',margin:'auto'}}>
                
            <Slider 
            ref={slider => (this.slider = slider)}
            {...settings} >
                <img className='widH' src={a} alt="a"/>
                <img className='widH' src={b} alt="b"/>
                <img className='widH' src={c} alt="c"/>
                
            </Slider>
            <div className='div_Pach'>
                <h1>Pachachaca</h1>
                <p>2020</p>
            </div>
            </div> 
        )
    }     
}
export default Slide   
