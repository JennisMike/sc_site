import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useRef, useState } from 'react';

// Use the same images as ProofSection for now
const heroImages = [
  '/images/app/app_1.jpg',
  '/images/app/app_2.jpg',
  '/images/app/app_3.jpg',
  '/images/app/app_4.jpg',
  '/images/app/app_5.jpg',
  '/images/app/app_6.jpg',
  '/images/app/app_7.jpg',
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Scroll to email form section
  const handleNotifyClick = () => {
    const emailSection = document.getElementById('email-form-section');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section d-flex align-items-center justify-content-center min-vh-100 w-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <div className="hero-logo mb-3 slide-up">
              <span className="fw-bold fs-3">SwapChat</span>
            </div>
            <h1 className="display-4 fw-bold mb-3 slide-up" style={{fontFamily: 'Poppins, Inter, Nunito Sans, sans-serif'}}>
              Chat Like WeChat. Transfer Like Alipay.
            </h1>
            <p className="lead mb-4 slide-up" style={{fontFamily: 'Poppins, Inter, Nunito Sans, sans-serif'}}>
            P2P currency exchange between FCFA & RMB, trusted by over ¥80,000 in organic trades
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 slide-up">
              <button className="btn btn-primary btn-lg px-4" onClick={handleNotifyClick}>
                Notify Me
              </button>
              <button className="btn btn-secondary btn-lg px-4" disabled style={{background: '#e0e0e0', color: '#888', border: 'none'}}>
                Coming Soon on Google Play
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0 hero-img-col">
            <div className="mobile-mockup zoom-on-scroll">
              {/* Carousel for app screenshots */}
              <div className="mockup-placeholder d-flex align-items-center justify-content-center" style={{position: 'relative'}}>
                {heroImages.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`SwapChat App Screenshot ${i + 1}`}
                    className="hero-img"
                    style={{
                      opacity: i === current ? 1 : 0,
                      zIndex: i === current ? 2 : 1,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      transition: 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  />
                ))}
                <div className="carousel-dots" style={{position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center'}}>
                  {heroImages.map((_, i) => (
                    <span key={i} className={`dot${i === current ? ' active-dot' : ''}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection; 