import React from 'react'
import {Grid, Header, Segment, Icon} from 'semantic-ui-react'

//import PropTypes from 'prop-types';
//import { render } from '@testing-library/react';



const ResumeHeader = () => (
  <div>
    <Grid columns={2} padded='horizontally'>
      <Grid.Column width={13}>
        <Header size='huge' floated='left' color= 'red'>
        Adam Rowell
        </Header>    
      </Grid.Column>

      <Grid.Column width={3}>
        <Header as = 'h5' floated='right'>
        <Icon name= 'home' color='red'/>
        <Header.Content> 7 Rowell Avenue, Toronto, Ontario M9A 4Y1</Header.Content>
        <br/>
        <Icon name='phone' color='red'/>
        <Header.Content> (012) 345 6789</Header.Content>
        <br/>
        <Icon name= 'mail' color='red'/> 
        <Header.Content> adamrowell@gmail.com</Header.Content>
        </Header>
      </Grid.Column>
    </Grid>

    <Segment>
      <Header as ='h3' textalign='center' color='red'>
        Technical Buyer
      </Header>
    </Segment>

  </div>

)


export default ResumeHeader;