import Navbar from './components/Navbar';
import FloatingBlobs from './components/FloatingBlobs';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden font-sans selection:bg-blue-500/20 selection:text-blue-200">
      
      {/* Dynamic Animated Blobs in the background */}
      <FloatingBlobs />

      {/* Glassmorphic Sticky Header */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">
        
        {/* Hero Banner */}
        <Hero />

        {/* Biography & Approach */}
        <About />

        {/* Technical Proficiency Grid */}
        <Skills />

        {/* Work Timeline */}
        <Experience />

        {/* Interactive 3D Projects Showcase */}
        <Projects />

        {/* Metric Badges & Highlights */}
        <Achievements />

        {/* Connection Form & Profiles */}
        <Contact />

      </main>

      {/* Premium minimal Footer */}
      <footer className="relative border-t border-white/5 bg-gray-950/40 backdrop-blur-sm py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            © 2026 Jaya Prakash. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-[10px] tracking-wide font-medium">
            Designed & Engineered with React + Tailwind + Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
