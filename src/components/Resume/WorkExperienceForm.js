import React, {Component} from 'react';
import  {Grid, Header, Button, Form, Segment} from 'semantic-ui-react';
const uuid = require ('uuid');

class WorkExperienceForm extends Component {
    constructor(props){
        super(props);
        this.state = { jobtitle: "", company: "", city: "", province_state: "", startdate: "", enddate: "", responsibility1: "",
        responsibility2: "", responsibility3: "", responsibility4: "", responsibility5: "", responsibility6: "",
        responsibility7: "", responsibility8: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(evt) {
    evt.preventDefault();
    this.props.newWorkExp({...this.state, id:uuid.v4()});
    this.setState({jobtitle: "", company: "", city: "", province_state: "", startdate: "", enddate: "", responsibility1: "",
    responsibility2: "", responsibility3: "", responsibility4: "", responsibility5: "", responsibility6: "",
    responsibility7: "", responsibility8: ""});
}
handleChange(evt) {
    this.setState ({
        [evt.target.name]: evt.target.value
    });
}
    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <br/>
            <Header as= 'h1' valuealign='center'> Work Experience</Header>
                <Grid container columns={3} >
                    <Grid.Column width={16}>
                        <Form.Group widths='equal'>
                            
            <Form.Input fluid 
                type = 'text'
                id = "jobtitle"
                label = "Job Title"
                placeholder = "Job Title"
                name = "jobtitle"
                value = {this.state.jobtitle}
                onChange = {this.handleChange}
            />
            <Form.Input fluid
                type = 'text'
                id = "company"
                label ="Company"
                placeholder="Company Worked For"
                name = "company"
                value = {this.state.company}
                onChange = {this.handleChange} 
            />
            <Form.Input fluid 
                type = 'text'
                id = "city"
                label = "City"
                placeholder = "City" 
                name = "city"
                value = {this.state.city}
                onChange = {this.handleChange}   
            />
            <Form.Input fluid
                type = 'text'
                id = "province_state"
                label = "Province/State"
                placeholder ="Province/State"
                name = "province_state"
                value = {this.state.province_state}
                onChange = {this.handleChange}    
            />
          </Form.Group>
        </Grid.Column>

        <Grid.Column width={16}>
          <Form.Group>
            <Form.Input fluid
                type = 'text'
                id = "startdate" 
                label = "Start Date"
                placeholder = "Start Date"
                width={6}
                name = "startdate"
                value = {this.state.startdate}
                onChange = {this.handleChange}
            />
            <Form.Input fluid 
              type = 'text'
              id = "enddate" 
              label = "End Date"
              placeholder = "End Date"
              width={6}
              name = "enddate"
              value = {this.state.enddate}
              onChange = {this.handleChange}
            />
             </Form.Group>
        </Grid.Column>
            
            <Grid columns={1} container divided='vertically' stackable>
          <Grid.Row> 
            <Grid.Column width={16}>
              <Segment>
                <Form.Input fluid 
                type = 'text'
                id = "responsibilities1"
                label = "Responsibilities 1"
                placeholder = "Responsibilities"
                name = "responsibilities1"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "responsibilities2"
                label = "Responsibilities 2"
                placeholder = "Responsibilities"
                name = "responsibilities2"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
            <Form.Input fluid 
                type = 'text'
                id = "responsibilities3"
                label = "Responsibilities 3"
                placeholder = "Responsibilities"
                name = "responsibilities3"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
            <Form.Input fluid 
                type = 'text'
                id = "responsibilities4"
                label = "Responsibilities 4"
                placeholder = "Responsibilities"
                name = "responsibilities4"
                value = {this.state.responsibilities}
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
                id = "responsibilities5"
                label = "Responsibilities 5"
                placeholder = "Responsibilities"
                name = "responsibilities5"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
             <Form.Input fluid 
                type = 'text'
                id = "responsibilities6"
                label = "Responsibilities 6"
                placeholder = "Responsibilities"
                name = "responsibilities6"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
            <Form.Input fluid 
                type = 'text'
                id = "responsibilities7"
                label = "Responsibilities 7"
                placeholder = "Responsibilities"
                name = "responsibilities7"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
            <Form.Input fluid 
                type = 'text'
                id = "responsibilities 8"
                label = "Responsibilities 8"
                placeholder = "Responsibilities"
                name = "responsibilities8"
                value = {this.state.responsibilities}
                onChange = {this.handleChange}
            />
            </Segment>
            </Grid.Column>
          </Grid.Row>

       <Grid.Column width={2}>
          <Button color='blue'>Add </Button> 
       </Grid.Column>
       </Grid>
      </Grid>
    </Form>
    );
  }  
} 

export default WorkExperienceForm;