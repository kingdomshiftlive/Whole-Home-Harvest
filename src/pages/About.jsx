import { Link } from 'react-router-dom';
import { Leaf, Shield, BookOpen, Users } from 'lucide-react';
import './About.css';

const values = [
  { icon: <Leaf size={24} />, title: 'Genesis 2:15 Is Our Foundation', desc: 'Tending the earth is humanity\'s first calling. Whole Home Harvest exists to help Kingdom families answer that calling from wherever they are.' },
  { icon: <Shield size={24} />, title: 'Safety First Always', desc: 'For canning and food preservation, we follow USDA-tested methods without exception. Your family\'s health is never worth a shortcut.' },
  { icon: <BookOpen size={24} />, title: 'Faith Integrated, Not Added On', desc: 'Biblical principles are woven through every guide and tool — not as decoration, but as the foundation. Stewardship is a Kingdom assignment.' },
  { icon: <Users size={24} />, title: 'Start Where You Are', desc: 'You do not need land, money, or experience to begin. A pot of basil on a windowsill is a homestead. We meet you exactly where you are.' },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-page__hero">
        <div className="container">
          <h1>About Whole Home Harvest</h1>
          <p>Built for Kingdom families who are answering God's first calling — to tend the earth and steward what He has given them.</p>
        </div>
      </div>
      <div className="container about-page__content">
        <section className="about-page__mission card">
          <div className="about-page__mission-inner">
            <div>
              <h2>Our Mission</h2>
              <p>Whole Home Harvest exists to resource Kingdom families with the knowledge, tools, and faith perspective they need to grow food, preserve harvests, and live more self-sufficiently — from exactly where they are today.</p>
              <p style={{ marginTop: '1rem' }}>Whether you have a balcony or forty acres, a windowsill herb garden or a full root cellar — you are a homesteader. And God's first assignment to humanity was the same for all of us: work it and keep it.</p>
            </div>
            <div className="about-page__scripture">
              <blockquote>
                "The Lord God took the man and put him in the Garden of Eden to work it and keep it."
                <cite>— Genesis 2:15</cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="about-page__stats">
          {[
            { num: '44%', label: 'US families planning to grow their own food' },
            { num: '24%', label: 'Increase in home food production since 2020' },
            { num: '6', label: 'Original homesteading articles' },
            { num: '24/7', label: 'AI Harvest Advisor available' },
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
          <h2>The Garden Was God's First Gift. Start Tending Yours.</h2>
          <div className="about-page__cta-btns">
            <Link to="/ai-coach" className="btn btn--primary">AI Harvest Advisor</Link>
            <Link to="/tools" className="btn btn--outline">Planting Calendar</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
