<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="event-info"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-12 lg:mb-16">
          {{ t.eventInfoTitle }}
        </h2>

        <!-- Event Details -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 max-w-6xl mx-auto">
          <!-- Date -->
          <div class="text-center">
            <svg
              class="w-8 h-8 lg:w-10 lg:h-10 text-amber-400 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div
              class="text-base lg:text-lg font-medium text-amber-400 uppercase tracking-wider mb-4"
            >
              {{ t.dateLabel }}
            </div>
            <div class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
              {{ t.eventDate }}
            </div>
          </div>

          <!-- Time -->
          <div class="text-center">
            <svg
              class="w-8 h-8 lg:w-10 lg:h-10 text-amber-400 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div
              class="text-base lg:text-lg font-medium text-amber-400 uppercase tracking-wider mb-4"
            >
              {{ t.timeLabel }}
            </div>
            <div class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
              {{ t.eventTime }}
            </div>
          </div>

          <!-- Location -->
          <div class="text-center">
            <svg
              class="w-8 h-8 lg:w-10 lg:h-10 text-amber-400 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div
              class="text-base lg:text-lg font-medium text-amber-400 uppercase tracking-wider mb-4"
            >
              {{ t.locationLabel }}
            </div>
            <div class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
              {{ t.eventLocation }}
            </div>
            <div class="text-lg lg:text-xl text-gray-300">
              {{ t.eventAddress }}
            </div>
          </div>
        </div>

        <!-- More info message -->
        <div class="text-base lg:text-lg text-gray-400 text-center mt-8 lg:mt-12 italic font-light">
          {{ t.moreInfoSoon }}
        </div>
      </div>
    </div>
  </section>
</template>
