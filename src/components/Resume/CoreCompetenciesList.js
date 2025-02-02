import React, {Component} from 'react';
import  {Grid, Button} from 'semantic-ui-react';
//import {Form} from 'semantic-ui-react-form-validator';
import CoreCompetency from './CoreCompetency';
import CoreCompetenciesForm from './CoreCompetenciesForm';
import {Link} from 'react-router-dom';
import AppAppBar from '../../modules/views/AppAppBar';


class CoreCompetenciesList extends Component {
//Pagination
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }

//Competencies
  constructor(props){
    super(props);
    this.state = {
      competencies: []
    };
    this.addCompetency = this.addCompetency.bind(this);
    this.removeCompetency = this.removeCompetency.bind(this);
  }

  addCompetency(newItem){
    this.setState({
      competencies:[...this.state.competencies, newItem]
    });
  }

  removeCompetency(id){
    this.setState({
      competencies: this.state.competencies.filter(c => c.id !==id)
    });
  }

  render(){
 
    //Values for Competencies
    const competencies = this.state.competencies.map(competency =>{
      return (
     
      <CoreCompetency
      keyC={competency.id} 
      idC={competency.id} 
      competency={competency.competency}
      /*competency2={competency.competency2}
      competency3={competency.competency3}
      competency4={competency.competency4}
      competency5={competency.competency5}
      competency6={competency.competency6}
      competency7={competency.competency7}
      
      competencies={[competency.competencies]}*/
      delCompetency={this.removeCompetency}  
      />
     );
    });

    return(
  
    <Grid container columns={1}>
      <div>
      <AppAppBar/>

        <CoreCompetenciesForm newCompetency={this.addCompetency} />
        <ul>
          {competencies}
        </ul>
        <div> 
          <Link to = '/src/components/Resume/QualificationsList.js'>   
            <Button
              label="Back"
              primary={false}
              style={styles.button}
            />  
          </Link>
        </div>
            
        <div>
          <Link to ="/src/components/Resume/WorkExperienceList.js"> 
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
export default CoreCompetenciesList;