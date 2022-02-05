import { Grid } from '@material-ui/core';
import React from 'react';

import react from '../images/react.png';
import {Card} from 'react-bootstrap';
const Skills = () => {
  return (
      <Grid container id="skillsContainer" >
            <Grid item xs={12}  id="skillsTitle">Skills</Grid>
            <Grid item xs={2}></Grid>
            <Grid container item xs={8} style={{marginBottom:"10rem"}}>
                <Grid item xs={6} md={2}>
                    <Card style={{width:"15vmin", paddingLeft:"1vmin", paddingRight:"1vmin"}} className='customCard'>
                        <Card.Img variant="top" src={react} ></Card.Img>
                        <Card.Title style={{fontSize:"3vmin"}}>ReactJS</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card style={{width:"15vmin", paddingLeft:"1vmin", paddingRight:"1vmin"}} className='customCard'>
                        <Card.Img variant="top" src={react} ></Card.Img>
                        <Card.Title style={{fontSize:"3vmin"}}>ReactJS</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Card style={{width:"15vmin", paddingLeft:"1vmin", paddingRight:"1vmin"}} className='customCard'>
                        <Card.Img variant="top" src={react} ></Card.Img>
                        <Card.Title style={{fontSize:"3vmin"}}>ReactJS</Card.Title>
                    </Card>
                </Grid>
             
                
               
          
                
            </Grid>
            <Grid item xs={2}></Grid>
      </Grid>
  );
}

export default Skills;
