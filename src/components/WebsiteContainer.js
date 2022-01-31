import React from 'react';
import { Grid } from '@material-ui/core';
const WebsiteContainer = ({website, txtColor}) => {
  return (
    <Grid container className="project" id="websiteContainer">
        <Grid item xs={12} style={{fontFamily: "Roboto Mono", fontSize:"2vmin"}}>You can view the project by clicking this link:</Grid>
        <Grid item xs={12} ><a href={website} style={{fontFamily: "Roboto Mono", textDecoration: "underline", color: txtColor, fontSize:"2vmin"}} target="_blank">{website}</a></Grid>
    </Grid>
  );
}

export default WebsiteContainer;
