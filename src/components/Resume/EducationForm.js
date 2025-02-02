import React, {Component} from 'react';
import  {
  Grid, Header, Segment, 
  Button, Form} from 'semantic-ui-react';
const uuid = require ('uuid');
//import {Form} from 'semantic-ui-react-form-validator';


const degrees = [
    {key:'BA', text: 'Bachelor of Arts', value:'Bachelor of Arts'},
    {key:'BBA', text: 'Bachelor of Business Administration', value:'Bachelor of Business Administration'},
    {key:'BEng', text: 'Bachelor of Engineering',value:'Bachelor of Engineering'},
    {key:'BFA', text: 'Bachelor of Fine Arts',value:'Bachelor of Fine Arts'},
    {key:'BSc', text: 'Bachelor of Science',value:'Bachelor of Science'},
    {key:'BD', text: "Bachelor's Degree",value: "Bachelor's Degree"},
    {key:'ED', text: "Engineer's Degree",value:"Engineer's Degree"},
    {key:'MA', text: 'Master of Arts',value:'Master of Arts'},
    {key:'MBA', text: 'Master of Business Administration',value:'Master of Business Administration'},
    {key:'MFA', text: 'Master of Fine Arts',value:'Master of Fine Arts'},
    {key:'MSc', text: 'Master of Science',value:'Master of Science'},
    {key:'MD', text: "Master's Degree",value:"Master's Degree"},
    {key:'PhD', text: 'Doctor of Philosophy',value:'Doctor of Philosophy'},
    {key:'MeD', text: 'Doctor of Medicine',value:'Doctor of Medicine'},
    {key:'PG', text: 'Post Graduate',value:'Post Graduate'},
    {key:'HD', text: 'High School Diploma',value:'High School Diploma'},
    {key:'O', text: 'Other',value:'Other'}
];

class EducationForm extends Component {
  constructor(props){
    super(props);
    this.state =  {
        schoolName:"", 
        degree:"", 
        major:"",
        schoolCountry:"",
        graduationYear:"",
        gpa:"",
        gpaScale:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  handleSelectChange=(evt, data)=>{
      this.setState({
          [data.name]:data.value
        });
    };

  handleSubmit(evt){
    evt.preventDefault();
    this.props.newEducation({...this.state, id:uuid.v4()});
    this.setState({schoolName:"", degree:"", major:"",schoolCountry:"",graduationYear:"", gpa:"",gpaScale:""});

    localStorage.setItem('education',JSON.stringify(this.state));
  }

  componentDidMount() {
    this.EducationInfo = JSON.parse(localStorage.getItem('education'));
 
    if (localStorage.getItem('education')) {
        this.setState({
          schoolName: this.EducationInfo.schoolName,
          degree: this.EducationInfo.degree,
          major: this.EducationInfo.major,
          schoolCountry: this.EducationInfo.schoolCountry,
          graduationYear: this.EducationInfo.graduationYear,
          gpa: this.EducationInfo.gpa,
          gpaScale: this.EducationInfo.gpaScale,      
    })
} else {
    this.setState({
      schoolName:'',
      degree:'',
      major:'',
      schoolCountry:'',
      graduationYear:'',
      gpa:'',
      gpaScale:''
    })
  }
}
  render(){

    return(
    <Form onSubmit={this.handleSubmit}>
      <div>
        <Header 
          style={
            {margin:"60px 0px 15px 0px"}
          }   
          as= 'h1'
          color='blue' 
          textAlign='center'
          > 
          Education
        </Header>

        <p           
          style={
          {margin:"25px"}
          }  
          >
          Please list your education experience, starting from the oldest to the recent one.
        </p>  

      </div>
        <Grid container columns={3} >
        <Grid.Column width={16}>
          <Segment>
          <Form.Group widths='equal'>
            <Form.Input fluid 
              icon='university' 
              iconPosition='left' 
              label='Where did you graduate from?' 
              placeholder='School' 
              name='schoolName'
              value={this.state.schoolName}
              onChange={this.handleChange}
            />
            <Form.Select fluid
              label='Degree'
              placeholder='Select Degree'
              name='degree'
              search
              selection
              options={degrees}
              value={this.state.degree}
              onChange={this.handleSelectChange}
            />
            <Form.Input fluid
              label='What did your major in?' 
              placeholder='Major'
              name='major'
              value={this.state.major}
              onChange={this.handleChange}
            />
          </Form.Group>
          </Segment>
        </Grid.Column>

        <Grid.Column width={16}>
          <Segment>
          <Form.Group>
            <Form.Input fluid 
              label='School Country' 
              placeholder='School Country' 
              width={6}
              name='schoolCountry'
              value={this.state.schoolCountry}
              onChange={this.handleChange}
            />
            <Form.Input fluid 
              label='Graduation Year' 
              placeholder='Year'
              width={5}
              name='graduationYear'
              value={this.state.graduationYear}
              onChange={this.handleChange} 
            />
            <Form.Input fluid 
              label='GPA' 
              placeholder='GPA' 
              width={2}
              name='gpa'
              value={this.state.gpa}
              onChange={this.handleChange}
            />
            <Form.Input fluid 
              label='GPA Scale' 
              placeholder='GPA Scale (e.g 4 or 5)' 
              width={3}
              name='gpaScale'
              value={this.state.gpaScale}
              onChange={this.handleChange}
            />
          </Form.Group>
          </Segment>
        </Grid.Column>

       <Grid.Column width={2}>
          <Button color='blue'>Add </Button> 
       </Grid.Column>
   
      </Grid>
    </Form>
    );
  }  
}  
export default EducationForm;
  



