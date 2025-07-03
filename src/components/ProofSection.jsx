import { useEffect, useRef, useState } from 'react';
import '../App.css';

// Placeholder images (replace with real ones in public/images/proof/)
const images = [
    '/images/proof/alipay_transaction_1.jpg',
    '/images/proof/alipay_transaction_2.jpg',
    '/images/proof/alipay_transaction_3.jpg',
    '/images/proof/alipay_transaction_4.jpg',
    '/images/proof/alipay_transaction_5.jpg',
    '/images/proof/alipay_transaction_6.jpg',
    '/images/proof/alipay_transaction_7.jpg',
  ];

function ProofSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section id="proof" className="proof-section">
      <div className="proof-content">
        {/* Left Column: Text */}
        <div className="proof-text">
          <h2 className="proof-title">Built on Trust. Proven by Use.</h2>
          <div className="proof-caption">Over <span className="proof-highlight">¥80,000</span> exchanged — and still counting.</div>
          <blockquote className="proof-quote">
            "People I've never met send money to me while I do the same. That's the kind of trust we're building together."
          </blockquote>
        </div>
        {/* Right Column: Carousel */}
        <div className="proof-carousel">
          <div className="phone-box">
            {images.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`Proof ${i + 1}`}
                className={`carousel-img${i === current ? ' active' : ''}`}
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
              />
            ))}
          </div>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span key={i} className={`dot${i === current ? ' active-dot' : ''}`}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProofSection; 