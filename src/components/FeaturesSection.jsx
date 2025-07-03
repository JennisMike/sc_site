import { useEffect, useRef } from 'react';
import '../App.css';

const features = [
  {
    name: 'Post & Accept Offers',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 17l5-5-5-5"/><path d="M21 12H8"/><path d="M8 7v10"/><path d="M8 12H3"/></svg>
    ),
    desc: 'Say what you have and need. Set your own rate(optional).'
  },
  {
    name: 'Chat Like WeChat',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
    ),
    desc: 'Talk first before you trade.'
  },
  {
    name: 'Transfer Like Alipay',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 11h20"/></svg>
    ),
    desc: "MoMo transfers happen inside the app. You'll never transfer to the wrong number again."
  },
  {
    name: 'Community-Set Rates',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><polyline points="7 11 12 6 17 11"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
    ),
    desc: 'Users agree on their own prices. No fixed exchange rates.'
  },
  {
    name: 'Real-Name Verification',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-14 0v2a2 2 0 0 0 2 2z"/></svg>
    ),
    desc: 'Users must verify ID to continue using the app.'
  },
  {
    name: 'Wallet-Based Matching',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 11h20"/></svg>
    ),
    desc: 'No user can accept an offer without balance. Every offer is backed.'
  },
];

function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for fade-in
    const section = sectionRef.current;
    const cards = section.querySelectorAll('.feature-card');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(card => observer.observe(card));
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="features-container">
        <h2 className="features-title">Why SwapChat?</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div className="feature-card fade-up" key={feature.name}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <div className="feature-name">{feature.name}</div>
                <div className="feature-desc">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection; 