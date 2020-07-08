import React from 'react';
import './App.css';
import Landing from './Landing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPasword';
import Index from './components/Resume/Index';

function App() {
  return (
    <div >
    <Landing />
    <SignIn />
    <SignUp />
    <ForgotPassword />
    <Index />
    </div>
  );
}

export default App;
