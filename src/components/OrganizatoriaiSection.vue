<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="organizatoriai"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 text-center">
        {{ t.organizatoriaiTitle }}
      </h2>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 lg:mt-12"
      >
        <div
          class="flex flex-col items-start md:items-center w-full max-w-xs mx-auto md:max-w-none md:mx-0 md:w-auto"
        >
          <div
            class="flex justify-start md:justify-center items-center h-32 sm:h-36 md:h-40 w-full"
          >
            <a
              href="https://vusa.lt"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/vusa.png"
                alt="VU SA logo"
                class="max-w-full max-h-full object-contain brightness-110 transition-all duration-300 hover:brightness-125"
              />
            </a>
          </div>
        </div>
        <div
          class="flex flex-col items-start md:items-center w-full max-w-xs mx-auto md:max-w-none md:mx-0 md:w-auto"
        >
          <div
            class="flex justify-start md:justify-center items-center h-32 sm:h-36 md:h-40 w-full"
          >
            <a
              href="https://vu.lt"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/vu.png"
                alt="VU logo"
                class="max-w-full max-h-full object-contain brightness-110 transition-all duration-300 hover:brightness-125"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
