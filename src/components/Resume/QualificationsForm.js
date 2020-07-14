import React, {Component} from 'react';
import  {
  Grid, Header, 
  Button, Form, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');


export class QualificationsForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
        qualification:""}; 
        /*qualification2:"", 
        qualification3:"",
        qualification4:""};*/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  handleSubmit(evt){
    evt.preventDefault();
    this.props.newQualification({...this.state, id:uuid.v4()});
    this.setState({
        qualification:"",
        /*qualification2:"", 
        qualification3:"",
        qualification4:""*/
      });
    }

  render(){

    return(
    <Form onSubmit={this.handleSubmit}>
      <div>
        <Header 
          style={
          {margin:"60px 0px 15px 0px"}
          }   
          as='h1' 
          color='blue'
          textAlign='center'
          > 
          Qualifications
        </Header>

        <p           
          style={
          {margin:"15px"}
          }  
          >
          Please list your qualifications one by one.
        </p>     
      </div>
      <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                label='Qualification'
                type='text' 
                placeholder='Qualification' 
                name='qualification'
                id='qualification'
                value={this.state.qualification}
                onChange={this.handleChange}
                />
                <Grid.Column width={2}>
                <Button color='blue'>Add </Button> 
                </Grid.Column>
            
  {/*               <Form.Input fluid
                label='Qualification 2' 
                placeholder='Qualification' 
                name='qualification2'
                value={this.state.qualification2}
                onChange={this.handleChange}
                />*/}
              </Segment>
            </Grid.Column>
          </Grid.Row>

{/*           <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid
                label='Qualification 3' 
                placeholder='Qualification' 
                name='qualification3'
                value={this.state.qualification3}
                onChange={this.handleChange}
                />
                <Form.Input fluid
                label='Qualification 4' 
                placeholder='Qualification' 
                name='qualification4'
                value={this.state.qualification4}
                onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>*/}
      </Grid>
    </Form>
    );
  }  
}  
export default QualificationsForm;
