<template>
  <div class="page" v-if="post">
    <article class="blog-post">
      <header class="post-header">
        <RouterLink to="/blog" class="back-link">← Back to Blog</RouterLink>
        <span class="post-tag" :class="`tag--${post.tagColor}`">{{ post.tag }}</span>
        <h1>{{ post.title }}</h1>
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <span class="post-readtime">{{ post.readTime }} min read</span>
        </div>
      </header>

      <figure class="post-image">
        <img :src="post.image" :alt="post.title" loading="eager" width="800" height="450" decoding="async" />
      </figure>

      <div class="post-content" v-html="post.content"></div>

      <footer class="post-footer">
        <div class="share-section">
          <h3>Share this article</h3>
          <div class="share-buttons">
            <button class="share-btn" @click="shareOnTwitter" aria-label="Share on Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Twitter</span>
            </button>
            <button class="share-btn" @click="shareOnFacebook" aria-label="Share on Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebook</span>
            </button>
            <button class="share-btn" @click="copyLink" aria-label="Copy link to clipboard">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        <div class="related-section">
          <h3>Related Articles</h3>
          <div class="related-grid">
            <RouterLink
              v-for="related in relatedPosts"
              :key="related.slug"
              :to="`/blog/${related.slug}`"
              class="related-card"
              :aria-label="`Read related article: ${related.title}`"
            >
              <img :src="related.image" :alt="related.title" class="related-card__img" loading="lazy" width="400" height="225" decoding="async" />
              <div class="related-card__content">
                <span class="related-card__tag" :class="`tag--${related.tagColor}`">{{ related.tag }}</span>
                <h4>{{ related.title }}</h4>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="cta-section">
          <h3>Need Support?</h3>
          <p>If you're struggling with any of the topics discussed in this article, help is available.</p>
          <RouterLink to="/get-help" class="cta-btn">Get Help Now</RouterLink>
        </div>
      </footer>
    </article>
  </div>
  <div class="page not-found" v-else>
    <h1>Article Not Found</h1>
    <p>The article you're looking for doesn't exist.</p>
    <RouterLink to="/blog" class="back-btn">Browse All Articles</RouterLink>
  </div>
</template>

<script setup>
import { computed, watchEffect, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import { blogPosts } from '../data/content';

const route = useRoute();
const BASE_URL = 'https://jigomit-mental-health-a.netlify.app';

const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug);
});

const relatedPosts = computed(() => {
  if (!post.value) return [];
  return blogPosts.filter(p => p.slug !== post.value.slug).slice(0, 3);
});

usePageMeta(
  post.value?.title || 'Article Not Found',
  post.value?.excerpt || 'Mental health article'
);

// Add Article structured data for SEO
const addStructuredData = () => {
  if (!post.value) return;

  // Remove any existing article schema
  const existingSchema = document.querySelector('script[data-schema="article"]');
  if (existingSchema) existingSchema.remove();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.value.title,
    'description': post.value.excerpt,
    'image': `${BASE_URL}${post.value.image}`,
    'datePublished': new Date(post.value.date).toISOString(),
    'dateModified': new Date(post.value.date).toISOString(),
    'author': {
      '@type': 'Organization',
      'name': 'Mental Health Awareness',
      'url': BASE_URL
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Mental Health Awareness',
      'logo': {
        '@type': 'ImageObject',
        'url': `${BASE_URL}/favicon.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.value.slug}`
    },
    'articleSection': post.value.tag,
    'wordCount': post.value.content.split(/\s+/).length,
    'timeRequired': `PT${post.value.readTime}M`,
    'keywords': getKeywordsForPost(post.value.tag)
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'article');
  script.textContent = JSON.stringify(articleSchema);
  document.head.appendChild(script);

  // Add BreadcrumbList schema
  const existingBreadcrumb = document.querySelector('script[data-schema="breadcrumb"]');
  if (existingBreadcrumb) existingBreadcrumb.remove();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE_URL}/blog` },
      { '@type': 'ListItem', 'position': 3, 'name': post.value.title, 'item': `${BASE_URL}/blog/${post.value.slug}` }
    ]
  };

  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
};

const getKeywordsForPost = (tag) => {
  const keywordMap = {
    'Online Support': 'free online mental health chat, 24/7 crisis chat support, anonymous mental health chat, text therapy free, online counselor chat, crisis text line',
    'Affordable Care': 'free therapy near me no insurance, low cost mental health services, sliding scale therapists, affordable counseling options, community mental health centers',
    'Campaigns': 'mental health awareness campaign ideas, school mental health programs, workplace wellness campaigns, community mental health events, awareness month activities',
    'Volunteering': 'volunteer mental health helpline, crisis counselor training, become a crisis volunteer, helpline volunteer requirements, peer support volunteer',
    'Support Groups': 'free online support groups, anxiety support groups online, depression peer support, mental health community forums, NAMI support groups',
    'Counselling': 'confidential counselling services, first therapy session tips, what to expect in therapy, counselling confidentiality, therapy preparation guide',
    'Workplace Training': 'mental health first aid training, MHFA certification, workplace mental health training, employee mental health programs, crisis response training',
    'Program Development': 'start mental health program, mental health awareness program guide, organizational wellness programs, mental health initiative planning, workplace wellness implementation'
  };
  return keywordMap[tag] || 'mental health awareness, free mental health support, crisis helpline, counselling services, mental wellness resources';
};

onMounted(() => {
  addStructuredData();
});

watchEffect(() => {
  if (post.value) {
    addStructuredData();
  }
});

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.value?.title || '');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
};

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  } catch {
    alert('Failed to copy link');
  }
};
</script>

<style scoped>
.page {
  padding: clamp(1.75rem, 3vw, 3.25rem);
  max-width: 800px;
  margin: 0 auto;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h1 {
  margin-bottom: 1rem;
}

.back-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.85rem 1.6rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
}

.back-link {
  display: inline-block;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.7;
}

.post-header {
  margin-bottom: 2rem;
}

.post-tag {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.tag--blue { background: #dbeafe; color: #1e40af; }
.tag--purple { background: #ede9fe; color: #6b21a8; }
.tag--green { background: #dcfce7; color: #166534; }
.tag--orange { background: #ffedd5; color: #c2410c; }
.tag--teal { background: #ccfbf1; color: #0f766e; }
.tag--cyan { background: #cffafe; color: #0e7490; }
.tag--pink { background: #fce7f3; color: #be185d; }
.tag--indigo { background: #e0e7ff; color: #4338ca; }

.post-header h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 1.5rem;
  color: var(--color-neutral-500);
  font-size: 0.9rem;
}

.post-image {
  margin: 0 0 2.5rem 0;
  border-radius: 20px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  display: block;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-neutral-700);
}

.post-content :deep(h2) {
  font-size: 1.5rem;
  margin: 2.5rem 0 1rem;
  color: var(--color-neutral-900);
}

.post-content :deep(h3) {
  font-size: 1.25rem;
  margin: 2rem 0 0.75rem;
  color: var(--color-neutral-800);
}

.post-content :deep(p) {
  margin-bottom: 1.25rem;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 1.25rem 0;
  padding-left: 1.5rem;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}

.post-content :deep(blockquote) {
  border-left: 4px solid var(--color-primary);
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: var(--color-neutral-50);
  border-radius: 0 12px 12px 0;
  font-style: italic;
}

.post-content :deep(.highlight-box) {
  background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%);
  padding: 1.5rem;
  border-radius: 16px;
  margin: 1.5rem 0;
}

.post-content :deep(.tip) {
  background: #dcfce7;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.share-section,
.related-section,
.cta-section {
  margin-bottom: 2.5rem;
}

.share-section h3,
.related-section h3,
.cta-section h3 {
  font-size: 1.15rem;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid var(--color-border);
  background: #fff;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-neutral-700);
  min-height: 48px;
  min-width: 48px;
}

.share-btn:hover {
  background: var(--color-neutral-100);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.share-btn svg {
  flex-shrink: 0;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.related-card {
  text-decoration: none;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: transform 0.2s, box-shadow 0.2s;
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.related-card__img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.related-card__content {
  padding: 1rem;
}

.related-card__tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 50px;
  margin-bottom: 0.5rem;
}

.related-card h4 {
  font-size: 0.9rem;
  color: var(--color-neutral-800);
  line-height: 1.4;
}

.cta-section {
  background: linear-gradient(135deg, var(--color-primary), #6366f1);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}

.cta-section h3 {
  color: #fff;
}

.cta-section p {
  opacity: 0.9;
  margin-bottom: 1.25rem;
}

.cta-btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  background: #fff;
  color: var(--color-primary);
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s;
}

.cta-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .related-grid {
    grid-template-columns: 1fr;
  }

  .share-buttons {
    flex-direction: column;
  }

  .share-btn {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 1rem 0.75rem;
  }

  .post-header h1 {
    font-size: 1.5rem;
  }

  .post-meta {
    gap: 1rem;
    font-size: 0.8rem;
  }

  .post-image {
    border-radius: 14px;
    margin-bottom: 1.75rem;
  }

  .post-content {
    font-size: 1rem;
  }

  .post-content :deep(h2) {
    font-size: 1.25rem;
  }

  .post-content :deep(h3) {
    font-size: 1.1rem;
  }

  .cta-section {
    padding: 1.5rem 1.25rem;
    border-radius: 16px;
  }

  .related-card__content {
    padding: 0.85rem;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .post-header h1 {
    font-size: 1.35rem;
  }

  .back-link {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .post-content {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .cta-section {
    padding: 1.25rem 1rem;
  }

  .cta-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
