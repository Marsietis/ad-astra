<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="content-section" :class="{ visible: isVisible }">
    <div class="content-container">
      <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">{{ t.partnersTitle }}</h2>
      <div class="text-white text-xl font-light font-sans mb-8 text-left">
        {{ t.partnersDescription }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div class="text-center">
          <div
            class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
          >
            <div class="text-yellow-500 text-3xl font-bold">VU SA</div>
          </div>
          <h3 class="text-white text-xl font-bold mb-2">
            {{ t.vusaPartner }}
          </h3>
          <p class="text-white text-sm font-light">
            {{ t.vusaPartnerDesc }}
          </p>
        </div>

        <div class="text-center">
          <div
            class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
          >
            <div class="text-yellow-500 text-3xl font-bold">VU</div>
          </div>
          <h3 class="text-white text-xl font-bold mb-2">{{ t.vuPartner }}</h3>
          <p class="text-white text-sm font-light">
            {{ t.vuPartnerDesc }}
          </p>
        </div>

        <div class="text-center">
          <div
            class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
          >
            <div class="text-yellow-500 text-2xl font-bold">Fakultetai</div>
          </div>
          <h3 class="text-white text-xl font-bold mb-2">{{ t.facultiesPartner }}</h3>
          <p class="text-white text-sm font-light">{{ t.facultiesPartnerDesc }}</p>
        </div>
      </div>

      <div class="text-center">
        <div class="text-white text-lg font-light mb-4">
          {{ t.partnershipText }}
        </div>
        <div class="text-yellow-500 text-xl font-bold">{{ t.contactEmail }}</div>
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