import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

class WorkExperience extends Component {
    constructor(props){
        super(props);
        this.handleRemoveWorkExp = this.handleRemoveWorkExp.bind(this);
    }
    handleRemoveWorkExp() {
        this.props.delWorkExp(this.props.id);
    }
    render () {
        return (
            <div>
                <li>
                    {this.props.jobtitle}{`, `}
                    {this.props.company}{`, `}
                    {this.props.city}{`, `}
                    {this.props.province_state}{`, `}
                    {this.props.startdate}{`, `}
                    {this.props.enddate}{`, `}
                    {this.props.responsibilities}{`, `}
                </li>   
                <Icon link name='trash' color='red' onClick={this.handleRemoveWorkExp} />         
            </div>
        )
    }
}

export default WorkExperience;