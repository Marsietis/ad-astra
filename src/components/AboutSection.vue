<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="relative z-10 text-center lg:text-left max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:pr-32 xl:pr-48 2xl:pr-64">
          <h2
            class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 lg:mb-8 uppercase"
          >
            {{ t.whatIsAdAstra }}
          </h2>
          <div
            class="text-base sm:text-lg lg:text-xl font-light text-white mb-4 lg:mb-6"
          >
            {{ t.aboutText1 }}
          </div>
          <div
            class="text-base sm:text-lg lg:text-xl font-light text-white mb-4 lg:mb-6"
          >
            {{ t.aboutText2 }}
          </div>
          <div
            class="text-base sm:text-lg lg:text-xl font-light text-white mb-4 lg:mb-6"
          >
            {{ t.aboutText3 }}
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
  0%,
  100% {
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
