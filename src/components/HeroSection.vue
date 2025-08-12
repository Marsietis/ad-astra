<script setup lang="ts">
import logoUrl from '/src/assets/logo.png'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollHint } from '@/composables/useScrollHint'

const { t } = useTranslations()
const { showHint } = useScrollHint()
</script>

<template>
  <main id="hero" class="min-h-screen flex items-center px-4 lg:px-8 relative">
    <div
      class="flex items-center justify-between w-full max-w-8xl mx-32 gap-16 flex-col lg:flex-row text-center lg:text-left"
    >
      <div class="flex-1 max-w-3xl">
        <h1
          class="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-amber-400 mb-6 leading-none tracking-tight"
        >
          AD ASTRA
        </h1>
        <div
          class="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-none tracking-tight whitespace-nowrap"
        >
          {{ t.subtitle }}
        </div>
        <div class="text-xl lg:text-3xl font-light text-white mb-8 leading-relaxed">
          {{ t.description }}
        </div>
        <div
          class="text-6xl lg:text-7xl xl:text-8xl font-extrabold text-amber-400 mb-8 leading-none tracking-tight drop-shadow-lg"
        >
          09.05
        </div>

        <a
          :href="t.registrationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-amber-400/25 hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 group"
        >
          {{ t.registrationTitle }}
          <svg
            class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
      <div class="flex-1 flex justify-center items-center max-w-lg">
        <img
          :src="logoUrl"
          alt="Ad Astra Logo"
          class="w-full max-w-md h-auto drop-shadow-xl object-contain"
        />
      </div>
    </div>
    <div 
      class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
      :class="{ 'opacity-0 pointer-events-none': showHint }"
    >
      <span class="text-2xl text-white/50">↓</span>
    </div>
  </main>
</template>

<style scoped>
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

.scroll-indicator {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .whitespace-nowrap {
    white-space: normal;
  }
}
</style>
