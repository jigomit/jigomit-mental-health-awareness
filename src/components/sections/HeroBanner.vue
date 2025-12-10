<template>
  <section class="hero" ref="heroRef">
    <div class="hero__content" data-animate>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="lead">{{ description }}</p>
      <div class="hero__actions">
        <RouterLink class="primary" :to="primaryCta.to">{{ primaryCta.label }}</RouterLink>
        <RouterLink class="secondary" :to="secondaryCta.to">{{ secondaryCta.label }}</RouterLink>
      </div>
      <p class="microcopy">{{ microcopy }}</p>
    </div>
    <div class="hero__media" ref="mediaRef">
      <img
        :src="image.src"
        :srcset="image.srcset"
        :alt="image.alt"
        loading="lazy"
        decoding="async"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useReducedMotion } from '../../composables/useReducedMotion';
import { createHeroDepthAnimation, createRevealAnimations } from '../../animations/gsapHelpers';

const props = defineProps({
  eyebrow: String,
  title: String,
  description: String,
  primaryCta: { type: Object, required: true },
  secondaryCta: { type: Object, required: true },
  microcopy: { type: String, default: 'Your privacy is protected. No data sold.' },
  image: { type: Object, required: true }
});

const heroRef = ref(null);
const mediaRef = ref(null);
const { reduceMotion } = useReducedMotion();
let cleanupHero = null;
let cleanupReveal = null;

const initAnimations = () => {
  cleanupHero?.();
  cleanupReveal?.();
  if (mediaRef.value) {
    cleanupHero = createHeroDepthAnimation(mediaRef.value, reduceMotion.value);
  }
  if (heroRef.value) {
    cleanupReveal = createRevealAnimations(heroRef.value.querySelectorAll('[data-animate]'), reduceMotion.value);
  }
};

onMounted(initAnimations);

watch(
  () => reduceMotion.value,
  () => initAnimations()
);

onBeforeUnmount(() => {
  cleanupHero?.();
  cleanupReveal?.();
});
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  align-items: center;
  padding: clamp(1.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem) clamp(1rem, 2vw, 2rem);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: var(--text-xs);
  color: var(--color-primary);
}

.hero__content h1 {
  font-size: var(--text-3xl);
  line-height: 1.15;
}

.lead {
  font-size: var(--text-base);
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: clamp(1rem, 2vw, 1.5rem) 0;
}

.primary,
.secondary {
  border-radius: 999px;
  padding: clamp(0.7rem, 2vw, 0.85rem) clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  font-size: var(--text-sm);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary:active,
.secondary:active {
  transform: scale(0.98);
}

.primary {
  background: var(--color-primary);
  color: #fff;
}

.secondary {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.hero__media img {
  width: 100%;
  max-width: 420px;
  height: auto;
  max-height: 450px;
  margin: 0 auto;
  display: block;
  border-radius: clamp(18px, 3vw, 28px);
  box-shadow: 0 25px 55px rgba(86, 120, 230, 0.2);
  object-fit: cover;
}

.microcopy {
  font-size: var(--text-xs);
  color: var(--color-neutral-600);
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: clamp(1rem, 3vw, 2rem) clamp(0.75rem, 2vw, 1.5rem);
  }

  .hero__content {
    order: 1;
  }

  .hero__media {
    order: 2;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__content h1 {
    font-size: var(--text-2xl);
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem 0.75rem;
    gap: 1.25rem;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.5rem;
  }

  .primary,
  .secondary {
    width: 100%;
    padding: 0.85rem 1.5rem;
  }

  .hero__content h1 {
    font-size: clamp(1.5rem, 6vw, 1.75rem);
    line-height: 1.2;
  }

  .lead {
    font-size: var(--text-sm);
  }

  .eyebrow {
    font-size: 0.7rem;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 0.75rem 0.5rem;
  }

  .hero__content h1 {
    font-size: 1.35rem;
  }

  .primary,
  .secondary {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }
}
</style>
