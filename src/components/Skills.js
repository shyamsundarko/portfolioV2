
import React from 'react';
import { Grid } from '@material-ui/core';
import react from '../images/react.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import node from '../images/node.png';
import mysql from '../images/sql.png';
import XD from '../images/XD.png';
import figma from '../images/figma.png';
import PS from '../images/ps.png';
import java from '../images/java.png';
import git from '../images/github.png'
import Skill from './Skill.js';
import JS from '../images/javascript.png';
import flutter from '../images/Flutter.png';

const Skills = () => {
    
  return (
      <Grid container id="skillsContainer">
            
            <Grid item xs={12}>
                <h2 id="skillsTitle" className="titles">Skills & {window.innerWidth<1600 ? <></> : <br/> }Competencies</h2>
            </Grid>
            <Grid item xs={1} />
            <Grid container item xs={12} md={10} >
                
                <Grid item xs={3} md={2}>
                    <Skill skill="Python" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Java" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="ReactJS" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="HTML5" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="CSS3" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="NodeJS" />
                </Grid>
                
                <Grid item xs={3} md={2}>
                    <Skill skill="JavaScript" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Flutter" />
                </Grid><Grid item xs={3} md={2}>
                    <Skill skill="MySQL" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Git" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Docker" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Photoshop" />
                </Grid>
                <Grid item xs={3} md={2}>
                    <Skill skill="Figma" />
                </Grid>
                
            </Grid>
            <Grid item xs={1} />
      </Grid>
  );
}

export default Skills;
