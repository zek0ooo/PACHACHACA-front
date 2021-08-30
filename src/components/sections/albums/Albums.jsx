
import React, { Component } from 'react';
import axios from 'axios'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumSlide from '../albums/AlbumSlide';
import p4 from"../../images/Albums/p4.jpg";
import p5 from"../../images/Albums/p5.jpg";
import p6 from"../../images/Albums/p6.jpg";
import p7 from"../../images/Albums/p7.jpg";
import p8 from"../../images/Albums/p8.jpg";
import p9 from"../../images/Albums/p9.jpg";
import p10 from"../../images/Albums/p10.jpg";
import p11 from"../../images/Albums/p11.jpg";
import p12 from"../../images/Albums/p12.jpg";
import p13 from"../../images/Albums/p13.jpg";
import p14 from"../../images/Albums/p14.jpg";
import p15 from"../../images/Albums/p15.jpg";
import p16 from"../../images/Albums/p16.jpg";
import p17 from"../../images/Albums/p17.jpg";
import p18 from"../../images/Albums/p18.jpg";

import { Container, Image, Grid, Segment} from 'semantic-ui-react';


class Slide extends Component {

  componentDidMount(){
    this.get_backend()
}   
get_backend=()=>{
  axios.get('http://localhost:9000/Albums')
  .then((res)=>{ 
  console.log(res) })
  .catch((error)=>{
      console.log(error)
  }) 
}

  render() {
    return (
      <div style={{margin: '0 auto'}}>
            <Container>
              <AlbumSlide />
                  <Grid stackable columns={3}>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p4} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p5} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p6} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p7} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p8} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p9} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p10} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p11} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p12} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p13} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p14} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p15} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p16} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p17} />
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <Image className='albumImage' src={p18} />
                      </Segment>
                    </Grid.Column>
                  </Grid>
            </Container>
                </div>
        )
    }     
}
export default Slide   
