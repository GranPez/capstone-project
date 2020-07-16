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

        localStorage.setItem('aboutYou',JSON.stringify(this.state));
    }

    componentDidMount() {
        this.AboutYouInfo = JSON.parse(localStorage.getItem('aboutYou'));
     
        if (localStorage.getItem('aboutYou')) {
            this.setState({
                aboutYou: this.AboutYouInfo.aboutYou
        })
    } else {
        this.setState({
          aboutYou:''
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
            Tell us about yourself (Optional)
            </Header>

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
            <Grid columns={1} container stackable>
              <Grid.Row>   
                <Grid.Column width={16}>
                  <Segment>
                    <Form.Input fluid
                      label="Write a few words describing yourself: "
                      type='text'
                      name='designation'
                      placeholder='Describe yourself in this space' 
                      value={this.state.aboutYou}
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
       



            // <div>

            // <h1 align='center'> Tell us about yourself </h1>
            // <form onSubmit={this.handleSubmit}>
            //     <label htmlFor='aboutYou' > Write a few words describing yourself:  </label>
            //     <input type="text" id="aboutYou"  value={this.state.aboutYou} onChange={this.handleChange} placeholder='Describe yourself in this space' />
                
            // <Button
            // label="Back"
            // primary={false}
            // style={styles.button}
            // onClick={this.back}
            // />  
            // <Button
            // label="Next"
            // primary={true}
            // style={styles.button}
            // onClick={this.continue}
            // />    
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
export default TellMeAboutYou;