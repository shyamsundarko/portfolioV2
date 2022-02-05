import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Navigationbar from './Navigationbar';
import AboutCard from '../components/AboutCard.js';


import Experience from './Experience';
import Skills from './Skills';
import ScrollToTop from './ScrollToTop';

import Aos from 'aos';




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
            
                <Grid item xs={2} md={2} lg={3}></Grid>
                <Grid item xs={8} md={5} lg={4} style={{ marginTop: top, marginBottom: bottom }} data-aos="zoom-in-up" data-aos-duration="300">
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
                        <p style={{fontSize:"90%"}} data-aos="fade-right">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid item xs={12} md={1} lg={1}></Grid>
                
            </Grid>
            
            
            <Experience />
            <Skills />
        
    </div>
    
    );
}

export default About;
