<script setup lang="ts">
import logoUrl from '/src/assets/logo.png'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollHint } from '@/composables/useScrollHint'

const { t } = useTranslations()
const { showHint } = useScrollHint()
</script>

<template>
  <main
    id="hero"
    class="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-24 lg:pt-0 lg:items-center"
  >
    <div
      class="flex items-center justify-center lg:justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-16 flex-col lg:flex-row text-center lg:text-left"
    >
      <div class="flex-1 max-w-3xl">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-400 mb-4 lg:mb-6 leading-none tracking-tight"
        >
          AD ASTRA
        </h1>
        <div
          class="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-extrabold text-white mb-4 lg:mb-6 leading-tight tracking-tight"
        >
          {{ t.subtitle }}
        </div>
        <div
          class="text-lg sm:text-xl lg:text-3xl font-light text-white mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          {{ t.description }}
        </div>
        <div
          class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-amber-400 mb-6 lg:mb-8 leading-none tracking-tight drop-shadow-lg"
        >
          09.05
        </div>

        <a
          :href="t.registrationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-amber-400/25 hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 group"
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
      <div
        class="flex-1 flex justify-center items-center max-w-sm lg:max-w-lg order-first lg:order-last"
      >
        <img
          :src="logoUrl"
          alt="Ad Astra Logo"
          class="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto drop-shadow-xl object-contain"
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
