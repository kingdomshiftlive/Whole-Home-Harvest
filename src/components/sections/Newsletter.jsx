import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import './Newsletter.css';

const NEWSLETTER_ACTION_URL = 'YOUR_MAILCHIMP_OR_KIT_FORM_ACTION_URL';
const isConnected = NEWSLETTER_ACTION_URL !== 'YOUR_MAILCHIMP_OR_KIT_FORM_ACTION_URL';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    if (!isConnected) {
      const saved = JSON.parse(localStorage.getItem('wholeHomeHarvestLeads') || '[]');
      localStorage.setItem('wholeHomeHarvestLeads', JSON.stringify([...saved, { email, createdAt: new Date().toISOString() }]));
      setTimeout(() => { setLoading(false); setSubmitted(true); }, 500);
      return;
    }
    try {
      await fetch(NEWSLETTER_ACTION_URL, { method: 'POST', mode: 'no-cors', body: new FormData(e.currentTarget) });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter section-sm" aria-label="Newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__content">
            <div className="newsletter__icon"><Mail size={24} /></div>
            <h2 className="newsletter__title">Free Weekly Harvest Notes</h2>
            <p className="newsletter__subtitle">Planting reminders, pantry-building ideas, canning safety notes, faith encouragement, and practical homesteading resources for the week ahead.</p>
            {submitted ? (
              <div className="newsletter__success"><CheckCircle size={24} /><div><strong>You are in!</strong><p>Thanks for joining the Whole Home Harvest community.</p></div></div>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input type="email" name="EMAIL" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="newsletter__input" required aria-label="Email address for newsletter" />
                <button type="submit" className="btn btn--primary newsletter__btn" disabled={loading}>{loading ? 'Subscribing...' : 'Subscribe Free'}</button>
              </form>
            )}
            {!isConnected && !submitted && <p className="newsletter__setup-note">⚙️ Demo mode: email capture is stored locally. Connect Mailchimp, Kit, or another provider before running paid traffic.</p>}
            <p className="newsletter__note">Free forever. No spam. Practical encouragement for families growing food and stewarding home well.</p>
          </div>
          <div className="newsletter__visual" aria-hidden="true">
            <div className="newsletter__stat"><span className="newsletter__stat-value">44%</span><span className="newsletter__stat-label">US families interested in growing food</span></div>
            <div className="newsletter__stat"><span className="newsletter__stat-value">6+</span><span className="newsletter__stat-label">Original articles and guides</span></div>
            <div className="newsletter__stat"><span className="newsletter__stat-value">20+</span><span className="newsletter__stat-label">Affiliate partner ideas</span></div>
            <blockquote className="newsletter__verse">“The Lord God took the man and put him in the Garden of Eden to work it and keep it.”<cite>— Genesis 2:15</cite></blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
