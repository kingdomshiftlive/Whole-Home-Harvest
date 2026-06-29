import { Link } from 'react-router-dom';
import { Heart, AlertTriangle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <Heart size={20} />
            <div>
              <div className="footer__logo-name">My Pet Grace</div>
              <div className="footer__logo-sub">Love Well. Grieve Well. Heal Well.</div>
            </div>
          </Link>
          <p className="footer__scripture">
            "A righteous man cares for the needs of his animal."
            <br /><em>— Proverbs 12:10</em>
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Care</h4>
            <Link to="/resources">Pet Care Guides</Link>
            <Link to="/resources#nutrition">Nutrition</Link>
            <Link to="/resources#health">Health & Wellness</Link>
            <Link to="/resources#insurance">Pet Insurance</Link>
          </div>
          <div className="footer__col">
            <h4>Support</h4>
            <Link to="/tools">Grief Support</Link>
            <Link to="/tools#memorial">Memorial Ideas</Link>
            <Link to="/ai-coach">AI Pet Advisor</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} My Pet Grace. Made with <Heart size={12} className="footer__heart" /> for pet families everywhere.</p>
          <p className="footer__affiliate-note">We use affiliate links. See our <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
        </div>
      </div>
      <div className="footer__legal-strip">
        <div className="container footer__legal-strip-inner">
          <AlertTriangle size={13} />
          <span>
            My Pet Grace is for general information only — not veterinary, medical, or mental health advice. 
            Always consult a licensed professional. <Link to="/disclaimer">Full Disclaimer</Link> · <Link to="/terms">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
