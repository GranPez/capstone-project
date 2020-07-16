import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import {Link} from 'react-router-dom';


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
      contacts: this.state.contacts.filter(e=> e.id !==id)
    });
  }

  render(){
    const contacts = this.state.contacts.map(contact=>{
      return(
      <Contact
      id={contact.id} 
      app_name={contact.app_name}
      app_lastname={contact.app_lastname}
      app_email={contact.app_email}
      app_phone_num={contact.app_phone_num}
      app_address={contact.app_address}
      app_country={contact.app_country}
      app_city={contact.app_city}
      app_state={contact.app_state}
      app_zip_code={contact.app_zip_code}
      contactInfo={[contact.contactInfo]}

      delContact={this.removeContact}
      />
      );
    });
    return(
      <Grid container columns={1}>
        <div>
          <ContactForm newContact={this.addContact} />
          <ul>
            {contacts}
          </ul>
          <div> 
            <Link to = '/src/components/Resume/AchievmentsList.js'>   
              <Button
                label="Back"
                primary={false}
                style={styles.button}
              />  
            </Link>
          </div>
              
          <div>
            <Link to ="/src/components/Resume/ReferenceList.js"> 
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

export default ContactList;