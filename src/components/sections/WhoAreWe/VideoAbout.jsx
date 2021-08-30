

import React from 'react';
import { Embed } from 'semantic-ui-react';
import Videoabout from '../../images/About/p111.jpg';

const EmbedExampleIframe = () => (
 <div >
    <Embed 
    // autoplay={false}
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
    placeholder={Videoabout}
  />
 </div>
)

export default EmbedExampleIframe

