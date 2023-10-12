
import Projects from './Projects';
import { Container} from 'react-bootstrap'
import IntroComponent from './IntroComponent';
import About from './About';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import Navigationbar from './Navigationbar';
import Aos from 'aos';
const Home = () => {
    const [background, setBackground] = useState(false);
  
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
    
    useEffect(()=>{
      Aos.init({ duration: 300,
        mirror: "true",
        anchorPlacement:"center-bottom" });
    },[]);

    return (
      
        <Container fluid className={ background ?  "show" : "mainContainer"} >
          
            <Navigationbar check="true" background={background}/>
            <IntroComponent />
            <About />
            <Projects />
            <Footer />
      </Container>
    )
}

export default Home

