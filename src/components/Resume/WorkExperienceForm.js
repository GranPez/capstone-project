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

    localStorage.setItem('workExp',JSON.stringify(this.state));
}
handleChange(evt) {
    this.setState ({
        [evt.target.name]: evt.target.value
    });
}
componentDidMount() {
  this.WorkExpInfo = JSON.parse(localStorage.getItem('workExp'));

  if (localStorage.getItem('workExp')) {
      this.setState({
        jobtitle: this.WorkExpInfo.jobtitle,
        company: this.WorkExpInfo.company,
        city: this.WorkExpInfo.city,
        province_state: this.WorkExpInfo.province_state,
        startdate: this.WorkExpInfo.startdate,
        enddate: this.WorkExpInfo.enddate,
        responsibility1: this.WorkExpInfo.responsibility1,
        responsibility2: this.WorkExpInfo.responsibility2,
        responsibility3: this.WorkExpInfo.responsibility3,
        responsibility4: this.WorkExpInfo.responsibility4,
        responsibility5: this.WorkExpInfo.responsibility5,
        responsibility6: this.WorkExpInfo.responsibility6,
        responsibility7: this.WorkExpInfo.responsibility7,
        responsibility8: this.WorkExpInfo.responsibility8
        
  })
} else {
  this.setState({
    jobtitle: '',
    company: '',
    city: '',
    province_state: '',
    startdate: '',
    enddate: '',
    responsibility1: '',
    responsibility2: '',
    responsibility3: '',
    responsibility4: '',
    responsibility5: '',
    responsibility6: '',
    responsibility7: '',
    responsibility8: ''
  })
}
}
    render() {
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
            Work Experience
            </Header>
            <p           
            style={
            {margin:"15px"}
            }  
            >
            Please list your work experience, starting from the oldest to the recent one.
            </p>     
            </div>

            <Grid container columns={1} >
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