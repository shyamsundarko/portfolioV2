
import { Grid } from '@material-ui/core'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import outlook from '../images/outlook.png'
import instagram from '../images/instagram.png'

const Footer = () => {
    return (
        <Grid container  id="footerContainer">
            <Grid item xs={2} md={4}></Grid>
            <Grid item container xs={8} md={4}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={2} ><a href="https://www.linkedin.com/in/shyam-s-208166137/" target="_blank"><img src={linkedin} alt="Linkedin logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="https://github.com/shyamsundarko" target="_blank"><img src={github} alt="Github logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="mailto:SHYAMSUN001@e.ntu.edu.sg" target="_blank"><img src={outlook} alt="Outlook logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ><a href="https://www.instagram.com/byamiloboy/?hl=en" target="_blank"><img src={instagram} alt="Instagram logo" className="socialLogo"/></a></Grid>
                <Grid item xs={2} ></Grid>
            </Grid>
            
            <Grid item xs={2} md={4}></Grid>
            <Grid item xs={12}><a href="mailto:shyamsundarko@gmail.com" target="_blank" style={{color: "#E1A87A", fontWeight: "300", textDecoration: "underline", fontSize: "3vmin"}}>shyamsundarko@gmail.com</a></Grid>
            <Grid item xs={12} style={{fontWeight: "500", fontSize: "3vmin", fontFamily:"Times New Roman"}}>Say hello.</Grid>
            <Grid item xs={12} style={{marginTop:"3vmin", fontSize:"2.5vmin"}}>@ Copyright SHYAM SUNDAR, 2022. All Rights Reserved.</Grid>
        </Grid>
    )
}

export default Footer
