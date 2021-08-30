import React from 'react'
import { Image } from 'semantic-ui-react';
import Mano from '../../images/Logo/LogoMano.png';
import Annamuntz from '../../images/Logo/Annamuntz.jpg';
import haella from '../../images/Logo/haella.png';
import Hofstee from '../../images/Logo/Hofstee.png';
import Marina from '../../images/Logo/Marina.png';
import Weeshuis from '../../images/Logo/Weeshuis.png';
import WG from '../../images/Logo/WG.png';


const ImageExampleGroupSize = () => (
  <div style={{margin:'auto'}}>
    <Image.Group size='tiny'>
      <Image src={Mano} />
      <Image src={Annamuntz} />
      <Image src={Hofstee} />
      <Image src={Marina} />
      <Image src={Weeshuis} />
      <Image src={WG} /> 
      <Image src={haella} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize

