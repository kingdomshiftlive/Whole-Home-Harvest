import { Link } from 'react-router-dom';
import { Heart, Shield, BookOpen, Users } from 'lucide-react';
import './About.css';

const values = [
  { icon: <Heart size={24} />, title: 'Grief Is Sacred', desc: 'We take pet grief seriously. It is not "just a pet." It is love — and loss of love deserves proper acknowledgment and support.' },
  { icon: <Shield size={24} />, title: 'Honest Guidance', desc: 'We give you real, research-backed information and always tell you when you need a vet. No false promises, no misleading claims.' },
  { icon: <BookOpen size={24} />, title: 'Faith-Aware', desc: 'We acknowledge that for many pet owners, their animals are part of their spiritual life. We engage faith honestly and respectfully.' },
  { icon: <Users size={24} />, title: 'Community First', desc: 'Pet loss can be deeply isolating. We point toward real community — support lines, books, and people who understand.' },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-page__hero">
        <div className="container">
          <h1>About My Pet Grace</h1>
          <p>Built for pet owners who love their animals deeply — and who deserve real support when they are gone.</p>
        </div>
      </div>
      <div className="container about-page__content">
        <section className="about-page__mission card">
          <div className="about-page__mission-inner">
            <div>
              <h2>Our Mission</h2>
              <p>My Pet Grace exists because pet owners deserve more than generic care articles and dismissive responses to grief. They deserve honest guidance, compassionate support, and resources that treat their animals as what they truly are — family members whose lives and deaths matter.</p>
              <p style={{ marginTop: '1rem' }}>Whether you are searching for the best food for your dog, navigating your cat's senior years, or sitting in the silence after a loss — My Pet Grace is here.</p>
            </div>
            <div className="about-page__scripture">
              <blockquote>
                "A righteous man cares for the needs of his animal."
                <cite>— Proverbs 12:10</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="about-page__stats">
          {[
            { num: '90.5M', label: 'US households with a pet' },
            { num: '$261B', label: 'Spent on pets globally in 2024' },
            { num: '6', label: 'Original care and grief articles' },
            { num: '24/7', label: 'AI Pet Advisor available' },
          ].map((s, i) => (
            <div key={i} className="about-page__stat card">
              <div className="about-page__stat-num">{s.num}</div>
              <div className="about-page__stat-label">{s.label}</div>
            </div>
          ))}
        </section>

        <section className="about-page__values">
          <h2>What We Stand For</h2>
          <div className="about-page__values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-page__value card">
                <div className="about-page__value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-page__cta">
          <h2>We Are Here for You and Your Pet</h2>
          <p>Whether your pet is thriving, struggling, or has already crossed the Rainbow Bridge — My Pet Grace is here to walk with you.</p>
          <div className="about-page__cta-btns">
            <Link to="/tools" className="btn btn--primary">Grief Support</Link>
            <Link to="/ai-coach" className="btn btn--outline">Ask the AI Advisor</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
