import { Grid } from '@material-ui/core';
import React from 'react';
import profilepic from '../images/profilepic.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import outlook from '../images/outlook.png';
import github from '../images/github.png';
import {Card} from 'react-bootstrap';

const AboutCard = ({wid}) => {
  return (
    <Card style={{ width: {wid} }} id="customCard">
    <Card.Img variant="top" src={profilepic} style={{borderRadius:"50%", border:"solid", width:"69%", marginLeft:"14.5%", marginTop:"10%"}} />
    <Card.Body style={{color:"#212529"}}>
        <Card.Title style={{fontSize:"5vmin", fontWeight:"600"}}>Shyam Sundar</Card.Title>
        <hr />
        <Card.Text style={{fontFamily:"Roboto Mono, Times New Roman", fontWeight:"400", fontSize:"3vmin"}}>
            
            Software Developer 
        </Card.Text>
        <Grid container>
            <Grid item xs={2} style={{backgroundColor:"white"}}></Grid>
            <Grid container item xs={8} style={{backgroundColor:"white"}}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={2} ><a href="https://www.linkedin.com/in/shyam-s-208166137/" target="_blank"><img src={linkedin} alt="Linkedin logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="https://github.com/shyamsundarko" target="_blank"><img src={github} alt="Github logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="mailto:SHYAMSUN001@e.ntu.edu.sg" target="_blank"><img src={outlook} alt="Outlook logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="https://www.instagram.com/byamiloboy/?hl=en" target="_blank"><img src={insta} alt="Instagram logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ></Grid>

            </Grid>
            <Grid item xs={2} style={{backgroundColor:"white"}}></Grid>
        </Grid>
    </Card.Body>
</Card>
  );
}

export default AboutCard;
