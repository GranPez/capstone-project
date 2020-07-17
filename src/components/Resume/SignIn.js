import React, { Component } from 'react'
import  {
    Grid, Header, 
    Button, Form, GridRow} from 'semantic-ui-react';


export class SignIn extends Component {
    // //Pagination
    // continue = e => {
    // e.preventDefault();
    // this.props.nextStep();
    // }  

    render() {
    //Passing values from ApplicantForm for Pagination
    const {values, handleChange}= this.props; 
        return (
            <Form >
                <br/>
              <Header as= 'h1' textAlign='center'>Sign In</Header>
              {/* <Grid container columns={1} > */}
              <Grid columns={1} container divided='vertically' stackable>
                <GridRow>
                    <Grid.Column width={16}>
                    
                    <Form.Input fluid
                    label='Enter your First Name' 
                    placeholder='Name'
                    name='firstName'
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <Form.Input fluid
                    label='Enter your Last Name' 
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <Form.Input fluid
                    label='Enter your Email Address' 
                    placeholder='Email Address'
                    name='email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <Form.Input fluid
                    label='Enter your Password' 
                    placeholder='Password'
                    name='password'
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                    />
                    <br/>
                    </Grid.Column >
                </GridRow>

                <Grid.Column>
                <Button
                icon='sign in' 
                iconposition='left' 
                label="Sign In"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                </Grid.Column >
              </Grid>
            </Form>
        );
    }
}
const styles = {
    button:{
        margin: 15
    }
}

export default SignIn;

    