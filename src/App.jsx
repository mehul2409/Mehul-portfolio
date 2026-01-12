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
import { logEvent } from './utils/logger';
import CrosshairCursor from './components/ui/CrosshairCursor';
import SystemStatus from './components/ui/SystemStatus';
import LiveLogger from './components/ui/LiveLogger';
import CommandPalette from './components/ui/CommandPalette';
import KeyboardManager from './components/ui/KeyboardManager';
import { initDynamicFavicon } from './utils/DynamicFavicon';

function App() {
  // FEATURE FLAG: Set this to true when ready to launch the Android App
  const showMobileRelease = false;

  // FEATURE FLAG: Enable/Disable the Crosshair Cursor by default
  const DEFAULT_CROSSHAIR_ENABLED = false;
  const [showCrosshair, setShowCrosshair] = React.useState(DEFAULT_CROSSHAIR_ENABLED);

  // Help Modal State
  const [showHelp, setShowHelp] = React.useState(false);

  // Observability: Log section views
  React.useEffect(() => {
    const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'volunteer', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          logEvent('INFO', `User navigating to: ${entry.target.id.toUpperCase()}`);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Init Dynamic Favicon
  React.useEffect(() => {
    initDynamicFavicon();
  }, []);
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
        toggleHelp={() => setShowHelp(!showHelp)}
      />
      <LiveLogger />
      <CommandPalette />
      <KeyboardManager showCheatSheet={showHelp} setShowCheatSheet={setShowHelp} />
    </div>
  );
}

export default App;
