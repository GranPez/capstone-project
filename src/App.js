import React from 'react';
import './App.css';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
//import ForgotPassword from './ForgotPasword';
// import Index from './components/Resume/Index';
import { Route, Switch} from 'react-router-dom';

import ProfessionalDesignationForm from './components/Resume/ProfessionalDesignationForm';
import ReferenceList from './components/Resume/ReferenceList';
import EducationList from './components/Resume/EducationList';
import QualificationsList from './components/Resume/QualificationsList';
import ContactList from './components/Resume/ContactList';
import CoreCompetenciesList from './components/Resume/CoreCompetenciesList';
import AchievmentsList from './components/Resume/AchievmentsList';
import WorkExperienceList from './components/Resume/WorkExperienceList';
import TellMeAboutYou from './components/Resume/TellMeAboutYouForm';
import Video from './components/Resume/Video';
// import SignIn from './components/Resume/SignIn';


function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/src/components/Resume/SignIn.js" component={SignIn}/>
        <Route exact path="/src/components/Resume/QualificationsList.js" component={QualificationsList}/>
        <Route exact path="/src/components/Resume/CoreCompetenciesList.js" component={CoreCompetenciesList}/>
        <Route exact path="/src/components/Resume/AchievmentsList.js" component={AchievmentsList}/>
        <Route exact path="/src/components/Resume/WorkExperienceList.js" component={WorkExperienceList}/>
        <Route exact path="/src/components/Resume/EducationList.js" component={EducationList}/>
        <Route exact path="/src/components/Resume/ReferenceList.js" component={ReferenceList}/>
        <Route exact path="/src/components/Resume/ContactList.js" component={ContactList}/>
        <Route exact path="/src/components/Resume/ProfessionalDesignationForm.js" component={ProfessionalDesignationForm}/>
        <Route exact path="/src/components/Resume/TellMeAboutYouForm.js" component={TellMeAboutYou}/>
        <Route exact path="/src/components/Resume/Video.js" component={Video}/>
        <Route exact path="/src/SignIn.js" component={SignIn}/>
        <Route exact path="/src/SignUp.js.js" component={SignUp}/>
        
      </Switch>

    {/* <Landing /> */}
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    {/* <ForgotPassword /> */}
    {/* <Index /> */}
    {/*<Template /> */}
    </div>
  );
}

export default App;
