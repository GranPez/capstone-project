
import React, { Component } from 'react';
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
  
  const styles = {
    button:{
        margin: 15
    },
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

class ReferenceForm extends Component{
  //Pagination
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
    }
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    }

  //Reference Form
    constructor(props) {
    super(props);
    this.state = {contact_name:"", contact_lastname:"", contact_position:"", 
    contact_email:"", contact_phone:"", 
    company_name:"", contact_relationship:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }
  handleSubmit(evt){
      evt.preventDefault();

  }
  render(){
  return (
   
      <Form onSubmit={this.handleSubmit}>
      <Header as= 'h2' content='stackable Grid' textAlign='center' style={styles.h3}> Do you have References?</Header>
      <Grid columns={2} stackable>
            
            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label="First Name"
                    type='text'
                    name='contact_name'
                    placeholder='First Name'
                    value={this.state.contact_name}
                    onChange={this.handleChange}
                />
             </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label="Last Name"
                    type='text'
                    name='contact_lastname'
                    placeholder='Last Name'
                    value={this.state.app_lastname} 
                    onChange={this.handleChange}
                  />
              </Segment>
            </Grid.Column>        

          <Grid.Row> 
            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label='Email'
                    type='email'
                    name='contact_email'
                    placeholder='Email'
                    value={this.state.contact_email} 
                    onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label='Contact Phone Num.'
                    type='tel'
                    name='contact_phone'
                    placeholder='Phone'
                    value={this.state.contact_phone} 
                    onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label='Company Name'
                    type='text'
                    name='company_name'
                    placeholder='Company/Organization'
                    value={this.state.company_name} 
                    onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} stackable> 
            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label='Relationship to Contact'
                    type='text'
                    name='contact_relationship'
                    placeholder='e.g.,Former Manager'
                    value={this.state.contact_relationship} 
                    onChange={this.handleChange}
                />
                 </Segment>
            </Grid.Column>
  
            <Grid.Column>
              <Segment>
                <Form.Input fluid
                    label='Contact Position'
                    type='text'
                    name='contact_position'
                    placeholder='e.g., Director of Marketing'
                    value={this.state.contact_position}
                    onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
      </Grid>

        <Button
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
        />  
        <Button
          label="Next"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
   
      </Form>
    
    );
  }
  
}


export default ReferenceForm;