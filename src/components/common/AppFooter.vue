<template>
  <footer class="site-footer" role="contentinfo" aria-label="Site footer">
    <!-- Main Footer -->
    <div class="footer-main">
      <div class="footer-container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <div class="brand-header">
              <img :src="logoSrc" alt="Mental Health Awareness logo" class="brand-logo" width="48" height="48" />
              <span class="brand-name">Mental Health Awareness</span>
            </div>
            <p class="brand-desc">Confidential, culturally humble care teams providing helplines, counselling, and policy-shifting campaigns.</p>
            <div class="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <nav class="footer-col" aria-label="Quick links">
            <h4 class="footer-col__title">Quick Links</h4>
            <ul class="footer-links">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about">About Us</RouterLink></li>
              <li><RouterLink to="/services">Our Services</RouterLink></li>
              <li><RouterLink to="/resources">Free Guides</RouterLink></li>
            </ul>
          </nav>

          <!-- Resources -->
          <nav class="footer-col" aria-label="Resources">
            <h4 class="footer-col__title">Resources</h4>
            <ul class="footer-links">
              <li><RouterLink to="/blog">Blog</RouterLink></li>
              <li><RouterLink to="/impact">Our Impact</RouterLink></li>
              <li><RouterLink to="/events">Events</RouterLink></li>
              <li><RouterLink to="/donate">Donate</RouterLink></li>
              <li><RouterLink to="/contact">Contact Us</RouterLink></li>
            </ul>
          </nav>

          <!-- Contact -->
          <div class="footer-col" role="region" aria-label="Contact information">
            <h4 class="footer-col__title">Get Help 24/7</h4>
            <ul class="contact-list">
              <li>
                <a href="tel:+18005551234" class="contact-link" aria-label="Call Mental Health Helpline at +1 (800) 555-1234">
                  <span class="contact-icon">📞</span>
                  +1 (800) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:help@mentalhealthawareness.org" class="contact-link" aria-label="Email Mental Health Support at help@mentalhealthawareness.org">
                  <span class="contact-icon">✉️</span>
                  help@mentalhealthawareness.org
                </a>
              </li>
            </ul>
            <RouterLink to="/get-help" class="help-btn">Get Help Now</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-container footer-bottom__inner">
        <p>© {{ currentYear }} Mental Health Awareness. All rights reserved.</p>
        <p>We encrypt every message and honor opt-outs without question.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import logoSrc from '../../assets/images/logo.svg';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* ==================== VARIABLES ==================== */
.site-footer {
  --footer-dark: #0f172a;
  --footer-darker: #0a0f1a;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent: #5eead4;
  --accent-blue: #3b82f6;
  margin-top: 4rem;
}

/* ==================== MAIN FOOTER ==================== */
.footer-main {
  background: var(--footer-dark);
  padding: 4rem 1.5rem;
  border-radius: 24px 24px 0 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
  gap: 3rem;
}

/* Brand */
.footer-brand {
  padding-right: 2rem;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.brand-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: var(--accent-blue);
  color: #fff;
  transform: translateY(-2px);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

/* Footer Columns */
.footer-col__title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--accent);
}

/* Contact */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
}

.contact-list li {
  margin-bottom: 0.75rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--accent);
}

.contact-icon {
  font-size: 1rem;
}

.help-btn {
  display: inline-block;
  padding: 0.85rem 1.5rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-blue));
  color: var(--footer-dark);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 10px;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(94, 234, 212, 0.25);
}

.help-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.35);
}

/* ==================== FOOTER BOTTOM ==================== */
.footer-bottom {
  background: var(--footer-darker);
  padding: 1.5rem;
}

.footer-bottom__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .brand-header {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 3rem 1rem;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom__inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 540px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-col {
    text-align: center;
  }

  .contact-link {
    justify-content: center;
  }

  .help-btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 360px) {
  .site-footer {
    margin-top: 2.5rem;
  }

  .footer-main {
    padding: 2rem 0.75rem;
  }

  .footer-grid {
    gap: 1.5rem;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
  }

  .brand-name {
    font-size: 1rem;
  }

  .brand-desc {
    font-size: 0.85rem;
  }

  .social-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .social-btn svg {
    width: 18px;
    height: 18px;
  }

  .footer-col__title {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  .footer-links a {
    font-size: 0.85rem;
  }

  .contact-link {
    font-size: 0.8rem;
  }

  .help-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
  }

  .footer-bottom {
    padding: 1rem 0.75rem;
  }

  .footer-bottom p {
    font-size: 0.7rem;
  }
}
</style>
