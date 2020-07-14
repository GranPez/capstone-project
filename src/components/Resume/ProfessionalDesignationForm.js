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

        localStorage.setItem('designation',JSON.stringify(this.state));
    }
    componentDidMount() {
      this.DesignationInfo = JSON.parse(localStorage.getItem('designation'));
   
      if (localStorage.getItem('designation')) {
          this.setState({
            designation: this.DesignationInfo.designation,
           
      })
  } else {
      this.setState({
        designation:''
      })
    }
  }

    render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <div>
            <Header 
            style={
            {margin:"85px 0px 15px 0px"}
            }  
            as= 'h1' 
            color='blue'
            textAlign='center'
            > 
            Professional Designation (Optional)
            </Header>

            <p           
            style={
            {margin:"15px 0px 15px 115px"}
            }  
            >
            Please list your designations, certifications and/or societies.
            </p>  
            </div>
            <Grid columns={1} container stackable>
              <Grid.Row>   
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
              </Grid.Row>        
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
            </Grid>     
          </Form>
        );
    }
}

export default ProfessionalDesignationForm;