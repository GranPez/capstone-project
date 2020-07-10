// Updated 2020-07-07 07:23
import React, { Component } from 'react'
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');

class ContactForm extends Component{
    
//ContactForm
  constructor(props) {
    super(props);
    this.state = {
      app_name:"",
      app_lastname:"",
      app_email:"",
      app_phone_num:"",
      app_address:"",
      app_country:"",
      app_city:"",
      app_state:"",
      app_zip_code:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }
  handleSubmit(evt){
      evt.preventDefault();
      this.props.newContact({...this.state, id: uuid.v4()});
      this.state = ({
        app_name:"",
        app_lastname:"",
        app_email:"",
        app_phone_num:"",
        app_address:"",
        app_country:"",
        app_city:"",
        app_state:"",
        app_zip_code:""});

  }
  render(){
  return (
    <Form onSubmit={this.handleSubmit}>
    <Header as= 'h2' content='stackable Grid' textAlign='center' style={styles.h3}>What's your contact information?</Header>
    <Grid columns={2} stackable>
          
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label="First Name"
                  type='text'
                  name='app_name'
                  placeholder='First Name'
                  value={this.state.app_name}
                  onChange={this.handleChange}
              />
           </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label="Last Name"
                  type='text'
                  name='app_lastname'
                  placeholder='Last Name'
                  value={this.state.app_lastname} 
                  onChange={this.handleChange}
                />
            </Segment>
          </Grid.Column>
        
        <Grid.Row columns={2} stackable>
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
 
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='Email'
                  type='email'
                  name='app_email'
                  placeholder='Email'
                  value={this.state.app_email}
                  onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}> 
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='Address'
                  type='text'
                  name='app_address'
                  placeholder='Address'
                  value={this.state.app_address} 
                  onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} stackable> 
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='City'
                  type='text'
                  name='app_city'
                  placeholder='City'
                  value={this.state.app_city} 
                  onChange={this.handleChange}
              />
               </Segment>
          </Grid.Column>
   
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='Province / State'
                  type='text'
                  name='app_state'
                  placeholder='Province / State'
                  value={this.state.app_state} 
                  onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row columns={2} stackable>
          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='Country'
                  type='text'
                  name='app_country'
                  placeholder='Country'
                  value={this.state.app_country} 
                  onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Form.Input fluid
                  label='Zip Code'
                  type='text'
                  name='app_zip_code'
                  placeholder='Zip Code'
                  value={this.state.app_zip_code} 
                  onChange={this.handleChange}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
              <Grid.Column width={2}>
              <Button color='blue'>Add </Button> 
              </Grid.Column>
    </Grid>
  </Form>
    );
  }
  
}
const styles = {
  button:{
      margin: 15
  }
}
export default ContactForm;