
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import blogProject from '../images/blogSpace.png'
import trialWebsite from '../images/trialWebsite.png'
import photographyPortfolio from '../images/photographyPortfolio.png'


import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const Projects = () => {
    
    const [radius, setRadius] = useState("100px 100px 0px 0px");

    useEffect(()=>{
        if(window.innerWidth<550){
            setRadius("40px 40px 0px 0px");
        }
        else if (window.innerWidth<780){
            setRadius("60px 60px 0px 0px");
        }
        else{
            setRadius("100px 100px 0px 0px");
        }
    },[window.innerWidth])
    
    function cardFocusIn() {
        const cards = document.querySelectorAll('.projectCards');
        cards.forEach((card)=> card.classList.add('zoom'));
    }
    
    return (
        <Grid container id="projectsSection" style={{borderRadius: radius}}>
            
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>Projects</Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={12} md={6}>
            <Link to="/photographyPortfolio" onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={photographyPortfolio} className='cardImage'></Card.Img>
                    </Card>
                </Link>
                
                </Grid>
            <Grid item xs={12} md={6}>
                <a href="https://www.mastercard.us/en-us/vision/who-we-are/careers.html" onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={blogProject} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            <Grid item xs={12} md={6}>
                <a href="https://www.mastercard.us/en-us/vision/who-we-are/careers.html" onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={trialWebsite} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            <Grid item md={6}></Grid>
            

        </Grid>
    )
}

export default Projects
