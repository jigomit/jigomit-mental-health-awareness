import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;
const registerPlugins = () => {
  if (registered) return;
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
};

const snapToVisible = elements => {
  elements.forEach(el => {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
    el.style.transform = 'none';
  });
};

export const createRevealAnimations = (elements, reduceMotion, options = {}) => {
  if (!elements || elements.length === 0) return () => {};
  // DISABLE ALL ANIMATIONS for CLS optimization - show elements immediately
  snapToVisible(Array.from(elements));
  return () => {};
};

export const createHeroDepthAnimation = (element, reduceMotion) => {
  if (!element) return () => {};
  // DISABLE ALL ANIMATIONS for CLS optimization
  element.style.transform = 'translate3d(0,0,0)';
  return () => {};
};

export const fadeInPage = (container, reduceMotion) => {
  if (!container) return;
  if (reduceMotion) {
    container.style.opacity = '1';
    return;
  }
  gsap.fromTo(
    container,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.5 }
  );
};
