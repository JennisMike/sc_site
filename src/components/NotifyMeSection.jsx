import { useState } from 'react';
import '../App.css';
import { createClient } from '@supabase/supabase-js';

// Use Vite environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function NotifyMeSection() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const email = e.target.email.value.trim().toLowerCase();
    if (!email) {
      setMessage('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    // Insert email into Supabase
    const { error } = await supabase.from('emails').insert([{ email }]);
    if (error) {
      if (error.code === '23505' || (error.message && error.message.toLowerCase().includes('duplicate'))) {
        setMessage("No worries, we already have your email and you will be the first to get notified when the app is live!");
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } else {
      setSubmitted(true);
      setMessage("Thank you! You'll be notified when we launch.");
    }
    setLoading(false);
  };

  return (
    <section id="email-form-section" className="notify-section">
      <div className="notify-container">
        <h2 className="notify-title">Be First To Know When We Launch</h2>
        {!submitted ? (
          <form className="notify-form" onSubmit={handleSubmit} autoComplete="off">
            <input
              type="email"
              name="email"
              className="notify-input"
              placeholder="Enter your email address"
              required
              autoComplete="email"
              disabled={loading}
            />
            <button type="submit" className="notify-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Notify Me'}
            </button>
          </form>
        ) : (
          <div className="notify-thankyou">{message}</div>
        )}
        {message && !submitted && <div className="notify-thankyou">{message}</div>}
        <div className="notify-subtext">We'll email you once it's live. No spam.</div>
      </div>
    </section>
  );
}

export default NotifyMeSection; 