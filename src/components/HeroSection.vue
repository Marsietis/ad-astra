<script setup lang="ts">
import logoUrl from '/src/assets/logo.png'
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()
</script>

<template>
  <main class="hero-section">
    <div class="hero-content">
      <div class="flex-1 max-w-3xl">
        <h1 class="text-yellow-500 text-7xl font-bold font-extrabold mb-16">AD ASTRA</h1>
        <div class="text-white text-6xl font-bold font-sans mb-2">{{ t.subtitle }}</div>
        <div class="text-white text-4xl font-light font-sans mb-2 mt-8">
          {{ t.description }}
        </div>
        <div class="text-yellow-500 text-8xl font-extrabold font-sans mt-8">09.05</div>
      </div>
      <div class="flex-1 flex justify-center items-center max-w-lg min-h-96">
        <img
          :src="logoUrl"
          alt="Ad Astra Logo"
          class="w-full max-w-md h-auto drop-shadow-lg object-contain"
        />
      </div>
    </div>
    <div class="scroll-indicator"></div>
  </main>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator::before {
  content: '↓';
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.5);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (min-width: 1200px) {
  .hero-content {
    max-width: 1400px;
    gap: 6rem;
  }

  .hero-text {
    max-width: 700px;
  }

  .hero-text h1 {
    font-size: 4rem;
  }

  .hero-logo {
    max-width: 600px;
  }

  .hero-logo img {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-section {
    padding: 2rem 1rem;
  }
}
</style>