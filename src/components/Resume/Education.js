import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class Education extends Component {
    constructor(props){
        super(props);
        this.handleRemoveEducation = this.handleRemoveEducation.bind(this);
    }
    handleRemoveEducation() {
        this.props.delEducation(this.props.id);
    }
    render(){
        return(
            <div>               
                <li>
                  {this.props.degree}{`, `}
                  {this.props.major}{` * `}
                  {this.props.schoolName}{`, `}
                  {this.props.schoolCountry}{` * `}
                  {this.props.graduationYear}{`, with a GPA of `}
                  {this.props.gpa}{` on scale of `}
                  {this.props.gpaScale}
                </li>
                <Icon link name='trash' color='red' onClick={this.handleRemoveEducation} />
            </div>
        )
    }
}
export default Education;