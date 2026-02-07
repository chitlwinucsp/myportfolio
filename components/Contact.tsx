import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Let's work <span className="text-secondary">together</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-400 mb-8 text-lg">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some engineering expertise, I'd love to hear about it.
              </p>
            </Reveal>
            
            <div className="space-y-6">
              <Reveal delay={200}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">Email</h4>
                    <a href="mailto:contact@chitlwin.dev" className="text-gray-400 hover:text-white transition-colors">contact@chitlwin.dev</a>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={300}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">Location</h4>
                    <p className="text-gray-400">Yangon, Myanmar</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-dark/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-dark/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-dark/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : success ? 'Message Sent!' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
};