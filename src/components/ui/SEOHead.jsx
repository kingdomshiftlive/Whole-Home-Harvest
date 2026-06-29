import { useEffect } from 'react';

const SITE_NAME = 'Whole Home Harvest';
const SITE_URL = 'https://whole-home-harvest.pages.dev';
const DEFAULT_TITLE = 'Whole Home Harvest — Tend the Earth. Feed Your Family. Honor God.';
const DEFAULT_DESCRIPTION = 'Faith-rooted homesteading guides, planting tools, canning safety resources, backyard food production support, and an AI Harvest Advisor for families stewarding their home and land.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEOHead({ title, description, canonical, ogImage }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDesc = description || DEFAULT_DESCRIPTION;
  const url = canonical ? `${SITE_URL}${canonical}` : (typeof window !== 'undefined' ? window.location.href : SITE_URL);
  const image = ogImage || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', metaDesc);
    setMeta('robots', 'index, follow');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', metaDesc, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', metaDesc);
    setMeta('twitter:image', image);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [fullTitle, metaDesc, image, url]);

  return null;
}
