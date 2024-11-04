import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Work' element={<Work/>} />
      <Route path='/Testimonials' element={<Testimonial/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
