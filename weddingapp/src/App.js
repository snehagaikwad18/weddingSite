import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from './components/Nav';
import hero from '../src/assets/hero.jpg'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Catering from './components/Catering';
import Testonimial from './components/Testonimial';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      {/* <Link  to="/about" >About</Link> */}
      <div className="baskervville-regular">
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
          </Routes>
          {/* <Gallery />
          <Services />
          <Catering /> */}
          <Testonimial />
          <Contact />
        </BrowserRouter>



      </div>
    </div>
  );
}

export default App;
