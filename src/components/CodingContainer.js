import React from 'react';
import { Grid } from '@material-ui/core';
const CodingContainer = ({containerColor, codingBody, icon1, icon2, icon3}) => {
  return (
    <Grid container className="project" id="codingContainer" style={{backgroundColor: containerColor}}>
        <Grid item xs={12} style={{color:"white", fontSize:"4vmin", fontWeight: "600", margin:"4vmin 0vmin 6vmin 0vmin"}}>Coding and Implementation</Grid>
        <Grid item xs={1} ></Grid>
        <Grid item xs={4} style={{fontFamily: "Trebuchet MS", fontSize: "2vmin"}}>{codingBody}</Grid>
        <Grid item xs={7} >
            <Grid item xs={12}>Modify this to add the portion and the images</Grid> 
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={3}>
            <img src={icon1} className="icon" alt="icon 1" ></img>
            <img src={icon2} className="icon" alt="icon 2" ></img>
            <img src={icon3} className="icon" alt="icon 3" ></img>
        </Grid>
        <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default CodingContainer;
