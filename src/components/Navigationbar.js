import React from 'react'

import { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import logoBlack from '../images/logoBlack.png'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigationbar = ({check, background}) => {
   const [fSize, setFSize] = useState("2vmin");
   const [gap, setGap] = useState("2vmin");
   const [topGap, setTopGap] = useState("0");
  
   
   useEffect(()=>{
      const gapMargin = window.innerHeight/1.9;

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

    return (
      
         <Navbar collapseOnSelect expand="xxxl"   className={background ? 'quickLinksWhite fixed-top' : 'quickLinks fixed-top'} id="navigationBar">
            <Container fluid>
               <Navbar.Brand href="/">
                  {/* <img src={background ? logoBlack : logo } alt="shyam's website logo" id="websiteLogo"></img> */}
                  <h1 id= {background ? "navbarTitleBlack" : "navbarTitleWhite"} >Shyam Sundar</h1>
                  
               </Navbar.Brand>
            </Container>
         </Navbar>
       
       

    )
}

export default Navigationbar

