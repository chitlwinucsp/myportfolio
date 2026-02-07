import React from 'react';
import { Reveal } from './Reveal';
import { Code, Server, Layout, Database, Monitor } from 'lucide-react';

const SKILLS = [
  { name: "Frontend", icon: <Layout />, tools: "Angular, Blazor, MVC, Web Forms, TypeScript, Bootstrap" },
  { name: "Backend", icon: <Server />, tools: "C# (.NET), Python, Web API" },
  { name: "Desktop Apps", icon: <Monitor />, tools: "WinForms, WPF (MVVM), C# .NET" },
  { name: "Database", icon: <Database />, tools: "SQL Server, PostgreSQL, MongoDB, Redis" },
  { name: "Architecture", icon: <Code />, tools: "Azure, Docker, Microservices, CI/CD" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2 space-y-6">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-400 leading-relaxed">
                I am a passionate Software Engineer with a strong foundation in building reliable, scalable systems. 
                My journey began with a curiosity for how software shapes the world, leading me to dive deep into full-stack development.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 leading-relaxed">
                Over the years, I've honed my skills in designing architectures that stand the test of time. 
                From <span className="text-white font-medium">architecting robust .NET backends</span> and <span className="text-white font-medium">desktop applications</span> to crafting <span className="text-white font-medium">responsive user interfaces</span>, 
                I enjoy every aspect of the engineering process.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-gray-400 leading-relaxed">
                I am constantly learning and adapting to new technologies to solve complex problems efficiently, bridging the gap between legacy systems and modern tech.
              </p>
            </Reveal>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill, idx) => (
              <Reveal key={skill.name} delay={idx * 100}>
                <div className="glass-panel p-6 rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.tools}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};