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
      <div>
      <Header 
      style={
        {margin:"80px 0px 0px 0px"}
      }  
      as= 'h1' 
      color='blue'
      textAlign='center'
      > 
      Achievements
      </Header>
      <p           
      style={
      {margin:"15px"}
      }  
      >
      Please list your achievements.
      </p>  

      </div>
      <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                type = 'text'
                id = "achievments1"
                label = "Achievements 1"
                placeholder = "Achievements"
                name = ""
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments2"
                label = "Achievements 2"
                placeholder = "Achievements"
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
                label = "Achievements 3"
                placeholder = "Achievements"
                name = "achievments3"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments4"
                label = "Achievements 4"
                placeholder = "Achievements"
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
                label = "Achievements 5"
                placeholder = "Achievements"
                name = "achievments5"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments6"
                label = "Achievements 6"
                placeholder = "Achievements"
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
                label = "Achievements 7"
                placeholder = "Achievements"
                name = "achievments7"
                value = {this.state.achievments}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "achievments8"
                label = "Achievements 8"
                placeholder = "Achievements"
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