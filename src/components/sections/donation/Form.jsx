
import React, { Component } from 'react'
import { Form, Radio,Button,Input,Card,Icon,Image,Label } from 'semantic-ui-react'
import Ideal from '../../images/Donation/ideal1.jpg';
import FirstContent from '../donation/FirstContent';

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <div className='styleDonate'>
      <Card fluid>
        <Card.Content>
          <Card.Header >Donate</Card.Header>
            <Form style={{columns: '50px 2'}}>
              <Form.Field>
                <Radio
                  label=' €10 Donation '
                  name='radioGroup'
                  value='€10 Donation'
                  checked={this.state.value === '€10 Donation'}
                  onChange={this.handleChange} />
              </Form.Field>

              <Form.Field>
                <Radio
                  label='€25 Donation'
                  name='radioGroup'
                  value='€25 Donation'
                  checked={this.state.value === '€25 Donation'}
                  onChange={this.handleChange} />
              </Form.Field>

              <Form.Field>
                <Radio
                  label='€50 Donation'
                  name='radioGroup'
                  value='€50 Donation'
                  checked={this.state.value === '€50 Donation'}
                  onChange={this.handleChange} />
              </Form.Field>

              <Form.Field>
                <Radio
                  label='€100 Donation'
                  name='radioGroup'
                  value='€100 Donation'
                  checked={this.state.value === '€100 Donation'}
                  onChange={this.handleChange}/>
              </Form.Field>

              <Form.Field>
                <Radio
                  label='€200 Donation'
                  name='radioGroup'
                  value='€200 Donation'
                  checked={this.state.value === '€200 Donation'}
                  onChange={this.handleChange}/>
              </Form.Field>

              <Form.Field>
                <Radio
                  label='€250 Donation'
                  name='radioGroup'
                  value='€250 Donation'
                  checked={this.state.value === '€250 Donation'}
                  onChange={this.handleChange} />
                  <div>
                    <br/><br/> <br/> <br/> <br/>
                    <Label className='centerDonat' size={"large"} style={{width:'200px', height:'50px', float:'left'}}>Or please enter your own amount </Label>
                  </div>
                  <div>
                    <Input type='number' size={"large"} style={{width:'200px', height:'50px', float:'left'}} onChange={this.handleChange} placeholder='enter your own amount €'/>
                  </div>
              </Form.Field>

              <Form.Field>
                  <br />
                  Your Donation: <b>{this.state.value}</b>
              </Form.Field>
              <Image src={Ideal}/>

              <div>
                <Button animated>
                  <Button.Content visible>Donate</Button.Content>
                  <Button.Content hidden>
                    <Icon name='heart' color='red'/>
                  </Button.Content>
                </Button>
              </div>
            </Form>
          
        </Card.Content>
      <FirstContent/>
    </Card>
  </div>
    
    )
  }
}