<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { onMounted, onUnmounted } from 'vue'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

let scrollTimeout: number | null = null

const handleWheel = (event: WheelEvent) => {
  // Only handle scroll up events
  if (event.deltaY < 0) {
    event.preventDefault()

    // Clear any existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    // Add a small delay to prevent too rapid scrolling
    scrollTimeout = setTimeout(() => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        heroSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }
}

onMounted(() => {
  if (sectionRef.value) {
    sectionRef.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (sectionRef.value) {
    sectionRef.value.removeEventListener('wheel', handleWheel)
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
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
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-8 sm:mb-12 lg:mb-16 uppercase"
        >
          {{ t.eventInfoTitle }}
        </h2>

        <!-- Event Details -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-6 max-w-5xl mx-auto">
          <!-- Date -->
          <div class="text-center">
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mx-auto mb-4 sm:mb-6"
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
              class="text-sm sm:text-base lg:text-lg font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4"
            >
              {{ t.dateLabel }}
            </div>
            <div class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-walsheim text-white">
              {{ t.eventDate }}
            </div>
          </div>

          <!-- Time -->
          <div class="text-center">
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mx-auto mb-4 sm:mb-6"
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
              class="text-sm sm:text-base lg:text-lg font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4"
            >
              {{ t.timeLabel }}
            </div>
            <div class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-walsheim text-white">
              {{ t.eventTime }}
            </div>
          </div>

          <!-- Location -->
          <div class="text-center flex flex-col items-center">
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mx-auto mb-4 sm:mb-6"
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
              class="text-sm sm:text-base lg:text-lg font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4"
            >
              {{ t.locationLabel }}
            </div>
            <div
              class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-walsheim text-white mb-2 sm:mb-3 text-center"
            >
              {{ t.eventLocation }}
            </div>
            <div class="text-base sm:text-lg lg:text-xl text-gray-300 px-2">
              {{ t.eventAddress }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
