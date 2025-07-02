import { useState } from 'react';
import '../App.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPhone, setShowPhone] = useState(false);
  return (
    <footer className="footer-section">
      <div className="footer-separator" />
      <div className="footer-content">
        {/* Links */}
        <div className="footer-links">
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          {/* <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms & Conditions</a> */}
          <button
            className="footer-link footer-contact-btn"
            onClick={() => setShowPhone((v) => !v)}
            aria-label="Show phone number"
          >
            Contact
          </button>
          {showPhone && (
            <div className="footer-phone">+86 13 130 637 422</div>
          )}
          <a
            href="https://wa.me/237676131512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="footer-link footer-whatsapp-link"
          >
            WhatsApp
          </a>
        </div>
        {/* Social Icons */}
        {/* <div className="footer-social"> */}
          {/* <a */}
            {/* href="https://wa.me/237676131512" */}
            {/* target="_blank" */}
            {/* rel="noopener noreferrer" */}
            {/* aria-label="Share on WhatsApp" */}
            {/* className="footer-social-icon" */}
          {/* > */}
            {/* WhatsApp Icon (Lucide/Heroicons style) */}
            {/* <svg width="22" height="22" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21.67 20.13l-1.2-4.28A9 9 0 1 0 4.5 19.5l4.28 1.2a2 2 0 0 0 2.44-1.44l.38-1.38a2 2 0 0 1 1.44-1.44l1.38-.38a2 2 0 0 0 1.44-2.44z"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg> */}
          {/* </a> */}
          {/* <a */}
            {/* href="#" */}
            {/* target="_blank" */}
            {/* rel="noopener noreferrer" */}
            {/* aria-label="Share on WeChat" */}
            {/* className="footer-social-icon" */}
          {/* > */}
            {/* WeChat Icon (Lucide/Heroicons style) */}
            {/* <svg width="22" height="22" fill="none" stroke="#09bb07" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M8 15c1.5-1 6.5-1 8 0"/></svg> */}
          {/* </a> */}
        {/* </div> */}
        {/* Signature Line */}
        <div className="footer-signature">Made with <span role="img" aria-label="love">❤️</span> by Mike</div>
        {/* Copyright */}
        <div className="footer-copyright">© {currentYear} SwapChat. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer; 