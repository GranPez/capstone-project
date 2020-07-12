import React, { Component } from "react";
import {Button} from 'semantic-ui-react';


class Video extends Component {
       //Pagination
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

        // Video form   
    constructor(props){
        super(props);
        this.state = { video: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState ({ video: evt.target.value});
    }
    handleSubmit(evt) {
        // alert(`You typed: ${this.state.video}`);
        this.setState({ video : ""});
        evt.preventDefault();
    }


    render() {
        return (
            <div>
            <h1> Submit a video of yourself (Optional) </h1>
            <form onSubmit={this.handleSubmit}>               
                <input type="file" id="video"  value={this.state.video} onChange={this.handleChange} placeholder='video file' />  

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
            </form>
            </div>
        )
    }
}
const styles = {
    button:{
        margin: 15
    }
}
export default Video;