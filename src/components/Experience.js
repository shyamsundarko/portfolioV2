import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import continental from '../images/continental.png';



const Experience = () => {
    
   
  return (
    <Grid container id="experienceContainer" >
    <Grid item xs={12} style={{fontSize:"7vmin", fontWeight:"600", fontVariant:"small-caps"}}>Work Experience</Grid>
    
    <Grid item xs={1} md={2} ></Grid>
    <Grid item xs={10} md={3}>
        <Card className='experienceCard'>
            <Card.Img variant="top" src={continental} ></Card.Img>
        </Card>
    </Grid>
    <Grid item xs={1} ></Grid>


    <Grid container item xs={12} md={4} >
        <Grid item xs={12}>                      
            <h4 style={{fontWeight:"400", fontSize:"4vmin"}} className='resumeFont' >Continental Automotive Pte. Ltd.</h4>
        </Grid>
        <Grid item xs={12}>
            <h5 style={{fontWeight:"600"}} className="text-muted">Software Developer Intern</h5>
        </Grid>
        
        <Grid item  xs={1}></Grid>
        <Grid item  xs={10}>
            <ul style={{textAlign:"left", fontSize:"90%"}}>
                <li>Developed unit tests for software module qualification.</li>
                <li>Debugged and streamlined Doxygen documentation generation on Jenkins.</li>
                <li>Performed feature engineering via IBM DOORS.</li>
            </ul>
        </Grid>
        <Grid item  xs={1}></Grid>
    </Grid>

    <Grid item xs={12} md={3} ></Grid>

    </Grid>
  );
}

export default Experience;
