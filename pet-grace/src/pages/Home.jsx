import { Link } from 'react-router-dom';
import { Heart, Shield, Brain, BookOpen, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/siteData';
import { blogPosts } from '../data/blogPosts';
import AdSensePlaceholder from '../components/ui/AdSensePlaceholder';
import './Home.css';

const features = [
  {
    icon: <Heart size={28} />,
    title: 'Pet Loss Grief Support',
    desc: 'Compassionate, faith-informed guidance for navigating the grief of losing a beloved pet. You are not alone and you are not overreacting.',
    link: '/tools',
    cta: 'Find grief support',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI Pet Advisor',
    desc: 'Ask questions about nutrition, behavior, symptoms, and care — get knowledgeable, compassionate answers any time of day or night.',
    link: '/ai-coach',
    cta: 'Ask the AI Advisor',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Pet Care Guides',
    desc: 'Trusted, research-backed guides on nutrition, senior pet care, new pet checklists, pet insurance, and more.',
    link: '/resources',
    cta: 'Browse care guides',
  },
  {
    icon: <Shield size={28} />,
    title: 'Trusted Product Picks',
    desc: 'Curated recommendations for food, health products, memorial keepsakes, and gear — from Chewy, Petco, and brands we genuinely trust.',
    link: '/resources#products',
    cta: 'See recommendations',
  },
];

export default function Home() {
  const featured = blogPosts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="pg-home">
      {/* Hero */}
      <section className="pg-home__hero">
        <div className="container pg-home__hero-inner">
          <div className="pg-home__hero-content">
            <div className="pg-home__hero-badge">
              <Heart size={14} /> Faith-Inspired Pet Care & Grief Support
            </div>
            <h1 className="pg-home__hero-title">
              Your Pet Deserves<br />
              <span className="pg-home__hero-accent">Your Very Best Love.</span>
            </h1>
            <p className="pg-home__hero-sub">
              Whether you are caring for your pet today, navigating their senior years,
              or grieving their loss — My Pet Grace walks with you. Faith-inspired,
              compassionate, and practical.
            </p>
            <div className="pg-home__hero-actions">
              <Link to="/tools" className="btn btn--primary btn--lg">
                Grief Support <ArrowRight size={18} />
              </Link>
              <Link to="/ai-coach" className="btn btn--outline btn--lg">
                Ask the AI Pet Advisor
              </Link>
            </div>
            <p className="pg-home__hero-scripture">
              "A righteous man cares for the needs of his animal." — Proverbs 12:10
            </p>
          </div>
          <div className="pg-home__hero-visual">
            <div className="pg-home__hero-cards">
              <div className="pg-home__hero-card">
                <div className="pg-home__hero-card-icon">🐾</div>
                <div className="pg-home__hero-card-text">
                  <strong>You are not alone.</strong>
                  <p>Pet grief is real, valid, and recognized by mental health professionals.</p>
                </div>
              </div>
              <div className="pg-home__hero-card">
                <div className="pg-home__hero-card-icon">💊</div>
                <div className="pg-home__hero-card-text">
                  <strong>Care guidance 24/7.</strong>
                  <p>The AI Pet Advisor answers your questions any time, day or night.</p>
                </div>
              </div>
              <div className="pg-home__hero-card">
                <div className="pg-home__hero-card-icon">🕊️</div>
                <div className="pg-home__hero-card-text">
                  <strong>Faith-informed grief.</strong>
                  <p>What does faith say about pet loss? We explore this honestly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pg-home__stats">
        <div className="container pg-home__stats-inner">
          {[
            { num: '90.5M', label: 'US households own a pet' },
            { num: '$261B', label: 'Spent on pets globally in 2024' },
            { num: '6', label: 'Original care & grief articles' },
            { num: '24/7', label: 'AI Pet Advisor available' },
          ].map((s, i) => (
            <div key={i} className="pg-home__stat">
              <div className="pg-home__stat-num">{s.num}</div>
              <div className="pg-home__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense */}
      <div className="container" style={{ padding: '0.5rem 1.5rem' }}>
        <AdSensePlaceholder slot="banner" />
      </div>

      {/* Features */}
      <section className="pg-home__features section">
        <div className="container">
          <div className="section-header">
            <h2>Everything Your Pet Family Needs</h2>
            <p>From their first day home to their last — and the grief that follows.</p>
          </div>
          <div className="pg-home__features-grid">
            {features.map((f, i) => (
              <div key={i} className="pg-home__feature-card card">
                <div className="pg-home__feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to={f.link} className="pg-home__feature-link">
                  {f.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grief section */}
      <section className="pg-home__grief section">
        <div className="container pg-home__grief-inner">
          <div className="pg-home__grief-content">
            <h2>Your Grief Is Not Too Much.</h2>
            <p className="pg-home__grief-lead">
              When someone says "it was just a pet" — they do not understand.
              What you lost was not just an animal. It was a relationship. A presence.
              A being who knew you and loved you without condition.
            </p>
            <ul className="pg-home__grief-list">
              {[
                'Pet grief is recognized by mental health professionals as real and significant',
                'The grief stages apply fully to pet loss',
                'Children deserve space to grieve their pets fully',
                'Faith has more to say about animal life and death than you might expect',
                'You are not alone — millions of people understand exactly what you are feeling',
              ].map((item, i) => (
                <li key={i} className="pg-home__grief-item">
                  <CheckCircle size={18} className="pg-home__grief-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/tools" className="btn btn--primary">
              Find Grief Support <ArrowRight size={16} />
            </Link>
          </div>
          <div className="pg-home__grief-visual">
            <div className="pg-home__grief-quote">
              <blockquote>
                "Grief is the price of love. And the love you gave your pet
                was worth every ounce of grief it now costs you."
              </blockquote>
            </div>
            <div className="pg-home__grief-stages">
              {['Shock', 'Pain', 'Anger', 'Bargaining', 'Sadness', 'Acceptance'].map((s, i) => (
                <span key={i} className="pg-home__stage-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pg-home__testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Pet Families Who Found Support Here</h2>
          </div>
          <div className="pg-home__testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="pg-home__testimonial card">
                <div className="pg-home__testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="pg-home__testimonial-quote">"{t.quote}"</p>
                <div className="pg-home__testimonial-author">
                  <div className="pg-home__testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="pg-home__testimonial-name">{t.name}</div>
                    <div className="pg-home__testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="pg-home__blog section">
        <div className="container">
          <div className="section-header">
            <h2>From the Blog</h2>
            <p>Care guides, grief support, and faith perspectives for pet families.</p>
          </div>
          <div className="pg-home__blog-grid">
            {featured.map(post => (
              <div key={post.id} className="pg-home__blog-card card">
                <div className="pg-home__blog-category">{post.category}</div>
                <h3 className="pg-home__blog-title">{post.title}</h3>
                <p className="pg-home__blog-excerpt">{post.excerpt}</p>
                <div className="pg-home__blog-meta">
                  <span>{post.readTime}</span>
                  <Link to={`/blog/${post.slug}`} className="pg-home__blog-link">Read <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/blog" className="btn btn--outline">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* AdSense */}
      <div className="container" style={{ padding: '0.5rem 1.5rem' }}>
        <AdSensePlaceholder slot="rectangle" />
      </div>

      {/* CTA */}
      <section className="pg-home__cta">
        <div className="container pg-home__cta-inner">
          <h2>You Loved Them Well. We Are Here for What Comes Next.</h2>
          <p>Whether that is grief support, care guidance, or just someone who understands — My Pet Grace is here.</p>
          <div className="pg-home__cta-actions">
            <Link to="/tools" className="btn btn--primary btn--lg">Grief Support</Link>
            <Link to="/ai-coach" className="btn btn--ghost btn--lg">Ask the AI Advisor</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
