<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section id="why-ad-astra" ref="sectionRef" class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out" :class="{ 'opacity-100 translate-y-0': isVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh]">
        <div class="relative h-64 sm:h-80 lg:h-[400px] flex items-center justify-center hidden md:block">
          <div class="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full top-1/4 left-1/6 lg:top-1/5 lg:left-1/10 animate-pulse -z-10 accent-glow"></div>
          <div class="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-full top-3/5 left-1/3 lg:left-1/4 animate-pulse -z-10 accent-glow-secondary"></div>
        </div>
        <div class="relative z-10 text-center lg:text-right">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-walsheim text-white mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            {{ t.whyAdAstraTitle }} ✨
          </h2>
          <div class="text-base sm:text-lg lg:text-xl font-light text-white mb-4 lg:mb-6 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            {{ t.whyAdAstraText }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accent-glow {
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.15) 0%,
    rgba(245, 158, 11, 0.08) 40%,
    rgba(245, 158, 11, 0.03) 70%,
    transparent 100%
  );
  opacity: 0.2;
  filter: blur(15px);
}

.accent-glow-secondary {
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.1) 0%,
    rgba(245, 158, 11, 0.05) 30%,
    rgba(245, 158, 11, 0.02) 60%,
    transparent 100%
  );
  opacity: 0.15;
  filter: blur(20px);
}

@keyframes pulse-accent {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.9;
  }
}

.animate-pulse {
  animation: pulse-accent 6s ease-in-out infinite;
}

@media (max-width: 768px) {
  .accent-glow,
  .accent-glow-secondary {
    opacity: 0.1;
    filter: blur(10px);
  }
}
</style>
