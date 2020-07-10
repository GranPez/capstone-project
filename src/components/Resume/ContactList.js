import React, {Component} from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import  {Grid, Button} from 'semantic-ui-react';

class ContactList extends Component {

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
      this.state = {contacts:[]};
      this.addContact = this.addContact.bind(this);
      this.removeContact = this.removeContact.bind(this);
  }

  addContact(newContact){
    this.setState({
      contacts:[...this.state.contacts, newContact]
    });
  }

  removeContact(id){
    this.setState({
      references: this.state.contacts.filter(e=> e.id !==id)
    });
  }

  render(){
    const contacts = this.state.contacts.map(contact=>{
      return(
      <Contact
      id={contact.id} 
      contact_name={reference.app_name}
      contact_lastname={reference.app_lastname}
      contact_position={reference.app_email}
      contact_email={reference.app_phone_num}
      contact_phone={reference.app_address}
      company_name={reference.app_country}
      contact_relationship={reference.app_city}
      company_name={reference.app_state}
      contact_relationship={reference.app_zip_code}
      delReference={this.removeReference}
      />
      );  
    });
      
    return(
      <Grid container columns={1}>
        <div>
          <ContactForm newContact={this.addContact}/>
          <ul>
            {references}
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

export default ContactList;