
import Projects from './Projects';
import { Container} from 'react-bootstrap'
import IntroComponent from './IntroComponent';
import About from './About';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import Navigationbar from './Navigationbar';
import Aos from 'aos';
import Education from './Education';
const Home = () => {

    return (
      
        <Container  >
          
            <Navigationbar />
            <IntroComponent />
            <About />
            <Projects />
            <Education />
            <Footer />
      </Container>
    )
}

export default Home

