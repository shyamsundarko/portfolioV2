
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
      <Grid container id="skillsContainer">
            
            <Grid item xs={12} lg={4}>
                <h2 id="skillsTitle" className="titles">Skills & {window.innerWidth<800 ? <></> : <br/> }Competencies</h2>
            </Grid>
            <Grid item xs={12} lg={1} />
            <Grid container item xs={12} lg={7}>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={react} value="80" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={java} value="75" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={html5} value="90" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={css3} value="85" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={git} value="80" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={node} value="70" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={mysql} value="70" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={XD} value="90" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={figma} value="90" />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Skill skillImg={PS} value="76" />
                </Grid>
            </Grid>
            
      </Grid>
  );
}

export default Skills;
