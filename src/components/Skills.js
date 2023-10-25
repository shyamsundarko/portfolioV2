
import React from 'react';
import { Grid } from '@material-ui/core';
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
import Skill from './Skill.js';

const Skills = () => {
  return (
      <Grid id="skillsContainer">
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={4}>
                <h2 id="skillsTitle" className="titles">Skills & {window.innerWidth<550 ? <></> : <br/> }Knowledge</h2>
            </Grid>
            <Grid item xs={12} md={5}>
                <Grid item xs={12} md={6}>
                    <Skill skillImg={react} value="80" />
                    

                </Grid>
                
            </Grid>
            
      </Grid>
  );
}

export default Skills;
