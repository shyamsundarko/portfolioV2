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
    <Card.Img  src={profilepic} style={{borderRadius:"1%", width:"93%", margin:"1vw"}} />
</Card>
  );
}

export default AboutCard;

