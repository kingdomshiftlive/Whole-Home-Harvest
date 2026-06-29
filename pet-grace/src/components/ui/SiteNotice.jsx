import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, AlertTriangle } from 'lucide-react';
import './SiteNotice.css';

export default function SiteNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('pg-notice-seen');
    if (!seen) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem('pg-notice-seen', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="site-notice__overlay" role="dialog" aria-modal="true">
      <div className="site-notice__box">
        <div className="site-notice__header">
          <div className="site-notice__icon"><AlertTriangle size={22} /></div>
          <h2>Before You Continue</h2>
          <button onClick={dismiss} className="site-notice__close" aria-label="Close"><X size={18} /></button>
        </div>
        <div className="site-notice__body">
          <p><strong>My Pet Grace is a general information and educational resource only.</strong></p>
          <ul>
            <li>We are <strong>not veterinarians</strong> and do not provide veterinary advice</li>
            <li>The AI Pet Advisor provides <strong>general information only</strong> — not medical advice</li>
            <li>The Quality of Life tool is an <strong>educational starting point</strong> — not a substitute for your vet</li>
            <li>Grief support content is <strong>informational</strong> — not professional counseling</li>
          </ul>
          <p className="site-notice__key">
            <strong>Always consult a licensed veterinarian</strong> for any health or end-of-life decisions about your pet.
          </p>
          <p className="site-notice__mental">
            If you are in a mental health crisis, call or text <strong>988</strong> (Suicide and Crisis Lifeline).
          </p>
        </div>
        <div className="site-notice__footer">
          <p>By continuing, you confirm you have read our <Link to="/disclaimer" onClick={dismiss}>full disclaimer</Link> and <Link to="/terms" onClick={dismiss}>terms of use</Link>.</p>
          <button onClick={dismiss} className="btn btn--primary site-notice__btn">
            I Understand — Continue to My Pet Grace
          </button>
        </div>
      </div>
    </div>
  );
}
