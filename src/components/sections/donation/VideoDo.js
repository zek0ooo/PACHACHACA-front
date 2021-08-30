

import React from 'react';
import { Embed } from 'semantic-ui-react';
import VideoDo from '../../images/Donation/kind.jpg';

const EmbedExampleIframe = () => (
 <div className='styleDonate'>
    <Embed 
    autoplay={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      src:"https://www.youtube.com/embed/1p7X67ucbYg",       
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder={VideoDo}
  />
 </div>
)

export default EmbedExampleIframe

