import { Link } from 'react-router-dom';
import { Heart, Leaf } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <Leaf size={20} />
            <div>
              <div className="footer__logo-name">Whole Home Harvest</div>
              <div className="footer__logo-sub">Tend the Earth. Feed Your Family. Honor God.</div>
            </div>
          </Link>
          <p className="footer__scripture">
            "The Lord God took the man and put him in the Garden of Eden to work it and keep it."
            <br /><em>— Genesis 2:15</em>
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Grow</h4>
            <Link to="/tools">Planting Calendar</Link>
            <Link to="/tools#zones">Growing Zones</Link>
            <Link to="/resources">Garden Supplies</Link>
            <Link to="/tools#canning">Canning Guide</Link>
          </div>
          <div className="footer__col">
            <h4>Learn</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/ai-coach">AI Harvest Advisor</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
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
      <div className="footer__legal-strip">
        <div className="container footer__legal-strip-inner">
          <span>Whole Home Harvest provides general homesteading information only. Always verify food safety practices with USDA and your local extension office. <Link to="/disclaimer">Full Disclaimer</Link></span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Whole Home Harvest. Built with <Heart size={12} className="footer__heart" /> for Kingdom homesteaders.</p>
          <p className="footer__affiliate-note">We use affiliate links. See our <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
        </div>
      </div>
    </footer>
  );
}
