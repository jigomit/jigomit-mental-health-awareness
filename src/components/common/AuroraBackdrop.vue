<template>
  <div class="aurora" aria-hidden="true">
    <span class="orb orb-one"></span>
    <span class="orb orb-two"></span>
    <span class="orb orb-three"></span>
  </div>
</template>

<style scoped>
.aurora {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle at 20% 20%, rgba(111, 126, 255, 0.2), transparent 55%),
    radial-gradient(circle at 80% 10%, rgba(255, 160, 229, 0.15), transparent 45%),
    radial-gradient(circle at 70% 80%, rgba(120, 255, 214, 0.1), transparent 40%);
  overflow: hidden;
  transform: translateZ(0);
  contain: layout style paint;
}

.orb {
  position: absolute;
  width: 55vw;
  height: 55vw;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  transform: translateZ(0);
  backface-visibility: hidden;
  contain: layout style paint;
}

.orb-one {
  top: -20%;
  left: -10%;
  background: radial-gradient(circle, rgba(90, 107, 255, 0.8), transparent 60%);
}

.orb-two {
  top: 10%;
  right: -25%;
  background: radial-gradient(circle, rgba(255, 139, 213, 0.7), transparent 60%);
}

.orb-three {
  bottom: -25%;
  left: 30%;
  background: radial-gradient(circle, rgba(111, 255, 210, 0.6), transparent 60%);
}

@media (max-width: 768px) {
  .aurora {
    display: none; /* Hide completely on mobile for CLS and performance */
  }

  .orb {
    display: none;
  }
}

@media (max-width: 480px) {
  .aurora,
  .orb {
    display: none;
  }
}

@media (max-width: 360px) {
  .aurora,
  .orb {
    display: none;
  }
}

/* Reduce animation on low-power devices */
@media (prefers-reduced-motion: reduce) {
  .orb {
    animation: none;
  }
}
</style>
