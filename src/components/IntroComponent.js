
import Grid from '@material-ui/core/Grid'
const IntroComponent = () => {
    return (
        <Grid container id="introContainer">
          <Grid item xs={1}></Grid>
          <Grid item xs={10} id="introText">I am Shyam, a web developer based in <span id='flagColors'>Singapore</span></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className="SubText">Being a professional photographer, I have an eye for all things beautiful and aim to demonstrate that through the websites I create.</Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className="SubText" style={{marginTop:"21vmin"}}>Scroll down to see some of my work</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default IntroComponent
