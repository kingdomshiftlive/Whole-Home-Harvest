import { useState } from 'react';
import { Calendar, Layers, BookOpen, Mic, Users } from 'lucide-react';
import { plantingZones, canningGuide } from '../data/siteData';
import KingdomCalendar from '../components/ui/KingdomCalendar';
import KingdomDeclaration from '../components/ui/KingdomDeclaration';
import CommunityBoard from '../components/ui/CommunityBoard';
import { harvestCalendar } from '../data/calendarData';
import { harvestDeclarations } from '../data/declarationData';
import './Tools.css';

export default function Tools() {
  const [activeTab, setActiveTab] = useState('planting');

  const tabs = [
    { id: 'planting', label: 'Planting Calendar', icon: <Calendar size={15} /> },
    { id: 'canning', label: 'Canning Guide', icon: <BookOpen size={15} /> },
    { id: 'zones', label: 'Growing Zones', icon: <Layers size={15} /> },
    { id: 'calendar', label: 'Kingdom Calendar', icon: <Calendar size={15} /> },
    { id: 'declaration', label: 'Declaration Tool', icon: <Mic size={15} /> },
    { id: 'community', label: 'Community Board', icon: <Users size={15} /> },
  ];

  const vegetables = [
    { name: 'Tomatoes', indoor: '6-8 wks', transplant: 'After last frost', direct: 'N/A', harvest: '60-85 days after transplant' },
    { name: 'Peppers', indoor: '8-10 wks', transplant: 'After last frost', direct: 'N/A', harvest: '70-90 days after transplant' },
    { name: 'Green Beans', indoor: 'N/A', transplant: 'N/A', direct: 'After last frost', harvest: '50-65 days' },
    { name: 'Zucchini', indoor: '2-3 wks (optional)', transplant: 'After last frost', direct: 'After last frost', harvest: '50-65 days' },
    { name: 'Cucumbers', indoor: '3-4 wks (optional)', transplant: 'After last frost', direct: 'After last frost', harvest: '55-65 days' },
    { name: 'Lettuce', indoor: '4 wks (optional)', transplant: '4 wks before last frost', direct: '4-6 wks before last frost', harvest: '30-60 days' },
    { name: 'Spinach', indoor: 'N/A', transplant: 'N/A', direct: '4-6 wks before last frost', harvest: '40-50 days' },
    { name: 'Carrots', indoor: 'N/A', transplant: 'N/A', direct: '2-4 wks before last frost', harvest: '70-80 days' },
    { name: 'Peas', indoor: 'N/A', transplant: 'N/A', direct: '4-6 wks before last frost', harvest: '60-70 days' },
    { name: 'Broccoli', indoor: '6-8 wks', transplant: '2-4 wks before last frost', direct: 'N/A', harvest: '80-100 days from transplant' },
    { name: 'Corn', indoor: 'N/A', transplant: 'N/A', direct: 'After last frost (soil 60°F+)', harvest: '65-90 days' },
    { name: 'Potatoes', indoor: 'N/A', transplant: 'N/A', direct: '2-4 wks before last frost', harvest: '70-120 days' },
    { name: 'Winter Squash', indoor: '3-4 wks (optional)', transplant: 'After last frost', direct: 'After last frost', harvest: '80-110 days' },
    { name: 'Basil', indoor: '4-6 wks', transplant: 'After last frost', direct: 'After last frost', harvest: '30-40 days' },
  ];

  return (
    <div className="tools-page">
      <div className="tools-page__hero">
        <div className="container">
          <h1>Homestead Tools</h1>
          <p>Planting calendar, canning safety guide, growing zones, Kingdom calendar, declaration tool, and community board.</p>
        </div>
      </div>
      <div className="container">
        <div className="tools-page__tabs">
          {tabs.map(tab => (
            <button key={tab.id} className={`tools-page__tab ${activeTab === tab.id ? 'tools-page__tab--active' : ''}`} onClick={() => setActiveTab(tab.id)}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* PLANTING CALENDAR */}
        {activeTab === 'planting' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Planting Calendar</h2>
              <p>Find your growing zone below, then use this calendar to time your seed starting, transplanting, and direct sowing. All times are relative to your last spring frost date.</p>
            </div>
            <div className="card" style={{ overflowX: 'auto' }}>
              <table className="harvest-table">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Start Indoors</th>
                    <th>Transplant Outside</th>
                    <th>Direct Sow</th>
                    <th>Days to Harvest</th>
                  </tr>
                </thead>
                <tbody>
                  {vegetables.map((v, i) => (
                    <tr key={i}>
                      <td><strong>{v.name}</strong></td>
                      <td>{v.indoor}</td>
                      <td>{v.transplant}</td>
                      <td>{v.direct}</td>
                      <td>{v.harvest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card" style={{ padding: '1.25rem', marginTop: '1rem', background: 'var(--bg-secondary)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Tip:</strong> Use the AI Harvest Advisor to get a personalized planting schedule for your specific zone. Tell it your zip code or zone and it will give you exact dates.
              </p>
            </div>
          </div>
        )}

        {/* CANNING GUIDE */}
        {activeTab === 'canning' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Canning Safety Guide</h2>
              <p>Always use USDA-tested recipes. The difference between water bath and pressure canning is not optional — it is a food safety requirement.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {canningGuide.map((method, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{method.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: 0 }}>{method.method}</h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>{method.forWhat}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}><strong>Use for:</strong> {method.examples}</p>
                  <div style={{ background: 'rgba(166,120,40,0.08)', border: '1px solid rgba(166,120,40,0.2)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', margin: 0, fontWeight: '600' }}>⚠️ {method.safetyNote}</p>
                  </div>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Steps:</h4>
                  <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {method.steps.map((step, j) => (
                      <li key={j} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: '1.25rem', marginTop: '1rem', background: 'var(--bg-secondary)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Trusted recipe sources:</strong> National Center for Home Food Preservation (nchfp.uga.edu) · Ball Complete Book of Home Preserving · USDA Complete Guide to Home Canning · Your state cooperative extension service
              </p>
            </div>
          </div>
        )}

        {/* GROWING ZONES */}
        {activeTab === 'zones' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>USDA Growing Zones</h2>
              <p>Find your zone to know your frost dates and growing season length. Use the AI Harvest Advisor for a personalized planting schedule.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {plantingZones.map((zone, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-primary)' }}>Z{zone.zone}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>States</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{zone.states}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Last Spring Frost</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>{zone.lastFrost}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>First Fall Frost</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>{zone.firstFrost}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Season</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{zone.season}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KINGDOM CALENDAR */}
        {activeTab === 'calendar' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Kingdom Harvest Calendar</h2>
              <p>Align your homestead work with God's designed seasons and rhythms. Each month carries a biblical focus, scripture, and practical homestead actions.</p>
            </div>
            <KingdomCalendar title="Kingdom Homestead Calendar" seasons={harvestCalendar} />
          </div>
        )}

        {/* DECLARATION TOOL */}
        {activeTab === 'declaration' && (
          <div className="tools-page__panel">
            <KingdomDeclaration niche="whole-home-harvest" declarations={harvestDeclarations} />
          </div>
        )}

        {/* COMMUNITY BOARD */}
        {activeTab === 'community' && (
          <div className="tools-page__panel">
            <div className="tools-page__panel-header">
              <h2>Kingdom Homesteaders Community</h2>
              <p>Share what you are believing God for in your homestead journey. Post a harvest win, a prayer request, or an encouragement for fellow homesteaders.</p>
            </div>
            <CommunityBoard
              niche="whole-home-harvest"
              placeholder="Share a harvest win, a prayer, or what you are believing God for in your homestead journey..."
            />
          </div>
        )}
      </div>
    </div>
  );
}
