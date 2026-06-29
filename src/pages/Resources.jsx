import { ExternalLink } from 'lucide-react';
import { harvestCategories } from '../data/siteData';
import AdSensePlaceholder from '../components/ui/AdSensePlaceholder';
import './Resources.css';

export default function Resources() {
  return (
    <div className="resources-page">
      <div className="resources-page__hero">
        <div className="container">
          <h1>Garden and Harvest Resources</h1>
          <p>Trusted seeds, tools, canning supplies, livestock resources, and learning guides — curated for Kingdom homesteaders.</p>
        </div>
      </div>
      <div className="container resources-page__content">
        <div className="card resources-page__affiliate-notice">
          <p><strong>Affiliate Disclosure:</strong> Some links below are affiliate links. When you purchase through them, Whole Home Harvest earns a small commission at no extra cost to you. We only feature products and partners we genuinely trust to serve homesteaders well.</p>
        </div>
        {harvestCategories.map((section, i) => (
          <div key={i} className="resources-page__section">
            <h2 className="resources-page__section-title">
              <span>{section.icon}</span> {section.category}
            </h2>
            <div className="resources-page__grid">
              {section.items.map((item, j) => (
                <div key={j} className="card resources-page__card">
                  <div className="resources-page__card-header">
                    <h3>{item.name}</h3>
                    {item.commission && <span className="resources-page__type-badge">{item.commission}</span>}
                  </div>
                  <p>{item.desc}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="resources-page__link">
                    Visit {item.name} <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
            {i === 1 && <AdSensePlaceholder slot="rectangle" style={{ marginTop: '1rem' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
