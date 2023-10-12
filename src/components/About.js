import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Navigationbar from './Navigationbar';
import AboutCard from '../components/AboutCard.js';


import Footer from './Footer';
import Experience from './Experience';
import Skills from './Skills';
import ScrollToTop from './ScrollToTop';

import Aos from 'aos';
import Education from './Education';




const About = ({check}) => {
   
    
    const [position, setPosition] = useState(false);
    const [top, setTop] = useState("0");
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
            setTop("0");
            setWid("20vmin");
            
        }
    },[])
  return (
    <div>
        <Navigationbar check={check}/>
            <Grid container style={{paddingTop:"13vmin", paddingBottom:"11vmin", borderBottom:"solid #253775", borderBottomWidth:"thin"}} id="aboutMeContainer" className={position ? "left" : "down"}> 
            <ScrollToTop />
                <Grid item xs={2} lg={1} />
                <Grid item xs={8} md={3} lg={4} style={{marginBottom: bottom}}>
                    <AboutCard wid={wid}/>
                </Grid>
                <Grid item xs={2} md={1} lg={1} />
                
                <Grid item xs={12} md={6} lg={6} >
                <p style={{fontSize:"2.5vmin", margin:"10%"}} data-aos="fade-right" >
                    Currently pursuing a Masters in
                    <div style={{color:"#72b383", fontSize:"3vmin"}}>Software Engineering Systems @ Northeastern</div>
                    following the successful completion of my degree in
                    <div style={{fontSize:"3vmin", color:"#3d6ba6"}}>Computer Science @ NTU Singapore</div>
                    <br/>
                     <div style={{color:"#4f5359"}}>I thrive in fast-paced environments, relishing the opportunity to tackle complex problems with passion and precision. While I may not know everything, I excel at swiftly picking up new skills and am always eager to learn. Known for my organized approach and insatiable curiosity, I'm a motivated learner who constantly seeks to try out new tools and technologies, ensuring I stay at the cutting edge of the field.</div>
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


