
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import blogProject from '../images/blogSpace.png'
import trialWebsite from '../images/trialWebsite.png'
import photographyPortfolio from '../images/photographyPortfolio.png'
import denguego from '../images/denguego.png'
import jokerecommender from '../images/jokerecommender.png'
import authenticationsystem from '../images/authenticationsystem.png'

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
    },[])
    
    function cardFocusIn() {
        const cards = document.querySelectorAll('.projectCards');
        cards.forEach((card)=> card.classList.add('zoom'));
    }
    
    return (
        <Grid container id="projectsSection" style={{borderRadius: radius}}>
            
            <Grid item xs={3}></Grid>
            <Grid item xs={6} style={{marginBottom:"2vmin"}}>Projects</Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={12} md={6} data-aos="fade-right">
                <a href='https://shyamsundarko.github.io/photography_portfolio/' target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards" >
                        <Card.Img variant="top" src={photographyPortfolio} className='cardImage'></Card.Img>
                    </Card>
                </a>    
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
                <a href="https://github.com/shyamsundarko/DengueGo" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={denguego} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right" >
                <a href="https://github.com/shyamsundarko/blogSpace" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={blogProject} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            
            <Grid item xs={12} md={6} data-aos="fade-right">
                <a href="https://shyamsundarko.github.io/personalWebsite/" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={trialWebsite} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            
            <Grid item xs={12} md={6} data-aos="fade-right">
                <a href="https://github.com/shyamsundarko/Joke-Recommender-System" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={jokerecommender} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-right">
                <a href="https://github.com/shyamsundarko/AuthenticationSystem" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={authenticationsystem} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            <Grid item md={6}></Grid>
            

        </Grid>
    )
}

export default Projects
