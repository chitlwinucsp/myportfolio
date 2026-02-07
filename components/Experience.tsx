import React from 'react';
import { EXPERIENCE } from '../constants';
import { Reveal } from './Reveal';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Work <span className="text-secondary">Experience</span>
          </h2>
        </Reveal>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Icon on the line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass-panel rounded-2xl border-l-4 border-l-transparent hover:border-l-primary transition-all md:order-1">
                <Reveal delay={index * 200} width="100%">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-white">{job.role}</h3>
                    <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">{job.period}</span>
                  </div>
                  <div className="text-secondary font-medium mb-3">{job.company}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </Reveal>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};