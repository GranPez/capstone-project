import React, {Component} from 'react';
import  {Grid, Button} from 'semantic-ui-react';
//import {Form} from 'semantic-ui-react-form-validator';
import Qualification from './Qualification';
import QualificationsForm from './QualificationsForm';
import {Link} from 'react-router-dom';


class QualificationsList extends Component {
//Pagination
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }

//Qualifications
  constructor(props){
    super(props);
    this.state = {
      qualifications: []
    };
    this.addQualification = this.addQualification.bind(this);
    this.removeQualification = this.removeQualification.bind(this);
  }

  addQualification(newItem){
    this.setState({
      qualifications:[...this.state.qualifications, newItem]
    });
  }

  removeQualification(id){
    this.setState({
      qualifications: this.state.qualifications.filter(e=> e.id !==id)
    });
  }

  render(){
 
    //Values for Qualifications
    const qualifications = this.state.qualifications.map(qualification =>{
      return (
      <Qualification
      keyQ={qualification.id} 
      idQ={qualification.id} 
      qualification={qualification.qualification}
      /*qualification2={qualification.qualification2}
      qualification3={qualification.qualification3}
      qualification4={qualification.qualification4}*/
      delQualification={this.removeQualification}  
      />
     );
    });

    return(
  
    <Grid container columns={1}>
      <div>
        <br />
        <QualificationsForm newQualification={this.addQualification} />
        <ul>
          <br/>
          {qualifications}
        </ul>
        <div> 
          <Link to = '/src/components/Resume/EducationList.js'>   
            <Button
              label="Back"
              primary={false}
              style={styles.button}
            />  
          </Link>
        </div>
            
        <div>
          <Link to ="/src/components/Resume/CoreCompetenciesList.js"> 
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
export default QualificationsList;