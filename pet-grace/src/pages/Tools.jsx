import { useState } from 'react';
import { Heart, Star, Gift, BookOpen, Phone, AlertTriangle, Calendar, Users, Mic } from 'lucide-react';
import CommunityBoard from '../components/ui/CommunityBoard';
import KingdomDeclaration from '../components/ui/KingdomDeclaration';
import { petDeclarations } from '../data/declarationData';
import KingdomCalendar from '../components/ui/KingdomCalendar';
import { petCalendar } from '../data/calendarData';
import { Link } from 'react-router-dom';
import { griefStages } from '../data/siteData';
import './Tools.css';

export default function Tools() {
  const [activeTab, setActiveTab] = useState('grief');
  const [qualityScores, setQualityScores] = useState({});
  const [qualityResult, setQualityResult] = useState(null);

  const tabs = [
    { id: 'grief', label: 'Grief Stages Guide', icon: <Heart size={15} /> },
    { id: 'quality', label: 'Quality of Life Check', icon: <Star size={15} /> },
    { id: 'memorial', label: 'Memorial Ideas', icon: <Gift size={15} /> },
    { id: 'books', label: 'Grief Resources', icon: <BookOpen size={15} /> },
    { id: 'hotlines', label: 'Support Lines', icon: <Phone size={15} /> },
    { id: 'calendar', label: 'Kingdom Calendar', icon: <Calendar size={15} /> },
    { id: 'community', label: 'Community Board', icon: <Users size={15} /> },
    { id: 'declaration', label: 'Declaration Tool', icon: <Mic size={15} /> },
  ];

  const qualityQuestions = [
    { id: 'hurt', label: 'Hurt', question: 'Is your pet\'s pain managed? Are they comfortable?' },
    { id: 'hunger', label: 'Hunger', question: 'Is your pet eating enough to maintain body weight?' },
    { id: 'hydration', label: 'Hydration', question: 'Is your pet properly hydrated?' },
    { id: 'hygiene', label: 'Hygiene', question: 'Can your pet be kept clean and comfortable?' },
    { id: 'happiness', label: 'Happiness', question: 'Does your pet express interest in life, joy, or affection?' },
    { id: 'mobility', label: 'Mobility', question: 'Can your pet move enough to satisfy basic needs?' },
    { id: 'moreGood', label: 'More Good Days', question: 'Overall, does your pet have more good days than bad?' },
  ];

  const updateQuality = (id, val) => setQualityScores(prev => ({ ...prev, [id]: Number(val) }));

  const calculateQuality = () => {
    const total = Object.values(qualityScores).reduce((a, b) => a + b, 0);
    setQualityResult(total);
  };

  const allScored = Object.keys(qualityScores).length === qualityQuestions.length;

  const memorialIdeas = [
    { emoji: '🖼️', title: 'Custom Portrait', desc: 'Commission a painting or digital portrait from a photo. Services like Paw & Glory create beautiful keepsakes.', cost: '$50-$200' },
    { emoji: '🌱', title: 'Memorial Plant or Tree', desc: 'Plant a tree, flower, or garden in their memory. Pet Perennials offers living memorial kits.', cost: '$30-$100' },
    { emoji: '📸', title: 'Photo Book', desc: 'Create a Shutterfly or Artifact Uprising photo book of their life. Something you can hold.', cost: '$30-$80' },
    { emoji: '💎', title: 'Memorial Jewelry', desc: 'A paw print charm, a locket with their photo, or a piece with their name.', cost: '$40-$300' },
    { emoji: '📓', title: 'Memory Journal', desc: 'Write down every memory — their quirks, their favorite spots, the things only you knew about them.', cost: 'Free' },
    { emoji: '🕯️', title: 'Memorial Candle', desc: 'Light a candle on their birthday or the anniversary of their passing. A simple ritual of remembrance.', cost: '$10-$30' },
    { emoji: '⭐', title: 'Name a Star', desc: 'Name a star after your pet through the International Star Registry. Certificate included.', cost: '$50-$100' },
    { emoji: '🏡', title: 'Garden Stone', desc: 'A personalized garden stone with their name and dates in a favorite outdoor spot.', cost: '$30-$80' },
    { emoji: '📿', title: 'Paw Print Impression', desc: 'If you have not yet, make a paw print impression. Many vets offer this at end of life.', cost: 'Free-$30' },
    { emoji: '🎨', title: 'DIY Memory Box', desc: 'A small box with their collar, a few photos, a lock of fur, and handwritten memories.', cost: 'Free' },
  ];

  const griefResources = [
    { title: 'The Tenth Good Thing About Barney', author: 'Judith Viorst', desc: 'A beautiful picture book for children about pet loss. Works for adults too.', url: 'https://www.amazon.com' },
    { title: 'Dog Heaven', author: 'Cynthia Rylant', desc: 'A comforting picture book about what heaven is like for dogs. Beloved by children and adults.', url: 'https://www.amazon.com' },
    { title: 'Goodbye, Friend', author: 'Gary Kowalski', desc: 'A gentle, spiritual guide for healing after the loss of an animal companion.', url: 'https://www.amazon.com' },
    { title: 'The Loss of a Pet', author: 'Wallace Sife', desc: 'Comprehensive guide to the grief of pet loss, written by a psychologist.', url: 'https://www.amazon.com' },
    { title: 'Pet Loss: A Thoughtful Guide for Adults and Children', author: 'Herbert Nieburg', desc: 'Practical and compassionate guidance for all ages.', url: 'https://www.amazon.com' },
    { title: 'Rainbow Bridge Poem', author: 'Anonymous', desc: 'The beloved poem about pets waiting at the Rainbow Bridge. Free online.', url: 'https://www.rainbowsbridge.com' },
  ];

  const supportLines = [
    { name: 'ASPCA Pet Loss Support Hotline', number: '1-877-GRIEF-10', desc: 'Free pet loss support — trained counselors', hours: 'Mon-Sat 8am-8pm ET', url: 'https://www.aspca.org' },
    { name: 'UC Davis Pet Loss Support Hotline', number: '1-800-565-1526', desc: 'Staffed by veterinary students trained in grief', hours: 'Evenings, call for schedule', url: 'https://www.vetmed.ucdavis.edu' },
    { name: 'Cornell Pet Loss Support Hotline', number: '1-607-253-3932', desc: 'Cornell University College of Veterinary Medicine', hours: 'Call for availability', url: 'https://www.vet.cornell.edu' },
    { name: 'Pet Loss Support Page (APLB)', number: 'Online Community', desc: 'Association for Pet Loss and Bereavement — forums and counselor referrals', hours: '24/7 online', url: 'https://www.aplb.org' },
    { name: 'Rainbow Bridge Community', number: 'Online', desc: 'Free online community for people grieving pet loss', hours: '24/7', url: 'https://www.rainbowsbridge.com' },
  ];

  return (
    <div className="tools-page">
      <div className="tools-page__hero">
        <div className="pg-disclaimer-banner">
        <div className="container pg-disclaimer-banner__inner">
          <AlertTriangle size={16} />
          <span>My Pet Grace provides general information only — not veterinary or mental health advice. Always consult your veterinarian for health decisions. <Link to="/disclaimer">Read full disclaimer</Link></span>
        </div>
      </div>
      <div className="container">
          <h1>Pet Loss Grief Support</h1>
          <p>You loved them. That love does not end when they do. Find support for every stage of your grief journey.</p>
        </div>
      </div>

      <div className="container">
        <div className="tools-page__tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tools-page__tab ${activeTab === tab.id ? 'tools-page__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* GRIEF STAGES */}
        {activeTab === 'grief' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>The Six Stages of Pet Loss Grief</h2>
              <p>Grief does not follow a straight line. These stages may come in any order, repeat, or overlap. All of it is normal. All of it is valid.</p>
            </div>
            <div className="grief-stages-grid">
              {griefStages.map((stage, i) => (
                <div key={i} className="grief-stage-card card">
                  <div className="grief-stage-header">
                    <span className="grief-stage-icon">{stage.icon}</span>
                    <h3 className="grief-stage-title">{stage.stage}</h3>
                  </div>
                  <p className="grief-stage-desc">{stage.description}</p>
                  <div className="grief-stage-support">
                    <strong>Support:</strong> {stage.support}
                  </div>
                </div>
              ))}
            </div>
            <div className="card grief-reminder">
              <h3>A Reminder</h3>
              <p>These stages were not designed with pet loss in mind — but they apply completely. Your pet was family. Your grief is legitimate. There is no timeline you must follow and no emotion you must perform. Grieve in the way that is true for you.</p>
            </div>
          </div>
        )}

        {/* QUALITY OF LIFE */}
        {activeTab === 'quality' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Quality of Life Assessment (HHHHHMM Scale)</h2>
              <p>Developed by Dr. Alice Villalobos, this tool helps families organize their observations about a seriously ill or senior pet. Score each category 1-10.</p>
              <div style={{background:'rgba(184,104,74,0.08)',border:'1px solid rgba(184,104,74,0.25)',borderRadius:'8px',padding:'0.875rem 1rem',marginTop:'0.75rem'}}>
                <strong style={{fontSize:'0.85rem',color:'var(--accent-primary)'}}>⚠️ This tool is NOT a veterinary assessment and cannot replace professional medical evaluation.</strong>
                <p style={{fontSize:'0.82rem',color:'var(--text-secondary)',margin:'0.25rem 0 0',lineHeight:'1.6'}}>Use this only as a starting point for a conversation with your veterinarian. No end-of-life decision should be made based on this tool alone. Your vet knows your pet's full medical history — we do not.</p>
              </div>
            </div>
            <div className="quality-form">
              {qualityQuestions.map(q => (
                <div key={q.id} className="quality-question card">
                  <div className="quality-question-header">
                    <strong>{q.label}</strong>
                    <span className="quality-score-display">{qualityScores[q.id] || '—'}/10</span>
                  </div>
                  <p>{q.question}</p>
                  <input
                    type="range"
                    min="1" max="10"
                    value={qualityScores[q.id] || 5}
                    onChange={e => updateQuality(q.id, e.target.value)}
                    className="quality-slider"
                  />
                  <div className="quality-slider-labels">
                    <span>1 — Poor</span>
                    <span>10 — Excellent</span>
                  </div>
                </div>
              ))}
              <button
                className="btn btn--primary"
                onClick={calculateQuality}
                disabled={!allScored}
              >
                Calculate Quality of Life Score
              </button>

              {qualityResult !== null && (
                <div className={`quality-result card ${qualityResult >= 35 ? 'quality-result--good' : 'quality-result--concern'}`}>
                  <h3>Total Score: {qualityResult}/70</h3>
                  {qualityResult >= 35 ? (
                    <div>
                      <p><strong>Score above 35 — Acceptable quality of life.</strong></p>
                      <p>This suggests your pet is experiencing an acceptable quality of life at this time. Continue monitoring closely and check in with your veterinarian regularly. Quality of life can change, so reassess weekly or when you notice changes.</p>
                    </div>
                  ) : (
                    <div>
                      <p><strong>Score below 35 — Consider a veterinary conversation.</strong></p>
                      <p>This score suggests your pet may be experiencing significant discomfort or diminished quality of life. We strongly encourage you to have an honest conversation with your veterinarian about pain management options and, when the time is right, about end-of-life care. Choosing to prioritize comfort over quantity of life is one of the most loving acts a pet owner can make.</p>
                    </div>
                  )}
                  <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>This tool is for guidance only. Your veterinarian is your most important resource for this decision.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MEMORIAL IDEAS */}
        {activeTab === 'memorial' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Memorial Ideas for Your Pet</h2>
              <p>Ritual and remembrance help grief move. Here are meaningful ways to honor the life of your pet.</p>
            </div>
            <div className="memorial-grid">
              {memorialIdeas.map((idea, i) => (
                <div key={i} className="memorial-card card">
                  <div className="memorial-emoji">{idea.emoji}</div>
                  <h3>{idea.title}</h3>
                  <p>{idea.desc}</p>
                  <span className="memorial-cost">{idea.cost}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOOKS */}
        {activeTab === 'books' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Pet Loss Grief Resources</h2>
              <p>Books, poems, and community resources for navigating pet loss.</p>
            </div>
            <div className="books-list">
              {griefResources.map((book, i) => (
                <div key={i} className="book-card card">
                  <div className="book-card-content">
                    <h3>{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-desc">{book.desc}</p>
                  </div>
                  <a href={book.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                    Find It →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HOTLINES */}
        {activeTab === 'hotlines' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Pet Loss Support Lines</h2>
              <p>Real humans who understand pet grief. You do not have to carry this alone.</p>
            </div>
            <div className="hotlines-list">
              {supportLines.map((line, i) => (
                <div key={i} className="hotline-card card">
                  <div className="hotline-card-top">
                    <div>
                      <h3>{line.name}</h3>
                      <div className="hotline-number">{line.number}</div>
                    </div>
                    <span className="hotline-hours">{line.hours}</span>
                  </div>
                  <p>{line.desc}</p>
                  <a href={line.url} target="_blank" rel="noopener noreferrer" className="hotline-link">Visit Website →</a>
                </div>
              ))}
            </div>
            <div className="card hotline-note">
              <p><strong>If you are in crisis:</strong> Pet loss grief can sometimes trigger deeper mental health challenges. If you are experiencing thoughts of self-harm, please call or text 988 (Suicide and Crisis Lifeline) or contact a mental health professional. Your life matters.</p>
            </div>
          </div>
        )}

        {/* DECLARATION TOOL */}
        {activeTab === 'declaration' && (
          <div className="tools-page__panel">
            <KingdomDeclaration
              niche="pet-grace"
              declarations={petDeclarations}
            />
          </div>
        )}

        {/* KINGDOM CALENDAR */}
        {activeTab === 'calendar' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Kingdom Pet Calendar</h2>
              <p>Align your pet care with God's designed seasons and rhythms. Each month carries a biblical focus, scripture, and practical care actions.</p>
            </div>
            <KingdomCalendar
              title="Kingdom Pet Care Calendar"
              seasons={petCalendar}
            />
          </div>
        )}

        {/* COMMUNITY BOARD */}
        {activeTab === 'community' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>My Pet Grace Community</h2>
              <p>Share what you are believing God for. Post a prayer for your pet. Honor a pet you have lost. Encourage someone who is grieving.</p>
            </div>
            <CommunityBoard
              niche="pet-grace"
              placeholder="Share a prayer, a memory, or what you are believing God for your pet or in your grief journey..."
            />
          </div>
        )}

      </div>
    </div>
  );
}
