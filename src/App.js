
import './App.css';

import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Home from './components/Home.js'
import ScrollToTop from './components/ScrollToTop';
import "aos/dist/aos.css";



function App() {

  return (
    
    <Router>
      <ScrollToTop />
      <div className='App'>
          
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      </div>
      
      
      
    </Router>
    
  );
}

export default App;
