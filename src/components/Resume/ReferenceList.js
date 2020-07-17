import React, {Component} from 'react';
import Reference from './Reference';
import ReferenceForm from './ReferenceForm';
import  {Grid, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppAppBar from '../../modules/views/AppAppBar';

class ReferenceList extends Component {

  //Pagination
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

//Reference
  constructor(props) {
      super(props);
      this.state = {references:[]};
      this.addReference = this.addReference.bind(this);
      this.removeReference = this.removeReference.bind(this);
  }

  addReference(newRef){
    this.setState({
      references:[...this.state.references, newRef]
    });
  }

  removeReference(id){
    this.setState({
      references: this.state.references.filter(e=> e.id !==id)
    });
  }

  render(){

    const references = this.state.references.map(reference=>{
      return(
      <Reference
      id={reference.id} 
      contact_name={reference.contact_name}
      contact_lastname={reference.contact_lastname}
      contact_position={reference.contact_position}
      contact_email={reference.contact_email}
      contact_phone={reference.contact_phone}
      company_name={reference.company_name}
      contact_relationship={reference.contact_relationship}
      delReference={this.removeReference}
      />
      );  
    });
      
    return(
      <Grid container columns={1}>
        <div>
          <AppAppBar/>
          <ReferenceForm newReference={this.addReference}/>
          <ul>
            {references}
          </ul>
          <div> 
            <Link to = '/src/components/Resume/ContactList.js'>   
              <Button
                label="Back"
                primary={false}
                style={styles.button}
              />  
            </Link>
          </div>
              
          <div>
            <Link to ="/src/components/Resume/TellMeAboutYouForm.js"> 
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

export default ReferenceList;