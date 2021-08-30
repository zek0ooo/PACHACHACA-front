

import React from 'react'
import { Image } from 'semantic-ui-react';
import logoyoreem from '../../images/Logo/logoyoreem.png';
import Logo from '../../images/Logo/logo.jpg';

const ImageExampleGroupSize = () => (
  <div>
    <Image.Group size='tiny'>
      <Image src={Logo} /> 
      <Image src={logoyoreem} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize

