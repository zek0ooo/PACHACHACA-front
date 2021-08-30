

import React, { Component } from 'react';
import { Card,Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class Contact  extends Component {
  constructor(){
    super()

    this.state ={
    name:'',
    subject : '',
    email : '',
    message :'',
    err:''
    }
  }

  setname=(e)=>{
    this.setState({[e.target.name]:e.target.value}) 
  }

  click=()=>{
    if (this.state.name === ''  
    || this.state.subject === '' || this.state.email === ''  
    ||  this.state.message === '' ){
       this.setState({
        name : '*',
        subject : '*',
        email : '*',
        message :'*'
        })
    } else if(this.state.name === '*'  
    || this.state.subject === '*' || this.state.email === '*'  
    ||  this.state.message === '*' ){this.setState({
        name : '*',
        subject : '*',
        email : '*',
        message :'*'
        })}
    else{this.setState({
       name : '',
       subject : '',
       email : '',
       message :'',
       err:'thanks'
       })
   }
   
  }
  inputfu=(e)=>{this.setState({[e.target.name]:''}) }

  render() {
      return (
           <div className='contact_card '> 
               <Card fluid >
                   <Card.Header  ><h2 className='cardheader '>Contact Yoreem</h2></Card.Header>
                   <Card.Content className='Cardcontent'>
                       <label className='cardtext'>Name</label>
                       <input className='input'
                           name='name'
                           onFocus={this.inputfu}
                           type='text' onChange={this.setname}
                           value={this.state.name}/>
                   </Card.Content>
                   <Card.Content className='Cardcontent'>
                       <label  className='cardtext'>Subject</label>
                       <input className='input'
                           name='subject'
                           onFocus={this.inputfu}
                           type='text' onChange={this.setname}
                           value={this.state.subject}/>
                   </Card.Content>
                   <Card.Content className='Cardcontent'>
                       <label className='cardtext'>Email</label>
                       <input className='input'
                           name='email'
                           onFocus={this.inputfu}
                           type='email' onChange={this.setname}
                           value={this.state.email}/>
                       
                   </Card.Content>
                   <Card.Content className='Cardcontent'>
                       <label name='language'  className='cardtext'>Message</label>
                       <textarea className='input'
                           name='message'
                           onFocus={this.inputfu}
                           value={this.state.message}
                           type='text' onChange={this.setname}/>
                   </Card.Content>
                   <Card.Content  >
                        <Button onClick={this.click} id='contactbtn ' type='submit'  > Send</Button>
                        <h5>{this.state.err && this.state.err }</h5>
                   </Card.Content>
               </Card>

               
           </div>
      )
  }
  
}
export default Contact 
