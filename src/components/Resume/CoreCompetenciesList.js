import React, {Component} from 'react';
import  {Grid, Button} from 'semantic-ui-react';
//import {Form} from 'semantic-ui-react-form-validator';
import CoreCompetency from './CoreCompetency';
import CoreCompetenciesForm from './CoreCompetenciesForm';


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
      competency1={competency.competency1}
      competency2={competency.competency2}
      competency3={competency.competency3}
      competency4={competency.competency4}
      competency5={competency.competency5}
      competency6={competency.competency6}
      competency7={competency.competency7}
      
      competencies={[competency.competencies]}

      delCompetency={this.removeCompetency}  
      />
     );
    });

    return(
  
    <Grid container columns={1}>
      <div>
        
        <br />
        <CoreCompetenciesForm newCompetency={this.addCompetency} />
        <ul>
          {competencies}
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
export default CoreCompetenciesList;