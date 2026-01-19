import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // You can also just control it here if specific logic is preferred,
  // but simpler to let Preloader handle the timing and callback.
  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onFinish={handleFinishLoading} />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
