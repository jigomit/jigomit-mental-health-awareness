<template>
  <div class="app-shell" :class="{ 'reduce-motion': reduceMotion }">
    <AuroraBackdrop />
    <div class="app-content">
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <NavHeader />
      <main id="main-content">
        <RouterView v-slot="{ Component, route }">
          <Transition name="page-shift" mode="out-in">
            <component :is="Component" :key="route.fullPath" class="page-view" />
          </Transition>
        </RouterView>
      </main>
      <AppFooter />
      <StickyHelplineButton />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { Transition } from 'vue';
import NavHeader from './components/common/NavHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import StickyHelplineButton from './components/common/StickyHelplineButton.vue';
import AuroraBackdrop from './components/common/AuroraBackdrop.vue';
import { useReducedMotion } from './composables/useReducedMotion';
const { reduceMotion } = useReducedMotion();
</script>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(9, 13, 40, 0.55), rgba(7, 10, 27, 0.9));
  overflow-x: hidden;
  contain: layout style;
}

.app-content {
  position: relative;
  z-index: 1;
  width: min(95vw, 1680px);
  margin: 0 auto;
  padding: 1.5rem 2rem 3.5rem;
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  transform: translateY(-200%);
  transition: transform 0.2s ease;
  z-index: 10;
}

.skip-link:focus {
  transform: translateY(0);
}

main {
  min-height: 70vh;
  margin-top: 1.5rem;
  margin-bottom: 2.75rem;
  background: var(--color-surface);
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0 30px 90px rgba(6, 10, 38, 0.4);
  contain: layout style;
}

.page-view {
  min-height: 60vh;
}

/* Disable ALL page transitions for CLS optimization */
.page-shift-enter-active,
.page-shift-leave-active {
  transition: none;
}

.page-shift-enter-from,
.page-shift-leave-to,
.page-shift-enter-to,
.page-shift-leave-from {
  opacity: 1;
}

@media (max-width: 768px) {
  .app-content {
    padding: 0.75rem;
    width: 100%;
  }

  main {
    padding: clamp(1rem, 3vw, 1.5rem);
    border-radius: 20px;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .app-content {
    padding: 0.5rem;
  }

  main {
    padding: 0.75rem;
    border-radius: 16px;
    margin-bottom: 5rem;
  }
}
</style>
