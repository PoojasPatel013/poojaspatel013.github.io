import React from 'react';
import ScrollStack from '../ScrollStack/ScrollStack';

const ProjectsSection = () => {
  const PROJECTS = [
    {
      id: 'netra',
      header: '01 - Cybersecurity',
      title: 'NETRA v2',
      subtitle: 'AI-Native Asset Discovery Engine',
      github: 'https://github.com/PoojasPatel013/netra',
    },
    {
      id: 'oasis',
      header: '02 - AI Documentation',
      title: 'OASIS',
      subtitle: 'Self-Healing Documentation Engine',
      github: 'https://github.com/PoojasPatel013/Ai-for-bharat-2026',
    },
    {
      id: 'disaster',
      header: '03 - ML Platform',
      title: 'Disaster Risk Prediction',
      subtitle: 'End-to-End ML Platform for Risk Modeling',
      github: '#', // TODO: add your GitHub repo URL
    },
    {
      id: 'proxy',
      header: '04 - AI Agents',
      title: 'Proxy',
      subtitle: 'Swarm-Powered AI Matchmaking Engine',
      github: 'https://github.com/PoojasPatel013/Proxy', // TODO: add your GitHub repo URL
    },
  ];

  return (
    <section id="projects" className="relative w-full z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32">
        <h2 className="font-outfit text-4xl md:text-6xl font-black tracking-tighter mb-[5vh]" style={{ color: '#1e293b' }}>
          Systems I've Built<span style={{ color: '#d946ef' }}>.</span>
        </h2>
      </div>

      {/* Scroll Stack using framer-motion's useScroll and sticky positioning for flawless performance */}
      <ScrollStack projects={PROJECTS} />
    </section>
  );
};

export default ProjectsSection;
