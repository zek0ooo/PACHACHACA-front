
import React from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'
import nieuwbriefApr from '../../images/Newsletter/nieuwbriefApr.JPG';
import nieuwBriefTwo from '../../Pdffile/nieuwsbriefApr.pdf';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
    <Card fluid >
      <Card.Content>
        <Card.Header>Pachachaca</Card.Header>
        <Card.Meta>nieuwsbrief - April 2020</Card.Meta>
          <Card.Description style={{width:'800px', height:'500px', margin:'50px auto'}}>
              <div className='ui fluid image'>
              <Image src={nieuwbriefApr} />
                <a style={{fontSize:'30px'}} className='ui left corner label' href={nieuwBriefTwo} target="_blank">
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

// import React from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'
// import nieuwbriefApr from '../../images/Newsletter/nieuwbriefApr.JPG';
// import nieuwBriefTwo from '../../Pdffile/nieuwsbriefApr.pdf';

// const CardExampleImageCard = () => (
//   <div className='newsletterStyle'>
//       <Card fluid color='teal'>
//     <Card.Content>
//       <Card.Header>Pachachaca</Card.Header>
//       <Card.Meta>nieuwsbrief - april 2020</Card.Meta>
//       <Image src={nieuwbriefApr} />
//       <Card.Description style={{fontSize:'40px', margin:'40px'}}>
//       <a style={{width:'100%'}} href={nieuwBriefTwo} target="_blank"><Icon  name='file pdf outline' />Pdf</a>
//       </Card.Description>
//       {/* <embed  src={nieuwBriefTwo} width="100%" height="700"></embed > */}
//     </Card.Content>
//     <Image.Group style={{textAlign:'center'}} size='medium'>
//     </Image.Group>
//     <Card.Content extra>
//         <a>
//         <Icon name='heart' />
//       </a>
//     </Card.Content>
//   </Card>
//   </div>
// )

// export default CardExampleImageCard
