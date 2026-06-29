import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { Download, RefreshCw, Save, Settings, ShieldCheck, Sparkles } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import './AdminConfig.css';

const STORAGE_KEY = 'wholeHomeHarvestBuyerConfig';

const defaultConfig = {
  businessName: 'Whole Home Harvest',
  tagline: 'Tend the Earth. Feed Your Family. Honor God.',
  domain: 'https://whole-home-harvest.pages.dev',
  contactEmail: 'hello@example.com',
  primaryColor: '#5d9170',
  accentColor: '#d8a94a',
  aiProvider: 'Demo Mode',
  aiApiKeyStatus: 'Buyer connects own key',
  mailchimpAudience: 'Not connected yet',
  adsensePublisherId: 'ca-pub-REPLACE_ME',
  analyticsId: 'G-REPLACE_ME',
  gumroadProductUrl: 'https://gumroad.com/l/replace-me',
  amazonAffiliateTag: 'replace-20',
  socialInstagram: 'https://instagram.com/replace-me',
  socialPinterest: 'https://pinterest.com/replace-me',
  leadMagnetTitle: 'The Kingdom Home Harvest Starter Guide',
};

const fields = [
  ['businessName', 'Business Name', 'Brand shown across the site'],
  ['tagline', 'Tagline', 'Short promise shown in header/footer'],
  ['domain', 'Domain / Live URL', 'Buyer updates this after connecting their domain'],
  ['contactEmail', 'Contact Email', 'Used for contact, legal, and support links'],
  ['primaryColor', 'Primary Color', 'Main brand color'],
  ['accentColor', 'Accent / Gold Color', 'Luxury highlight color'],
  ['aiProvider', 'AI Provider', 'Demo, OpenAI, Anthropic, or future provider'],
  ['aiApiKeyStatus', 'AI API Key Status', 'Never ship seller API keys'],
  ['mailchimpAudience', 'Mailchimp Audience / Form', 'Newsletter connection notes'],
  ['adsensePublisherId', 'AdSense Publisher ID', 'Buyer replaces with their own ID'],
  ['analyticsId', 'Analytics ID', 'GA4, Plausible, or other analytics'],
  ['gumroadProductUrl', 'Digital Product URL', '$17-$37 guide/workbook/product link'],
  ['amazonAffiliateTag', 'Amazon Affiliate Tag', 'Buyer affiliate tracking tag'],
  ['socialInstagram', 'Instagram URL', 'Social profile'],
  ['socialPinterest', 'Pinterest URL', 'Social profile'],
  ['leadMagnetTitle', 'Lead Magnet Title', 'Free PDF / opt-in offer'],
];

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
  } catch {
    return defaultConfig;
  }
}

export default function AdminConfig() {
  const [config, setConfig] = useState(loadConfig);
  const completed = useMemo(() => {
    const values = Object.values(config).filter(Boolean).length;
    return Math.round((values / Object.keys(defaultConfig).length) * 100);
  }, [config]);

  const handleChange = (key, value) => setConfig(prev => ({ ...prev, [key]: value }));

  const saveConfig = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config, null, 2));
    toast.success('Buyer configuration saved in this browser.');
  };

  const resetConfig = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(defaultConfig);
    toast.success('Configuration reset to starter values.');
  };

  const exportConfig = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'whole-home-harvest-buyer-config.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast.success('Configuration export downloaded.');
  };

  return (
    <div className="admin-config-page">
      <SEOHead
        title="Buyer Control Center | Whole Home Harvest"
        description="A buyer configuration dashboard for Whole Home Harvest, designed to make post-sale setup easier without editing code."
        canonicalPath="/admin-config"
      />

      <section className="admin-hero">
        <div className="container admin-hero__grid">
          <div>
            <div className="admin-eyebrow"><Settings size={16} /> Buyer Control Center</div>
            <h1>Configure the site after purchase without hunting through code.</h1>
            <p>
              This dashboard gives the buyer one place to record branding, monetization, AI, analytics,
              email, domain, and social settings. It is intentionally safe: no seller API keys are shipped,
              and buyer secrets are never hard-coded into the public repository.
            </p>
            <div className="admin-actions">
              <button className="btn btn--primary" onClick={saveConfig}><Save size={16} /> Save Configuration</button>
              <button className="btn btn--secondary" onClick={exportConfig}><Download size={16} /> Export JSON</button>
            </div>
          </div>
          <div className="admin-score-card">
            <Sparkles size={28} />
            <strong>{completed}%</strong>
            <span>Configuration completeness</span>
            <p>Use this as the buyer handoff dashboard after the Flippa sale closes.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container admin-grid">
          <div className="admin-panel">
            <h2>Business & Brand Settings</h2>
            <div className="admin-form-grid">
              {fields.map(([key, label, help]) => (
                <label className="admin-field" key={key}>
                  <span>{label}</span>
                  <input
                    type={key.toLowerCase().includes('color') ? 'color' : 'text'}
                    value={config[key] || ''}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                  <small>{help}</small>
                </label>
              ))}
            </div>
            <div className="admin-actions admin-actions--bottom">
              <button className="btn btn--primary" onClick={saveConfig}><Save size={16} /> Save</button>
              <button className="btn btn--secondary" onClick={exportConfig}><Download size={16} /> Export</button>
              <button className="btn btn--ghost" onClick={resetConfig}><RefreshCw size={16} /> Reset</button>
            </div>
          </div>

          <aside className="admin-preview">
            <h2>Buyer Handoff Preview</h2>
            <div className="preview-card" style={{ borderColor: config.primaryColor }}>
              <span className="preview-badge" style={{ background: config.primaryColor }}>Configured Asset</span>
              <h3>{config.businessName}</h3>
              <p>{config.tagline}</p>
              <ul>
                <li><strong>Domain:</strong> {config.domain}</li>
                <li><strong>Email:</strong> {config.contactEmail}</li>
                <li><strong>AI:</strong> {config.aiProvider} — {config.aiApiKeyStatus}</li>
                <li><strong>Lead Magnet:</strong> {config.leadMagnetTitle}</li>
                <li><strong>Digital Product:</strong> {config.gumroadProductUrl}</li>
              </ul>
            </div>
            <div className="admin-safe-note">
              <ShieldCheck size={20} />
              <div>
                <strong>Seller protection note</strong>
                <p>Transfer the code and docs. The buyer connects their own domain, email provider, affiliate accounts, analytics, AdSense, Gumroad, and AI keys.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
