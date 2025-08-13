<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import scienceImg from '@/assets/science.jpg'
import contactsImg from '@/assets/contacts.jpg'
import discussionsImg from '@/assets/discussions.jpg'
import concertImg from '@/assets/concert.jpg'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

const currentSlide = ref(0)
let autoScrollInterval: ReturnType<typeof setInterval> | null = null

const programItems = computed(() => [
  {
    title: t.value.scientificZone,
    description: t.value.scientificZoneDesc,
    image: scienceImg
  },
  {
    title: t.value.contactFair,
    description: t.value.contactFairDesc,
    image: contactsImg
  },
  {
    title: t.value.discussionZone,
    description: t.value.discussionZoneDesc,
    image: discussionsImg
  },
  {
    title: t.value.concertPart,
    description: t.value.concertPartDesc,
    image: concertImg
  }
])

const totalSlides = computed(() => programItems.value.length)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoScroll()
}

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    nextSlide()
  }, 4000) // Auto-scroll every 4 seconds
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
}

const resetAutoScroll = () => {
  stopAutoScroll()
  startAutoScroll()
}

const handleManualNavigation = (action: () => void) => {
  action()
  resetAutoScroll()
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section
    id="program"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-40 xl:pl-36 w-full">
      <div class="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-walsheim text-white mb-6 lg:mb-8">
          {{ t.programTitle }}
        </h2>
        <div
          class="text-base sm:text-lg lg:text-xl font-light text-white mb-8 lg:mb-12 max-w-3xl mx-auto lg:mx-0"
        >
          {{ t.programDescription }}
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative mt-12 max-w-6xl mx-auto">
        <!-- Carousel Slides -->
        <div class="overflow-hidden">
          <div 
            class="flex"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(item, index) in programItems"
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <div 
                class="rounded p-8 h-64 flex flex-col justify-center text-center bg-cover bg-center relative"
                :style="{ backgroundImage: `url(${item.image})` }"
              >
                <div class="absolute inset-0 bg-black/60 rounded"></div>
                <div class="relative z-10">
                  <h3 class="text-2xl sm:text-3xl font-semibold text-amber-400 mb-6">
                    {{ item.title }}
                  </h3>
                  <p class="text-lg sm:text-xl text-white leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="handleManualNavigation(prevSlide)"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/60 hover:bg-black/80 rounded-full p-3"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="handleManualNavigation(nextSlide)"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/60 hover:bg-black/80 rounded-full p-3"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(item, index) in programItems"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full"
            :class="index === currentSlide ? 'bg-amber-400' : 'bg-white/40'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Carousel styles are handled by Tailwind classes */
</style>
