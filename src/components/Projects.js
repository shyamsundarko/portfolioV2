
import Grid from '@material-ui/core/Grid'
import blogProject from '../images/blogSpace.png'
import photographyPortfolio from '../images/photographyPortfolio.png'
import denguego from '../images/denguego.png'
import passionhub from '../images/passionhub.png'
import socialstudy from '../images/socialstudy.png'

import Aos from 'aos';
import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Project from './Project'
const Projects = () => {
    
    
    useEffect(()=>{
        Aos.init({duration: 300,
            anchorPlacement: "top-bottom"
    });
    },[]);
    
    function cardFocusIn() {
        const cards = document.querySelectorAll('.projectCards');
        cards.forEach((card)=> card.classList.add('zoom'));
    }
    
    return (
        <Grid container id="projectsSection" >
            

            <Grid item xs={12} className="titles">Projects</Grid>
            <Project link="https://github.com/shyamsundarko/SocialStudy" source={socialstudy} title="SocialStudy"
            desc="As part of my Advanced Software Engineering project at NTU Singapore, I lead a team of 6 into creating an application named SocialStudy. Similar to reddit but is focused on collaborative education. It was developed using the MERN stack."
            onMouseOver={() => {cardFocusIn()}} />
            <Project link="https://github.com/shyamsundarko/PassionHub" source={passionhub} title="PassionHub"
            desc="This is a project I did as part of my Masters program in Northeastern. It is a social networking site called PassionHub which aims to connect like-minded individuals through passions. It is a full-stack project developed using MERN stack"
            onMouseOver={() => {cardFocusIn()}} />
            <Project link="https://github.com/shyamsundarko/DengueGo" source={denguego} title="DengueGo Mobile Application"
            desc="This was part of a project I did as part of my Software Engineering module in NTU Singapore. Noticing the trend of rising Dengue cases in Singapore, the application was created to provide real-time information about cases near the user and also provide guidelines to avoid getting bit. Flutter and Firebase were leveraged for the creation of this application."
            onMouseOver={() => {cardFocusIn()}}/>
            <Project link="https://shyamsundarko.github.io/photography_portfolio/" source={photographyPortfolio} title="Photography Portfolio"
            desc="This is a website I created as a template to showcase my work as a professional photographer. Developed using HTML5 and CSS3 while keeping responsive design in mind."
            onMouseOver={() => {cardFocusIn()}} />
            <Project link="https://github.com/shyamsundarko/blogSpace" source={blogProject} title="Online Blog" 
            desc="This is a React application which allows users to create blogs, delete blogs and view existing blogs. Json Server is being used to perform CRUD operations with the local database file." 
            onMouseOver={() => {cardFocusIn()}}/>
            

        </Grid>
    )
}

export default Projects
