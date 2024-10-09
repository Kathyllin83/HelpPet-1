import LinkButton from './components/LinkButton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/homePage';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <Router>
        
      <Routes>
       
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/login" element={<Login/>} />
          
      </Routes>

    </Router>
  );
}

export default App;
