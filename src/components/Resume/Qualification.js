import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class Qualification extends Component {
    constructor(props){
        super(props);
        this.handleRemoveQualification = this.handleRemoveQualification.bind(this);
    }
    handleRemoveQualification() {
        this.props.delQualification(this.props.idQ);
    }
    render(){
        return(
            <div>               
                <li>
                  {this.props.qualification}{`. `}
                  {/* {this.props.qualification2}{`. `}
                  {this.props.qualification3}{`. `}
                  {this.props.qualification4}{`. `}*/}
                </li>
                <Icon link name='trash' color='red' onClick={this.handleRemoveQualification} />
            </div>
        )
    }
}
export default Qualification;