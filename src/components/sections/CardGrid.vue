<template>
  <section class="grid" ref="gridRef" aria-label="Services overview">
    <article
      v-for="(card, index) in cards"
      :key="card.title"
      class="card"
      :class="{ 'card--has-image': card.image }"
      :style="{ '--delay': index * 0.1 + 's' }"
      data-animate
    >
      <div class="card__glow"></div>
      <div v-if="card.image" class="card__image-wrapper">
        <img
          :src="card.image"
          :alt="card.title + ' - mental health support'"
          class="card__image"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          width="400"
          height="250"
        />
        <div class="card__image-overlay"></div>
      </div>
      <div class="card__content">
        <div class="icon-wrapper">
          <p class="icon" aria-hidden="true">{{ card.icon }}</p>
        </div>
        <h3>{{ card.title }}</h3>
        <p class="card__copy">{{ card.copy }}</p>
        <RouterLink :to="card.link" class="link" :aria-label="'Learn more about ' + card.title">
          <span>Learn more</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { createRevealAnimations } from '../../animations/gsapHelpers';
import { useReducedMotion } from '../../composables/useReducedMotion';

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  }
});

const gridRef = ref(null);
const { reduceMotion } = useReducedMotion();
let cleanup = null;

const init = () => {
  cleanup?.();
  if (gridRef.value) {
    cleanup = createRevealAnimations(gridRef.value.querySelectorAll('[data-animate]'), reduceMotion.value);
  }
};

onMounted(init);
watch(() => reduceMotion.value, () => init());
onBeforeUnmount(() => cleanup?.());
</script>

<style scoped>
.grid {
  display: grid;
  gap: clamp(1.25rem, 2vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  contain: layout style;
  min-height: 200px;
}

.card {
  position: relative;
  border-radius: clamp(20px, 3vw, 28px);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  min-height: auto;
  box-shadow:
    0 4px 20px rgba(99, 102, 241, 0.08),
    0 8px 40px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card__glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.card:hover .card__glow {
  opacity: 1;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 40px rgba(99, 102, 241, 0.15),
    0 8px 20px rgba(236, 72, 153, 0.08),
    0 0 0 1px rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.card__image-wrapper {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.card:hover .card__image {
  transform: scale(1.1);
}

.card__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(99, 102, 241, 0.05) 50%,
    rgba(99, 102, 241, 0.1) 100%
  );
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.card:hover .card__image-overlay {
  opacity: 0.7;
}

.card__content {
  position: relative;
  padding: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
}

.card:not(.card--has-image) {
  padding: clamp(1.5rem, 3vw, 2rem);
}

.card:not(.card--has-image) .card__content {
  padding: 0;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
  border-radius: 16px;
  margin-bottom: 1rem;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.15));
}

.icon {
  font-size: clamp(1.5rem, 4vw, 1.75rem);
  margin: 0;
  transition: transform 0.3s ease;
}

.card:hover .icon {
  transform: scale(1.1);
}

.card h3 {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, var(--color-neutral-800), var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card__copy {
  font-size: var(--text-sm);
  flex: 1;
  line-height: 1.7;
  color: var(--color-neutral-600);
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  margin-top: auto;
  padding: 0.75rem 0;
  min-height: 44px;
  transition: all 0.3s ease;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary, #ec4899));
  transition: width 0.3s ease;
  border-radius: 2px;
}

.link:hover::after {
  width: calc(100% - 24px);
}

.link-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.link:hover {
  color: var(--color-primary-dark);
}

.link:hover .link-arrow {
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    animation: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(255, 255, 255, 0.98);
  }

  .card__image-wrapper {
    height: 150px;
  }

  .card__content {
    padding: 1.25rem;
  }

  .card h3 {
    font-size: var(--text-base);
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    transition: none;
  }

  .card__glow {
    display: none;
  }

  .card:hover .card__image {
    transform: none;
  }
}

@media (max-width: 360px) {
  .card {
    border-radius: 16px;
  }

  .card__image-wrapper {
    height: 130px;
  }

  .card__content {
    padding: 1rem;
  }

  .icon-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }

  .icon {
    font-size: 1.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
    transition: none;
  }

  .card:hover {
    transform: none;
  }

  .card__image,
  .icon-wrapper,
  .icon,
  .link-arrow {
    transition: none;
  }
}
</style>
