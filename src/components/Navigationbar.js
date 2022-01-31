import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import logoBlack from '../images/logoBlack.png'
import {Container, Nav, Navbar} from 'react-bootstrap'


const Navigationbar = ({check}) => {
   const [background, setBackground] = useState(false);
   console.log(check);
  
   
   useEffect(() => {
      if(check==="true"){
         const changeBackground = () => {
            if(window>400){
               if(window.scrollY>=340) {
                  setBackground(true);
                }
                else setBackground(false);
            }
            else if (window> 300){
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
                     <a href="/" className='quickLinksItem'>Home</a>
                     <a href='/#projectsSection' className='quickLinksItem'>Projects</a>
                     <a href='/' className='quickLinksItem'>About</a>
                     <a href='/#footerContainer' className='quickLinksItem'>Contact</a>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
       
       

    )
}

export default Navigationbar
