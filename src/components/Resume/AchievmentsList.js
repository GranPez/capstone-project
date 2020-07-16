import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react';
import Achievments from './Achievments';
import AchievmentsForm from './AchievmentsForm';
import {Link} from 'react-router-dom';

export class AchievmentsList extends Component {
//Pagination
  continue = e => {
  e.preventDefault();
  this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }

//Achievments
  constructor(props){
    super(props);
    this.state = {achievments: []};
    this.addAchievment = this.addAchievment.bind(this);
    this.removeAchievment = this.removeAchievment.bind(this);
  }

  addAchievment(newItem){
    this.setState({
        achievments:[...this.state.achievments, newItem]
    });
  }

  removeAchievment(id){
    this.setState({
        achievments: this.state.achievments.filter(e=> e.id !==id)
    });
  }

  render(){
    const achievments = this.state.achievments.map(achievment =>{
      return (
      <Achievments 
      key = {achievment.id} 
      id = {achievment.id} 
      achievments1 = {achievment.achievments1}
      achievments2 = {achievment.achievments2}
      achievments3 = {achievment.achievments3}
      achievments4 = {achievment.achievments4}
      achievments5 = {achievment.achievments5}
      achievments6 = {achievment.achievments6}
      achievments7 = {achievment.achievments7}
      achievments8 = {achievment.achievments8}
      delAchieve ={this.removeAchievment}
      />
     );
    });

    return(
    <Grid container columns={1}>
      <div>
        <AchievmentsForm newAchievment={this.addAchievment} />
        <ul>
          {achievments}
        </ul>
        <div> 
          <Link to = '/src/components/Resume/WorkExperienceList.js'>   
            <Button
              label="Back"
              primary={false}
              style={styles.button}
            />  
          </Link>
        </div>
            
        <div>
          <Link to ="/src/components/Resume/ContactList.js"> 
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

export default AchievmentsList;