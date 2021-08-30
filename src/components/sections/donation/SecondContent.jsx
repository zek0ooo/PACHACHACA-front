

import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import LogoDon from './LogoDon';

const CardExampleImageCard = () => (
<div className='styleDonate'>
<Card fluid>
    <Card.Content >
      <h1 className='centerDonat'>Donors</h1>
        <Card.Meta className='centerDonat'>Thanks to all donors, including :</Card.Meta>
            <Card.Description style={{columns: '50px 2',marginLeft:'25%'}}>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Anna Muntz Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Co Schippers Fund</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Hofstee Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Inmenszo</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Johanna Donk-Grote Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Johannes Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Mano BV</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Alle Beetjes Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>The Lark Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Fair Share Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Elise Spykman Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Middelbusker Stevens Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Mundo Crastino Melio Foundation</a></p>
                <p><a herf='' target='_blank' ><Icon name='heart' color='red'/>Qbusfonds Foundation</a></p>
            </Card.Description>
      </Card.Content>
      <LogoDon />
  </Card>
</div>
)

export default CardExampleImageCard