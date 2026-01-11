import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import InteractiveBackground from './components/InteractiveBackground';

import Education from './components/Education';
import Volunteer from './components/Volunteer';
import BackToTop from './components/BackToTop';
import GoToBottom from './components/GoToBottom';

function App() {
  return (
    <div className="App">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Volunteer />
      <Contact />
      <GoToBottom />
      <BackToTop />
    </div>
  );
}

export default App;
