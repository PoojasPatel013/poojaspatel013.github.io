import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TrueFocus from '../TrueFocus/TrueFocus';
import './CertificatesSection.css';

/* ────────────────────────────────────────────────────────────
   Placeholder certificate data — fill in your own details!
   ──────────────────────────────────────────────────────────── */
const CERTIFICATES = [
  {
    id: 'cert-1',
    name: 'Generative AI Professional',
    issuer: 'Oracle',
    date: 'Oct 2025',
    credlyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0843CA628935713AD26C16AEE4651FFCE24AAE3EC00BD8506E67B94CE563579E',
  },
  {
    id: 'cert-2',
    name: 'Cybersecurity Certificate',
    issuer: 'Google Cloud',
    date: 'Jan 2025',
    credlyUrl: 'https://www.credly.com/earner/earned/badge/779092a7-f5ee-4841-87f7-d01d20a46c69',
  },
  {
    id: 'cert-3',
    name: 'Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    credlyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A83A2668A69373599FC14AF3E180CF90502B91D825DE79F2387F543FAA9DECA2',
  },
];

/* Credly profile link — replace with your actual URL */
const CREDLY_PROFILE_URL = 'https://www.credly.com/users/pooja-patel.8070755d';

/* ── Shield / Badge SVG Icon ─────────────────────────────── */
const ShieldIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

/* ── Credly Logo SVG ─────────────────────────────────────── */
const CredlyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.3 18.6c-3.64 0-6.6-2.96-6.6-6.6s2.96-6.6 6.6-6.6c1.83 0 3.48.74 4.68 1.94l-1.9 1.9A4.14 4.14 0 0 0 11.7 8.1c-2.15 0-3.9 1.75-3.9 3.9s1.75 3.9 3.9 3.9c1.62 0 3.01-1 3.59-2.4h-3.59v-2.7h6.51c.06.38.09.77.09 1.17 0 3.67-2.96 6.63-6.6 6.63z" />
  </svg>
);

/* ── Single Certificate Card ─────────────────────────────── */
const CertificateCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="cert-card-glow rounded-[24px] p-7 flex flex-col gap-4 relative overflow-hidden transition-shadow duration-300 cursor-default"
      style={{
        background: 'rgba(245, 238, 248, 0.65)',
        border: '1px solid rgba(192, 132, 252, 0.35)',
        backdropFilter: 'blur(14px)',
        boxShadow: '0 6px 28px rgba(192, 132, 252, 0.1)',
      }}
    >
      {/* Decorative glow blob */}
      <div
        className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: '#d946ef' }}
      />

      {/* Top row: badge icon + date */}
      <div className="flex items-start justify-between relative z-10">
        <div className="cert-float" style={{ color: '#a855f7' }}>
          <ShieldIcon />
        </div>
        <span
          className="font-inter text-xs font-semibold tracking-wide px-3 py-1 rounded-full"
          style={{
            color: '#7e22ce',
            background: 'rgba(192, 132, 252, 0.18)',
            border: '1px solid rgba(192, 132, 252, 0.3)',
          }}
        >
          {cert.date}
        </span>
      </div>

      {/* Certificate name & issuer */}
      <div className="relative z-10">
        <h3
          className="font-outfit text-xl md:text-2xl font-bold tracking-tight"
          style={{ color: '#1e293b' }}
        >
          {cert.name}
        </h3>
        <p
          className="font-inter text-sm font-semibold mt-1"
          style={{ color: '#9333ea' }}
        >
          {cert.issuer}
        </p>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full relative z-10"
        style={{ background: 'rgba(192, 132, 252, 0.3)' }}
      />

      {/* Verify link */}
      <a
        href={cert.credlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-inter text-sm font-semibold group relative z-10 transition-colors duration-200"
        style={{ color: '#7c3aed' }}
      >
        <span className="group-hover:underline" style={{ textDecorationColor: '#c084fc' }}>
          Verify Credential
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
    </motion.div>
  );
};

/* ── Main Section ────────────────────────────────────────── */
const CertificatesSection = () => {
  return (
    <section
      id="certificates"
      className="snap-section relative flex flex-col px-6 md:px-12 min-h-screen"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section heading */}
        <h2
          className="font-outfit text-4xl md:text-6xl font-black tracking-tighter mb-6"
          style={{ color: '#1e293b' }}
        >
          Certifications<span style={{ color: '#d946ef' }}>.</span>
        </h2>

        {/* TrueFocus hero text */}
        <div className="mb-16">
          <TrueFocus
            sentence="Certified & Verified"
            manualMode={false}
            blurAmount={4}
            borderColor="#d946ef"
            glowColor="rgba(217, 70, 239, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1.2}
          />
        </div>

        {/* Certificate cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CERTIFICATES.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {/* Credly Profile CTA */}
        <div className="flex justify-center">
          <a
            href={CREDLY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-outfit font-bold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #d946ef 100%)',
              color: '#ffffff',
              boxShadow: '0 8px 30px rgba(168, 85, 247, 0.35)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(168, 85, 247, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(168, 85, 247, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <CredlyIcon />
            View Credly Profile
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
