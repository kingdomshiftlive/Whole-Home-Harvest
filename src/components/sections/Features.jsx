import { Link } from 'react-router-dom';
import { Sprout, BookOpen, Bot, Download, CalendarDays, Heart } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Features.css';

const features = [
  { icon: Sprout, color: 'green', title: 'Planting Calendar', description: 'Seed starting, transplanting, direct sowing, and harvest timing for common backyard crops.', link: '/tools', linkLabel: 'Use the Calendar' },
  { icon: BookOpen, color: 'gold', title: 'Canning Safety Guide', description: 'Clear water bath vs. pressure canning guidance with safety-first reminders and trusted source recommendations.', link: '/tools', linkLabel: 'View Canning Guide' },
  { icon: Bot, color: 'navy', title: 'AI Harvest Advisor', description: 'A homesteading assistant for garden plans, pantry questions, pests, backyard chickens, and stewardship ideas.', link: '/ai-coach', linkLabel: 'Ask the Advisor' },
  { icon: Download, color: 'gold', title: 'Resource Library', description: 'Curated supply lists, garden planning ideas, preservation references, and beginner-friendly next steps.', link: '/resources', linkLabel: 'Browse Resources' },
  { icon: CalendarDays, color: 'green', title: 'Kingdom Harvest Calendar', description: 'A 12-month rhythm for tending the garden, building the pantry, and honoring God through stewardship.', link: '/tools', linkLabel: 'Open Calendar' },
  { icon: Heart, color: 'navy', title: 'Faith-Rooted Approach', description: 'Practical homesteading without fear or hype — rooted in stewardship, family provision, patience, and wisdom.', link: '/about', linkLabel: 'Our Approach' },
];

export default function Features() {
  const ref = useScrollReveal();
  return (
    <section className="features section bg-subtle" aria-label="Features">
      <div className="container">
        <div className="section-header centered text-center" ref={ref}>
          <span className="section-eyebrow">What's Inside</span>
          <h2 className="section-title">Everything You Need to Start a <em>Whole Home Harvest</em></h2>
          <p className="section-subtitle">Practical tools, faith-rooted guidance, and beginner-friendly resources for growing, preserving, and stewarding well.</p>
        </div>
        <div className="features__grid">
          {features.map((feature, i) => <FeatureCard key={feature.title} feature={feature} delay={i} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }) {
  const ref = useScrollReveal();
  const { icon: Icon, color, title, description, link, linkLabel } = feature;
  return (
    <div className={`feature-card card card-gold-border reveal reveal-delay-${(delay % 4) + 1}`} ref={ref}>
      <div className={`feature-card__icon feature-card__icon--${color}`}><Icon size={22} /></div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
      <Link to={link} className="feature-card__link">{linkLabel} →</Link>
    </div>
  );
}
