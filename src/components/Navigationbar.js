import React, {useState, useEffect} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../index.css';
// import '../day.css'
const Navigationbar = () => {

   const [top, setTop] = useState("0");
   const [bottom, setBottom]= useState("0");
   const [isNightMode, setIsNightMode] = useState(false);
   useEffect(()=>{
      const gapMargin = window.innerHeight/1.9;
         if(window.innerWidth<1400){
            setTop((gapMargin*0.35)+"px");
            setBottom((gapMargin*0.6)+"px");
         }
         else{
            setTop(0);
            setBottom(0);
         }
   },[])
   const toggle =() =>{
    setIsNightMode(prevMode => !prevMode)
   }
  return (
    <Navbar collapseOnSelect expand="xxl" className="quickLinksWhite fixed-top" variant="dark" >
      <Container fluid id="navigationBar">
        <Navbar.Brand href="/">
          <h1 id="navbarTitle">Shyam Sundar</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="hamburger" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#aboutMeContainer" className="navLink">
              <h6 className="navLink" style={{marginTop: top}} >About</h6>
            </Nav.Link>
            <Nav.Link href="#educationContainer" className="navLink">
              <h6 className="navLink">Education</h6>
            </Nav.Link>
            <Nav.Link href="#experienceContainer" className="navLink">
              <h6 className="navLink">Experience</h6>
            </Nav.Link>
            <Nav.Link href="#skillsContainer" className="navLink">
              <h6 className="navLink">Skills</h6>
            </Nav.Link>
            <Nav.Link href="#projectsSection" className="navLink">
              <h6 className="navLink" style={{marginBottom: bottom}}>Projects</h6>
            </Nav.Link>
            {/* <button onClick={toggle}>
              {isNightMode ? 'night' : 'day'}
            </button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <link rel="stylesheet" type="text/css" href={isNightMode ? "../index.css" : "../day.css"} /> */}
    </Navbar>
  );
};

export default Navigationbar;
