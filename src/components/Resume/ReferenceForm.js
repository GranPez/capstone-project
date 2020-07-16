// Updated 2020-07-08 14:00
import React, { Component } from 'react';
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');

class ReferenceForm extends Component{
  

  //Reference Form
    constructor(props) {
    super(props);
    this.state = {
      contact_name:"",
      contact_lastname:"",
      contact_position:"", 
      contact_email:"",
      contact_phone:"", 
      company_name:"",
      contact_relationship:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value});
  }

  handleSubmit(evt){
      evt.preventDefault();
      this.props.newReference({...this.state, id: uuid.v4()});
      this.setState({
      contact_name:"",
      contact_lastname:"",
      contact_position:"", 
      contact_email:"",
      contact_phone:"", 
      company_name:"",
      contact_relationship:""
      });
      localStorage.setItem('reference',JSON.stringify(this.state));
  }
  componentDidMount() {
    this.ReferenceInfo = JSON.parse(localStorage.getItem('reference'));
 
    if (localStorage.getItem('reference')) {
        this.setState({
          contact_name: this.ReferenceInfo.contact_name,
          contact_lastname: this.ReferenceInfo.contact_lastname,
          contact_position: this.ReferenceInfo.contact_position,
          contact_email: this.ReferenceInfo.contact_email,
          contact_phone: this.ReferenceInfo.contact_phone,
          company_name: this.ReferenceInfo.company_name,
          contact_relationship: this.ReferenceInfo.contact_relationship
    })
} else {
    this.setState({
      contact_name:'',
      contact_lastname:'',
      contact_position:'', 
      contact_email:'',
      contact_phone:'', 
      company_name:'',
      contact_relationship:''
    })
  }
}
  render(){
  return (
   
      <Form onSubmit={this.handleSubmit}>
      <div>
      <Header
      style={
        {margin:"80px 0px 0px 0px"}
      }  
      as= 'h1' 
      color='blue'
      textAlign='center'
      > 
      Your References
      </Header>

      </div>
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
                      value={this.state.contact_lastname} 
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

              <Grid.Column width={2}>
              <Button color='blue'>Add </Button> 
              </Grid.Column>

        </Grid>
      </Form> 
    );
  }
  
}


export default ReferenceForm;