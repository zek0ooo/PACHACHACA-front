

import React from 'react'
import { Grid, Image, Segment,Button } from 'semantic-ui-react'
import one from '../../images/About/one.jpg'
import two from '../../images/About/two.jpg'


const GridExampleStackable = () => (
  <div className='div_ourteam_shadow ' style={{paddingBottom:'10px'}}>
      {/* <div className='ourteam'> */}
        <h1>Our Team</h1>
        <hr/>
      {/* </div> */}
    <Grid  style={{marginTop:'30px'}} stackable columns={2}>
      <Grid.Column>
        <Segment>
            <Image src={one} className='ourteam '/>
              <h2>Liesbeth Kerstens</h2>
              <h3>1975</h3>
                <p style={{textAlign:'left',columns: '50px 2'}}>
                  studied Leisure Management at the College of Tourism and Traffic in Breda and completed 
                  a master s degree in International Development Studies at the University of Amsterdam.
                  She relocated and lived in Cusco, Peru between 2004 and 2009, during which time she created 
                  the Peruvian foundation Asociación Pasa la Voz. This foundation used to operate in the Cusco
                  region to improve the living conditions of children who grow up in different forms of childcare.
                  Pasa la Voz trained the staff of childcare organizations on pedagogical levels and promoted
                  the active participation of children. Due to the success of Pasa la Voz,
                  their methodologies had been translated into the Dutch environment at the request of 
                  the Municipality of Rotterdam. This led to the establishment of the Hoedje van Papier foundation, 
                  with Liesbeth as the then director in 2009. This foundation assists
                  Rotterdammer’s adults and children in vulnerable situations to acquire skills toward active 
                  participation in society. Hoedje van Papier foundation was selected by the Oranjefonds 
                  (Royal funding organization in Holland) for the so-called ‘Growth Program’. 
                  Thanks to participation in this program and because of her commitment to the Dutch society,
                  Liesbeth received a award from King Willem-Alexander.
                </p>
                <a href='https://www.facebook.com/Casa-Familiar-Ecol%C3%B3gica-Pachachaca-635301843320489/'  >
                  <Button circular  color='facebook' icon='facebook'/></a>
                <a  href='https://www.linkedin.com/in/liesbeth-kerstens-16535920/' >
                <Button circular  color='linkedin' icon='linkedin'/></a>
        </Segment>
          </Grid.Column>
          <Grid.Column>
        <Segment >
          <Image src={two} className='ourteam '/>
            <h2>Pavel Marmanillo Barrio de Mendoza</h2>
            <h3>1981</h3>
              <p style={{textAlign:'left',columns: '50px 2'}}>
                studied mining at the University of San Antonio Abad del Cusco. He completed his studies and graduated from 
                the University of Piura, Peru. Pavel runs a small family business together with his father,
                which maintains both socially conscious and commercial goals. 
                In 2006 the business operations brought him to Brazil where he lived for a time.
                In addition to his work in the family business, Pavel is an active musician and writer.
                He combined these talents with volunteer work for various social projects which focus on care for women 
                and children and environmental issues. His experience has been international in countries such as Peru, 
                Colombia, Brazil, India, Nepal, Palestine and the Netherlands.  Liesbeth and Pavel have been living and working 
                together in the Family Home of Pachachaca since 2016, where they support children in disadvantaged situations. 
                Together they shape a life in which living and working is integrated in their shared vision. 
                They apply their years of  knowledge and experience to the success of Pachachaca’s mission. 
                Yoreem is a foundation (Stichting Yoreem Foundation). This foundation was founded in 2006 and has ANBI-approval.
                The board consists of Daphne Hebing, Wim Wesselo and René Sueters. They are very involved 
                in the activities of Pachachaca, and are very happy to contribute their knowledge to the project.
              </p>
              <a  href='https://www.facebook.com/Casa-Familiar-Ecol%C3%B3gica-Pachachaca-635301843320489/' >
              <Button circular   color='facebook' icon='facebook'/>
              </a>
              <a  href='https://www.linkedin.com/in/pavel-marmanillo-barrio-de-mendoza-92904325/' >
              <Button circular  color='linkedin' icon='linkedin'/></a>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExampleStackable