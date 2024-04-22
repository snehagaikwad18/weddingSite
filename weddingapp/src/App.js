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
import Aboutroute from './components/Aboutroute';
import AboutServices from './components/AboutServices';
import TestinomialRoute from './components/TestinomialRoute';
import CateringRoute from './components/CateringRoute';
import GalleryRoute from './components/GalleryRoute';
import ContactRoute from './components/ContactRoute';

function App() {
  return (
    <div className="">
      <div className="baskervville-regular">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<Aboutroute />} />
            <Route path='/services' element={<AboutServices />} />
            <Route path='/contact' element={<ContactRoute />} />
            <Route path='/Testimonials' element={<TestinomialRoute />} />
            <Route path='/Catering' element={<CateringRoute />} />         
            <Route path='/Gallery' element={<GalleryRoute />} />         
          </Routes>
          {/* <Gallery />
          
          <Catering /> */}
        </BrowserRouter>



      </div>
    </div>
  );
}

export default App;
