import React, { Component } from "react";
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import tempImage from'./Sample Sales Template.png';
import AppAppBar from "../../modules/views/AppAppBar";

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
// continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   }

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//     }

    //Professional Designation Form
    constructor(props){
        super(props);
        this.state = { 
          designation: "", 
          app_position: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
      this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(evt) {
        //alert(`You typed: ${this.state.designation}`);
        evt.preventDefault();
        this.setState({ designation : "", app_position : ""});
       
        localStorage.setItem('designation',JSON.stringify(this.state));
    }
    componentDidMount() {
      this.DesignationInfo = JSON.parse(localStorage.getItem('designation'));
   
      if (localStorage.getItem('designation')) {
          this.setState({
            designation: this.DesignationInfo.designation,
            app_position: this.DesignationInfo.app_position
           
      })
  } else {
      this.setState({
        designation:'',
        app_position:''
      })
    }
  }

    render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <div>
              <AppAppBar/>
            <Header 
            style={
            {margin:"85px 0px 15px 0px"}
            }  
            as= 'h1' 
            color='blue'
            textAlign='center'
            > Template <br></br> <br></br>
              <div>
              <img src={tempImage}
              width="50%"
              height="50%"
              box-shadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              alt="Template" /> 
              </div> 
              
            </Header>

      
            </div>
            <Grid columns={1} container stackable>
              <Grid.Row>   
                <Grid.Column width={16}>

                <Segment>
                    <Form.Input fluid
                      label="What position are you applying for?"
                      type='text'
                      name='app_position'
                      placeholder='Sales Representative, Project Manager, Web Development, etc.' 
                      value={this.state.app_position}
                      onChange={this.handleChange}
                    />
                  </Segment>

                  <Segment>

                    <Header
                      // style={
                      //   {margin:"85px 0px 15px 0px"}
                      //   }  
                        as= 'h1' 
                        color='blue'
                        textAlign='center'>     
                  Professional Designation (Optional)   
                   </Header>
                    <p>
                    Please list your designations, certifications and/or societies.
                    </p>  
                    <Form.Input fluid
                      label="Write your professional designation (if any):"
                      type='text'
                      name='designation'
                      placeholder='P.Eng., M.D., etc.' 
                      value={this.state.designation}
                      onChange={this.handleChange}
                    />
                  </Segment>

                  <Grid.Column width={2}>
                <Button color='blue'>Add </Button> 
                </Grid.Column>

 
                  
                </Grid.Column>
              </Grid.Row>
                <div> 
                  <Link to = '/'>   
                    <Button
                      label="Back"
                      primary={false}
                      style={styles.button}
                    />  
                  </Link>
                </div>
                   
                <div>
                  <Link to ="/src/components/Resume/EducationList.js"> 
                  <Button
                    label="Next"
                    primary={true}
                    style={styles.button}
                  />
                  </Link>
                </div>
                 
            </Grid>     
          </Form>
        );
    }
}

export default ProfessionalDesignationForm;