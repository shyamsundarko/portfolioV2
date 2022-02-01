
import Projects from './Projects';
import { Container} from 'react-bootstrap'
import IntroComponent from './IntroComponent';
import Footer from './Footer';
import {useState} from 'react';
import Navigationbar from './Navigationbar';
const Home = () => {
    const [background, setBackground] = useState(false);
  
    const changeBackground = () => {
      if(window.innerWidth >400){
        if(window.scrollY>=340) {
           setBackground(true);
         }
         else setBackground(false);
     }
     else if (window.innerWidth > 300){
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

    return (
        <Container fluid className={ background ?  "show" : "mainContainer"} >
            <Navigationbar check="true"/>
            <IntroComponent />
            <Projects />
            <Footer />
      </Container>
    )
}

export default Home
