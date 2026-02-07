import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
       const headerOffset = 80;
       const elementPosition = element.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.scrollY - headerOffset;
       window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
       });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-50"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Reveal>
            <div className="inline-block px-4 py-1.5 mb-2 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              Available for Hire
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse-slow">Robust</span> <br />
              Software Solutions.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              I'm Chit Lwin (ချစ်လွင်), a dedicated Software Engineer passionate about building scalable, efficient, and user-centric applications. 
              Transforming complex problems into elegant code.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group px-8 py-3.5 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
              >
                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex gap-6 pt-6 text-gray-400">
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Github size={24} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Twitter size={24} /></a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={500}>
          <div className="relative z-10 hidden md:block perspective-1000">
            <div className="relative w-full aspect-square max-w-md mx-auto group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse-slow group-hover:opacity-30 transition-opacity"></div>
               <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Chit Lwin" 
                className="relative rounded-3xl shadow-2xl border border-white/10 w-full h-full object-cover z-10 rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out"
               />
               <div className="absolute -bottom-6 -right-6 glass-panel p-5 rounded-2xl z-20 transform transition-transform duration-500 hover:-translate-y-2 border border-white/10 shadow-xl">
                  <p className="text-xl font-bold text-white mb-0.5">5+ Years</p>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Experience</p>
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};