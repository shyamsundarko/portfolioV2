import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Aos from 'aos';

import AboutCard from '../components/AboutCard.js';
import Experience from './Experience';
import Skills from './Skills';
import Skill from './Skill'
import ScrollToTop from './ScrollToTop';
import Education from './Education';



const About = ({check}) => {
   
    

    const [bottom, setBottom] = useState("0");
    const [wid, setWid] = useState("20vmin");
    
    useEffect(()=>{
        Aos.init({ duration: 500,
            anchorPlacement:"top-bottom" });
        
        if(window.innerWidth<960){
            setBottom("7vmin");
            setWid(window.innerWidth*0.65+"px");
            
        }
        else{
            setBottom("0");
            setWid("20vmin");
            
        }
    },[])
  return (
    <div>
        
            <Grid container id="aboutMeContainer"> 
                <Grid item xs={12} md={1} />
                <Grid item xs={12} md={3} lg={4} style={{marginBottom: bottom}}>
                    <AboutCard wid={wid}/>
                </Grid>
                <Grid item xs={12} md={1} />
                
                <Grid item xs={12} md={6}>
                    <p data-aos="fade-right" data-aos-once="true" id="aboutInfo" >
                    Originating from Singapore, I bring a unique perspective shaped by diverse experiences, including my mandatory two-year <span id="customAbt2">military service</span>. This has instilled in me valuable skills such as discipline, adaptability, and effective teamwork. <br/> <br/> As a results-driven software engineering master's student, I possess a deep expertise in full-stack engineering, with a particular passion for <span id="customAbt1">frontend development</span>. 
                    </p>
                </Grid>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid container>
                <Grid item xs={12}>
                    <Education />
                </Grid>
                <Grid item xs={12}>
                    <Experience />
                </Grid>
                <Grid item xs={12}>
                    <Skills />
                </Grid>
            </Grid>
            
    </div>
    
    );
}

export default About;



