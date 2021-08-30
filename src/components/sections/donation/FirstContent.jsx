
import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <div >
     
    <Card.Content>
      <h1 className='centerDonat'>When is your gift tax deductible?</h1>
      <Card.Meta>Donate once</Card.Meta>
        <Card.Description className='padingDonat' style={{columns: '50px 2'}}>
          The tax authorities recognize Yoreem as an ANBI (public benefit organization). As a result, donations to Yoreem are tax deductible, insofar as these (together with donations to other qualifying charities) exceed 1% of the joint aggregate income of you and your possible tax partner in a calendar year. The maximum amount that you can deduct is 10% of the aforementioned joint aggregate income. More information about ANBI.
          You can donate via IDEAL (see below), but of course you can also transfer an amount to our Rabobank account in other ways: NL 60 RABO 0119 4895 89, for the attention of Yoreem, stating 'donation'.
          Donating in annuity form
          If you make a donation in a so-called annuity form, the full amount is always deductible. With this form you undertake to donate the same amount for five consecutive years.
          More information
          For further information about the tax consequences of donations by both individuals and companies, please contact Wim Wesselo (wwesselo@outlook.com or 06-51147924).
        </Card.Description>
    </Card.Content>
  </div>
)

export default CardExampleImageCard