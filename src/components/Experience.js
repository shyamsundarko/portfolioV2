import React, {useEffect} from 'react';
import Aos from 'aos';
import { Grid } from '@material-ui/core';
import continental from '../images/continental.png';
import accenture from '../images/accenture.png'
import hci from '../images/hci.png';


const Experience = () => {
    
    useEffect(()=>{
        Aos.init({duration: 100,
                anchorPlacement: "top-bottom"
        });
    },[])    
   
  return (
    <Grid container id="experienceContainer" >
    <Grid item xs={12} className="titles">Publications & Experience</Grid>
    <Grid container className="individualExperienceContainer">
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4}>
                <img src={hci} alt="HCI logo" className="companyLogo" data-aos="zoom-in" data-aos-once="true"/>
            </Grid>
            <Grid item xs={12} md={1}/>
            <Grid item xs={12} md={5} >
                <h4 className="companyTitle">HCI International 2023</h4>
                {/* <h5 className="role" style={{ color:"#179e4b"}}>Publication sponsored by NTU Singapore</h5> */}
                <h5 className="role" style={{ color:"#179e4b"}}>iWILL: A real-time mobile app to expedite first-aid and reduce casualties</h5>
                <h5 className="roleTasks">
                    <p> <hr style={{ width:"24%"}} />
                        Real-time mobile application developed using the <b>Flutter</b> framework after considerable literature review
                        surrounding Out-Of-Hospital-Cardiac-Arrests (OHCAs)
                        <br />
                        <hr />
                        In recognition, Nanyang Technological University lobbied and sponsored the project’s submission to the
                        HCI International 2023 Conference
                        <br />
                        <hr id="customLine" />
                        
                        <a href="https://link.springer.com/chapter/10.1007/978-3-031-35998-9_22" target="_blank" id="pubLink">View the Springer publication</a>
                    </p>
                    
                </h5>
            </Grid>
            <Grid item xs={12} md={1}/>
    </Grid>
    <hr id="experienceDivider" />


    {/* Accenture */}
    <Grid container className="individualExperienceContainer">
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4}>
                <img src={accenture} alt="Accenture logo" className="companyLogo accenture" data-aos="zoom-in" data-aos-once="true"/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={5} >
                <h4 className="companyTitle">Accenture Singapore</h4>
                <h5 className="role" style={{ color:"#a200ff"}}>Operations Support Practitioner</h5>
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
            <Grid item xs={12} md={1}/>
    </Grid>
    <hr id="experienceDivider" />

    {/* Continental */}
    <Grid container className="individualExperienceContainer">
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4}>
                <img src={continental} alt="Continental logo" className="companyLogo" id="contiCard" data-aos="zoom-in" data-aos-once="true"/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={5} >
                <h4 className="companyTitle">Continental AG Singapore</h4>
                <h5 className="role" style={{color:"#ffa503"}}>Software Developer</h5>
                <h5 className="roleTasks">
                    <p >Developed comprehensive unit tests to ensure software module qualifications, resulting in a 20% decrease in the number of bugs found during testing
                        <br/>
                        <hr />
                        Debugged and streamlined Doxygen documentation generation on Jenkins
                        <br />
                        <hr />
                        Performed feature engineering via IBM DOORS
                    </p>
                    
                </h5>
            </Grid>
            <Grid item xs={12} md={1}/>
    </Grid>
    
    </Grid>
  );
}

export default Experience;
