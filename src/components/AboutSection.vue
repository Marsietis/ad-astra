<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    ref="sectionRef"
    class="content-section"
    :class="{ visible: isVisible }"
  >
    <div class="content-container">
      <div class="content-grid">
        <div class="content-text">
          <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">
            {{ t.whatIsAdAstra }}
          </h2>
          <div class="text-white text-xl font-light font-sans mb-4 text-left">
            {{ t.aboutText1 }}
          </div>
          <div class="text-white text-xl font-light font-sans mb-4 text-left">
            {{ t.aboutText2 }}
          </div>
        </div>
        <div class="content-accent">
          <div class="accent-shape accent-shape-1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-container {
  max-width: 1200px;
  width: 100%;
  text-align: left;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 60vh;
}

.content-text {
  position: relative;
  z-index: 2;
}

.content-accent {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.accent-shape {
  position: absolute;
  opacity: 0.15;
}

.accent-shape-1 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  top: 20%;
  right: 10%;
  animation: pulse-accent 6s ease-in-out infinite;
}


@keyframes pulse-accent {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.25;
  }
}


@media (max-width: 768px) {
  .content-section {
    padding: 2rem 1rem;
  }

  .content-container h2 {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .content-accent {
    height: 200px;
    order: -1;
  }
  
  .accent-shape-1 {
    width: 120px;
    height: 120px;
    top: 10%;
    right: 20%;
  }
  
  .accent-shape-2 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 25%;
  }
}
</style>