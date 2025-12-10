<template>
  <section class="testimonials" aria-label="Stories from community">
    <article v-for="(item, index) in testimonials" :key="item.name" class="slide" :data-active="index === active">
      <p class="quote">"{{ item.quote }}"</p>
      <p class="name">{{ item.name }}</p>
    </article>
    <div class="controls">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        :class="{ active: index === active }"
        @click="active = index"
        :aria-label="`Show story ${index + 1}`"
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
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: clamp(20px, 4vw, 32px);
  background: var(--color-neutral-50);
  border: 1px solid var(--color-border);
  overflow: hidden;
  min-height: 200px;
}

.slide {
  opacity: 0;
  transition: opacity 0.6s ease;
  position: absolute;
  inset: 0;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide[data-active='true'] {
  position: relative;
  opacity: 1;
}

.quote {
  font-size: var(--text-lg);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.name {
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
}

.controls {
  display: flex;
  gap: 0.5rem;
  margin-top: clamp(1rem, 3vw, 2rem);
  justify-content: center;
}

.controls button {
  width: clamp(10px, 2vw, 12px);
  height: clamp(10px, 2vw, 12px);
  border-radius: 50%;
  border: none;
  background: var(--color-neutral-300);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  padding: 0;
}

.controls button:active {
  transform: scale(0.9);
}

.controls button.active {
  background: var(--color-primary);
}

@media (max-width: 640px) {
  .testimonials {
    text-align: center;
  }

  .quote {
    font-size: var(--text-base);
  }
}

@media (max-width: 360px) {
  .testimonials {
    padding: 1rem;
    min-height: 180px;
    border-radius: 16px;
  }

  .slide {
    padding: 1rem;
  }

  .quote {
    font-size: var(--text-sm);
    margin-bottom: 0.75rem;
  }

  .controls {
    margin-top: 0.75rem;
  }
}
</style>
