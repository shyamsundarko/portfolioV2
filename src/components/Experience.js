import React, {useEffect} from 'react';
import Aos from 'aos';
import { Grid } from '@material-ui/core';
import continental from '../images/continental.png';
import accenture from '../images/accenture.png'


const Experience = () => {
    
    useEffect(()=>{
        Aos.init({duration: 300,
                mirror: true,
                anchorPlacement: "top-bottom"
        });
    },[])    
   
  return (
    <Grid container id="experienceContainer" >
    <Grid item xs={12} className="titles">Work Experience</Grid>
    
    {/* Accenture */}
    <Grid container style={{paddingBottom:"6vmin", paddingTop: "6vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={accenture} alt="Accenture logo" className="companyLogo" data-aos="fade-up"/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} >
                <h4 className="companyTitle">Accenture Singapore</h4>
                <h5 className="role" style={{ color:"#a200ff"}}>Operations Support Practitioner Intern</h5>
                <h5 className="roleTasks">
                    <p >Worked on a major healthcare system in Singapore and supported project leads with critical project tasks
                        <br/>
                        <hr />
                        Improved the codebase's quality assurance by 40% by debugging and implementing fixes for issues
                        <br />
                        <hr />
                        Collaborated with techno-functional teams to deliver seamless solutions to address client’s concerns
                    </p>
                    
                </h5>
            </Grid>
            <Grid item xs={12} md={2}/>
    </Grid>
    <hr id="experienceDivider" />

    {/* Continental */}
    <Grid container style={{paddingBottom:"6vmin", paddingTop: "6vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={continental} alt="Continental logo" className="companyLogo" id="contiCard" data-aos="fade-up"/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} >
                <h4 className="companyTitle">Continental Automotive Singapore</h4>
                <h5 className="role" style={{color:"#ffa503"}}>Software Developer Intern</h5>
                <h5 className="roleTasks">
                    <p >Developed comprehensive unit tests to ensure software module qualifications, resulting in a 20% decrease in the number of bugs found during testing.
                        <br/>
                        <hr />
                        Debugged and streamlined Doxygen documentation generation on Jenkins.
                        <br />
                        <hr />
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
