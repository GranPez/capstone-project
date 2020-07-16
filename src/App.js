import React from 'react';
import './App.css';
import Landing from './Landing';
//import SignIn from './SignIn';
//import SignUp from './SignUp';
//import ForgotPassword from './ForgotPasword';
import Index from './components/Resume/Index';
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


// import Qualification from './components/Resume/Qualification';
// import SignIn from './components/Resume/SignIn';
// import About from './components/Resume/About';
// import QualificationsForm from './components/Resume/QualificationsForm';
// import ContactForm from './components/Resume/ContactForm';
// import CoreCompetenciesForm from './components/Resume/CoreCompetenciesForm';
// import AchievmentsForm from './components/Resume/AchievmentsForm';
// import WorkExperienceForm from './components/Resume/WorkExperienceForm';
// import EducationForm from './components/Resume/EducationForm';
// import ReferenceForm from './components/Resume/ReferenceForm';
import Template from './components/Resume/Template';

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Sign In</Link>
        <Link to="/src/components/Resume/QualificationsList.js">Qualification</Link>
        <Link to="/src/components/Resume/ContactList.js">Contact</Link>
        <Link to="/src/components/Resume/CoreCompetenciesList.js">Compentencies</Link>
        <Link to="/src/components/Resume/AchievmentsList.js">Achievements</Link>
        <Link to="/src/components/Resume/WorkExperienceList.js">Work Experience</Link>
        <Link to="/src/components/Resume/EducationList.js">Education</Link>
        <Link to="/src/components/Resume/ReferenceList.js">Reference</Link>
        <Link to="/src/components/Resume/Contact.js">Contact</Link>
        <Link to="/src/components/Resume/ProfessionalDesignationForm.js">Professional Designation</Link>
     
      </nav> */}
      
      <Switch>
        {/* <Route exact path="/" component={Landing}/> */}
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
        
      </Switch>
    
      <Landing />
{/*   <SignIn />
      <SignUp />
      <ForgotPassword />}*/}
      <Index />
      <Template />
    </div>
  );
}





export default App;
