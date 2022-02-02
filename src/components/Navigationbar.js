import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import logoBlack from '../images/logoBlack.png'
import {Container, Nav, Navbar} from 'react-bootstrap'


const Navigationbar = ({check}) => {
   const [background, setBackground] = useState(false);
   const [fSize, setFSize] = useState("2vmin");
   const [gap, setGap] = useState("2vmin");
   const [topGap, setTopGap] = useState("0");
  
   
   useEffect(()=>{
      if(window.innerWidth<768){
         const gapMargin = window.innerHeight/2;
         setGap(gapMargin+"px");
         setTopGap((gapMargin*0.65)+"px");
         setFSize("1.5rem");
      }
      else{
         setTopGap("0");
         setGap("2vmin");
         setFSize("2vmin");
      }
     
   },[window.innerWidth])

   useEffect(() => {
      if(check==="true"){
         const changeBackground = () => {
            if(window.innerHeight>400){
               
               if(window.scrollY>=340) {
                  setBackground(true);
                }
                else setBackground(false);
            }
            else if (window.innerHeight > 300){
               
            
               if(window.scrollY>=170) {
                  setBackground(true);
                }
                else setBackground(false);
            }
            else{
               
               if(window.scrollY>=60) {
                 setBackground(true);
               }
               else setBackground(false);
            }
           
         }
       
         window.addEventListener('scroll', changeBackground);
      }

      
      else if(check=="false"){
            setBackground(true);
            
         }
      },[check]); 
      
   
    return (
      
         <Navbar collapseOnSelect expand="md"   className={background ? 'quickLinksWhite fixed-top' : 'quickLinks fixed-top'} >
            <Container fluid>
               <Navbar.Brand href="#home"><img src={background ? logoBlack : logo } alt="shyam's website logo" id="logo"></img></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger"/>
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav> 
                  <Nav>
                     <a href="/" style={{fontSize: fSize, marginTop: topGap, marginBottom:"2vmin"}}>Home</a>
                     <a href='/#projectsSection' style={{fontSize: fSize, marginBottom: "2vmin"}}>Projects</a>
                     <a href='/' style={{fontSize: fSize, marginBottom: "2vmin"}}>About</a>
                     <a href='/#footerContainer' style={{fontSize: fSize, marginBottom: gap}}>Contact</a>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
       
       

    )
}

export default Navigationbar
