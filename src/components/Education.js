import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Aos from 'aos';
import ntulogo from '../images/ntulogo.png';
import northeasternlogo from '../images/northeasternlogo.svg';
const Education = () => {

    useEffect(()=>{
        Aos.init({duration: 200,
                anchorPlacement: "top-bottom"
        });
    },[])
  return (
    <Grid container id="educationContainer">
        <Grid item xs={12} className="titles">Education</Grid>

        {/* This is for Northeastern */}
        <Grid container className="individualEducationContainer">
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={northeasternlogo} alt="Northeastern logo" className="educationLogo" data-aos="fade-right" />
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4}  style={{paddingTop:"3vmin"}} data-aos="fade-left">
                <h4 className="uniName">Northeastern University</h4>
                <h5 className="degreeName">Masters in Software Engineering Systems</h5>
            </Grid>
            <Grid item xs={12} md={2}/>
        </Grid>
        
        {/* This is for NTU */}
        <Grid container className="individualEducationContainer">
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={ntulogo} alt="Ntu logo" className="educationLogo" data-aos="fade-right"/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} style={{paddingTop:"3vmin"}} data-aos="fade-left">
                <h4 className="uniName">Nanyang Technological University</h4>
                <h5 className="degreeName">Bachelor of Engineering in Computer Science</h5>
                <h6 className="degreeName degreeCGPA">CGPA: 4.11</h6>
            </Grid>
            <Grid item xs={12} md={2} />
        </Grid>
    
    </Grid>
    
    );
}

export default Education;
