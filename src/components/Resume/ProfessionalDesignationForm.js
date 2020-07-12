import React, { Component } from "react";
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';

const styles = {
    button:{
        margin: 15
    },
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

class ProfessionalDesignationForm extends Component {
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
        //alert(`You typed: ${this.state.designation}`);
        this.setState({ designation : ""});
        evt.preventDefault();
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Header as= 'h2' content='stackable Grid' textAlign='center' style={styles.h3}>Professional Designation (Optional)</Header>
                <Grid columns={2} stackable></Grid>
                    
                <Grid.Column width={16}>
                    <Segment>
                        <Form.Input fluid
                            label="Write your professional designation (if any):"
                            type='text'
                            name='designation'
                            placeholder='P.Eng., M.D., etc.' 
                            value={this.state.designation}
                            onChange={this.handleChange}
                        />
                    </Segment>
                </Grid.Column>

                    
                        
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
                
                
                
            </Form>
        )
    }
}

export default ProfessionalDesignationForm;