
import React, { Component } from 'react';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';
import axios from 'axios'

class About extends Component {
  componentDidMount(){
    this.get_backend()
    // this.getphoto()
    // this.getdata()
}   
get_backend=()=>{
  axios.get('http://localhost:9000/Whoarewe')
  .then((res)=>{ 
  console.log(res) })
  .catch((error)=>{
      console.log(error)
  }) 
}

  render() {
    return (
      <div className='main_div_about'>
        <AboutUs />
        <OurTeam /> 
      </div>
    );
  }
}

export default About;