import React, { Component } from 'react';
import SignIn from './SignIn';
import EducationList from './EducationList';
import QualificationsList from './QualificationsList';
import CoreCompetenciesList from './CoreCompetenciesList';
import WorkExperienceList from './WorkExperienceList';
import ContactList from './ContactList';
import ReferenceList from './ReferenceList';
import ProfessionalDesignationForm from './ProfessionalDesignationForm';
import AchievmentsList from './AchievmentsList';
import TellMeAboutYouForm from'./TellMeAboutYouForm';
import Confirmation from'./Confirmation';
import Success from'./Success';

export class ApplicantForm extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    //Go to Next Step of Forms
    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to Previous Step of Forms
    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handling the change of the fields
    handleChange = input => evt =>{
        this.setState({[input]:evt.target.value})
    }

    render() {
        const {step} = this.state;
        const {firstName,lastName, email, password,
            key, id, schoolName, degree, major, schoolCountry, graduationYear, gpa, gpaScale, delEducation,
            keyQ,idQ, qualification1, qualification2,qualification3, qualification4, delQualification,
            keyC,idC, competency1, competency2,competency3, competency4, competency5, competency6, competency7, delCompetency,
            jobtitle, company, city, province_state, startdate, enddate, responsibilities1,  responsibilities2,  responsibilities3,  responsibilities4,  responsibilities5,  responsibilities6,  responsibilities7,  responsibilities8, 
            achievments1, achievments2, achievments3, achievments4, achievments5, achievments6, achievments7, achievments8,
            app_name, app_lastname, app_email, app_phone_num, app_address, app_country, app_city, app_state, app_zip_code,
            contact_name, contact_lastname, contact_position, contact_email, contact_phone, company_name, contact_relationship,
            designation,
            aboutYou
        }= this.state;
        const signInValues = {firstName,lastName, email, password};
        const educationListValues = {key,id, schoolName, degree, major, schoolCountry, graduationYear, gpa, gpaScale, delEducation};
        const qualificationListValues = {keyQ,idQ, qualification1, qualification2,qualification3, qualification4,delQualification};
        const competencyListValues = {keyC,idC, competency1, competency2,competency3, competency4, competency5, competency6, competency7, delCompetency};
        const workExperienceListValues = {jobtitle, company, city, province_state, startdate, enddate, responsibilities1,  responsibilities2,  responsibilities3,       responsibilities4,  responsibilities5,  responsibilities6,  responsibilities7,  responsibilities8};
        const achievmentsListValues = {achievments1, achievments2, achievments3, achievments4, achievments5, achievments6, achievments7, achievments8};
        const contactValues = {app_name, app_lastname, app_email, app_phone_num, app_address, app_country, app_city, app_state, app_zip_code};
        const referenceValues = {contact_name, contact_lastname, contact_position, contact_email, contact_phone, company_name, contact_relationship};
        const profDesignationValues = {designation};
        const aboutYouValues = {aboutYou};

        switch(step){
            case 1:
              return(
                 <SignIn
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={signInValues}
                  />
                )
            case 2:
                return(
                  <EducationList
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={educationListValues}
                  />
                )
            case 3:
                return (
                    <QualificationsList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={qualificationListValues}
                    />
                  )
            case 4:
                return (
                    <CoreCompetenciesList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={competencyListValues}
                    />
                  )
            case 5:
                return (
                    <WorkExperienceList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={workExperienceListValues}
                    />
                  )
            case 6:
                return (
                    <AchievmentsList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={achievmentsListValues}
                    />
                  )
            case 7:
                return (
                    <ContactList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={contactValues}
                    />
                  )
            case 8:
                return (
                    <ReferenceList
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={referenceValues}
                    />
                  )
            case 9:
                return (
                    <ProfessionalDesignationForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={profDesignationValues}
                    />
                  )
            case 10:
                return (
                    <TellMeAboutYouForm
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={aboutYouValues}
                    />
                  )
            case 11:
                return(
                  <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    //values={}
                  />
                )
            case 12:
                return <Success/>

            default:
              return "Please Try Again"
        }
    }
}

export default ApplicantForm

