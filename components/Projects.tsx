import React from 'react';
import { PROJECTS } from '../constants';
import { Reveal } from './Reveal';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl">
              A selection of projects I've worked on, ranging from web applications to experimental AI tools.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 150} width="100%">
              <div className="group rounded-2xl overflow-hidden glass-panel border-0 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {project.githubUrl && (
                       <a href={project.githubUrl} className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors" title="View Code" target="_blank" rel="noopener noreferrer">
                          <Github size={18} />
                       </a>
                     )}
                     {project.demoUrl && (
                       <a href={project.demoUrl} className="p-2 bg-dark/80 rounded-full text-white hover:bg-primary transition-colors" title="Live Demo" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                       </a>
                     )}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};