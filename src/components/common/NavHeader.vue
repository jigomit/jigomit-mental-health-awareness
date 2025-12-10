<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }">
    <!-- Logo/Brand -->
    <RouterLink to="/" class="brand" @click="closeNav">
      <img :src="logoSrc" alt="" class="brand__logo" />
      <div class="brand__text">
        <strong>Mental Health Awareness</strong>
        <span class="brand__tagline">Every route leads to care</span>
      </div>
    </RouterLink>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/resources">Resources</RouterLink>
      <RouterLink to="/impact">Impact</RouterLink>
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="/donate">Donate</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- Desktop CTA Buttons -->
    <div class="desktop-ctas">
      <RouterLink class="btn btn--outline" to="/impact">Impact Report</RouterLink>
      <RouterLink class="btn btn--primary" to="/get-help">Get Help Now</RouterLink>
    </div>

    <!-- Mobile Right Actions (grouped together) -->
    <div class="mobile-actions">
      <RouterLink class="mobile-cta btn btn--primary" to="/get-help">Get Help Now</RouterLink>
      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
      >
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
      </button>
    </div>

    <!-- Mobile Navigation Dropdown -->
    <nav class="mobile-nav" :class="{ 'is-open': menuOpen }">
      <RouterLink to="/" @click="closeNav">Home</RouterLink>
      <RouterLink to="/about" @click="closeNav">About</RouterLink>
      <RouterLink to="/services" @click="closeNav">Services</RouterLink>
      <RouterLink to="/resources" @click="closeNav">Resources</RouterLink>
      <RouterLink to="/impact" @click="closeNav">Impact</RouterLink>
      <RouterLink to="/events" @click="closeNav">Events</RouterLink>
      <RouterLink to="/donate" @click="closeNav">Donate</RouterLink>
      <RouterLink to="/contact" @click="closeNav">Contact</RouterLink>
      <RouterLink to="/get-help" class="mobile-nav__cta" @click="closeNav">Get Help Now</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logoSrc from '../../assets/images/logo.svg';

const menuOpen = ref(false);
const route = useRoute();

const closeNav = () => {
  menuOpen.value = false;
};

watch(() => route.fullPath, () => closeNav());
</script>

<style scoped>
/* ==================== BASE HEADER ==================== */
.site-header {
  position: sticky;
  top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 1rem;
  background: rgba(10, 15, 30, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

/* ==================== BRAND ==================== */
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  flex-shrink: 0;
}

.brand__logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  object-fit: contain;
}

.brand__text {
  display: flex;
  flex-direction: column;
}

.brand__text strong {
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
}

.brand__tagline {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.2;
}

/* ==================== DESKTOP NAV ==================== */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

.desktop-nav a {
  padding: 0.5rem 0.6rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
}

.desktop-nav a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.desktop-nav a.router-link-exact-active {
  color: #5eead4;
  background: rgba(94, 234, 212, 0.1);
}

/* ==================== BUTTONS ==================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.85rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-radius: 50px;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn--outline {
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
}

.btn--outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn--primary {
  color: #0a0f1e;
  background: linear-gradient(135deg, #5eead4, #3b82f6);
  border: none;
  box-shadow: 0 4px 15px rgba(94, 234, 212, 0.3);
}

.btn--primary:hover {
  box-shadow: 0 6px 20px rgba(94, 234, 212, 0.4);
  transform: translateY(-1px);
}

/* ==================== DESKTOP CTAS ==================== */
.desktop-ctas {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

/* ==================== MOBILE ACTIONS (CTA + Menu Toggle) ==================== */
.mobile-actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
  flex-shrink: 0;
}

.mobile-cta {
  display: inline-flex;
}

/* ==================== MENU TOGGLE ==================== */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  cursor: pointer;
  gap: 5px;
  flex-shrink: 0;
}

.menu-toggle__bar {
  width: 18px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

/* Hamburger to X animation */
.menu-open .menu-toggle__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-open .menu-toggle__bar:nth-child(2) {
  opacity: 0;
}

.menu-open .menu-toggle__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ==================== MOBILE NAV ==================== */
.mobile-nav {
  display: none;
}

/* ==================== NEST HUB MAX: 1280x800 ==================== */
@media (max-width: 1280px) and (max-height: 800px) {
  .site-header {
    padding: 0.5rem 1rem;
    gap: 1rem;
  }

  .brand__logo {
    width: 36px;
    height: 36px;
  }

  .brand__text strong {
    font-size: 0.85rem;
  }

  .brand__tagline {
    font-size: 0.6rem;
  }

  .desktop-nav a {
    padding: 0.4rem 0.5rem;
    font-size: 0.75rem;
  }

  .btn {
    padding: 0.4rem 0.75rem;
    font-size: 0.65rem;
  }
}

/* ==================== NEST HUB: 1024x600 ==================== */
@media (max-width: 1024px) and (max-height: 600px) {
  .site-header {
    padding: 0.4rem 0.75rem;
    gap: 0.75rem;
    top: 0.5rem;
    border-radius: 12px;
  }

  .brand__logo {
    width: 32px;
    height: 32px;
  }

  .brand__text strong {
    font-size: 0.75rem;
  }

  .brand__tagline {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }

  .desktop-nav a {
    padding: 0.35rem 0.4rem;
    font-size: 0.7rem;
  }

  .desktop-ctas {
    display: flex;
  }

  .desktop-ctas .btn--outline {
    display: none;
  }

  .btn {
    padding: 0.35rem 0.65rem;
    font-size: 0.6rem;
  }

  .menu-toggle {
    display: none;
  }

  .mobile-cta {
    display: none;
  }
}

/* ==================== TABLET: 1024px ==================== */
@media (max-width: 1024px) and (min-height: 601px) {
  .desktop-nav {
    display: none;
  }

  .desktop-ctas {
    display: none;
  }

  .mobile-actions {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    background: rgba(10, 15, 30, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.25s, transform 0.25s, visibility 0.25s;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .mobile-nav.is-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-nav a {
    display: block;
    padding: 0.875rem 1rem;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 10px;
    transition: background 0.2s, color 0.2s;
  }

  .mobile-nav a:hover,
  .mobile-nav a:active {
    background: rgba(255, 255, 255, 0.08);
  }

  .mobile-nav a.router-link-exact-active {
    color: #5eead4;
    background: rgba(94, 234, 212, 0.1);
  }

  .mobile-nav__cta {
    margin-top: 0.5rem;
    padding: 1rem !important;
    background: linear-gradient(135deg, #5eead4, #3b82f6) !important;
    color: #0a0f1e !important;
    text-align: center;
    font-weight: 700 !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

/* ==================== TABLET FALLBACK ==================== */
@media (max-width: 1024px) {
  .desktop-ctas {
    display: none;
  }

  .mobile-actions {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    background: rgba(10, 15, 30, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.25s, transform 0.25s, visibility 0.25s;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .mobile-nav.is-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-nav a {
    display: block;
    padding: 0.875rem 1rem;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 10px;
    transition: background 0.2s, color 0.2s;
  }

  .mobile-nav a:hover,
  .mobile-nav a:active {
    background: rgba(255, 255, 255, 0.08);
  }

  .mobile-nav a.router-link-exact-active {
    color: #5eead4;
    background: rgba(94, 234, 212, 0.1);
  }

  .mobile-nav__cta {
    margin-top: 0.5rem;
    padding: 1rem !important;
    background: linear-gradient(135deg, #5eead4, #3b82f6) !important;
    color: #0a0f1e !important;
    text-align: center;
    font-weight: 700 !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

/* ==================== MOBILE: 768px ==================== */
@media (max-width: 768px) {
  .site-header {
    padding: 0.6rem 1rem;
    gap: 0.75rem;
    top: 0.5rem;
  }

  .brand {
    flex: 1;
    min-width: 0;
  }

  .brand__logo {
    width: 36px;
    height: 36px;
  }

  .brand__text strong {
    font-size: 0.85rem;
  }

  .brand__tagline {
    display: none;
  }

  .mobile-actions {
    gap: 0.6rem;
  }

  .mobile-cta {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
  }
}

/* ==================== SMALL MOBILE: 480px ==================== */
@media (max-width: 480px) {
  .site-header {
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
    border-radius: 12px;
    top: 0.35rem;
  }

  .brand {
    gap: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  .brand__logo {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  .brand__text strong {
    font-size: 0.75rem;
  }

  .mobile-actions {
    gap: 0.5rem;
  }

  .mobile-cta {
    padding: 0.45rem 0.8rem;
    font-size: 0.6rem;
  }

  .menu-toggle {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    gap: 4px;
  }

  .menu-toggle__bar {
    width: 16px;
  }

  .mobile-nav {
    padding: 0.35rem;
    border-radius: 12px;
  }

  .mobile-nav a {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
}

/* ==================== EXTRA SMALL: 360px ==================== */
@media (max-width: 360px) {
  .site-header {
    padding: 0.4rem 0.5rem;
    gap: 0.4rem;
  }

  .brand {
    flex: 1;
    min-width: 0;
  }

  .brand__logo {
    width: 28px;
    height: 28px;
  }

  .brand__text strong {
    font-size: 0.65rem;
  }

  .mobile-actions {
    gap: 0.4rem;
  }

  .mobile-cta {
    padding: 0.4rem 0.65rem;
    font-size: 0.55rem;
  }

  .menu-toggle {
    width: 32px;
    height: 32px;
  }
}
</style>
