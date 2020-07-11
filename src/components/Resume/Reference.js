import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class Reference extends Component {
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
                <li>
                  {this.props.contact_name}{``}
                  {this.props.contact_lastname}{``}
                  {this.props.contact_position}{``}
                  {this.props.contact_email}{``}
                  {this.props.contact_phone}{``}
                  {this.props.company_name}{``}
                  {this.props.contact_relationship}
                </li>
                <Icon link name='trash' color='red' onClick={this.handleRemoveReference} />
            </div>
        )
    }
}
export default Reference;