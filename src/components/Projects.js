
import Grid from '@material-ui/core/Grid'
import blogProject from '../images/blogSpace.png'
import photographyPortfolio from '../images/photographyPortfolio.png'
import denguego from '../images/denguego.png'

import Aos from 'aos';
import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
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
            <Grid item xs={12} md={6}  data-aos="fade-right" >
                <a href="https://github.com/shyamsundarko/blogSpace" target='_blank' rel='noreferrer' onMouseOver={() => {cardFocusIn()}}>
                    <Card className="projectCards">
                        <Card.Img variant="top" src={blogProject} className='cardImage'></Card.Img>
                    </Card>
                </a>
            </Grid>
            
            <Grid item md={6}></Grid>
            

        </Grid>
    )
}

export default Projects
