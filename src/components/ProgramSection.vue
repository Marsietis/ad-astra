<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out" :class="{ 'opacity-100 translate-y-0': isVisible }">
    <div class="max-w-screen-2xl mx-auto px-2 sm:px-4 w-full">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 ml-24 text-left">{{ t.programTitle }}</h2>
      <div class="text-lg lg:text-xl font-light text-white mb-6 ml-24 text-left">
        {{ t.programDescription }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 relative">
        <div class="transform transition-all duration-300 hover:-translate-y-2">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-amber-400/30">
            <h3 class="text-2xl font-semibold text-amber-400 mb-4">{{ t.scientificZone }}</h3>
            <p class="text-lg text-gray-200">
              {{ t.scientificZoneDesc }}
            </p>
          </div>
        </div>

        <div class="transform translate-y-8 transition-all duration-300 hover:translate-y-6">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-amber-400/30">
            <h3 class="text-2xl font-semibold text-amber-400 mb-4">{{ t.contactFair }}</h3>
            <p class="text-lg text-gray-200">
              {{ t.contactFairDesc }}
            </p>
          </div>
        </div>

        <div class="transform translate-y-4 transition-all duration-300 hover:translate-y-2">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-amber-400/30">
            <h3 class="text-2xl font-semibold text-amber-400 mb-4">{{ t.discussionZone }}</h3>
            <p class="text-lg text-gray-200">
              {{ t.discussionZoneDesc }}
            </p>
          </div>
        </div>

        <div class="transform translate-y-12 transition-all duration-300 hover:translate-y-10">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-amber-400/30">
            <h3 class="text-2xl font-semibold text-amber-400 mb-4">{{ t.concertPart }}</h3>
            <p class="text-lg text-gray-200">
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
  .ml-24 {
    margin-left: 0 !important;
    text-align: center !important;
  }

  .grid > div {
    transform: translateY(0) !important;
  }

  .grid > div:hover {
    transform: translateY(-0.5rem) !important;
  }
}
</style>