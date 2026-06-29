import { Star } from 'lucide-react';
import { testimonials } from '../../data/siteData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useScrollReveal();
  return (
    <section className="testimonials section" aria-label="Testimonials">
      <div className="container">
        <div className="section-header centered text-center" ref={ref}>
          <span className="section-eyebrow">Real Stories</span>
          <h2 className="section-title">Families Learning to <em>Steward Well</em></h2>
          <p className="section-subtitle">Encouragement from homesteaders, gardeners, and families building practical skills one faithful step at a time.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} delay={i} />)}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay }) {
  const ref = useScrollReveal();
  const stars = testimonial.stars || 5;
  const initials = testimonial.initials || testimonial.avatar || testimonial.name.split(' ').map(p => p[0]).join('').slice(0, 2);
  return (
    <div className={`testimonial-card card reveal reveal-delay-${(delay % 4) + 1}`} ref={ref}>
      <div className="testimonial-card__stars">{Array.from({ length: stars }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
      <blockquote className="testimonial-card__quote">“{testimonial.quote}”</blockquote>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{initials}</div>
        <div>
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__meta">{testimonial.role}{testimonial.location ? ` · ${testimonial.location}` : ''}</div>
        </div>
      </div>
    </div>
  );
}
