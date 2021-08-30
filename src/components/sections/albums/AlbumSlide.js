import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from"../../images/Albums/p1.jpg";
import p2 from"../../images/Albums/p2.jpg";
import p3 from"../../images/Albums/p3.jpg";


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
            <div>
              <Slider 
              ref={slider => (this.slider = slider)}
              {...settings} >
                  <div ><img className='albumSlider' src={p1} alt="p1"/></div>
                  <div ><img className='albumSlider' src={p2} alt="p2"/></div>
                  <div ><img className='albumSlider' src={p3} alt="p3"/></div>
              </Slider>
            </div> 
        )
    }     
}
export default Slide   
