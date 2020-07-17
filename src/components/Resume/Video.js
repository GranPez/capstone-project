import React, { Component } from "react";
import  {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import AppAppBar from '../../modules/views/AppAppBar';
import App from "../../App";



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
            > 
            Submit a video of yourself (Optional)
            </Header>

            <p           
            style={
            {margin:"15px 0px 15px 115px"}
            }  
            >
            If you want to show us a video of yourself, upload it here:
            </p>  
            </div>
            <Grid columns={1} container stackable>
              <Grid.Row>   
                <Grid.Column width={16}>
                  <Segment>
                    <Form.Input fluid
                      label="Video file"
                      type="file"
                      id="video"
                      placeholder='P.Eng., M.D., etc.' 
                      value={this.state.video}
                      onChange={this.handleChange}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>        
              <div> 
                  <Link to = '/src/components/Resume/TellMeAboutYouForm.js'>   
                    <Button
                      label="Back"
                      primary={false}
                      style={styles.button}
                    />  
                  </Link>
                </div>
                    
                <div>
                  <Link to ="/src/components/Resume/Template.js"> 
                  <Button
                    label="Submit"
                    primary={true}
                    style={styles.button}
                  />
                  </Link>
                </div>
            </Grid>     
          </Form>
       




            // <div>
            // <h1> Submit a video of yourself (Optional) </h1>
            // <form onSubmit={this.handleSubmit}>               
            //     <input type="file" id="video"  value={this.state.video} onChange={this.handleChange} placeholder='video file' />  

            //     <Button
            //         label="Back"
            //         primary={false}
            //         style={styles.button}
            //         onClick={this.back}
            //     />  
            //     <Button
            //         label="Next"
            //         primary={true}
            //         style={styles.button}
            //         onClick={this.continue}
            //     />               
            // </form>
            // </div>
        )
    }
}
const styles = {
    button:{
        margin: 15
    }
}
export default Video;