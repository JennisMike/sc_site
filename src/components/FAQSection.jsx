import { useState, useRef } from 'react';
import '../App.css';

const faqs = [
  {
    q: 'How do I create an offer?',
    a: 'To create an offer, go to the Marketplace screen, tap the "+" button, fill in the currency, rate, and amount, then submit your offer for others to see.'
  },
  {
    q: 'Is my money safe?',
    a: 'We prioritize security by requiring real name verification, logging all transactions, and using trusted payment providers like Campay. Always review offers carefully before proceeding.'
  },
  {
    q: 'How do I report a user?',
    a: 'From any chat screen, tap the three-dot menu in the top right and select "Report User". Your report helps us maintain a trusted and safe community.'
  },
  {
    q: 'What are the fees?',
    a: 'SwapChat charges a small service fee per exchange to help maintain the app and keep it secure. Additional fees from MTN/Orange may apply during top-up or withdrawal, depending on the provider.'
  },
  {
    q: 'Can I change my email address?',
    a: 'No. For security and identity verification purposes, the email you use at sign-up is permanent. Please ensure it is correct when registering.'
  },
  {
    q: 'Can I reset my password?',
    a: 'Yes. Password reset is available inside the app once you are logged in. There is also a "Forgot Password" option on the login screen which requires email code verificattion. We advise all users to keep their login details safe.'
  },
  {
    q: 'How is the exchange rate calculated?',
    a: 'Exchange rates are updated every 15 minutes from a reliable external API and stored in our system. You can check the latest rate using the built-in currency converter.'
  },
  {
    q: 'How do I top up or withdraw?',
    a: 'Use the Wallet screen to top up or withdraw through MTN or Orange via Campay. Campay may apply extra fees at confirmation.'
  },
  {
    q: 'Why is my withdrawal amount slightly lower?',
    a: 'The slight difference is due to processing fees by Campay or your mobile money provider. SwapChat does not add hidden charges to withdrawal.'
  },
  {
    q: 'How do I change the language?',
    a: 'Currently, SwapChat is available in English only. French and Chinese will be added in future updates.'
  },
  {
    q: 'How can I contact support?',
    a: 'Go to the Support screen in the app and tap "Contact Us" or "Report a Problem". You can also provide feedback through our built-in feedback form.'
  },
  {
    q: 'Can I send Feedback?',
    a: 'Yes. You can send feedback through the built-in feedback form in the app. We appreciate your input and are always looking for ways to improve the app.'
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
    setTimeout(() => {
      if (openIndex !== idx && faqRefs.current[idx]) {
        faqRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div
            className={`faq-card${openIndex === idx ? ' open' : ''}`}
            key={faq.q}
            tabIndex={0}
            ref={el => (faqRefs.current[idx] = el)}
            onClick={() => handleToggle(idx)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
            role="button"
          >
            <div className="faq-question-row">
              <span className="faq-question">{faq.q}</span>
              <span className={`faq-chevron${openIndex === idx ? ' rotated' : ''}`}>{/* Chevron Down SVG */}
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 8 10 12 14 8" /></svg>
              </span>
            </div>
            <div
              className="faq-answer-wrapper"
              id={`faq-answer-${idx}`}
              style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}
            >
              <div className="faq-answer">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection; 