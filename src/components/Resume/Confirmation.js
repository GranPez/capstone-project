import React, {Component} from 'react';
import  {Grid, Button} from 'semantic-ui-react';


class Confirmation extends Component{

    //Pagination
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        //If the team chooses to do database, is in
        //this section where the complete form would be processed,
        // sending the data into the API -- Backend Language    
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
            <h1>Confirm Information</h1> 
            <div>          
            <Button
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
            />            
            <Button
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />
            </div> 
          </Grid.Column>
        </Grid>
        );
    }
}

const styles = {
    button:{
        margin: 15
    }
  }

export default Confirmation;
