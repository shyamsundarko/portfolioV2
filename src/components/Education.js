import { Grid } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import ntulogo from '../images/ntulogo.jpg';
import giislogo from '../images/giislogo.jpeg';
const Education = () => {
  return (
    <Grid container>
        <Grid item xs={12} style={{fontSize:"7vmin", fontWeight:"600", fontVariant:"small-caps", paddingTop:"2vmin", marginBottom:"4vmin"}}>Education</Grid>
        
        <Grid item xs={1}></Grid>
        <Grid item xs={10} md={3} >
            <Card className='experienceCard'>
                <Card.Img variant="top" src={ntulogo} ></Card.Img>
            </Card>
        </Grid>
        <Grid item xs={1} ></Grid>
        <Grid container item xs={12} md={4} >
            <Grid item xs={12}>                      
                <h4 style={{fontWeight:"400", fontSize:"4vmin"}} className='resumeFont' >Nanyang Technological University</h4>
            </Grid>
            <Grid item xs={12}>
                <h5 style={{fontWeight:"600"}}>Bachelor of Engineering in Computer Science</h5>
                <h6 style={{fontStyle:"italic", fontWeight:"400"}}>August 2019 - May 2023</h6>
                <h6>CGPA: 4.24</h6>
            </Grid>
            <Grid item  xs={1}></Grid>
            <Grid item  xs={10}></Grid>
            <Grid item  xs={1}></Grid>
        </Grid>
        <Grid item xs={12} md={3} ></Grid>

        

        <Grid item xs={1} ></Grid>
        <Grid item xs={10} md={3} >
            <Card className='experienceCard'>
                <Card.Img variant="top" src={giislogo} ></Card.Img>
            </Card>
        </Grid>
        <Grid item xs={1} ></Grid>
        <Grid container item xs={12} md={4} >
            <Grid item xs={12}>                      
                <h4 style={{fontWeight:"400", fontSize:"4vmin"}} className='resumeFont' >Global Indian International School</h4>
            </Grid>
            <Grid item xs={12}>
                <h5 style={{fontWeight:"600"}}>CBSE XII ('A' level equivalent)</h5>
                <h6 style={{fontStyle:"italic", fontWeight:"400"}}>Board Exam</h6>
                <h6>Percentage: 94%</h6>
            </Grid>
            <Grid item  xs={1}></Grid>
            <Grid item  xs={10}></Grid>
            <Grid item  xs={1}></Grid>
        </Grid>
        <Grid item xs={12} md={2} ></Grid>
        
    
    </Grid>
    
    );
}

export default Education;
