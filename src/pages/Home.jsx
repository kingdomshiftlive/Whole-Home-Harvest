import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Download,
  Leaf,
  Mic,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Star,
  Users,
  Settings,
} from 'lucide-react';
import { testimonials } from '../data/siteData';
import { blogPosts } from '../data/blogPosts';
import AdSensePlaceholder from '../components/ui/AdSensePlaceholder';
import './Home.css';

const premiumModules = [
  {
    icon: Brain,
    title: 'AI Harvest Advisor',
    desc: 'A niche-specific advisor for planting, preservation, flock care, seasonal planning, and faith-rooted stewardship. Ships in safe demo mode so buyers connect their own AI key.',
    link: '/ai-coach',
    cta: 'Open AI Advisor',
  },
  {
    icon: Calendar,
    title: 'Kingdom Seasonal Calendar',
    desc: 'Connects garden timing, harvest planning, Sabbath rhythms, and biblical stewardship into a repeat-return user experience.',
    link: '/tools',
    cta: 'View Calendar Tools',
  },
  {
    icon: Sprout,
    title: 'Interactive Homestead Tools',
    desc: 'Planting windows, canning safety, sustainability scoring, declarations, community boards, and practical decision tools for the niche.',
    link: '/tools',
    cta: 'Use Tools',
  },
  {
    icon: Settings,
    title: 'Buyer Control Center',
    desc: 'A post-sale configuration dashboard for brand, domain, email, affiliate, analytics, AI, ads, and digital product settings.',
    link: '/admin-config',
    cta: 'View Control Center',
  },
];

const buyerValue = [
  'Premium React + Vite digital asset',
  'Buyer documentation and handoff guides',
  'SEO content, sitemap, robots, and metadata',
  'Newsletter, lead magnet, affiliate, ads, and digital product framework',
  'Safe AI demo mode with buyer API setup notes',
  'Future-ready modules for community, courses, PWA, and automation',
];

const futureFeatures = [
  { icon: Mic, title: 'Voice-Ready Content', desc: 'Conversational headings and answers designed for search, snippets, and voice assistants.' },
  { icon: Users, title: 'Community Framework', desc: 'Prayer, goal, barter, harvest, and local resource boards built as reusable site modules.' },
  { icon: Smartphone, title: 'Mobile/PWA Direction', desc: 'Mobile-first responsive structure that can later become an installable PWA or native app foundation.' },
  { icon: BarChart3, title: 'Revenue Paths', desc: 'Affiliate, ad, lead magnet, newsletter, course, workshop, and digital product paths documented for the buyer.' },
];

export default function Home() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="whh-home whh-premium-home">
      <section className="whh-luxe-hero">
        <div className="whh-luxe-hero__glow whh-luxe-hero__glow--one" />
        <div className="whh-luxe-hero__glow whh-luxe-hero__glow--two" />
        <div className="container whh-luxe-hero__grid">
          <div className="whh-luxe-hero__content">
            <div className="whh-luxe-kicker"><Sparkles size={16} /> Premium Kingdom Homestead Asset</div>
            <h1>
              A luxury faith-rooted homesteading platform built to feed families, honor God, and transfer cleanly to a buyer.
            </h1>
            <p>
              Whole Home Harvest combines practical food independence, biblical stewardship, AI guidance, seasonal rhythms,
              monetization pathways, and buyer-ready documentation into one polished digital business asset.
            </p>
            <div className="whh-luxe-hero__actions">
              <Link to="/tools" className="btn btn--primary btn--lg">Explore the Platform <ArrowRight size={18} /></Link>
              <Link to="/admin-config" className="btn btn--outline btn--lg">Buyer Control Center</Link>
            </div>
            <div className="whh-luxe-scripture">
              <span>Genesis 2:15</span>
              <strong>“The Lord God took the man and put him in the Garden of Eden to work it and keep it.”</strong>
            </div>
          </div>

          <div className="whh-luxe-console" aria-label="Whole Home Harvest platform preview">
            <div className="whh-luxe-console__top">
              <span /> <span /> <span />
              <strong>Whole Home Harvest OS</strong>
            </div>
            <div className="whh-luxe-console__body">
              <div className="whh-luxe-console__metric">
                <small>Asset readiness</small>
                <strong>Premium</strong>
                <div><i style={{ width: '92%' }} /></div>
              </div>
              <div className="whh-luxe-console__cards">
                <article><Brain size={18} /><strong>AI Advisor</strong><span>Demo-safe</span></article>
                <article><Calendar size={18} /><strong>Calendar</strong><span>Seasonal</span></article>
                <article><Users size={18} /><strong>Community</strong><span>Framework</span></article>
                <article><Settings size={18} /><strong>Admin</strong><span>Buyer-ready</span></article>
              </div>
              <div className="whh-luxe-console__note">
                <Leaf size={18} /> Built for the end user, documented for the buyer, structured for the seller to transfer and move on.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whh-premium-stats">
        <div className="container whh-premium-stats__grid">
          {[
            ['6+', 'SEO content articles'],
            ['15+', 'Affiliate categories & partners'],
            ['5', 'Buyer handoff documents'],
            ['2029', 'Future-ready roadmap'],
          ].map(([num, label]) => (
            <div className="whh-premium-stat" key={label}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section whh-platform-modules">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Turnkey Today</span>
            <h2>Everything a Kingdom homesteader needs — and everything a buyer needs to take over.</h2>
            <p>Useful for the visitor, monetizable for the buyer, and packaged cleanly for transfer.</p>
          </div>
          <div className="whh-platform-modules__grid">
            {premiumModules.map(({ icon: Icon, title, desc, link, cta }) => (
              <article className="whh-luxe-card" key={title}>
                <div className="whh-luxe-card__icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to={link}>{cta} <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container whh-ad-wrap"><AdSensePlaceholder slot="banner" /></div>

      <section className="section whh-buyer-strip">
        <div className="container whh-buyer-strip__grid">
          <div>
            <span className="section-eyebrow">Buyer Confidence</span>
            <h2>Designed to sell as a complete digital business asset — not a loose website template.</h2>
            <p>
              The buyer receives a clean codebase, a live deployment path, setup docs, monetization instructions,
              support boundaries, and a configuration center so they can customize the site without asking the seller to manage it.
            </p>
            <Link to="/admin-config" className="btn btn--primary">View Buyer Control Center <ArrowRight size={16} /></Link>
          </div>
          <div className="whh-buyer-list">
            {buyerValue.map((item) => (
              <div key={item}><CheckCircle size={18} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section whh-biblical-luxe">
        <div className="container whh-biblical-luxe__grid">
          <div className="whh-biblical-luxe__quote">
            <blockquote>
              “While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.”
            </blockquote>
            <cite>Genesis 8:22</cite>
          </div>
          <div>
            <span className="section-eyebrow">The Why</span>
            <h2>Scripture is the framework, not decoration.</h2>
            <p>
              The platform connects homesteading, seasonal stewardship, provision, preparation, and harvest to the biblical rhythms that make the niche distinct.
            </p>
            <div className="whh-season-tags">
              {['Seed', 'Tend', 'Harvest', 'Preserve', 'Share', 'Rest'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section whh-future-ready">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Ready for 2027–2029</span>
            <h2>Future features are built as understandable, buyer-friendly modules.</h2>
            <p>Not hype. Not fragile. Practical architecture buyers can grow into.</p>
          </div>
          <div className="whh-future-ready__grid">
            {futureFeatures.map(({ icon: Icon, title, desc }) => (
              <article className="whh-future-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section whh-home__blog">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Content Engine</span>
            <h2>SEO articles that teach, build trust, and support monetization.</h2>
            <p>Faith-rooted guides for every season of the homestead life.</p>
          </div>
          <div className="whh-home__blog-grid">
            {featured.map((post) => (
              <article key={post.id} className="whh-home__blog-card card">
                <div className="whh-home__blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="whh-home__blog-meta">
                  <span>{post.readTime}</span>
                  <Link to={`/blog/${post.slug}`} className="whh-home__blog-link">Read <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="whh-center"><Link to="/blog" className="btn btn--outline">View All Articles</Link></div>
        </div>
      </section>

      <section className="section whh-home__testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">End User Value</span>
            <h2>Built for people who want practical harvest confidence.</h2>
          </div>
          <div className="whh-home__testimonials-grid">
            {testimonials.slice(0, 3).map((t) => (
              <article key={t.id} className="whh-home__testimonial card">
                <div className="whh-home__testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p>“{t.quote}”</p>
                <div className="whh-home__testimonial-author">
                  <div className="whh-home__testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="whh-home__testimonial-name">{t.name}</div>
                    <div className="whh-home__testimonial-role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container whh-ad-wrap"><AdSensePlaceholder slot="rectangle" /></div>

      <section className="whh-final-cta">
        <div className="container whh-final-cta__inner">
          <ShieldCheck size={30} />
          <h2>Built for a clean Flippa handoff.</h2>
          <p>
            Source code, docs, monetization pathways, AI setup notes, buyer support boundaries, and the admin configuration center are included.
          </p>
          <div className="whh-final-cta__actions">
            <Link to="/resources" className="btn btn--primary btn--lg">Explore Resources</Link>
            <Link to="/contact" className="btn btn--outline btn--lg">Contact / Setup Notes</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
