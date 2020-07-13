import React, {Component} from 'react';
import  {
  Grid, Header, 
  Button, Form, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');


export class CoreCompetenciesForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
        competency1:"", 
        competency2:"", 
        competency3:"",
        competency4:"",
        competency5:"",
        competency6:"",
        competency7:""};
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
    this.props.newCompetency({...this.state, idQ:uuid.v4()});
    this.setState({
        competency1:"", competency2:"", competency3:"",
        competency4:"", competency5:"", competency6:"", competency7:""});
    }

  render(){

    return(
    <Form onSubmit={this.handleSubmit}>
      <Header as= 'h1' textAlign='center'> Core Competencies</Header>
      <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                label='Competency 1' 
                placeholder='Competency' 
                name='competency1'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
            
                <Form.Input fluid
                label='Competency 2' 
                placeholder='Competency' 
                name='competency2'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid
                label='Competency 3' 
                placeholder='Competency' 
                name='competency3'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
                <Form.Input fluid
                label='Competency 4' 
                placeholder='Competency' 
                name='competency4'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                label='Competency 5' 
                placeholder='Competency' 
                name='competency5'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
            
                <Form.Input fluid
                label='Competency 6' 
                placeholder='Competency' 
                name='competency6'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                label='Competency 7' 
                placeholder='Competency' 
                name='competency7'
                value={this.state.competencies}
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
export default CoreCompetenciesForm;