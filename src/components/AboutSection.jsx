import { useEffect, useRef } from 'react';
import '../App.css';

function AboutSection() {
  const counterRef = useRef(null);
  const sectionRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    // Animate counter when in view
    const handleScroll = () => {
      const el = counterRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !el.classList.contains('counted')) {
        el.classList.add('counted');
        let start = 0;
        const end = 80000;
        const duration = 1800;
        const step = Math.ceil(end / (duration / 16));
        function animate() {
          start += step;
          if (start >= end) {
            el.textContent = '¥80,000+';
          } else {
            el.textContent = '¥' + start.toLocaleString();
            requestAnimationFrame(animate);
          }
        }
        animate();
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in
    const section = sectionRef.current;
    const illustration = illustrationRef.current;
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
    if (illustration) observer.observe(illustration);
    return () => {
      if (section) observer.unobserve(section);
      if (illustration) observer.unobserve(illustration);
    };
  }, []);

  return (
    <section id="about" className="about-section fade-in-section" ref={sectionRef}>
      <div className="about-container">
        <h2 className="about-title">How a Simple Favor Became a Trusted System</h2>
        <div className="about-body">
          <p>
            It started with a simple favor—friends and community members asking for help exchanging RMB and FCFA. What began as a one-time gesture quickly grew as more people discovered a safe, reliable way to exchange currency.
          </p>
          <p>
            As word spread, the need grew. More people joined, and soon, what started as a small act of trust became a thriving system.
          </p>
          <p>
            <span className="about-highlight">Over <span ref={counterRef} className="about-counter">¥0</span> has been exchanged</span>, proving that real trust and community can build something powerful.
          </p>
          <p>
            SwapChat wasn't just an app—it was born out of the need for trust and community.
          </p>
        </div>
        {/* Timeline */}
        <div className="about-timeline">
          <div className="timeline-point"><span>First Favor</span></div>
          <div className="timeline-bar"></div>
          <div className="timeline-point"><span>Growing Need</span></div>
          <div className="timeline-bar"></div>
          <div className="timeline-point"><span>¥85,000+ Exchanged</span></div>
        </div>
        {/* Optional Illustration Placeholder */}
        <div className="about-illustration fade-in-illustration" ref={illustrationRef}>
          <span className="about-illustration-placeholder">[Illustration: People trading or map]</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 