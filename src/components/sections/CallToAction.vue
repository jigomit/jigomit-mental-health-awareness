<template>
  <section class="cta" aria-labelledby="cta-title">
    <div class="cta__glow"></div>
    <div class="cta__blob cta__blob--1"></div>
    <div class="cta__blob cta__blob--2"></div>
    <div class="cta__content">
      <p class="eyebrow">
        <span class="eyebrow__icon">🌟</span>
        {{ eyebrow }}
      </p>
      <h2 id="cta-title">{{ title }}</h2>
      <p class="cta__copy">{{ copy }}</p>
    </div>
    <nav class="cta__actions" aria-label="Call to action links">
      <RouterLink class="btn-primary" :to="primary.to" role="button">
        <span>{{ primary.label }}</span>
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </RouterLink>
      <RouterLink class="btn-secondary" :to="secondary.to" role="button">{{ secondary.label }}</RouterLink>
    </nav>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  eyebrow: { type: String, default: 'Next step' },
  title: String,
  copy: String,
  primary: Object,
  secondary: Object
});
</script>

<style scoped>
.cta {
  position: relative;
  margin: clamp(2rem, 3vw, 3.5rem) 0;
  padding: clamp(2.5rem, 4vw, 3.5rem);
  border-radius: clamp(24px, 4vw, 36px);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
  contain: layout style;
  min-height: 180px;
  overflow: hidden;
  box-shadow:
    0 4px 20px rgba(99, 102, 241, 0.08),
    0 8px 40px rgba(0, 0, 0, 0.04);
}

.cta__glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(99, 102, 241, 0.15) 0%,
    rgba(236, 72, 153, 0.1) 30%,
    transparent 60%
  );
  pointer-events: none;
  animation: ctaGlow 10s ease-in-out infinite;
}

@keyframes ctaGlow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-10%, 10%) scale(1.1); }
}

.cta__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.4;
  pointer-events: none;
}

.cta__blob--1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.3));
  top: -30%;
  right: 10%;
  animation: blobFloat1 12s ease-in-out infinite;
}

.cta__blob--2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(244, 114, 182, 0.2));
  bottom: -20%;
  left: 20%;
  animation: blobFloat2 15s ease-in-out infinite;
}

@keyframes blobFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 20px) scale(1.1); }
}

@keyframes blobFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(0.9); }
}

.cta__content {
  flex: 1;
  min-width: 260px;
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: 0.75rem;
  padding: 0.4rem 0.8rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: var(--color-primary);
}

.eyebrow__icon {
  font-size: 0.9rem;
}

.cta h2 {
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta__copy {
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  line-height: 1.7;
  max-width: 400px;
}

.cta__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 50px;
  padding: clamp(0.9rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  font-size: var(--text-sm);
  text-align: center;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
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
    0 0 40px rgba(236, 72, 153, 0.3);
  background-position: 100% center;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.btn-secondary {
  position: relative;
  border-radius: 50px;
  padding: clamp(0.9rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2rem);
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
  white-space: nowrap;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
  background-image: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), linear-gradient(135deg, #6366f1, #ec4899);
}

.btn-secondary:active {
  transform: translateY(-1px) scale(0.98);
}

@media (max-width: 640px) {
  .cta {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }

  .cta__content {
    min-width: 100%;
  }

  .cta__copy {
    max-width: 100%;
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0 auto 0.75rem;
  }

  .cta__actions {
    width: 100%;
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .cta__blob {
    display: none;
  }

  .cta__glow {
    animation: none;
    opacity: 0.3;
  }
}

@media (max-width: 360px) {
  .cta {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }

  .cta h2 {
    font-size: var(--text-lg);
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.85rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary,
  .btn-secondary,
  .cta__glow,
  .cta__blob {
    animation: none !important;
    transition: none;
  }

  .btn-primary::before {
    display: none;
  }
}
</style>
