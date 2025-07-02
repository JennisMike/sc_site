import { useState, useRef } from 'react';
import '../App.css';

const storyLines = [
  "Many people doing business in China face a challenge when it comes to receiving payments for products or services.",
  "Clients often send small amounts of money, and frequently, these transactions can’t justify the use of traditional bank transfers, which are slow, cumbersome, and expensive for small-scale transactions.",
  "Instead of having to ask clients to go through the hassle of bank transfers, which might take hours or even a whole day to process — not to mention the inconvenient time differences between countries — they could simply use SwapChat. With the app, users can quickly exchange money with trusted peers in real-time, making it incredibly efficient for receiving payments for services or goods.",
  "For example, a seller might receive payments from clients in small amounts, which could be difficult and inefficient to process using a traditional bank. But with SwapChat, those payments can be exchanged almost instantly with someone who has the opposite currency, like FCFA to RMB, without waiting hours for the transfer to complete.",
  "By eliminating the need for banking hours and long processing times, SwapChat becomes the go-to solution for handling payments, especially when the amounts are too small to justify traditional banking methods.",
  "Disclaimer: SwapChat is not trying to replace banks; rather, it is offering an alternative solution that is faster, always available, and designed for both small and also large, more frequent transactions."
];

function RealLifeScenarioSection() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  return (
    <section id="real-life" className="real-life-section">
      <div className="real-life-container">
        <h2 className="real-life-title">Why SwapChat Matters In Real Life</h2>
        <div
          className={`real-life-story${expanded ? ' expanded' : ''}`}
          ref={contentRef}
          style={{ maxHeight: expanded ? '800px' : '150px' }} // Control height based on expanded state
        >
          <div className="real-life-line">{storyLines[0]}</div>
          <div className="real-life-line">{storyLines[1]}</div>
          <div className={`real-life-line blur-line${expanded ? ' unblur' : ''}`}>{storyLines[2]}</div>
          <div className={`real-life-line blur-line${expanded ? ' unblur' : ''}`}>{storyLines[3]}</div>
          <div className={`real-life-line blur-line${expanded ? ' unblur' : ''}`}>{storyLines[4]}</div>
          <div className={`real-life-line blur-line${expanded ? ' unblur' : ''}`}>{storyLines[5]}</div>
        </div>
        <button
          className="real-life-toggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show Less' : 'Continue reading'}
        </button>
      </div>
    </section>
  );
}

export default RealLifeScenarioSection;
