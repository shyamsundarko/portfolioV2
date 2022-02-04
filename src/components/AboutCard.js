import { Grid } from '@material-ui/core';
import React from 'react';
import profilepic from '../images/profilepic.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import outlook from '../images/outlook.png';
import github from '../images/github.png';
const AboutCard = ({width, lftMargin}) => {
  return (
  <Grid style={{width: width, marginLeft: lftMargin}} id="customCard">
    <Grid container id="CardTop">
        <Grid item xs={12} style={{padding:"3vmin", marginTop:"2vmin"}}>
            <img src={profilepic} alt='profile pic of Shyam' style={{borderRadius: "50%", height:"25vmin", backgroundColor:"white"}}></img>
        </Grid>
        <Grid item xs={12}>
            <h2 style={{fontWeight:"600"}}>Shyam Sundar</h2>
        </Grid>
        <Grid item xs={12} style={{color:"#ffffff"}}><hr></hr></Grid>
        <Grid item xs={12} style={{fontFamily:"Roboto Mono", marginBottom:"2vmin"}}>Software Developer</Grid>  
    </Grid>
    <Grid container>
        <Grid item xs={2} style={{backgroundColor:"#ffffff"}}></Grid>
        <Grid container item xs={8} style={{backgroundColor:"white", paddingTop:"1rem", paddingBottom:"1rem"}}>
            <Grid item xs={3}>
                <img src={linkedin} alt="linkedin logo" className='socialLogo'></img>
            </Grid>
            <Grid item xs={3}>
                <img src={github} alt="github logo" className='socialLogo'></img>
            </Grid>
            <Grid item xs={3}>
                <img src={outlook} alt="outlook logo" className='socialLogo'></img>
            </Grid>
            <Grid item xs={3}>
                <img src={insta} alt="instagram logo" className='socialLogo'></img>
            </Grid>
            
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"white"}}></Grid>
    </Grid>
  </Grid>);
}

export default AboutCard;
