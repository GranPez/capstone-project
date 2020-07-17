import React, {Component} from 'react';
import  {Grid, Button} from 'semantic-ui-react';
//import {Form} from 'semantic-ui-react-form-validator';
//import ResumeHeader from "./Header"
import Education from './Education';
import EducationForm from './EducationForm';
import {Link} from 'react-router-dom';
import AppAppBar from '../../modules/views/AppAppBar';


export class EducationList extends Component {
//Pagination
  continue = e => {
  e.preventDefault();
  this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }

//Education
  constructor(props){
    super(props);
    this.state = {
      educations: []
    };
    this.addEducation = this.addEducation.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  addEducation(newItem){
    this.setState({
      educations:[...this.state.educations, newItem]
    });
  }

  removeEducation(id){
    this.setState({
      educations: this.state.educations.filter(e=> e.id !==id)
    });
  }

  render(){
 
    //Values for Education
    const educations = this.state.educations.map(education =>{
      return (
      <Education 
      key={education.id} 
      id={education.id} 
      schoolName={education.schoolName}
      degree={education.degree}
      major={education.major}
      schoolCountry={education.schoolCountry}
      graduationYear={education.graduationYear}
      gpa={education.gpa}
      gpaScale={education.gpaScale}
      delEducation={this.removeEducation}  
      />
     );
    });

    return(
  
    <Grid container columns={1}>
      <div>
      <AppAppBar/>
        <br />
        {/*<ResumeHeader />*/}

        <EducationForm newEducation={this.addEducation} />
        <ul>
          {educations}
        </ul>
        <div> 
          <Link to = '/src/components/Resume/ProfessionalDesignationForm.js'>   
            <Button
              label="Back"
              primary={false}
              style={styles.button}
            />  
          </Link>
        </div>
            
        <div>
          <Link to ="/src/components/Resume/QualificationsList.js"> 
          <Button
            label="Next"
            primary={true}
            style={styles.button}
          />
          </Link>
        </div>
      </div>
    </Grid>
   
    );
  }  
}  
const styles = {
  button:{
      margin: 15
  }
}
export default EducationList;
