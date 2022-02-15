import React from 'react'

import { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import logoBlack from '../images/logoBlack.png'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigationbar = ({check}) => {
   const [background, setBackground] = useState(false);
   const [fSize, setFSize] = useState("2vmin");
   const [gap, setGap] = useState("2vmin");
   const [topGap, setTopGap] = useState("0");
  
   
   useEffect(()=>{
      const gapMargin = window.innerHeight/2;

         if(window.innerWidth<600){
            setFSize("1.5rem");
            setGap(gapMargin+"px");
            setTopGap((gapMargin*0.75)+"px");
         }
         else{
            setFSize("4vmin");
            setTopGap((gapMargin*0.64)+"px");
            setGap(gapMargin+"px");
         }
     
   },[])

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
      
         <Navbar collapseOnSelect expand="xxxl"   className={background ? 'quickLinksWhite fixed-top' : 'quickLinks fixed-top'} >
            <Container fluid>
               <Navbar.Brand href="/"><img src={background ? logoBlack : logo } alt="shyam's website logo" id="logo"></img></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger"/>
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav> 
                  <Nav>
                     <Link to="/" style={{fontSize: fSize, marginTop: topGap, marginBottom:"2vmin"}}>Home</Link>
                     <Link to="/About" style={{fontSize: fSize, marginBottom: gap}}>About</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
       
       

    )
}

export default Navigationbar
