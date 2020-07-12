// Updated 2020-07-07 07:23
import React, { Component } from 'react'
import  {Button, Form, Grid, Header} from 'semantic-ui-react';
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
      this.setState = ({
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
    <br/>
    <Header as= 'h1' valuealign='center'textAlign='center'>What's your contact information?
    </Header>
    <Grid columns={1} container divided='vertically' stackable>
      <Grid.Row>
        <Grid.Column width={16}>         
   
    <Form.Input fluid 
       label="First Name"
       type='text'
       id = 'app_name'
       name='app_name'
       placeholder='First Name'
       value={this.state.contactInfo}
       onChange={this.handleChange}
    />
    <Form.Input fluid
        label="Last Name"
        type='text'
        id='app_lastname'
        name='app_lastname'
        placeholder='Last Name'
        value={this.state.contactInfo} 
        onChange={this.handleChange}
    />
    <Form.Input fluid 
        label='Contact Phone Num.'
        type='tel'
        id='contact_phone'
        name='contact_phone'
        placeholder='Phone'
        value={this.state.contactInfo} 
        onChange={this.handleChange} 
    />
    <Form.Input fluid
        label='Email'
        type='email'
        id='app_email'
        name='app_email'
        placeholder='Email'
        value={this.state.contactInfo}
        onChange={this.handleChange}
    />
 
    <Form.Input fluid
        label='Address'
        type='text'
        id='app_address'
        name='app_address'
        placeholder='Address'
        value={this.state.contactInfo} 
        onChange={this.handleChange}
    />
    <Form.Input fluid 
      label='City'
      type='text'
      id='app_city'
      name='app_city'
      placeholder='City'
      value={this.state.contactInfo} 
      onChange={this.handleChange}
    />
      <Form.Input fluid 
       label='Province / State'
       type='text'
       id='app_state'
       name='app_state'
       placeholder='Province / State'
       value={this.state.contactInfo} 
       onChange={this.handleChange}
    />
     <Form.Input fluid 
        label='Country'
        type='text'
        id='app_country'
        name='app_country'
        placeholder='Country'
        value={this.state.contactInfo} 
        onChange={this.handleChange}
    />
    <Form.Input fluid 
        label='Zip Code'
        type='text'
        id='app_zip_code'
        name='app_zip_code'
        placeholder='Zip Code'
        value={this.state.contactInfo} 
        onChange={this.handleChange}
    />
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
export default ContactForm;