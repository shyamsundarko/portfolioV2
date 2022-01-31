import React from 'react';
import Navbar from './Navigationbar'
import { Grid } from '@material-ui/core'
const ProjectHeader = ({check, title, headerText}) => {
  return (
    <Grid container className="project">
        <Navbar check={check} />
        <Grid item xs={12} style={{color:"#393939", marginTop:"15vmin", fontSize:"4vmin", fontWeight:"600"}}>{title}</Grid>
        <Grid item xs={2} md={3} lg={4}></Grid>
        <Grid item xs={8} md={6} lg={4} id="headerText" style={{fontFamily: "Trebuchet MS", fontSize: "2vmin"}}>{headerText}</Grid>
        <Grid item xs={2} md={3} lg={4}></Grid>
    </Grid>
  );
}

export default ProjectHeader;
