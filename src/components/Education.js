import { Grid } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import ntulogo from '../images/ntulogo.jpg';
import northeasternlogo from '../images/northeasternlogo.svg';
const Education = () => {
  return (
    <Grid container style={{borderBottom:"solid 1px #a4a5a6"}}>
        <Grid item xs={12} style={{fontSize:"7vmin", fontWeight:"600", fontVariant:"small-caps", paddingTop:"2vmin", marginBottom:"2vmin"}}>Education</Grid>

        {/* This is for Northeastern */}
        <Grid container style={{paddingBottom:"7vmin", paddingTop:"3vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={northeasternlogo} alt="Northeastern logo" style={{width: "80%", padding:"4vmin", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4}  style={{paddingTop:"3vmin"}}>
                <h4 style={{fontSize:"3.5vmin", color:"#353638", fontWeight:"600"}}>Northeastern University</h4>
                <h5 style={{fontSize: "2.5vmin", color:"#5d6063", fontWeight:"500"}}>Masters in Software Engineering Systems</h5>
            </Grid>
            <Grid item xs={12} md={2}/>
        </Grid>
        {/* This is for NTU */}
        <Grid container style={{paddingBottom: "7vmin"}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
                <img src={ntulogo} alt="Ntu logo" style={{width: "80%", padding:"4vmin", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}/>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={4} style={{paddingTop:"3vmin"}}>
                <h4 style={{fontSize:"3.5vmin", color:"#353638", fontWeight:"600"}}>Nanyang Technological University</h4>
                <h5 style={{fontSize: "2.5vmin", color:"#5d6063", fontWeight:"500"}}>Bachelor of Engineering in Computer Science</h5>
                <h6 style={{fontSize:"2vmin", color:"#5d6063"}}>CGPA: 4.11</h6>
            </Grid>
            <Grid item xs={12} md={2} />
        </Grid>
    
    </Grid>
    
    );
}

export default Education;
