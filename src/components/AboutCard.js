import React from 'react';
import profilepic from '../images/profilepic.png';
import {Card} from 'react-bootstrap';

const AboutCard = ({wid}) => {
  return (
    <Card style={{ width: {wid} }} id="customCard">
    <Card.Img id="aboutImg"  src={profilepic} />
</Card>
  );
}

export default AboutCard;

