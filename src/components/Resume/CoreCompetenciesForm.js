import React, {Component} from 'react';
import  {
  Grid, Header, 
  Button, Form, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');


export class CoreCompetenciesForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
        competency:""}; 
        /*competency2:"", 
        competency3:"",
        competency4:"",
        competency5:"",
        competency6:"",
        competency7:""};*/
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
    this.props.newCompetency({...this.state, id:uuid.v4()});
    this.setState({
        competency:"",
        /*competency2:"", 
        competency3:"",
        competency4:"", 
        competency5:"", 
        competency6:"", 
        competency7:""*/
      });
      localStorage.setItem('competency',JSON.stringify(this.state));  
    }
    componentDidMount() {
      this.CompetencyInfo = JSON.parse(localStorage.getItem('competency'));
   
      if (localStorage.getItem('competency')) {
          this.setState({
            competency: this.CompetencyInfo.competency,
           
      })
  } else {
      this.setState({
        competency:''
      })
    }
  }
  render(){

    return(
    <Form onSubmit={this.handleSubmit}>
      <div>
      <Header
       style={
          {margin:"80px 0px 15px 0px"}
       }  
       as= 'h1'
       color='blue' 
       textAlign='center'
       > 
       Core Competencies
       </Header>
       <p           
          style={
          {margin:"15px"}
          }  
          >
          Please list your competencies one by one.
        </p>   
      </div>

      <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                label='Competency' 
                type='text'
                placeholder='Competency' 
                id='competency'
                name='competency'
                value={this.state.competencies}
                onChange={this.handleChange}
                />
                <Grid.Column width={2}>
                <Button color='blue'>Add </Button> 
                </Grid.Column>

{/*                 <Form.Input fluid
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
                />*/}
                </Segment>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </Form>
    );
  }  
}  
export default CoreCompetenciesForm;