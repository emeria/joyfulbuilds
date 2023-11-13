import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}


export default App
