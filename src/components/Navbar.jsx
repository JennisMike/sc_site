import { useEffect, useState } from 'react';
import '../App.css';
import logo1 from '../assets/logo1.png';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Proof', href: '#proof' },
  { label: 'Trust', href: '#trust' },
  { label: 'FAQs', href: '#faqs' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for nav links
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches('.nav-link')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav className={`custom-navbar${scrolled ? ' scrolled' : ''}`}>  
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img 
            src={logo1}
            alt="SwapChat Logo" 
            className="navbar-logo-img"
            style={{ height: '38px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }}
          />
        </div>
        {/* Hamburger for mobile */}
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        {/* Nav Links */}
        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* CTA Button */}
        <div className="navbar-cta">
          <a href="#email-form-section" className="notify-btn">Notify Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 