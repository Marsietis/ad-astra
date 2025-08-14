<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="partners"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
      <h2 class="text-4xl lg:text-5xl font-walsheim text-white mb-8 text-center uppercase">
        {{ t.partnersTitle }}
      </h2>
      <img
        src="@/assets/partneriai.png"
        alt="Partners"
        class="w-full h-auto max-w-full object-contain"
      />
    </div>
  </section>
</template>
