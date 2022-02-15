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
            <Grid container style={{paddingTop:"25vmin", paddingBottom:"11vmin", borderBottom:"solid #253775", borderBottomWidth:"thin"}} id="aboutMeContainer" className={position ? "left" : "down"}> 
            <ScrollToTop />
            
                <Grid item xs={2} md={2} lg={3} xl={4}></Grid>
                <Grid item xs={8} md={5} lg={4} xl={3} style={{ marginTop: top, marginBottom: bottom }} data-aos="zoom-in-up" data-aos-duration="300">
                    <AboutCard wid={wid}  />
                </Grid>
                <Grid item xs={2} md={1} lg={1}></Grid>
                <Grid container item xs={12} md={3} lg={3} style={{color:"#212529" }}>
                    <Grid item xs={12}>
                        <h2 style={{fontSize:"13vmin", fontWeight:"600"}}>Hello</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <h4 style={{fontWeight:"300"}}>Here is who I am and what I do</h4>
                    </Grid>
                    <br />
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>                    
                        <p style={{fontSize:"90%"}} data-aos="fade-right" className='text-muted'>Motivated Computer Science undergraduate at Nanyang Technological University with 1.5 years experience in web development. Actively looking for intership in Summer of 2022.</p>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid item xs={12} md={1} lg={1}></Grid>
                
            </Grid>
            
            <Grid container>
                <Grid item xs={12}>
                    <Experience />
                </Grid>
                <Grid item xs={12}>
                    <Skills />
                </Grid>
                <Grid item xs={12}>
                    <Education />
                </Grid>
                <Grid item xs={12}>
                    <Footer />  
                </Grid>
            </Grid>
            
    </div>
    
    );
}

export default About;
