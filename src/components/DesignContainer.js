import React from 'react';
import { Grid } from '@material-ui/core';
import XD from '../images/XD.png'
import ps from '../images/ps.png'
const DesignContainer=({txtColor, designBody}) => {
  return (
    <Grid container className="project" id="designContainer">
        <Grid item xs={1} ></Grid>
        <Grid item xs={4}  style={{color: txtColor, fontWeight:"600", fontSize:"4vmin", marginBottom: "3vmin"}}>Design and Prototyping</Grid>
        <Grid item xs={6} ></Grid>
        <Grid item xs={1} ></Grid>
        <Grid item xs={1} ></Grid>
        <Grid item xs={4} style={{fontFamily: "Trebuchet MS", fontSize: "2vmin"}}>{designBody}</Grid>
        <Grid item xs={7} ></Grid>
        <Grid item xs={1} ></Grid>
        <Grid item xs={4}>
            <img src={XD} alt="logo of adobe xd" style={{width: "10vmin", marginTop: "2vmin"}}/>
            <img src={ps} alt="logo of adobe xd" style={{width: "6.1vmin", marginTop: "2vmin"}}/>
        </Grid>
        <Grid item xs={7}></Grid>
    </Grid>
  );
}

export default DesignContainer;
