
import React from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'
import nieuwbriefJan from '../../images/Newsletter/nieuwbriefJan.JPG';
import nieuwBriefOne from '../../Pdffile/nieuwsbriefJan.pdf';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
    <Card fluid >
      <Card.Content>
        <Card.Header>Pachachaca</Card.Header>
        <Card.Meta>nieuwsbrief - januari 2020</Card.Meta>
          <Card.Description style={{width:'800px', height:'500px', margin:'50px auto'}}>
              <div className='ui fluid image'>
              <Image src={nieuwbriefJan} />
                <a style={{fontSize:'30px'}} className='ui left corner label' href={nieuwBriefOne} target="_blank">
                  <Popup trigger={<i style={{fontSize:'30px'}} className='file pdf icon outline'/>}content="Click to download the Pdf file." basic/>
                </a>
              </div>
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
            <Icon name='heart' />
      </Card.Content>
    </Card>
  </div>
)

export default CardExampleImageCard