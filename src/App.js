import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;
