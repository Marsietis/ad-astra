<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out" :class="{ 'opacity-100 translate-y-0': isVisible }">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">{{ t.organizatoriaiTitle }}</h2>

      <div class="flex items-center justify-center gap-16 mt-12">
        <div class="flex justify-center items-center h-40">
          <img src="/vusa.png" alt="VU SA logo" class="max-w-full max-h-full object-contain brightness-110 transition-all duration-300 hover:scale-105 hover:brightness-125" />
        </div>
        <div class="flex justify-center items-center h-40">
          <img src="/vu.png" alt="VU logo" class="max-w-full max-h-full object-contain brightness-110 transition-all duration-300 hover:scale-105 hover:brightness-125" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .flex {
    @apply flex-col gap-12;
  }
}
</style>
