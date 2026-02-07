import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { CursorEffect } from './components/CursorEffect';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100 selection:bg-primary/30 selection:text-white">
      <CursorEffect />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-dark">
        <p>&copy; {new Date().getFullYear()} Chit Lwin (ချစ်လွင်). Built with React, Tailwind & Gemini.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;