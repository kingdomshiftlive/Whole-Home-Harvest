import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import SEOHead from '../components/ui/SEOHead';
import { Mail, MessageSquare, Clock, Send } from 'lucide-react';
import './Contact.css';

const CONTACT_EMAIL = 'hello@wholehomeharvest.com';
const TOPICS = ['General Question', 'Gardening Question', 'Canning / Food Preservation', 'Partnership / Collaboration', 'Buyer / Transfer Question', 'Other'];

const validate = (fields) => {
  const errs = {};
  if (!fields.name.trim()) errs.name = 'Please enter your name.';
  if (!fields.email.trim()) errs.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Please enter a valid email.';
  if (!fields.topic) errs.topic = 'Please select a topic.';
  if (!fields.message.trim()) errs.message = 'Please enter a message.';
  else if (fields.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
  return errs;
};

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', topic: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); toast.error('Please fix the errors below.'); return; }
    const subject = encodeURIComponent(`Whole Home Harvest: ${fields.topic}`);
    const body = encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\nTopic: ${fields.topic}\n\nMessage:\n${fields.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success('Your email app should open now.');
  };

  return (
    <>
      <SEOHead title="Contact Us" description="Contact Whole Home Harvest for homesteading questions, partnership inquiries, and buyer support." canonical="/contact" />
      <div className="contact-page">
        <section className="contact-hero"><div className="container"><span className="section-label">Get in Touch</span><h1>We'd Love to <span className="text-gold">Hear From You</span></h1><p>Questions, partnership ideas, or buyer setup support — send a note and the owner can respond directly.</p></div></section>
        <section className="contact-main"><div className="container"><div className="contact-grid">
          <aside className="contact-info">
            <h2>Let's Connect</h2><p>For faster answers, check the <a href="/faq">FAQ page</a> or use the form to open your email app.</p>
            <div className="contact-item"><div className="contact-icon"><Mail size={20} /></div><div><strong>Email</strong><span>{CONTACT_EMAIL}</span></div></div>
            <div className="contact-item"><div className="contact-icon"><Clock size={20} /></div><div><strong>Response Time</strong><span>1–2 business days after launch</span></div></div>
            <div className="contact-item"><div className="contact-icon"><MessageSquare size={20} /></div><div><strong>Newsletter</strong><span>Weekly garden, pantry, and stewardship encouragement</span></div></div>
            <div className="contact-scripture"><p>“The plans of the diligent lead surely to abundance.”</p><cite>— Proverbs 21:5</cite></div>
          </aside>
          <div className="contact-form-wrap">
            {sent ? <div className="form-success"><div className="success-icon">✓</div><h2>Email Ready</h2><p>Your email app should have opened with the message prepared. Send it from there, or copy the details and email us directly.</p><button className="btn btn-primary" onClick={() => { setSent(false); setFields({ name: '', email: '', topic: '', message: '' }); }}>Send Another Message</button></div> : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2>Send a Message</h2>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}><label htmlFor="name">Full Name *</label><input type="text" id="name" name="name" value={fields.name} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" />{errors.name && <span className="field-error">{errors.name}</span>}</div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}><label htmlFor="email">Email Address *</label><input type="email" id="email" name="email" value={fields.email} onChange={handleChange} placeholder="jane@example.com" autoComplete="email" />{errors.email && <span className="field-error">{errors.email}</span>}</div>
                </div>
                <div className={`form-group ${errors.topic ? 'has-error' : ''}`}><label htmlFor="topic">Topic *</label><select id="topic" name="topic" value={fields.topic} onChange={handleChange}><option value="">Select a topic…</option>{TOPICS.map(t => <option key={t} value={t}>{t}</option>)}</select>{errors.topic && <span className="field-error">{errors.topic}</span>}</div>
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}><label htmlFor="message">Message *</label><textarea id="message" name="message" rows={6} value={fields.message} onChange={handleChange} placeholder="Tell us how we can help with your homestead, garden, pantry, or partnership question…" /><span className="char-count">{fields.message.length} characters</span>{errors.message && <span className="field-error">{errors.message}</span>}</div>
                <button type="submit" className="btn btn-primary btn-full"><span><Send size={16} style={{ marginRight: '0.5rem' }} />Open Email App</span></button>
                <p className="form-note">This static site uses mailto by default. The buyer can connect Formspree, Netlify Forms, Cloudflare Workers, or a CRM form later.</p>
              </form>
            )}
          </div>
        </div></div></section>
      </div>
    </>
  );
}
