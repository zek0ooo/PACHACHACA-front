
import React, { Component } from 'react';
import axios from 'axios'
import NewsletterFirst from './NewslatterFirst'
import NewsletterSecond from './NewsletterSecond';

class About extends Component {

componentDidMount(){
  this.get_backend()
}   
get_backend=()=>{
  axios.get('http://localhost:9000/Newsletter')
  .then((res)=>{ 
  console.log(res) })
  .catch((error)=>{
      console.log(error)
  }) 
}
  render() {
    return (
      <div style={{fontFamily:'sans-serif'}} className='main_div_Newsletter'>
        <NewsletterFirst />
        <NewsletterSecond />
      </div>
        
    );
  }
}

export default About;