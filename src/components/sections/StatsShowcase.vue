<template>
  <section class="stats" ref="statsRef" aria-label="Impact statistics">
    <article
      v-for="(stat, index) in stats"
      :key="stat.label"
      class="stat"
      :style="{ '--delay': index * 0.1 + 's' }"
      data-animate
      role="group"
      :aria-label="stat.value + ' ' + stat.label"
    >
      <div class="stat__glow"></div>
      <div class="stat__content">
        <p class="value" aria-hidden="true">{{ stat.value }}</p>
        <p class="label" aria-hidden="true">{{ stat.label }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { createRevealAnimations } from '../../animations/gsapHelpers';
import { useReducedMotion } from '../../composables/useReducedMotion';

const props = defineProps({
  stats: {
    type: Array,
    default: () => []
  }
});

const statsRef = ref(null);
const { reduceMotion } = useReducedMotion();
let cleanup = null;

const init = () => {
  cleanup?.();
  if (statsRef.value) {
    cleanup = createRevealAnimations(statsRef.value.querySelectorAll('[data-animate]'), reduceMotion.value);
  }
};

onMounted(init);
watch(() => reduceMotion.value, () => init());
onBeforeUnmount(() => cleanup?.());
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  min-height: 100px;
  contain: layout style;
}

.stat {
  position: relative;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border-radius: clamp(20px, 3vw, 28px);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 4px 20px rgba(99, 102, 241, 0.08),
    0 8px 40px rgba(0, 0, 0, 0.04);
  text-align: center;
  min-height: 120px;
  contain: layout style;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.stat__glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at center,
    rgba(99, 102, 241, 0.2) 0%,
    rgba(236, 72, 153, 0.1) 40%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.stat:hover .stat__glow {
  opacity: 1;
}

.stat:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 40px rgba(99, 102, 241, 0.15),
    0 0 0 1px rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.3);
}

.stat__content {
  position: relative;
  z-index: 1;
}

.value {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  /* animation disabled for CLS optimization */
}

.label {
  color: var(--color-neutral-600);
  font-size: var(--text-sm);
  line-height: 1.4;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 968px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .stat {
    padding: 1.25rem;
    min-height: 100px;
    border-radius: 18px;
    animation: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(255, 255, 255, 0.98);
  }

  .value {
    font-size: var(--text-xl);
    animation: none;
  }

  .label {
    font-size: var(--text-xs);
  }

  .stat:hover {
    transform: none;
  }

  .stat__glow {
    display: none;
  }
}

@media (max-width: 360px) {
  .stats {
    gap: 0.5rem;
  }

  .stat {
    padding: 1rem;
    border-radius: 14px;
    min-height: 85px;
  }

  .value {
    font-size: var(--text-lg);
  }

  .label {
    font-size: 0.65rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stat {
    animation: none;
    transition: none;
  }

  .stat:hover {
    transform: none;
  }

  .value {
    animation: none;
  }
}
</style>
