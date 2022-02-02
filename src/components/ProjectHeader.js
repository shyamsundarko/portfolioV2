import React, { useEffect, useState } from 'react';
import Navigationbar from './Navigationbar'
import { Grid } from '@material-ui/core'
const ProjectHeader = ({check, title, headerText}) => {
  const [topGap, setTopGap] = useState("15vmin");
useEffect(()=>{
  if(window.innerWidth<590){
    setTopGap("22vmin")
  }
  else setTopGap("15vmin");
},[window.innerWidth])
  
  return (
    <Grid container className="project">
        <Navigationbar check={check} />
        <Grid item xs={12} style={{color:"#393939", marginTop: topGap, fontSize:"4vmin", fontWeight:"600"}}>{title}</Grid>
        <Grid item xs={2} md={3} lg={4}></Grid>
        <Grid item xs={8} md={6} lg={4} id="headerText" style={{fontFamily: "Trebuchet MS", fontSize: "2vmin"}}>{headerText}</Grid>
        <Grid item xs={2} md={3} lg={4}></Grid>
    </Grid>
  );
}

export default ProjectHeader;
