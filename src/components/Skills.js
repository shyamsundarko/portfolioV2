import { Grid } from '@material-ui/core';
import React from 'react';

import react from '../images/react.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import node from '../images/node.png';
import mongo from '../images/mongo.png';
import mysql from '../images/sql.png';
import XD from '../images/XD.png';
import figma from '../images/figma.png';
import PS from '../images/ps.png';
import java from '../images/java.png';
import git from '../images/git.png';

import {Card} from 'react-bootstrap';
const Skills = () => {
  return (
      <Grid container id="skillsContainer" >
            <Grid item xs={12}  id="skillsTitle">Skills</Grid>
            <Grid item xs={3}></Grid>
            <Grid container item xs={7} style={{marginBottom:"10rem"}}>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card  className='customCard'>
                        <Card.Img variant="top" src={react} className='customCardImg' ></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>ReactJS</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={node} className='customCardImg' ></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>NodeJS</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={html5} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>HTML5</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={css3} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>CSS3</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={java} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>Java</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={mysql} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>SQL</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={mongo} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>MongoDB</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={XD} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>Adobe XD</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={PS} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>Photoshop</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={figma} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>Figma</Card.Title>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3} data-aos="zoom-in" data-aos-duration="400">
                    <Card className='customCard'>
                        <Card.Img variant="top" src={git} className='customCardImg'></Card.Img>
                        <Card.Title style={{fontSize:"2.5vmin"}}>Github</Card.Title>
                    </Card>
                </Grid>
                
                
                
             
                
               
                
                
            </Grid>
            <Grid item xs={2}></Grid>
            
      </Grid>
  );
}

export default Skills;
