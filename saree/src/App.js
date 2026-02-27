import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import  RouterPart  from './components/RouterPart';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <RouterPart/>
        {/* <Home/> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
