import { watchEffect } from 'vue';

const BASE_TITLE = 'Mental Health Awareness';

const ensureMetaTag = () => {
  if (typeof document === 'undefined') return null;
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  return tag;
};

export const usePageMeta = (title, description) => {
  watchEffect(() => {
    if (typeof document === 'undefined') return;
    const sanitizedTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = sanitizedTitle;
    const tag = ensureMetaTag();
    if (tag && description) {
      tag.setAttribute('content', description);
    }
  });
};
