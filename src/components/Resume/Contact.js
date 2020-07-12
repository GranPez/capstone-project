import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
    }
    handleRemoveContact() {
        this.props.delContact(this.props.id);
    }
    render(){
        return(
            <div>        
                <li>
                  {this.props.app_name}{``}
                  {this.props.app_lastname}{``}
                  {this.props.app_email}{``}
                  {this.props.app_phone_num}{``}
                  {this.props.app_address}{``}
                  {this.props.app_country}{``}
                  {this.props.app_city}
                  {this.props.app_state}{``}
                  {this.props.app_zip_code}
                </li>
                <Icon link name='trash' color='red' onClick={this.handleRemoveContact} />
            </div>
        )
    }
}
export default Contact;