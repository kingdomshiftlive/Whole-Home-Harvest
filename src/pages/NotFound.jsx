import { Link } from 'react-router-dom';
import { Home, Leaf, Search, Settings } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SEOHead
        title="Page Not Found | Whole Home Harvest"
        description="The page you requested could not be found. Return to Whole Home Harvest or explore the buyer-ready tools and resources."
        canonicalPath="/404"
      />
      <section className="not-found-hero">
        <div className="container not-found-card">
          <div className="not-found-icon"><Leaf size={34} /></div>
          <p className="not-found-eyebrow">404 • Redirect Path</p>
          <h1>This row needs replanting.</h1>
          <p>
            The page you tried to visit is not available. Use the links below to return to the harvest, explore the tools, or open the Buyer Control Center.
          </p>
          <div className="not-found-actions">
            <Link className="btn btn--primary" to="/"><Home size={16} /> Home</Link>
            <Link className="btn btn--secondary" to="/tools"><Search size={16} /> Tools</Link>
            <Link className="btn btn--ghost" to="/admin-config"><Settings size={16} /> Buyer Control Center</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
