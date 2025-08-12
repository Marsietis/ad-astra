<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section id="program" ref="sectionRef" class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out" :class="{ 'opacity-100 translate-y-0': isVisible }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">{{ t.programTitle }}</h2>
        <div class="text-base sm:text-lg lg:text-xl font-light text-white mb-8 lg:mb-12 max-w-3xl mx-auto lg:mx-0">
          {{ t.programDescription }}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-4xl mx-auto">
        <div class="transform transition-all duration-300 hover:-translate-y-2 h-full">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/50 hover:border-amber-400/30 h-64 sm:h-72 lg:h-80 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4">{{ t.scientificZone }}</h3>
            <p class="text-base sm:text-lg text-gray-200 flex-1 overflow-hidden">
              {{ t.scientificZoneDesc }}
            </p>
          </div>
        </div>

        <div class="transform transition-all duration-300 hover:-translate-y-2 h-full">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/50 hover:border-amber-400/30 h-64 sm:h-72 lg:h-80 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4">{{ t.contactFair }}</h3>
            <p class="text-base sm:text-lg text-gray-200 flex-1 overflow-hidden">
              {{ t.contactFairDesc }}
            </p>
          </div>
        </div>

        <div class="transform transition-all duration-300 hover:-translate-y-2 h-full">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/50 hover:border-amber-400/30 h-64 sm:h-72 lg:h-80 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4">{{ t.discussionZone }}</h3>
            <p class="text-base sm:text-lg text-gray-200 flex-1 overflow-hidden">
              {{ t.discussionZoneDesc }}
            </p>
          </div>
        </div>

        <div class="transform transition-all duration-300 hover:-translate-y-2 h-full">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/50 hover:border-amber-400/30 h-64 sm:h-72 lg:h-80 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4">{{ t.concertPart }}</h3>
            <p class="text-base sm:text-lg text-gray-200 flex-1 overflow-hidden">
              {{ t.concertPartDesc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .grid > div {
    transform: translateY(0) !important;
  }

  .grid > div:hover {
    transform: translateY(-0.5rem) !important;
  }
}
</style>