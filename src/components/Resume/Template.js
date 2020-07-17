import React, { Component } from "react";
import  {Button, Grid} from 'semantic-ui-react';


class Template extends Component {

    
    render() {
        //read localStorage and save key elements in variables
        let con = JSON.parse(localStorage.contact);
        let desig = JSON.parse(localStorage.designation);
        let qual = JSON.parse(localStorage.qualification);
        let achiev = JSON.parse(localStorage.achievements);
        let comp = JSON.parse(localStorage.competency);
        let prof = JSON.parse(localStorage.workExp);
        let educ = JSON.parse(localStorage.education);
        let refer = JSON.parse(localStorage.reference);

        
        return (
            <div>
             
                <br></br>
       
                <div className="ui raised padded text container segment"  >
                    <div className="ui header"
                    >
                        <h1>{con.app_name} {con.app_lastname} </h1>
                        
                    </div>
            
                    <Grid columns={2} stackable>
                        <Grid.Row columns={2} stackable>                
                            <Grid.Column width="{6}" >
                                
                                <div className="ui center aligned segment text" style={{ 
                                    height:'74px', 
                                    backgroundColor:"#f2f2f2",
                                    fontSize:"1.75rem"}
                                    }                        
                                    > 
                                    {con.app_name} <span style={{ 
                                    color:"#984806",
                                    }}>{con.app_lastname} </span>
                                    
                                </div>
                            </Grid.Column>
                            {/* <Grid.Column width="{0}"></Grid.Column> */}
                            <Grid.Column width="{10}">
                                <div className="ui center aligned segment text"
                                        style={{
                                        
                                        // width:'230px', 
                                        height:'60px', 
                                        backgroundColor:"#f2f2f2",
                                        fontSize:".6rem"}
                                        }               
                                        >
                                            {desig.designation}
                                    </div>
                            </Grid.Column>
                        </Grid.Row>                    
                    </Grid>

                    <Grid columns={3} stackable>
                        <Grid.Row>
                                    <Grid.Column>
                                        <div className="ui left aligned segment  text" style={{width:'417px', 
                                            height:'120px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }                        
                                            > <h3><span style={{ 
                                                color:"#984806",
                                                }}> Summary </span> of Qualifications</h3> 
                                            {qual.qualification}
                                        </div>
                                        <div className="ui left aligned segment  text" style={{width:'417px', 
                                            height:'194px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }                        
                                            > <h3>Achievements</h3>
                                            {achiev.achievments1} 
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width="{1}"></Grid.Column>

                                    <Grid.Column>
                                        <p className="ui left aligned segment text" 
                                            style={{
                                            
                                            width:'200px', 
                                            height:'280px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }               
                                            ><h3> <span style={{ 
                                                color:"#984806",
                                                }}>Core </span> Competencies</h3> 
                                            {comp.competency}
                                        </p>
                                    </Grid.Column>                    
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width="{8}">
                                        <div className="ui left aligned segment  text" style={{width:'417px', 
                                            height:'400px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".65rem"}
                                            }                        
                                            > <h3>Professional Experience</h3>
                                            {prof.jobtitle} *   {prof.company}  *   {prof.city}, {prof.province_state}  *   {prof.enddate} <br></br>
                                            {prof.responsibilities1}<br></br>
                                            {prof.responsibilities2}

                                            
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width="{1}"></Grid.Column>

                                    <Grid.Column width="{5}">
                                        <p className="ui left aligned segment  text" style={{width:'200px', 
                                            height:'123px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }               
                                            > <h3 style={{ 
                                                color:"#984806",
                                                }}>Education</h3>
                                            * {educ.degree} <br></br> {educ.schoolName} <br></br>  {educ.graduationYear}
                                        </p>
                                        <p className="ui left aligned segment  text" style={{width:'200px', 
                                            height:'123px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }               
                                            > <h3>References</h3>
                                            {refer.contact_name}  {refer.contact_lastname} <br></br> {educ.schoolName}
                                        </p>
                                        <p className="ui left aligned segment  text" style={{width:'200px', 
                                            height:'211px', 
                                            backgroundColor:"#f2f2f2",
                                            fontSize:".6rem"}
                                            }               
                                            ><h3 style={{ 
                                                color:"#984806",
                                                }}>Phone</h3> {con.contact_phone}
                                            <h3>Email</h3> {con.app_email}
                                            <h3 style={{ 
                                                color:"#984806",
                                                }}>Address</h3> {con.app_address}
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>

                    </Grid>
     
                   
                    </div>
                    <div>
                        <br></br>
                    <Button className="ui center align" onClick={() => window.print()}
                    label="Print"
                    primary={true}
                
                    />
                
                </div>
            </div>
        );
    }
}

export default Template;