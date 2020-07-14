import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

class CoreCompetency extends Component {
    constructor(props){
        super(props);
        this.handleRemoveCompetency = this.handleRemoveCompetency.bind(this);
    }
    handleRemoveCompetency() {
        this.props.delCompetency(this.props.idC);
    }
    render(){
        return(
            <div>               
                <li>
                  {this.props.competency}{`. `}
                  {/*{this.props.competency2}{`. `}
                  {this.props.competency3}{`. `}
                  {this.props.competency4}{`. `}
                  {this.props.competency5}{`. `}
                  {this.props.competency6}{`. `}
                  {this.props.competency7}{`. `}*/}
                </li>
                <Icon link name='trash' color='red' onClick={this.handleRemoveCompetency} />
            </div>
        )
    }
}
export default CoreCompetency;