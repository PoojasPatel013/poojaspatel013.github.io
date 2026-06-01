import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Distinct light theme gradients
const CARD_THEMES = [
  {
    bg: 'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #d8b4fe 100%)', // Grape/Orchid (Project 1)
    accent: '#f5eef8',
    text: '#ffffff',
    sub: 'rgba(255,255,255,0.9)',
    glow: 'rgba(168,85,247,0.3)',
    ring: 'rgba(192,132,252,0.5)',
  },
  {
    bg: 'linear-gradient(135deg, #be185d 0%, #db2777 50%, #f472b6 100%)', // Magenta/Boysenberry (Project 2)
    accent: '#f5eef8',
    text: '#ffffff',
    sub: 'rgba(255,255,255,0.9)',
    glow: 'rgba(219,39,119,0.3)',
    ring: 'rgba(244,114,182,0.5)',
  },
  {
    bg: 'linear-gradient(135deg, #701a75 0%, #a21caf 50%, #d946ef 100%)', // Plum/Jam (Project 3)
    accent: '#f5eef8',
    text: '#ffffff',
    sub: 'rgba(255,255,255,0.9)',
    glow: 'rgba(162,28,175,0.3)',
    ring: 'rgba(217,70,239,0.5)',
  },
  {
    bg: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)', // Indigo/Violet (Project 4)
    accent: '#e0e7ff',
    text: '#ffffff',
    sub: 'rgba(255,255,255,0.9)',
    glow: 'rgba(67,56,202,0.3)',
    ring: 'rgba(99,102,241,0.5)',
  },
];

export const ScrollStackItem = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const theme = CARD_THEMES[index % CARD_THEMES.length];

  const { scrollYProgress: stickyProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - index - 1) * 0.05;
  const scale = useTransform(stickyProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(stickyProgress, [0, 1], [1, 0.5]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex items-center justify-center min-h-[90vh] pb-12 pt-[20px]"
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(5vh + ${index * 20}px)`,
          background: theme.bg,
          boxShadow: `0 30px 80px ${theme.glow}, 0 0 0 1px ${theme.ring}, inset 0 1px 0 rgba(255,255,255,0.15)`,
        }}
        className="relative flex flex-col justify-between w-full max-w-5xl rounded-[40px] p-12 md:p-16 origin-top will-change-transform overflow-hidden"
      >
        {/* Neon glow blob */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: theme.accent }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: theme.accent }}
        />

        {/* Glass inner panel */}
        <div
          className="absolute inset-4 rounded-[32px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        />

        <div className="relative flex flex-col gap-5 z-10">
          <span
            className="text-xs md:text-sm font-outfit font-bold tracking-[0.25em] uppercase"
            style={{ color: theme.accent }}
          >
            {project.header}
          </span>
          <h3
            className="font-outfit text-4xl md:text-7xl font-black tracking-tight leading-none"
            style={{ color: theme.text }}
          >
            {project.title}
          </h3>
          <p
            className="font-inter text-lg md:text-2xl font-light max-w-2xl mt-2 leading-relaxed"
            style={{ color: theme.sub }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Bottom index badge */}
        <div className="relative z-10 mt-12 flex items-center justify-between">
          <div
            className="font-outfit font-black text-7xl md:text-9xl leading-none opacity-10 select-none"
            style={{ color: theme.text }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="flex items-center gap-3">
            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.15)', border: `1px solid ${theme.ring}` }}
                title="View on GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {/* Arrow button */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)', border: `1px solid ${theme.ring}` }}
              aria-label="View case study"
              role="presentation"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ScrollStack = ({ projects }) => {
  return (
    <div className="relative w-full pb-[10vh]">
      {projects.map((project, i) => (
        <ScrollStackItem
          key={project.id}
          project={project}
          index={i}
          total={projects.length}
        />
      ))}
    </div>
  );
};

export default ScrollStack;
