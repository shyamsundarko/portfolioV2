import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import logoBlack from '../images/logoBlack.png'
import {Container, Nav, Navbar} from 'react-bootstrap'


const Navigationbar = ({check}) => {
   const [background, setBackground] = useState(false);
   const [fSize, setFSize] = useState("2vmin");
  
   useEffect(()=>{
      if(window.innerWidth >400){
         setFSize("2vmin");
      }
      else if (window.innerWidth > 300){
         
         setFSize("3vmin");
      }
      else{
         setFSize("3vmin");
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
                     <a href="/" className='quickLinksItem' style={{fontSize: fSize}}>Home</a>
                     <a href='/#projectsSection' className='quickLinksItem' style={{fontSize: fSize}}>Projects</a>
                     <a href='/' className='quickLinksItem' style={{fontSize: fSize}}>About</a>
                     <a href='/#footerContainer' className='quickLinksItem' style={{fontSize: fSize}}>Contact</a>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
       
       

    )
}

export default Navigationbar
