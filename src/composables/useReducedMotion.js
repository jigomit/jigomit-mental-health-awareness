import { ref, watch } from 'vue';

const reduceMotion = ref(false);
let initialized = false;

const syncPreference = value => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('reduce-motion', value);
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('mh-reduce-motion', value ? '1' : '0');
  }
};

const init = () => {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  const stored = window.localStorage.getItem('mh-reduce-motion');
  if (stored) {
    reduceMotion.value = stored === '1';
  } else {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotion.value = media.matches;
    media.addEventListener('change', event => {
      reduceMotion.value = event.matches;
    });
  }
  syncPreference(reduceMotion.value);
};

export const useReducedMotion = () => {
  init();

  const toggleReduceMotion = value => {
    reduceMotion.value = typeof value === 'boolean' ? value : !reduceMotion.value;
  };

  watch(
    reduceMotion,
    value => {
      syncPreference(value);
    },
    { immediate: true }
  );

  return {
    reduceMotion,
    toggleReduceMotion
  };
};
