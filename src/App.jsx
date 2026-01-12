import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MobileShowcase from './components/MobileShowcase';
import Skills from './components/Skills';
import Contact from './components/Contact';

import InteractiveBackground from './components/InteractiveBackground';

import Education from './components/Education';
import Volunteer from './components/Volunteer';
import BackToTop from './components/BackToTop';
import GoToBottom from './components/GoToBottom';
import CrosshairCursor from './components/ui/CrosshairCursor';
import SystemStatus from './components/ui/SystemStatus';

function App() {
  // FEATURE FLAG: Set this to true when ready to launch the Android App
  const showMobileRelease = false;

  // FEATURE FLAG: Enable/Disable the Crosshair Cursor by default
  const DEFAULT_CROSSHAIR_ENABLED = false;
  const [showCrosshair, setShowCrosshair] = React.useState(DEFAULT_CROSSHAIR_ENABLED);
  return (
    <div className="App">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      {showMobileRelease && <MobileShowcase />}
      <Education />
      <Volunteer />
      <Contact />
      <GoToBottom />
      <BackToTop />
      {showCrosshair && <CrosshairCursor />}
      <SystemStatus
        showCrosshair={showCrosshair}
        toggleCrosshair={() => setShowCrosshair(!showCrosshair)}
      />
    </div>
  );
}

export default App;
