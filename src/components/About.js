import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Navigationbar from './Navigationbar';
import AboutCard from './AboutCard';


const About = ({check}) => {
    const [position, setPosition] = useState(false);
    const [top, setTop] = useState("0");
    const [bottom, setBottom] = useState("0");
    const [wid, setWid] = useState("40vmin");
    const [lft, setLft] = useState("0");
    useEffect(()=>{
        if(window.innerWidth<960){
            setPosition(false);
            setTop("15vmin");
            setBottom("7vmin");
            setWid(window.innerWidth*0.65+"px");
            setLft(window.innerWidth*0.19+"px");
        }
        else{
            setPosition(true);
            setBottom("0");
            setTop("0");
        }
    },[])
  return (
    <div>
        <Navigationbar check={check}/>
        
            
            <Grid container style={{paddingTop:"25vmin", paddingBottom:"15vmin"}} id="aboutMeContainer" className={position ? "left" : "down"}> 
                <Grid item xs={12} md={2} lg={4}></Grid>
                <Grid item xs={12} md={4} lg={2} style={{ marginTop: top, marginBottom: bottom }} >
                    <AboutCard width={wid} lftMargin={lft} />
                </Grid>
                <Grid item xs={12} md={1} lg={1}></Grid>
                <Grid item xs={12} md={4} lg={3} style={{color:"black" }}>
                    <h2 style={{fontSize:"13vmin", fontWeight:"600"}}>Hello</h2>
                    <h4 style={{fontWeight:"300"}}>Here is who I am and what I do</h4>
                    <br />
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>


                </Grid>
                <Grid item xs={12} md={1} lg={2}></Grid>
            </Grid>
        
    </div>
    
    );
}

export default About;
