import React, {Component} from 'react';
import {ApplicantForm} from './ApplicantForm';
import NaviBar from './NaviBar';
import AppAppBar from '../../modules/views/AppAppBar';



class Index extends Component{

  render() {
    return ( 
      <div>
        {/* <ApplicantForm /> */}
        {/* <NaviBar/> */}
        <AppAppBar/>
        
      </div>
    );
  }
}


export default Index;