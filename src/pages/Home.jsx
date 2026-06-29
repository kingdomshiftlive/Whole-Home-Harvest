import { Link } from 'react-router-dom';
import { Leaf, BookOpen, Brain, Calendar, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { testimonials } from '../data/siteData';
import { blogPosts } from '../data/blogPosts';
import AdSensePlaceholder from '../components/ui/AdSensePlaceholder';
import './Home.css';

const features = [
  { icon: <Leaf size={28} />, title: 'AI Harvest Advisor', desc: 'Ask anything — planting schedules, pest identification, canning questions, chicken keeping, preservation methods. Kingdom-trained guidance available 24/7.', link: '/ai-coach', cta: 'Ask the AI Advisor' },
  { icon: <Calendar size={28} />, title: 'Planting Calendar', desc: 'Enter your growing zone and get exact dates for starting seeds, transplanting, and harvesting every crop. Takes the guesswork out of timing.', link: '/tools', cta: 'Open Planting Calendar' },
  { icon: <BookOpen size={28} />, title: 'Canning Safety Guide', desc: 'Step-by-step water bath and pressure canning guides following USDA-tested methods. Preserve with confidence and safety.', link: '/tools', cta: 'See Canning Guides' },
  { icon: <Brain size={28} />, title: 'Kingdom Declaration Tool', desc: 'Speak faith over your harvest. Declarations rooted in Scripture for the homesteader — provision, patience, first fruits, new seasons.', link: '/tools', cta: 'Get Your Declaration' },
];

export default function Home() {
  const featured = blogPosts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="whh-home">
      {/* Hero */}
      <section className="whh-home__hero">
        <div className="container whh-home__hero-inner">
          <div className="whh-home__hero-content">
            <div className="whh-home__hero-badge">
              <Leaf size={14} /> Faith-Rooted Homesteading
            </div>
            <h1 className="whh-home__hero-title">
              Tend the Earth.<br />
              <span className="whh-home__hero-accent">Feed Your Family.</span><br />
              Honor God.
            </h1>
            <p className="whh-home__hero-sub">
              God's first assignment to humanity was a garden. Kingdom homesteaders are returning to that calling — growing food, preserving harvests, raising animals, and living more self-sufficiently from the land God entrusted to them.
            </p>
            <div className="whh-home__hero-actions">
              <Link to="/ai-coach" className="btn btn--primary btn--lg">AI Harvest Advisor <ArrowRight size={18} /></Link>
              <Link to="/tools" className="btn btn--outline btn--lg">Planting Calendar</Link>
            </div>
            <p className="whh-home__hero-scripture">
              "The Lord God took the man and put him in the Garden of Eden to work it and keep it." — Genesis 2:15
            </p>
          </div>
          <div className="whh-home__hero-visual">
            {[
              { icon: '🌱', title: 'Start where you are.', desc: 'No land required. A raised bed. A balcony. A windowsill. The garden begins today.' },
              { icon: '🫙', title: 'Preserve the abundance.', desc: 'Canning, freezing, fermenting, dehydrating — every method covered with safety first.' },
              { icon: '🌾', title: 'Honor the harvest.', desc: 'What you grow with your hands and preserve with your time is an act of worship.' },
            ].map((card, i) => (
              <div key={i} className="whh-home__hero-card">
                <div className="whh-home__hero-card-icon">{card.icon}</div>
                <div><strong>{card.title}</strong><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="whh-home__stats">
        <div className="container whh-home__stats-inner">
          {[
            { num: '44%', label: 'US families planning to grow food' },
            { num: '24%', label: 'Increase in home food production since 2020' },
            { num: '6', label: 'Original homesteading articles' },
            { num: '24/7', label: 'AI Harvest Advisor available' },
          ].map((s, i) => (
            <div key={i} className="whh-home__stat">
              <div className="whh-home__stat-num">{s.num}</div>
              <div className="whh-home__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="container" style={{ padding: '0.5rem 1.5rem' }}>
        <AdSensePlaceholder slot="banner" />
      </div>

      {/* Features */}
      <section className="whh-home__features section">
        <div className="container">
          <div className="section-header">
            <h2>Everything the Kingdom Homesteader Needs</h2>
            <p>Tools, guides, and AI-powered advice for every stage of your homestead journey.</p>
          </div>
          <div className="whh-home__features-grid">
            {features.map((f, i) => (
              <div key={i} className="whh-home__feature-card card">
                <div className="whh-home__feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <Link to={f.link} className="whh-home__feature-link">{f.cta} <ArrowRight size={15} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="whh-home__biblical section">
        <div className="container whh-home__biblical-inner">
          <div className="whh-home__biblical-content">
            <h2>Homesteading Is Biblical.</h2>
            <p className="whh-home__biblical-lead">
              Before there was a career path, a grocery store, or a supply chain — there was a garden. And God put humanity in it to work it and keep it.
            </p>
            <ul className="whh-home__biblical-list">
              {[
                'Genesis 2:15 — The first human assignment was tending a garden',
                'Proverbs 31 — The virtuous woman planted a vineyard and provided food for her household',
                'Proverbs 6:6-8 — The ant stores provisions in summer and gathers at harvest',
                'Psalm 65:9 — God cares for the land and enriches it abundantly',
                'Galatians 6:9 — At the proper time we will reap if we do not give up',
              ].map((item, i) => (
                <li key={i} className="whh-home__biblical-item">
                  <CheckCircle size={18} className="whh-home__biblical-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/blog/seasonal-eating-and-biblical-rhythms" className="btn btn--primary">
              Read: The Biblical Case for Homesteading <ArrowRight size={16} />
            </Link>
          </div>
          <div className="whh-home__biblical-visual">
            <div className="whh-home__biblical-quote">
              <blockquote>
                "While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease."
              </blockquote>
              <cite>— Genesis 8:22</cite>
            </div>
            <div className="whh-home__seasons">
              {['🌱 Seed', '🌿 Grow', '🌾 Harvest', '🫙 Preserve', '❄️ Rest'].map((s, i) => (
                <span key={i} className="whh-home__season-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="whh-home__testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Kingdom Homesteaders Who Found Their Ground Here</h2>
          </div>
          <div className="whh-home__testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="whh-home__testimonial card">
                <div className="whh-home__testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p>"{t.quote}"</p>
                <div className="whh-home__testimonial-author">
                  <div className="whh-home__testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="whh-home__testimonial-name">{t.name}</div>
                    <div className="whh-home__testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="whh-home__blog section">
        <div className="container">
          <div className="section-header">
            <h2>From the Harvest Blog</h2>
            <p>Faith-rooted guides for every season of the homestead life.</p>
          </div>
          <div className="whh-home__blog-grid">
            {featured.map(post => (
              <div key={post.id} className="whh-home__blog-card card">
                <div className="whh-home__blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="whh-home__blog-meta">
                  <span>{post.readTime}</span>
                  <Link to={`/blog/${post.slug}`} className="whh-home__blog-link">Read <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/blog" className="btn btn--outline">View All Articles</Link>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '0.5rem 1.5rem' }}>
        <AdSensePlaceholder slot="rectangle" />
      </div>

      {/* CTA */}
      <section className="whh-home__cta">
        <div className="container whh-home__cta-inner">
          <h2>The Garden Was God's First Gift. Start Tending Yours.</h2>
          <p>Whether you have forty acres or a fire escape — the homestead life begins with one seed, one season, one faithful act of stewardship at a time.</p>
          <div className="whh-home__cta-actions">
            <Link to="/ai-coach" className="btn btn--primary btn--lg">Ask the AI Harvest Advisor</Link>
            <Link to="/tools" className="btn btn--ghost btn--lg">Open Planting Calendar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
