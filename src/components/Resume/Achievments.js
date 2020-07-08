import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

class Achievments extends Component {
    constructor(props){
        super(props);
        this.handleRemoveAchieve = this.handleRemoveAchieve.bind(this);
    }
    handleRemoveAchieve() {
        this.props.delAchieve(this.props.id);
    }
    render () {
        return (
            <div>
                <li>
                    {this.props.achievments1}{`. `}
                    {this.props.achievments2}{`. `}
                    {this.props.achievments3}{`. `}
                    {this.props.achievments4}{`. `}
                    {this.props.achievments5}{`. `}
                    {this.props.achievments6}{`. `}
                    {this.props.achievments7}{`. `}
                    {this.props.achievments8}{`. `}
                </li>   
                <Icon link name='trash' color='red' onClick={this.handleRemoveAchieve} />      
            </div>
        )
    }
}

export default Achievments;