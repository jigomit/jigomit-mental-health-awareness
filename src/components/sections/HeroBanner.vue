<template>
  <section class="hero" ref="heroRef" aria-labelledby="hero-title">
    <!-- Animated Blobs -->
    <div class="hero__blobs" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="hero__content" data-animate>
      <p class="eyebrow">
        <span class="eyebrow__icon">✨</span>
        {{ eyebrow }}
      </p>
      <h1 id="hero-title" class="hero__title">{{ title }}</h1>
      <p class="lead">{{ description }}</p>
      <nav class="hero__actions" aria-label="Primary actions">
        <RouterLink class="btn-primary" :to="primaryCta.to" role="button">
          <span>{{ primaryCta.label }}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </RouterLink>
        <RouterLink class="btn-secondary" :to="secondaryCta.to" role="button">
          {{ secondaryCta.label }}
        </RouterLink>
      </nav>
      <p class="trust-badge">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
        {{ microcopy }}
      </p>
    </div>

    <div class="hero__media" ref="mediaRef">
      <div class="hero__image-wrapper">
        <div class="hero__image-glow"></div>
        <div class="hero__image-container float">
          <img
            :src="image.src"
            :alt="image.alt"
            width="400"
            height="400"
            fetchpriority="high"
            decoding="sync"
            loading="eager"
          />
        </div>
        <!-- Floating Elements -->
        <div class="floating-element floating-1" aria-hidden="true">
          <span>🧠</span>
        </div>
        <div class="floating-element floating-2" aria-hidden="true">
          <span>💜</span>
        </div>
        <div class="floating-element floating-3" aria-hidden="true">
          <span>✨</span>
        </div>
      </div>
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  min-height: min(90vh, 700px);
  overflow: hidden;
}

/* Animated Blobs */
.hero__blobs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.3));
  top: -10%;
  left: -10%;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(244, 114, 182, 0.2));
  bottom: -10%;
  right: -5%;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(99, 102, 241, 0.2));
  top: 50%;
  left: 30%;
}

.hero__content {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: var(--text-xs);
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.eyebrow__icon {
  font-size: 1rem;
}

.hero__title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #1e293b 0%, #6366f1 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lead {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: var(--color-neutral-600);
  max-width: 520px;
  margin-bottom: 0.5rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: clamp(1.5rem, 3vw, 2rem) 0;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50px;
  padding: clamp(0.9rem, 2vw, 1.1rem) clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  font-size: var(--text-sm);
  text-align: center;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  background-size: 200% auto;
  color: #fff;
  box-shadow:
    0 4px 15px rgba(99, 102, 241, 0.4),
    0 0 0 0 rgba(99, 102, 241, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 8px 30px rgba(99, 102, 241, 0.5),
    0 0 50px rgba(236, 72, 153, 0.3);
  background-position: 100% center;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.btn-secondary {
  position: relative;
  border-radius: 50px;
  padding: clamp(0.9rem, 2vw, 1.1rem) clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  font-size: var(--text-sm);
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #6366f1, #ec4899);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: var(--color-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  background-image: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), linear-gradient(135deg, #6366f1, #ec4899);
}

.btn-secondary:active {
  transform: translateY(-1px) scale(0.98);
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.trust-badge svg {
  color: var(--color-success);
}

.hero__media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.hero__image-wrapper {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.hero__image-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%);
  filter: blur(40px);
  opacity: 0.7;
  z-index: -1;
}

.hero__image-container {
  position: relative;
  border-radius: clamp(24px, 5vw, 40px);
  overflow: hidden;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
  padding: 4px;
}

.hero__image-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 3px;
  background: linear-gradient(135deg, #6366f1, #ec4899, #06b6d4);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.hero__media img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  display: block;
  border-radius: clamp(20px, 4vw, 36px);
  object-fit: cover;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Floating Elements - static for better CLS */
.floating-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
}

.floating-1 {
  top: 5%;
  right: 10%;
}

.floating-2 {
  bottom: 15%;
  left: -5%;
}

.floating-3 {
  top: 50%;
  right: -8%;
}

/* Float animation disabled for CLS */
.float {
}

@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
    min-height: auto;
    padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem);
  }

  .hero__content {
    order: 1;
  }

  .hero__media {
    order: 2;
  }

  .lead {
    max-width: 100%;
    margin: 0 auto 0.5rem;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__image-wrapper {
    max-width: 350px;
    margin: 0 auto;
  }

  .floating-element {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .floating-2 {
    left: 5%;
  }

  .floating-3 {
    right: 0%;
  }

  .eyebrow {
    margin: 0 auto 1rem;
  }

  .trust-badge {
    margin: 0 auto;
  }

  /* Performance: Disable heavy animations on tablet */
  .blob {
    filter: blur(60px);
    animation-duration: 30s;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1.25rem 1rem;
    gap: 2rem;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  .hero__title {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    line-height: 1.15;
    animation: none;
  }

  .lead {
    font-size: var(--text-sm);
  }

  .eyebrow {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }

  .eyebrow__icon {
    animation: none;
  }

  .hero__image-wrapper {
    max-width: 280px;
  }

  .floating-element {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    border-radius: 12px;
    animation: none;
  }

  .blob {
    display: none;
  }

  .hero__image-glow {
    animation: none;
    opacity: 0.5;
  }

  .float {
    animation: none;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 1rem 0.75rem;
  }

  .hero__title {
    font-size: 1.5rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.85rem 1.25rem;
    font-size: 0.9rem;
  }

  .hero__image-wrapper {
    max-width: 240px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary,
  .btn-secondary,
  .floating-element,
  .blob,
  .hero__image-glow,
  .float {
    animation: none !important;
    transition: none;
  }

  .btn-primary::before {
    display: none;
  }
}
</style>
