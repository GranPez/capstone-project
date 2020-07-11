import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react';
import WorkExperience from './WorkExperience';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperienceList extends Component {
    //Pagination
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    }
    back = e => {
      e.preventDefault();
      this.props.prevStep();
      }
      // Work Experience
    constructor (props) {
        super(props);
        this.state = {workexperience: []
    };

    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.removeWorkExperience = this.removeWorkExperience.bind(this);
  }
  addWorkExperience(newJob){
    this.setState({
        workexperience:[...this.state.workexperience, newJob]
    });
  }
  removeWorkExperience(id){
    this.setState({
        workexperience: this.state.workexperience.filter(e=> e.id !==id)
    });
  }
    render () {
        const jobs = this.state.workexperience.map(work => {
            return (
            <WorkExperience
            key={work.id} 
            id={work.id} 
            jobtitle={work.jobtitle}
            company={work.company}
            city={work.city}
            province_state={work.province_state}
            startdate={work.startdate}
            enddate={work.enddate}

            responsibilities={[work.responsibilities]}

            delWorkExp={this.removeWorkExperience}  
            />
            );
           });
           return(
              <Grid container columns={1}>
              <div>
                <WorkExperienceForm newWorkExp={this.addWorkExperience} />
                <ul>
                  {jobs}
                </ul>
                <Button
                  label="Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
                />  
                <Button
                  label="Next"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                /> 
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

export default WorkExperienceList;