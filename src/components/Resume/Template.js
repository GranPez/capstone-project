
import React, { Component } from "react";
// import  { Header} from 'semantic-ui-react';
//import Box from './box'

class Template extends Component {

    // componentDidMount() {
    //     this.AboutYouInfo = JSON.parse(localStorage.getItem('contact'));
     
    // //     if (localStorage.getItem('aboutYou')) {
    // //         this.setState({
    // //             aboutYou: this.AboutYouInfo.aboutYou
    // //     })
    // // } else {
    // //     this.setState({
    // //       aboutYou:''
    // //     })
    // //   }
    // }
    

    render() {
        //read localStorage and save key elements in variables
        let qual = JSON.parse(localStorage.qualification);
        let con = JSON.parse(localStorage.contact);
        let edu = JSON.parse(localStorage.education);
        // let qual = JSON.parse(localStorage.qualification);
        // let qual = JSON.parse(localStorage.qualification);
        // let qual = JSON.parse(localStorage.qualification);

        
        return (

            
            <div>
                <hr></hr>
                 <h1>{qual.qualification}</h1>
                 <h1>{con.app_name}</h1>
                 <h1>{con.app_lastname}</h1>
                 <h1>{con.app_email}</h1>
                 <h1>{edu.schoolName}</h1>

            </div>
        );
    }
}

export default Template;