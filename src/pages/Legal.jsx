import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import './Legal.css';

const CONTACT_EMAIL = 'hello@wholehomeharvest.com';
const updated = 'June 2026';

function LegalShell({ title, intro, children }) {
  return (
    <div className="legal-page">
      <section className="legal-hero"><h1>{title}</h1><p>Last updated: {updated}</p></section>
      <section className="legal-body"><div className="legal-content"><p className="legal-intro">{intro}</p>{children}</div></section>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy policy for Whole Home Harvest." canonical="/privacy-policy" />
      <LegalShell title="Privacy Policy" intro="Whole Home Harvest respects your privacy and explains how basic information may be collected and used.">
        <h2>Information We Collect</h2><p>We may collect information you voluntarily submit, such as your name, email address, newsletter signup, contact form message, or partnership inquiry.</p>
        <h2>How Information Is Used</h2><p>Information may be used to respond to messages, send requested updates, improve the website, operate newsletter or analytics tools, and maintain site security.</p>
        <h2>Cookies and Analytics</h2><p>This site may use cookies, analytics, advertising pixels, or affiliate tracking links if the owner connects those services. Visitors can manage cookies through their browser settings.</p>
        <h2>Affiliate Links</h2><p>Some links may be affiliate links. If you purchase through those links, the site owner may earn a commission at no extra cost to you.</p>
        <h2>Third-Party Services</h2><p>The site may connect to services such as Cloudflare Pages, Google Analytics, Google AdSense, Mailchimp, Kit, Formspree, or affiliate networks. Those services maintain their own privacy policies.</p>
        <h2>Your Choices</h2><p>You may unsubscribe from marketing emails at any time. To request removal or correction of information, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        <h2>Children</h2><p>This website is intended for general family education but is not designed to collect personal information from children under 13.</p>
      </LegalShell>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEOHead title="Terms of Use" description="Terms of use for Whole Home Harvest." canonical="/terms" />
      <LegalShell title="Terms of Use" intro="By using Whole Home Harvest, you agree to these terms and understand that the site provides general educational content only.">
        <h2>Educational Use Only</h2><p>Whole Home Harvest provides general information about gardening, homesteading, food preservation, family preparedness, and faith-rooted stewardship. It does not provide legal, medical, veterinary, financial, engineering, or professional agricultural advice.</p>
        <h2>No Guaranteed Results</h2><p>Gardening, livestock, preservation, and home systems vary by region, climate, laws, equipment, experience, and conditions. Results are not guaranteed.</p>
        <h2>Food Safety</h2><p>Users are responsible for following current USDA-tested recipes, manufacturer instructions, local extension guidance, and safe food handling procedures. When in doubt, contact your local cooperative extension office.</p>
        <h2>AI Tool Use</h2><p>The AI Harvest Advisor, if connected by the owner, is for brainstorming and general education only. AI responses may be incomplete or inaccurate and should be verified with trusted sources.</p>
        <h2>Affiliate and Advertising Content</h2><p>The website may include affiliate links, advertisements, or sponsored resources. Users remain responsible for evaluating products before purchase.</p>
        <h2>Digital Asset Transfer</h2><p>This website may be sold as a digital asset. A buyer or future operator is responsible for updating contact information, integrations, affiliate links, legal pages, and ongoing operations after transfer.</p>
        <h2>Limitation of Liability</h2><p>To the fullest extent allowed by law, Whole Home Harvest and its owners, contributors, sellers, buyers, and operators are not liable for damages arising from use of the site, tools, content, recipes, links, or AI-generated output.</p>
      </LegalShell>
    </>
  );
}

export function Disclaimer() {
  return (
    <>
      <SEOHead title="Disclaimer" description="Important disclaimers for Whole Home Harvest content, tools, food preservation, and AI guidance." canonical="/disclaimer" />
      <LegalShell title="Disclaimer" intro="Whole Home Harvest is an educational resource. Always verify safety-critical decisions with trusted authorities and professionals.">
        <div className="disclaimer-alert"><strong>Important:</strong> Food preservation and homesteading decisions can affect health and safety. Use current, tested, authoritative guidance before canning, preserving, raising animals, using tools, or changing home systems.</div>
        <h2>Food Preservation Disclaimer</h2><p>Canning and preservation content is general education only. Always use current USDA-tested recipes, correct equipment, proper processing times, altitude adjustments, and safe handling procedures.</p>
        <h2>Gardening and Livestock Disclaimer</h2><p>Climate, pests, soil, ordinances, animal health, and local rules vary. Consult your local cooperative extension office, veterinarian, or qualified professional when needed.</p>
        <h2>AI Harvest Advisor Disclaimer</h2><p>The AI tool may produce helpful ideas but can be wrong. Do not rely on AI as your only source for safety, food preservation, animal health, plant disease, legal, or emergency decisions.</p>
        <h2>Faith Content Disclaimer</h2><p>Faith-based content is for encouragement and reflection. It is not a substitute for professional, legal, medical, mental health, agricultural, or financial advice.</p>
        <h2>Affiliate Disclaimer</h2><p>Product mentions may include affiliate links. The site owner may earn commissions at no extra cost to the visitor.</p>
      </LegalShell>
    </>
  );
}

export function AffiliateDisclosure() {
  return (
    <>
      <SEOHead title="Affiliate Disclosure" description="Affiliate disclosure for Whole Home Harvest." canonical="/affiliate-disclosure" />
      <LegalShell title="Affiliate Disclosure" intro="Whole Home Harvest may earn commissions from qualifying purchases through affiliate links.">
        <h2>How Affiliate Links Work</h2><p>If you click a product or partner link and make a purchase, the site owner may receive a commission at no additional cost to you.</p>
        <h2>Editorial Standards</h2><p>Recommendations should be selected because they are relevant to gardening, homesteading, preservation, natural living, pantry building, or stewardship — not solely because of commission potential.</p>
        <h2>Possible Partner Categories</h2><ul><li>Seeds and gardening supplies</li><li>Canning jars, pressure canners, and kitchen tools</li><li>Backyard chicken and livestock supplies</li><li>Natural living and home products</li><li>Books, courses, printables, and digital resources</li></ul>
        <h2>Questions</h2><p>Questions about affiliate relationships may be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </LegalShell>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The requested Whole Home Harvest page was not found." />
      <div className="not-found-page"><div className="not-found-content"><div className="not-found-number">404</div><h1>Page Not Found</h1><p>This page may have moved, but there is still plenty to harvest.</p><div className="not-found-links"><Link to="/" className="btn btn-primary">Go Home</Link><Link to="/tools" className="btn-outline-dark">Use Tools</Link><Link to="/blog" className="btn-outline-dark">Read Blog</Link></div><p className="not-found-scripture">“The plans of the diligent lead surely to abundance.” — Proverbs 21:5</p></div></div>
    </>
  );
}
