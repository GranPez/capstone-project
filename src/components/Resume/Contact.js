import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleRemoveReference = this.handleRemoveReference.bind(this);
    }
    handleRemoveReference() {
        this.props.delReference(this.props.id);
    }
    render(){
        return(
            <div>
                <button>Edit</button>
                <button>Delete </button>         
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
                <Icon link name='trash' color='red' onClick={this.handleRemoveReference} />
            </div>
        )
    }
}
export default Contact;