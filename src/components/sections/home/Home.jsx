

import React, { Component } from 'react';
import Slide from '../slide/Slide';
import Activities from './Activities'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Home extends Component {

  render() {
    return (
      <div className='minedivH'>
        <Slide/>

        <div  className='div_WELCOM'>
            <h1>WELCOM TO PACHACHACA</h1>
            <hr/>
            <p>Pachachaca is a program  for educational guidance and a community center located in the Andes of Calca,
              Peru.<br/> Pachachaca is a name that combines two words from the Andean culture in the indigenous Quechua  
              language: Pacha means Earth, Chaca means Bridge. <br/>
              Pachachaca can therefore be interpreted as a bridge over the world,
            and a bridge between the children of Peru and the global community.</p>
            <p>Pachachaca also has a deeper meaning within the world view of the Andean people. <br/>
              Pacha, or the Earth, is considered‘a living being’while Chaca, or Bridge, expresses Unity. 
            Hence, Pachachaca also means<br/> "Unity of Everything Living on Earth"</p>
              
            <Button.Group size='huge'>
              <Button ><Link to=''>DONATE NOW</Link></Button>
              <Button.Or />
              <Button><Link to='/contact'>Contact Us</Link></Button>
            </Button.Group>
        </div>
        <div >
          <Activities/>
        </div>
        
      </div>
    );
  }
}

export default Home;
