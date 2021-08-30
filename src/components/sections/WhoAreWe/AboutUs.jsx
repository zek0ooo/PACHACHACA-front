
import React from 'react'
import { Grid,Card} from 'semantic-ui-react'
import logoabout from '../../images/Logo/logoabout.png';
import yu from '../../images/yu.png'
import VideoAbout from '../WhoAreWe/VideoAbout';

const DividerExampleVertical = () => (
  <div className='div_about_shadow '>
    <div>
      <h1>About us</h1>
      <hr/>
      <VideoAbout />
      <br/>
    </div>
    <Grid columns={2}>
      <Grid.Column>
        <Card fluid>
          <div style={{height:'120px'}}>
            <img height='100px' src={logoabout} />
          </div>
          <div>
          <h2>Pachachaca </h2>
            <p style={{textAlign:'left',columns: '50px 2'}}>
              Pachachaca is an organization that provides care for orphaned children and children at
              social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, 
              Pachachaca aims to be an active organization within the community by opening its doors and 
              organizing different activities, both for children and families. Finally, 
              Pachachaca strives as much as possible to be self-sustainable by developing small-scale 
              food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste. 
              Pachachaca is a place where children receive attention and care. One of our purposes is to 
              stimulate your potential by developing different skills in areas such as friendship, 
              sharing, participation, patience, and different skills in areas such as friendship, 
              sharing, asking others, taking initiative, following directions, staying focused on tasks. , 
              accepting differences, active listening, recognizing the abilities and qualities of others,
              positive communication and interaction, having a social and environmental conscience. 
              All these qualities are stimulated in music, 
              video and theater workshops which are given by professionals with many years of experience 
              in the field of childrens homes.
            </p> 
          </div>
        </Card>
      </Grid.Column>

      <Grid.Column>
        <Card fluid>
          <div style={{height:'120px'}}>
            <img height='100px'  src={yu} />
          </div>
          <div>
          <h2>Yoreem</h2>
            <p style={{textAlign:'left',columns: '50px 2' }}>
              We only support projects if we have confidence in them. And we are only confident if projects are 
              well thought out and contribute to the integral, sustainable development of the area in question.
              They must offer perspective on a dignified existence. Economic development is important, but it 
              will only get a chance if attention is also paid to education, good infrastructure and health 
              facilities that are also financially accessible to everyone. The cohesion that we have in mind 
              can be achieved within a Yoreem project. But it also happens that we participate in projects of 
              partner organizations that are active in the region. By properly coordinating cooperation,
              sharing knowledge and experience and efforts, we use everyones expertise and realize projects 
              in a good and efficient manner.
            </p> 
          </div>
        </Card>
      </Grid.Column>
    </Grid>
   
  </div>
)
export default DividerExampleVertical