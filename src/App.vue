<script setup lang="ts">
import LanguageToggle from '@/components/LanguageToggle.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EventInfoSection from '@/components/EventInfoSection.vue'
import WhyAdAstraSection from '@/components/WhyAdAstraSection.vue'
import ProgramSection from '@/components/ProgramSection.vue'
import NewsSection from '@/components/NewsSection.vue'
import PartnersSection from '@/components/PartnersSection.vue'
import OrganizatoriaiSection from '@/components/OrganizatoriaiSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useBackgroundAnimations } from '@/composables/useScrollAnimation'

useBackgroundAnimations()
</script>

<template>
  <div id="app">
    <LanguageToggle />
    <HeroSection />

    <div class="layout-container layout-offset-right">
      <AboutSection />
    </div>

    <!-- Floating decorative elements -->
    <div class="floating-accent accent-1"></div>

    <div class="layout-container layout-offset-left">
      <EventInfoSection />
    </div>

    <div class="layout-container layout-offset-right">
      <WhyAdAstraSection />
    </div>

    <div class="layout-container layout-offset-left">
      <ProgramSection />
    </div>

    <div class="layout-container layout-center-wide">
      <NewsSection />
    </div>

    <div class="layout-container layout-offset-right">
      <OrganizatoriaiSection />
    </div>

    <div class="layout-container layout-full-bleed">
      <PartnersSection />
    </div>

    <FooterSection />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(160deg, #030408 0%, #030408 85%, #080c32 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 4s ease-in-out infinite alternate;
}

.star:nth-child(2n) {
  animation-delay: -1s;
}

.star:nth-child(3n) {
  animation-delay: -2s;
}

.star:nth-child(4n) {
  animation-delay: -0.5s;
}

.star:nth-child(5n) {
  animation-delay: -1.5s;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.star-tiny {
  width: 2px;
  height: 2px;
}

.star-small {
  width: 4px;
  height: 4px;
}

.star-svg {
  width: 20px;
  height: 20px;
  background-image: url('@/assets/star.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(0) invert(1);
  animation: twinkle-rotate 8s ease-in-out infinite alternate;
  border-radius: 0 !important;
  background-color: transparent !important;
}

@keyframes twinkle-rotate {
  0% {
    opacity: 0.3;
    transform: rotate(0deg) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: rotate(360deg) scale(1);
  }
}

.star-5point {
  width: 12px;
  height: 12px;
  background: white;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: twinkle-pulse 5s ease-in-out infinite alternate;
}

@keyframes twinkle-pulse {
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: shoot 3s linear forwards;
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, white);
  transform-origin: 100% 50%;
  transform: translateY(-50%);
  animation: tail 3s linear forwards;
}

.shooting-star::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
  transform-origin: 100% 50%;
  transform: translateY(-50%);
  animation: tail 3s linear forwards;
  animation-delay: 0.1s;
}

@keyframes shoot {
  0% {
    opacity: 0;
    transform: translateX(0) translateY(0) rotate(var(--rotation, 0deg));
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(var(--delta-x, 300px)) translateY(var(--delta-y, 150px))
      rotate(var(--rotation, 0deg));
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  10% {
    width: 0;
  }
  50% {
    width: 40px;
  }
  90% {
    width: 40px;
  }
  100% {
    width: 0;
  }
}

.background-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.05;
  animation: subtle-float 30s ease-in-out infinite;
}

.shape.circle {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 100%
  );
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.shape:nth-child(2n) {
  animation-duration: 25s;
  animation-direction: reverse;
}

.shape:nth-child(3n) {
  animation-duration: 30s;
}

.shape:nth-child(4n) {
  animation-duration: 18s;
  animation-direction: reverse;
}

@keyframes subtle-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

#app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  grid-template-columns: none !important;
}

/* Layout containers for dynamic positioning */
.layout-container {
  position: relative;
  width: 100%;
  z-index: 2;
}

.layout-offset-right {
  padding-left: 10vw;
  padding-right: 5vw;
}

.layout-offset-left {
  padding-left: 5vw;
  padding-right: 10vw;
}

.layout-center-wide {
  padding-left: 3vw;
  padding-right: 3vw;
}

.layout-full-bleed {
  padding: 0;
}

/* Floating decorative accents */
.floating-accent {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  opacity: 0.1;
}

.accent-1 {
  top: 120vh;
  right: 8vw;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 8s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .layout-offset-right,
  .layout-offset-left {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .layout-center-wide {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .floating-accent {
    display: none;
  }
}

body {
  display: block !important;
  place-items: initial !important;
}
</style>
