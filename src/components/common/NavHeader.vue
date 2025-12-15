<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }" role="banner">
    <!-- Logo/Brand -->
    <RouterLink to="/" class="brand" @click="closeNav" aria-label="Mental Health Awareness - Home">
      <img :src="logoSrc" alt="Mental Health Awareness Logo" class="brand__logo" width="36" height="36" />
      <div class="brand__text">
        <strong>MindCare</strong>
        <span class="brand__tagline">Mental Health Support</span>
      </div>
    </RouterLink>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav" aria-label="Main navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/resources">Resources</RouterLink>
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- Desktop CTA Button -->
    <div class="desktop-ctas">
      <RouterLink class="btn btn--primary" to="/get-help">
        <span>Get Help Now</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </RouterLink>
    </div>

    <!-- Mobile Actions -->
    <div class="mobile-actions">
      <RouterLink class="btn btn--primary btn--sm" to="/get-help">Help</RouterLink>
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
    <nav class="mobile-nav" :class="{ 'is-open': menuOpen }" aria-label="Mobile navigation">
      <RouterLink to="/" @click="closeNav">
        <span class="nav-icon">🏠</span> Home
      </RouterLink>
      <RouterLink to="/about" @click="closeNav">
        <span class="nav-icon">ℹ️</span> About
      </RouterLink>
      <RouterLink to="/services" @click="closeNav">
        <span class="nav-icon">🩺</span> Services
      </RouterLink>
      <RouterLink to="/resources" @click="closeNav">
        <span class="nav-icon">📚</span> Resources
      </RouterLink>
      <RouterLink to="/events" @click="closeNav">
        <span class="nav-icon">📅</span> Events
      </RouterLink>
      <RouterLink to="/donate" @click="closeNav">
        <span class="nav-icon">💜</span> Donate
      </RouterLink>
      <RouterLink to="/contact" @click="closeNav">
        <span class="nav-icon">📧</span> Contact
      </RouterLink>
      <RouterLink to="/get-help" class="mobile-nav__cta" @click="closeNav">
        Get Help Now
      </RouterLink>
    </nav>

    <!-- Backdrop for mobile menu -->
    <div class="backdrop" :class="{ 'is-visible': menuOpen }" @click="closeNav"></div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logoSrc from '../../assets/images/logo.svg';

const menuOpen = ref(false);
const route = useRoute();

const closeNav = () => {
  menuOpen.value = false;
};

// Close menu on escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && menuOpen.value) {
    closeNav();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});

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
  padding: 0.6rem 1.25rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: 1000;
  min-height: 60px;
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
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: contain;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2));
  padding: 6px;
}

.brand__text {
  display: flex;
  flex-direction: column;
}

.brand__text strong {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, #fff, #c7d2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand__tagline {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
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
  position: relative;
  padding: 0.5rem 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  border-radius: 2px;
  transition: all 0.2s ease;
  transform: translateX(-50%);
}

.desktop-nav a:hover {
  color: #fff;
}

.desktop-nav a:hover::after {
  width: 60%;
}

.desktop-nav a.router-link-exact-active {
  color: #a5b4fc;
}

.desktop-nav a.router-link-exact-active::after {
  width: 60%;
  background: #a5b4fc;
}

/* ==================== BUTTONS ==================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn--primary {
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

.btn--primary:hover {
  box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
  transform: translateY(-2px);
}

.btn--primary svg {
  transition: transform 0.2s ease;
}

.btn--primary:hover svg {
  transform: translateX(3px);
}

.btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

/* ==================== DESKTOP CTAS ==================== */
.desktop-ctas {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* ==================== MOBILE ACTIONS ==================== */
.mobile-actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
}

/* ==================== MENU TOGGLE ==================== */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  padding: 0;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  cursor: pointer;
  gap: 6px;
  transition: all 0.2s ease;
}

.menu-toggle:hover {
  background: rgba(99, 102, 241, 0.25);
}

.menu-toggle__bar {
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Hamburger to X animation */
.menu-open .menu-toggle {
  background: rgba(236, 72, 153, 0.2);
  border-color: rgba(236, 72, 153, 0.4);
}

.menu-open .menu-toggle__bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-open .menu-toggle__bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-open .menu-toggle__bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ==================== MOBILE NAV ==================== */
.mobile-nav {
  display: none;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px) scale(0.98);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.mobile-nav.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.mobile-nav a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-nav a:hover,
.mobile-nav a:active {
  background: rgba(99, 102, 241, 0.15);
  color: #fff;
}

.mobile-nav a.router-link-exact-active {
  color: #a5b4fc;
  background: rgba(99, 102, 241, 0.1);
}

.nav-icon {
  font-size: 1.1rem;
}

.mobile-nav__cta {
  margin-top: 0.75rem;
  padding: 1rem !important;
  background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
  color: #fff !important;
  text-align: center;
  justify-content: center;
  font-weight: 700 !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.mobile-nav__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
}

/* ==================== BACKDROP ==================== */
.backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.backdrop.is-visible {
  opacity: 1;
}

/* ==================== RESPONSIVE: TABLET & BELOW ==================== */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .desktop-ctas {
    display: none;
  }

  .mobile-actions {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }

  .backdrop {
    display: block;
  }
}

/* ==================== RESPONSIVE: MOBILE 768px ==================== */
@media (max-width: 768px) {
  .site-header {
    padding: 0.5rem 1rem;
    top: 0.5rem;
    border-radius: 14px;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(15, 23, 42, 0.98);
  }

  .brand__logo {
    width: 36px;
    height: 36px;
  }

  .brand__text strong {
    font-size: 0.9rem;
  }

  .brand__tagline {
    display: none;
  }

  .menu-toggle {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
}

/* ==================== RESPONSIVE: SMALL MOBILE 480px ==================== */
@media (max-width: 480px) {
  .site-header {
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
    top: 0.35rem;
    border-radius: 12px;
    min-height: 54px;
  }

  .brand {
    gap: 0.5rem;
  }

  .brand__logo {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    padding: 4px;
  }

  .brand__text strong {
    font-size: 0.85rem;
  }

  .mobile-actions {
    gap: 0.5rem;
  }

  .btn--sm {
    padding: 0.45rem 0.75rem;
    font-size: 0.7rem;
  }

  .menu-toggle {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
    border-radius: 10px;
    gap: 5px;
  }

  .menu-toggle__bar {
    width: 18px;
  }

  .mobile-nav {
    padding: 0.5rem;
    border-radius: 14px;
  }

  .mobile-nav a {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
    border-radius: 10px;
  }

  .nav-icon {
    font-size: 1rem;
  }
}

/* ==================== RESPONSIVE: EXTRA SMALL 360px ==================== */
@media (max-width: 360px) {
  .site-header {
    padding: 0.4rem 0.5rem;
    gap: 0.4rem;
  }

  .brand__logo {
    width: 28px;
    height: 28px;
    padding: 3px;
  }

  .brand__text strong {
    font-size: 0.75rem;
  }

  .btn--sm {
    padding: 0.4rem 0.6rem;
    font-size: 0.65rem;
  }

  .menu-toggle {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .menu-toggle__bar {
    width: 16px;
  }

  .mobile-nav a {
    padding: 0.7rem 0.75rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .menu-toggle__bar,
  .mobile-nav,
  .btn,
  .desktop-nav a::after {
    transition: none;
  }
}
</style>
