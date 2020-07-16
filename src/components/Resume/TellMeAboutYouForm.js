import React, { Component } from "react";
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class TellMeAboutYou extends Component {
    //Pagination
continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }
    
    //Tell Me About You Form
    constructor(props){
        super(props);
        this.state = { aboutYou: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState ({ aboutYou: evt.target.value});
    }
    handleSubmit(evt) {
        alert(`You typed: ${this.state.aboutYou}`);
        this.setState({ aboutYou : ""});
        evt.preventDefault();
    }


    render() {
        return (
            <div>

            <h1 align='center'> Tell us about yourself </h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='aboutYou' > Write a few words describing yourself:  </label>
                <input type="text" id="aboutYou"  value={this.state.aboutYou} onChange={this.handleChange} placeholder='Describe yourself in this space' />
                
                <div> 
                  <Link to = '/src/components/Resume/ReferenceList.js'>   
                    <Button
                      label="Back"
                      primary={false}
                      style={styles.button}
                    />  
                  </Link>
                </div>
                    
                <div>
                  <Link to ="/"> 
                  <Button
                    label="Next"
                    primary={true}
                    style={styles.button}
                  />
                  </Link>
                </div>
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
export default TellMeAboutYou;