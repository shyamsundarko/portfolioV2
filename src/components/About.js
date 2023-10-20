import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Aos from 'aos';

import AboutCard from '../components/AboutCard.js';
import Experience from './Experience';
import Skills from './Skills';
import ScrollToTop from './ScrollToTop';
import Education from './Education';



const About = ({check}) => {
   
    
    const [position, setPosition] = useState(false);

    const [bottom, setBottom] = useState("0");
    const [wid, setWid] = useState("20vmin");
    
    useEffect(()=>{
        Aos.init({ duration: 500,
            mirror: "true",
            anchorPlacement:"top-bottom" });
        
        if(window.innerWidth<960){
            setPosition(false);
            setBottom("7vmin");
            setWid(window.innerWidth*0.65+"px");
            
        }
        else{
            setPosition(true);
            setBottom("0");
            setWid("20vmin");
            
        }
    },[])
  return (
    <div>
        
            <Grid container id="aboutMeContainer" className={position ? "left" : "down"}> 
            <ScrollToTop />
                <Grid item xs={2} lg={1} />
                <Grid item xs={8} md={3} lg={4} style={{marginBottom: bottom}}>
                    <AboutCard wid={wid}/>
                </Grid>
                <Grid item xs={2} md={1} lg={1} />
                
                <Grid item xs={12} md={6} lg={6} >
                <p data-aos="fade-right" >
                    Currently pursuing a Masters in<br /> 
                    <div id="customAbt1">Software Engineering Systems @ Northeastern</div><br /> 
                    following the successful completion of my degree in
                    <div id="customAbt2">Computer Science @ NTU Singapore</div>
                    <br/>
                     <div>I excel in dynamic environments, embracing complex challenges with enthusiasm and precision. A quick learner, I eagerly acquire new skills and maintain an organized, curious approach. I consistently explore emerging tools and technologies to stay at the forefront of the field.</div>
                </p>
                </Grid>
            </Grid>
            
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



