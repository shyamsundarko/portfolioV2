
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link }  from 'react-router-dom';

import Home from './components/Home.js'
import PhotographyPro from './components/PhotographyPro';
import ScrollToTop from './components/ScrollToTop';

import reactIcon from './images/react.png';
import vscIcon from './images/vsc.png';
import jsIcon from './images/js.png';

const db = {
  "portfolio": {
    "title": "Photography Portfolio",
    "color": "#2c90d3",
    "headerText": "Late 2020, I decided to take up freelance photography after receiving positive feedback from my friends and family regarding my photography. I created this website to showcase my work and aid in better customer reach. I took inspiration for the website design from some of Adobe's websites. It is a simple and clean website and therefore did not take too long to create.",
    "designContent": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a have",
    "codingContent": "Contrary to popular belief, Lorem Ipsum is not simply random text. ailable, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. It has roots in a piece of classical Latin lite injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage the middle of text. All the Lorem Ipsum generators on the Inte the middle of text. All the Lorem Ipsum generators on the Inte of Lorem Ipsum, you need to be sure there isn’t anything embarrassing",
    "codingContainerColor": "rgba(31, 144, 236, 0.74)",
    "icon1": reactIcon,
    "icon2": vscIcon,
    "icon3": jsIcon,
    "website": "https://shyamsundarko.github.io/photography_portfolio/"
  }
}

function App() {

  return (
    
    <Router>
      <ScrollToTop />
      <div className='App'>
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/photographyPortfolio" element={
              <PhotographyPro check="false" title={db.portfolio.title} 
                txtColor={db.portfolio.color}  headerText={db.portfolio.headerText} designBody={db.portfolio.designContent} 
                codingBody={db.portfolio.codingContent} containerColor={db.portfolio.codingContainerColor} icon1={db.portfolio.icon1} 
                icon2={db.portfolio.icon2} icon3={db.portfolio.icon3} website={db.portfolio.website}/>}
              />
          </Routes>
      </div>
      
      
      
    </Router>
    
  );
}

export default App;
