import { useEffect } from 'react';

/**
 * ADSENSE INTEGRATION
 * This component is intentionally buyer-safe. Until the buyer adds their
 * own Google AdSense publisher ID and slot IDs, it displays branded ad-space
 * placeholders instead of broken ad blocks.
 *
 * To activate:
 * 1. Apply at google.com/adsense with the buyer's own Google account.
 * 2. Replace ADSENSE_CLIENT with ca-pub-XXXXXXXXXXXXXXXX.
 * 3. Replace slot IDs below with real AdSense slot IDs.
 * 4. Add the AdSense script in index.html after approval.
 */

const ADSENSE_CLIENT = 'ADD-BUYER-ADSENSE-CLIENT-ID';
const AD_SLOTS = {
  banner: 'ADD-BANNER-SLOT-ID',
  rectangle: 'ADD-RECTANGLE-SLOT-ID',
  sidebar: 'ADD-SIDEBAR-SLOT-ID',
};

export default function AdSensePlaceholder({ slot = 'banner', style = {} }) {
  const isConfigured = ADSENSE_CLIENT.startsWith('ca-pub-');

  useEffect(() => {
    if (isConfigured && window.adsbygoogle) {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { console.log('AdSense:', e); }
    }
  }, [isConfigured]);

  if (!isConfigured) {
    return (
      <div style={{
        background: 'var(--bg-secondary)',
        border: '2px dashed var(--border-medium)',
        borderRadius: 'var(--radius-md)',
        padding: '1rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.78rem',
        margin: '1rem 0',
        ...style,
      }}>
        📢 Monetization Space — buyer can connect AdSense or sponsor placements here
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={AD_SLOTS[slot] || AD_SLOTS.banner}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
