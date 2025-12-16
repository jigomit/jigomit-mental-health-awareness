import { watchEffect } from 'vue';

const BASE_TITLE = 'Mental Health Awareness';
const BASE_URL = 'https://jigomit-mental-health-a.netlify.app';
const DEFAULT_IMAGE = '/hero-image.jpg';

const ensureMetaTag = (name, attribute = 'name') => {
  if (typeof document === 'undefined') return null;
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  return tag;
};

const updateMetaTag = (name, content, attribute = 'name') => {
  const tag = ensureMetaTag(name, attribute);
  if (tag && content) {
    tag.setAttribute('content', content);
  }
};

const updateCanonicalUrl = (path) => {
  if (typeof document === 'undefined') return;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `${BASE_URL}${path}`);
};

export const usePageMeta = (title, description, options = {}) => {
  watchEffect(() => {
    if (typeof document === 'undefined') return;

    const {
      image = DEFAULT_IMAGE,
      path = typeof window !== 'undefined' ? window.location.pathname : '/',
      keywords = '',
      type = 'website'
    } = options;

    const sanitizedTitle = title ? `${title}` : BASE_TITLE;
    const fullTitle = title && !title.includes(BASE_TITLE) ? `${title} | ${BASE_TITLE}` : sanitizedTitle;
    const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
    const fullUrl = `${BASE_URL}${path}`;

    // Basic meta tags
    document.title = fullTitle;
    updateMetaTag('description', description);

    // Keywords meta tag
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags for Facebook, LinkedIn, etc.
    updateMetaTag('og:title', sanitizedTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', fullImageUrl, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', BASE_TITLE, 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', sanitizedTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', fullImageUrl, 'name');
    updateMetaTag('twitter:image:alt', sanitizedTitle, 'name');

    // Canonical URL
    updateCanonicalUrl(path);
  });
};

// Export for blog posts with extended metadata
export const useBlogPostMeta = (post) => {
  if (!post) return;

  const keywords = {
    'Anxiety': 'anxiety relief, natural anxiety remedies, panic attack help, 4-7-8 breathing, grounding techniques',
    'Depression': 'depression symptoms, depression help, therapy for depression, CBT, mental health support',
    'Stress Relief': 'stress management, work life balance, burnout prevention, mindfulness, relaxation techniques',
    'Mental Wellness': 'mental resilience, emotional strength, self-care, mental health tips, wellness strategies'
  };

  usePageMeta(post.title, post.excerpt, {
    image: post.image,
    path: `/blog/${post.slug}`,
    keywords: keywords[post.tag] || 'mental health, wellness, self-care',
    type: 'article'
  });
};
