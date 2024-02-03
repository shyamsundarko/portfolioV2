
import Grid from '@material-ui/core/Grid'
import { useEffect, useState } from 'react'


const IntroComponent = () => {

    const [marginScreen, setMarginScreen] = useState("21vmin");
    const [marginScreenTop, setMarginScreenTop] = useState("21vmin");
    useEffect(() => {
        
        if(window.innerWidth>600){
          const marginNew = (window.innerHeight/2)*0.7;
          const marginTop = marginNew*0.88;

          setMarginScreen(marginNew+"px");
          setMarginScreenTop(marginTop+"px");
        }
        else{
          const marginNew = (window.innerHeight/2)*0.68;
          const marginTop = marginNew;

          setMarginScreen(marginNew+"px");
          setMarginScreenTop(marginTop+"px");
        }

    },[])
    
    return (
        <Grid container id="introContainer" style={{paddingTop: marginScreenTop}} >

          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={10} xl={6} id="introText" data-aos="fade-right" >
            <h1 id="name">shyam sundar</h1>
            </Grid>
          <Grid item xs={1} xl={3}></Grid>

          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={10} xl={6}  className="introSub" data-aos="fade-right" ><span className="cityColor">Software Engineer in Boston</span></Grid>
          <Grid item xs={1} xl={3}></Grid>

          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={10} xl={6} className="SubText" data-aos="fade-up" >Being a professional photographer, I have an eye for all things beautiful and aim to demonstrate that through the websites I create.</Grid>
          <Grid item xs={1} xl={3}></Grid>
          <Grid item xs={3} ></Grid>
          <Grid item xs={6} className="scrollDown" style={{marginTop: marginScreen}} >Scroll down for more</Grid>
          <Grid item xs={3} ></Grid>
        </Grid>
    )
}

export default IntroComponent
