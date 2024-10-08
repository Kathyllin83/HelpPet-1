import LinkButton from './components/LinkButton';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import './App.css';

function App() {
  return (
    <Router>

      <HomePage />
      
    </Router>
  );
}

export default App;
