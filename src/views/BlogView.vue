<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Blog</p>
        <h1>Mental Health Insights & Resources</h1>
        <p>
          Expert articles, practical tips, and evidence-based strategies to support your mental
          wellness journey. Our content is reviewed by licensed clinicians.
        </p>
      </header>
    </section>

    <section class="blog-grid">
      <RouterLink
        v-for="post in blogPosts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="blog-card"
        :aria-label="`Read article: ${post.title}`"
      >
        <img :src="post.image" :alt="post.title" class="blog-card__img" loading="lazy" width="800" height="450" decoding="async" />
        <div class="blog-card__content">
          <span class="blog-card__tag" :class="`tag--${post.tagColor}`">{{ post.tag }}</span>
          <h2 class="blog-card__heading">{{ post.title }}</h2>
          <p class="blog-card__text">{{ post.excerpt }}</p>
          <div class="blog-card__meta">
            <span class="blog-card__date">{{ post.date }}</span>
            <span class="blog-card__readtime">{{ post.readTime }} min read</span>
          </div>
          <span class="blog-card__readmore">Read Article →</span>
        </div>
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import { useBreadcrumbSchema } from '../composables/useSeoSchema';
import { blogPosts } from '../data/content';

const route = useRoute();
const BASE_URL = 'https://jigomit-mental-health-a.netlify.app';

usePageMeta(route.meta?.title, route.meta?.description, {
  path: '/blog',
  keywords: 'mental health blog, anxiety tips, depression advice, stress management, self-care strategies, mental wellness articles, how to calm anxiety fast, natural remedies for depression'
});

// SEO: Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' }
]);

// Add Blog collection schema
onMounted(() => {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Mental Health Awareness Blog',
    'description': 'Expert mental health articles, tips for anxiety and depression, stress management techniques, and evidence-based wellness strategies.',
    'url': `${BASE_URL}/blog`,
    'publisher': {
      '@type': 'Organization',
      'name': 'Mental Health Awareness',
      'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/favicon.svg` }
    },
    'blogPost': blogPosts.map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'image': `${BASE_URL}${post.image}`,
      'datePublished': new Date(post.date).toISOString(),
      'url': `${BASE_URL}/blog/${post.slug}`,
      'author': { '@type': 'Organization', 'name': 'Mental Health Awareness' }
    }))
  };

  const existingSchema = document.querySelector('script[data-schema="blog-list"]');
  if (existingSchema) existingSchema.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'blog-list');
  script.textContent = JSON.stringify(blogListSchema);
  document.head.appendChild(script);
});
</script>

<style scoped>
.page {
  padding: clamp(1.75rem, 3vw, 3.25rem);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 3.5rem);
}

.hero-section {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: var(--text-xs);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.hero-section h1 {
  font-size: var(--text-3xl);
  margin-bottom: 1rem;
}

.hero-section p {
  color: var(--color-neutral-600);
  line-height: 1.7;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.blog-card__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.blog-card__content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card__tag {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 50px;
  margin-bottom: 1rem;
  width: fit-content;
}

.tag--blue { background: #dbeafe; color: #1e40af; }
.tag--purple { background: #ede9fe; color: #6b21a8; }
.tag--green { background: #dcfce7; color: #166534; }
.tag--orange { background: #ffedd5; color: #c2410c; }
.tag--teal { background: #ccfbf1; color: #0f766e; }
.tag--cyan { background: #cffafe; color: #0e7490; }
.tag--pink { background: #fce7f3; color: #be185d; }
.tag--indigo { background: #e0e7ff; color: #4338ca; }

.blog-card__heading {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.blog-card__text {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.blog-card__meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.blog-card__readmore {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: color 0.2s;
}

.blog-card:hover .blog-card__readmore {
  color: var(--color-primary-dark, #1d4ed8);
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-card__img {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 1rem 0.75rem;
    gap: 1.5rem;
  }

  .hero-section h1 {
    font-size: var(--text-2xl);
  }

  .blog-card {
    border-radius: 16px;
  }

  .blog-card__img {
    height: 160px;
  }

  .blog-card__content {
    padding: 1.15rem;
  }

  .blog-card__heading {
    font-size: 1.05rem;
  }

  .blog-card__text {
    font-size: 0.85rem;
  }

  .blog-card__meta {
    gap: 0.75rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  .hero-section p {
    font-size: 0.9rem;
  }

  .blog-card__content {
    padding: 1rem;
  }

  .blog-card__heading {
    font-size: 1rem;
  }
}
</style>
