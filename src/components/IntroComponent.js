
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from 'react'


const IntroComponent = () => {

    const [marginScreen, setMarginScreen] = useState("21vmin");
    const [marginScreenTop, setMarginScreenTop] = useState("21vmin");
    useEffect(() => {
        
        if(window.innerWidth>600){
          const marginNew = (window.innerHeight/2)*0.65;
          const marginTop = marginNew*0.85;

          setMarginScreen(marginNew+"px");
          setMarginScreenTop(marginTop+"px");
        }
        else{
          const marginNew = (window.innerHeight/2)*0.75;
          const marginTop = marginNew;

          setMarginScreen(marginNew+"px");
          setMarginScreenTop(marginTop+"px");
        }

    },[])
    
    return (
        <Grid container id="introContainer" style={{paddingTop: marginScreenTop}} >
          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={10} xl={6} id="introText" data-aos="fade-right" ><span className="colorize">Hey!</span> I'm Shyam</Grid>
          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={10} xl={6}  className="introSub" data-aos="fade-right" >A Software Engineer in <span className="cityColor">Boston</span>, <span className="stateColor">MA</span></Grid>
          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={3} xl={4}></Grid>
          <Grid item xs={6} xl={4} className="SubText" data-aos="fade-up" >Being a professional photographer, I have an eye for all things beautiful and aim to demonstrate that through the websites I create.</Grid>
          <Grid item xs={3} xl={4}></Grid>
          <Grid item xs={3} ></Grid>
          <Grid item xs={6} className="SubText" style={{marginTop: marginScreen}} >Scroll down to see some of my work</Grid>
          <Grid item xs={3} ></Grid>
        </Grid>
    )
}

export default IntroComponent
