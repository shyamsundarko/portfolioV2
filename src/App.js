
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link }  from 'react-router-dom';

import Home from './components/Home.js'
import PhotographyPro from './components/PhotographyPro';
import ScrollToTop from './components/ScrollToTop';

import reactIcon from './images/react.png';
import vscIcon from './images/vsc.png';
import jsIcon from './images/js.png';
import About from './components/About';

import "aos/dist/aos.css";



function App() {

  return (
    
    <Router>
      <ScrollToTop />
      <div className='App'>
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About check="false" />} />
            
          </Routes>
      </div>
      
      
      
    </Router>
    
  );
}

export default App;
