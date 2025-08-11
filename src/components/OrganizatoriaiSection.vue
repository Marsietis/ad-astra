<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="content-section" :class="{ visible: isVisible }">
    <div class="content-container">
      <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">{{ t.organizatoriaiTitle }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
        <div class="flex justify-center h-38 items-center">
          <img src="/vusa.png" alt="VU SA logo" class="max-w-full h-full object-contain" />
        </div>
        <div class="flex justify-center h-38 items-center">
          <img src="/vu.png" alt="VU logo" class="max-w-full h-full object-contain" />
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
  max-width: 800px;
  text-align: center;
}

@media (max-width: 768px) {
  .content-section {
    padding: 2rem 1rem;
  }

  .content-container h2 {
    font-size: 2rem;
  }
}
</style>
