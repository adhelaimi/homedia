import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class Cards extends React.Component {
  render () {


    console.log('this is CARDS');


        return(

            <div>

                <Card.Group>





                  <Card>
                       <Card.Content>
                         <Image
                           floated='right'
                           size='mini'
                           src='https://previews.123rf.com/images/sauvignon/sauvignon1505/sauvignon150500424/40135093-placeholder-banner-cat.jpg'
                         />
                       <Card.Header>Movie name</Card.Header>

                         <Card.Description>
                           <strong>Upload date</strong>
                         </Card.Description>
                       </Card.Content>
                       <Card.Content extra>
                         <div className='ui two buttons'>
                           <Button basic color='black' >
                             Edit
                           </Button>
                           <Button basic color='red'>
                             Delete
                           </Button>
                         </div>
                       </Card.Content>
                     </Card>






                </Card.Group>

            </div>



        )




  }
}

export default Cards;