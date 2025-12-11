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
  // Disable animations on mobile for better CLS
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (reduceMotion || isMobile) {
    snapToVisible(Array.from(elements));
    return () => {};
  }
  registerPlugins();
  const timelines = [];
  elements.forEach((el, index) => {
    // Use transform instead of y for GPU acceleration
    const tl = gsap.fromTo(
      el,
      { autoAlpha: 0, yPercent: 10, force3D: true },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.05,
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        ...options
      }
    );
    timelines.push(tl);
  });
  return () => {
    timelines.forEach(tl => tl.kill());
  };
};

export const createHeroDepthAnimation = (element, reduceMotion) => {
  if (!element) return () => {};
  // Disable animations on mobile for better CLS
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (reduceMotion || isMobile) {
    element.style.transform = 'translate3d(0,0,0)';
    return () => {};
  }
  registerPlugins();
  const timeline = gsap.fromTo(
    element,
    { scale: 0.96, y: 10 },
    {
      scale: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }
  );
  const parallax = gsap.to(element, {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      scrub: true
    }
  });
  return () => {
    timeline.kill();
    parallax.kill();
  };
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
