import React from 'react';
import './App.css';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPasword';
import Index from './components/Resume/Index';
//import Template from './Template';

function App() {
  return (
    <div >
    <Landing />
    <SignIn />
    <SignUp />
    <ForgotPassword />
    <Index />
    {/* <Template /> */}
    </div>
  );
}

export default App;
