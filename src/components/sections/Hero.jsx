import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, BookOpen, ShieldCheck } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '6', label: 'Homestead Tools', icon: Sprout },
  { value: '6+', label: 'Original Guides', icon: BookOpen },
  { value: '20+', label: 'Partner Ideas', icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="badge badge-gold">✦ Faith-Rooted Homesteading</span>
          </div>

          <h1 className="hero__title">
            Tend the Earth. <em className="hero__title-accent">Feed Your Family.</em> Honor God.
          </h1>

          <p className="hero__subtitle">
            Whole Home Harvest helps families start where they are — backyard, balcony,
            raised bed, pantry, or small acreage — with practical tools for planting,
            preserving, stewarding, and building a more self-sufficient home.
          </p>

          <blockquote className="hero__scripture">
            <p>“The Lord God took the man and put him in the Garden of Eden to work it and keep it.”</p>
            <cite>Genesis 2:15</cite>
          </blockquote>

          <div className="hero__actions">
            <Link to="/tools" className="btn btn-primary btn-lg">
              Explore Free Tools <ArrowRight size={18} />
            </Link>
            <Link to="/blog" className="btn btn-outline btn-lg">
              Read the Guides
            </Link>
          </div>

          <div className="hero__stats">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="hero__stat">
                <Icon size={18} className="hero__stat-icon" />
                <div>
                  <span className="hero__stat-value">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <div className="hero__card-dot hero__card-dot--1" />
              <div className="hero__card-dot hero__card-dot--2" />
              <div className="hero__card-dot hero__card-dot--3" />
              <span className="hero__card-title">Homestead Starter Plan</span>
            </div>
            <div className="hero__card-content">
              <div className="hero__budget-row">
                <span>Raised Bed Garden</span>
                <span className="hero__budget-pct hero__budget-pct--give">4x8</span>
                <div className="hero__budget-bar"><div className="hero__budget-fill" style={{ width: '75%', background: '#5d9170' }} /></div>
              </div>
              <div className="hero__budget-row">
                <span>Pantry Preservation</span>
                <span className="hero__budget-pct hero__budget-pct--save">12 jars</span>
                <div className="hero__budget-bar"><div className="hero__budget-fill" style={{ width: '55%', background: '#C9A84C' }} /></div>
              </div>
              <div className="hero__budget-row">
                <span>Backyard Skills</span>
                <span className="hero__budget-pct">Weekly</span>
                <div className="hero__budget-bar"><div className="hero__budget-fill" style={{ width: '65%', background: '#1B2E5A' }} /></div>
              </div>
              <div className="hero__income-display">
                <span>First Step</span>
                <strong>Start small</strong>
              </div>
            </div>
          </div>

          <div className="hero__card hero__card--float hero__card--float-1">
            <div className="hero__mini-icon">🌱</div><div><div className="hero__mini-value">Planting Calendar</div><div className="hero__mini-label">zone-aware guidance</div></div>
          </div>
          <div className="hero__card hero__card--float hero__card--float-2">
            <div className="hero__mini-icon">🫙</div><div><div className="hero__mini-value">Canning Safety</div><div className="hero__mini-label">USDA-tested methods</div></div>
          </div>
          <div className="hero__card hero__card--float hero__card--float-3">
            <div className="hero__mini-icon">🙏</div><div><div className="hero__mini-value">Kingdom Stewardship</div><div className="hero__mini-label">faith-rooted rhythms</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
