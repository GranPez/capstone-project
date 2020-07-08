import React, {Component} from 'react';
import  {Grid, Header, Button, Form, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');

class AchievmentsForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
      achievments1: "",
      achievments2:"",
      achievments3:"",
      achievments4:"",
      achievments5:"",
      achievments6:"",
      achievments7:"",
      achievments8:""};
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
    this.props.newAchievment({...this.state, id:uuid.v4()});
    this.setState({
      achievments1: "",
      achievments2:"",
      achievments3:"",
      achievments4:"",
      achievments5:"",
      achievments6:"",
      achievments7:"",
      achievments8:""});
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <br/>
      <Header as= 'h1' valuealign='center'> Achievments</Header>
      <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                type = 'text'
                id = "achievments1"
                label = "Achievments 1"
                placeholder = "Achievments"
                name = "achievments1"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments2"
                label = "Achievments 2"
                placeholder = "Achievments"
                name = "achievments2"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
            </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
             <Form.Input fluid 
                type = 'text'
                id = "achievments3"
                label = "Achievments 3"
                placeholder = "Achievments"
                name = "achievments3"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments4"
                label = "Achievments 4"
                placeholder = "Achievments"
                name = "achievments4"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
            </Segment>
            </Grid.Column>
          </Grid.Row>

            <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
             <Form.Input fluid 
                type = 'text'
                id = "achievments5"
                label = "Achievments 5"
                placeholder = "Achievments"
                name = "achievments5"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments6"
                label = "Achievments 6"
                placeholder = "Achievments"
                name = "achievments6"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
            </Segment>
            </Grid.Column>
          </Grid.Row>

            <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
             <Form.Input fluid 
                type = 'text'
                id = "achievments7"
                label = "Achievments 7"
                placeholder = "Achievments"
                name = "achievments7"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments8"
                label = "Achievments 8"
                placeholder = "Achievments"
                name = "achievments8"
                value = {this.state.achievments}
                onChange = {this.handleChange}
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

export default AchievmentsForm;