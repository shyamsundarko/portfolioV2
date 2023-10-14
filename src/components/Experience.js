import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import continental from '../images/continental.png';
import accenture from '../images/accenture.png'


const Experience = () => {
    
   
  return (
    <Grid container id="experienceContainer" >
    <Grid item xs={12} style={{fontSize:"7vmin", fontWeight:"600", fontVariant:"small-caps"}}>Work Experience</Grid>
    
    {/* Accenture */}
    <Grid container style={{paddingBottom:"5vmin", paddingTop: "7vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={accenture} alt="Accenture logo" style={{width: "80%", paddingBottom:"2vmin", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", padding:"3vmin", marginBottom:"2vmin"}}/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} >
                <h4 style={{fontSize:"3.5vmin", color:"#353638", fontWeight:"600"}}>Accenture Singapore</h4>
                <h5 style={{paddingBottom:"1.5vmin", fontSize:"2vmin", color:"#a200ff"}}>Operations Support Practitioner Intern</h5>
                <h5 style={{fontSize: "2.2vmin", color:"#5d6063", fontWeight:"500", width:"90%", margin: "0 auto"}}>
                    <p >Worked on a major healthcare system in Singapore and supported project leads with critical project tasks
                        <br/>
                        <hr style={{width: "20%", margin: "0 auto", marginTop: "1.5vmin", marginBottom: "1.5vmin"}} />
                        Improved the codebase's quality assurance by 40% by debugging and implementing fixes for issues
                        <br />
                        <hr style={{width: "20%", margin: "0 auto", marginTop: "1.5vmin", marginBottom: "1.5vmin"}} />
                        Collaborated with techno-functional teams to deliver seamless solutions to address client’s concerns
                    </p>
                    
                </h5>
            </Grid>
            <Grid item xs={12} md={2}/>
    </Grid>

    {/* Continental */}
    <Grid container style={{paddingBottom:"5vmin", paddingTop: "5vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={continental} alt="Continental logo" style={{width: "90%", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", marginBottom:"2vmin"}}/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} >
                <h4 style={{fontSize:"3.5vmin", color:"#353638", fontWeight:"600"}}>Continental Automotive Singapore</h4>
                <h5 style={{paddingBottom:"1.5vmin", fontSize:"2vmin", color:"#ffa503"}}>Software Developer Intern</h5>
                <h5 style={{fontSize: "2.2vmin", color:"#5d6063", fontWeight:"500", width:"80%", margin: "0 auto"}}>
                    <p >Developed comprehensive unit tests to ensure software module qualifications, resulting in a 20% decrease in the number of bugs found during testing.
                        <br/>
                        <hr style={{width: "20%", margin: "0 auto", marginTop: "1.5vmin", marginBottom: "1.5vmin"}} />
                        Debugged and streamlined Doxygen documentation generation on Jenkins.
                        <br />
                        <hr style={{width: "20%", margin: "0 auto", marginTop: "1.5vmin", marginBottom: "1.5vmin"}} />
                        Performed feature engineering via IBM DOORS.
                    </p>
                    
                </h5>
            </Grid>
            <Grid item xs={12} md={2}/>
    </Grid>
    
    </Grid>
  );
}

export default Experience;
