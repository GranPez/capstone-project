import React, {Component} from 'react';
import  {Grid} from 'semantic-ui-react';


class Success extends Component{

    //Pagination
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
   
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
          
        <Grid container columns={1}>
            <Grid.Column width={16}>
            <br/>
            <h1>Your Information has been submitted successfully!</h1> 
            <br/>
            <h2>Thank you for your submission</h2> 
           </Grid.Column>
        </Grid>
        );
    }
}
export default Success;