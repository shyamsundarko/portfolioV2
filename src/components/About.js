import React from 'react';
import { Grid } from '@material-ui/core';
import Navigationbar from './Navigationbar';
const About = ({check}) => {

  return (
    <div>
        <Navigationbar check={check}/>
        <Grid container style={{backgroundColor:"white", padding:"10rem"}}>
            Grid
        </Grid>
    </div>
    
    );
}

export default About;
