import { useEffect, useRef, useState } from 'react';
import '../App.css';

const steps = [
  {
    title: 'Post Your Offer',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
    ),
    desc: "Post what you have and what you're looking for. Set your own rate."
  },
  {
    title: 'Get Replies',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
    ),
    desc: 'Get offers from users who want to exchange at your rate.'
  },
  {
    title: 'Accept a Match',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
    ),
    desc: 'Review replies and accept the best match.'
  },
  {
    title: 'Chat, Exchange QR Codes',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
    desc: 'Chat directly within the app. Exchange QR codes to initiate transfers.'
  },
  {
    title: 'Transfer and Complete',
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 11h20"/></svg>
    ),
    desc: 'Transfer FCFA through MoMo instantly. RMB is sent via Alipay or WeChat Pay.'
  }
];

function HowItWorksSection() {
  const sectionRef = useRef(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    // Intersection Observer for fade-in
    const section = sectionRef.current;
    if (!section) return;
    let timeoutIds = [];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            steps.forEach((_, i) => {
              const timeoutId = setTimeout(() => {
                setVisibleIndexes((prev) => {
                  if (prev.includes(i)) return prev;
                  return [...prev, i];
                });
              }, i * 220); // 220ms delay between cards
              timeoutIds.push(timeoutId);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => {
      timeoutIds.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="howitworks" className="how-section" ref={sectionRef}>
      <div className="how-container">
        <h2 className="how-title">How It Works</h2>
        <div className="how-steps">
          {steps.map((step, i) => (
            <div
              className={`how-step grow-fade${visibleIndexes.includes(i) ? ' visible' : ''}`}
              key={step.title}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="how-icon">{step.icon}</div>
              <div className="how-text">
                <div className="how-step-title">{step.title}</div>
                <div className="how-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="how-subnote">
          RMB is sent via Alipay/WeChat Pay. FCFA is sent instantly in-app, just like Alipay in chat.
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection; 