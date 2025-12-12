<template>
  <section class="testimonials" aria-label="Stories from community" role="region">
    <div class="testimonials__glow"></div>
    <div class="testimonials__quote-icon" aria-hidden="true">"</div>
    <article
      v-for="(item, index) in testimonials"
      :key="item.name"
      class="slide"
      :data-active="index === active"
      role="group"
      :aria-label="'Testimonial from ' + item.name"
      :aria-hidden="index !== active"
    >
      <blockquote class="quote">"{{ item.quote }}"</blockquote>
      <cite class="name">
        <span class="name__line"></span>
        {{ item.name }}
      </cite>
    </article>
    <div class="controls" role="tablist" aria-label="Testimonial navigation">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        :class="{ active: index === active }"
        @click="active = index"
        :aria-label="'Show testimonial ' + (index + 1)"
        :aria-selected="index === active"
        role="tab"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useReducedMotion } from '../../composables/useReducedMotion';

const props = defineProps({
  testimonials: {
    type: Array,
    default: () => []
  }
});

const active = ref(0);
const interval = ref(null);
const { reduceMotion } = useReducedMotion();

const startCycle = () => {
  clearInterval(interval.value);
  if (reduceMotion.value) return;
  interval.value = setInterval(() => {
    active.value = (active.value + 1) % props.testimonials.length;
  }, 7000);
};

onMounted(startCycle);
watch(
  () => reduceMotion.value,
  () => startCycle()
);
onBeforeUnmount(() => clearInterval(interval.value));
</script>

<style scoped>
.testimonials {
  position: relative;
  padding: clamp(2.5rem, 5vw, 4rem);
  border-radius: clamp(24px, 4vw, 36px);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  min-height: 240px;
  contain: layout style;
  box-shadow:
    0 4px 20px rgba(99, 102, 241, 0.08),
    0 8px 40px rgba(0, 0, 0, 0.04);
}

.testimonials__glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(236, 72, 153, 0.05) 30%,
    transparent 60%
  );
  pointer-events: none;
}

.testimonials__quote-icon {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 6rem;
  font-family: Georgia, serif;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  pointer-events: none;
}

.slide {
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
  padding: clamp(2.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(10px);
  backface-visibility: hidden;
  contain: layout style paint;
}

.slide[data-active='true'] {
  position: relative;
  opacity: 1;
  transform: translateY(0);
}

.quote {
  font-size: clamp(1.15rem, 2.5vw, 1.4rem);
  margin: 0 0 1.5rem 0;
  line-height: 1.8;
  font-style: italic;
  color: #1e293b;
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.name {
  font-weight: 700;
  font-size: var(--text-sm);
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.name__line {
  width: 32px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  border-radius: 3px;
  flex-shrink: 0;
}

.controls {
  display: flex;
  gap: 0.75rem;
  margin-top: clamp(1.5rem, 3vw, 2rem);
  justify-content: center;
  position: relative;
  z-index: 1;
}

.controls button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(99, 102, 241, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.controls button:hover {
  background: rgba(99, 102, 241, 0.4);
  transform: scale(1.1);
}

.controls button:active {
  transform: scale(0.95);
}

.controls button.active {
  background: linear-gradient(135deg, #6366f1, #ec4899);
  width: 32px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

@media (max-width: 640px) {
  .testimonials {
    text-align: center;
    padding: clamp(2rem, 4vw, 3rem);
  }

  .testimonials__quote-icon {
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    top: 1rem;
  }

  .name {
    justify-content: center;
  }

  .name__line {
    display: none;
  }

  .quote {
    font-size: var(--text-base);
  }

  .testimonials__glow {
    animation: none;
    opacity: 0.4;
  }
}

@media (max-width: 360px) {
  .testimonials {
    padding: 1.5rem;
    min-height: 200px;
    border-radius: 20px;
  }

  .testimonials__quote-icon {
    font-size: 3rem;
    top: 0.75rem;
  }

  .slide {
    padding: 1.5rem;
  }

  .quote {
    font-size: var(--text-sm);
    margin-bottom: 1rem;
  }

  .controls {
    margin-top: 1rem;
  }

  .controls button {
    width: 10px;
    height: 10px;
  }

  .controls button.active {
    width: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide {
    transition: none;
  }

  .controls button {
    transition: none;
  }

  .testimonials__glow {
    animation: none;
  }
}
</style>
