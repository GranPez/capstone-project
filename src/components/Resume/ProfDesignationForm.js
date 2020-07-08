import React, { Component } from "react";
import {Button} from 'semantic-ui-react';

class ProfDesignationForm extends Component {
//Pagination
continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
    }

    //Professional Designation Form
    constructor(props){
        super(props);
        this.state = { designation: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState ({ designation: evt.target.value});
    }
    handleSubmit(evt) {
        alert(`You typed: ${this.state.designation}`);
        this.setState({ designation : ""});
        evt.preventDefault();
    }


    render() {
        return (
            <div>
                
            <h1> Professional Designation (Optional) </h1>

            <div className="form-group">
            <form onSubmit={this.handleSubmit}>
           
                <label htmlFor='designation' > Write your professional designation (if any):  </label>
                <input 
                type="text" 
                id="designation" 
                className="form-control" 
                value={this.state.designation} 
                onChange={this.handleChange} 
                placeholder='P.Eng., M.D., etc.' 
                />
                
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
            </div>
        )
    }
}

const styles = {
    button:{
        margin: 15
    }
  }
export default ProfDesignationForm;