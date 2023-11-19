import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { MobileMenuProvider } from './components/MobileMenuContext';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <MobileMenuProvider>
        <Navbar />
        <div className='content-wrapper'>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        </MobileMenuProvider>
        <Footer />
      </Router>
    </>
  );
}


export default App
