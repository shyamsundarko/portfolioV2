
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from 'react'
const IntroComponent = () => {

    const [marginScreen, setMarginScreen] = useState("21vmin");
    useEffect(() => {
        if(window.innerWidth<300){
          const marginNew = 0.13 * window.innerHeight;
          setMarginScreen(marginNew+"vmin");
        }
        else if(window.innerWidth < 500){
          const marginNew = 0.085 * window.innerHeight;
          setMarginScreen(marginNew+"vmin");
        }
        else{
          const marginNew = 0.024 * window.innerHeight;
          setMarginScreen(marginNew+"vmin");
        }
        
      
    },[window.innerHeight])
    
    return (
        <Grid container id="introContainer" style={{paddingTop: marginScreen}}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} id="introText">I am Shyam, a web developer based in <span id='flagColors'>Singapore</span></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className="SubText">Being a professional photographer, I have an eye for all things beautiful and aim to demonstrate that through the websites I create.</Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className="SubText" style={{marginTop: marginScreen}}>Scroll down to see some of my work</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default IntroComponent
