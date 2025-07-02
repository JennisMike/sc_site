import { useEffect, useRef } from 'react';
import '../App.css';

function TrustSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const iconRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Intersection Observer for fade-in
    const section = sectionRef.current;
    const text = textRef.current;
    const icons = iconRefs.map(ref => ref.current);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    if (text) observer.observe(text);
    icons.forEach(icon => icon && observer.observe(icon));
    return () => {
      if (section) observer.unobserve(section);
      if (text) observer.unobserve(text);
      icons.forEach(icon => icon && observer.unobserve(icon));
    };
  }, []);

  return (
    <section id="trust" className="trust-section fade-in-section" ref={sectionRef}>
      <div className="trust-content">
        {/* Left Column: Text */}
        <div className="trust-text-column slide-up-section" ref={textRef}>
          <h2 className="trust-title">Trust and Security</h2>
          <p className="trust-subtitle">
            Our top priority is to ensure safe, reliable exchanges for everyone.
          </p>
          <div className="trust-feature">
            <h3>Real-Name Verification</h3>
            <p>We ensure that every user is verified before making any exchanges. This creates trust and prevents fraudulent activities.</p>
          </div>
          <div className="trust-feature">
            <h3>Wallet-Based Matching</h3>
            <p>Users can only accept offers if their wallet balance matches. This ensures that no one can promise more than they can provide.</p>
          </div>
          <div className="trust-feature">
            <h3>Secure, In-App Transfers</h3>
            <p>All transfers are conducted within the app, reducing the risk of human error and preventing exposure to external fraud.</p>
          </div>
        </div>
        {/* Right Column: Icons */}
        <div className="trust-icons-column">
          <div className="trust-icons-row">
            <div className="security-icon fade-in-icon" ref={iconRefs[0]}>
              {/* ID Badge Icon */}
              <svg width="64" height="64" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="3"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M6 18v-1a6 6 0 0 1 12 0v1"/>
              </svg>
              <p>Real-name verification</p>
            </div>
            <div className="security-icon fade-in-icon" ref={iconRefs[1]}>
              {/* Wallet Icon */}
              <svg width="64" height="64" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 3v4"/>
                <path d="M8 3v4"/>
                <path d="M2 11h20"/>
              </svg>
              <p>Wallet-based matching</p>
            </div>
          </div>
          <div className="trust-single-icon">
            <div className="security-icon fade-in-icon" ref={iconRefs[2]}>
              {/* Shield Icon */}
              <svg width="64" height="64" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <p>Secure transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection; 