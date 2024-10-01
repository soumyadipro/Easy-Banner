import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Footer, Hero, Process, Services, Team } from './container';
import { Menu } from './components';
import UploadPage from './components/UploadPage/UploadPage';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const MainContent = () => (
  <>
    <Hero id="hero" />
    <Services id="services" />
    <Process id="process" />
    <Team id="team" />
    <Contact id="contact" />
  </>
);

const AppContent = () => {
  return (
    <>
      <Menu />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <div className="container">
      <AppContent />
    </div>
  </Router>
);

export default App;