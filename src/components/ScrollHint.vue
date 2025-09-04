<template>
  <Transition name="scroll-hint" appear>
    <div
      v-if="showHint"
      class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      @click="scrollToNext"
    >
      <div class="flex flex-col items-center animate-bounce">
        <div class="bg-amber-400/20 backdrop-blur-sm rounded-full p-3 mb-2 border border-amber-400/30">
          <svg
            class="w-6 h-6 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <span class="text-amber-400 text-xs font-medium opacity-80">{{ t.scrollDown }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollHint } from '@/composables/useScrollHint'
import { useTranslations } from '@/composables/useTranslations'

const { showHint, setShowHint } = useScrollHint()
const { t } = useTranslations()
let scrollTimer: number | null = null
let lastScrollY = 0
let currentSection = 0

const sections = [
  'hero',
  'current-events',
  'detailed-program',
  'event-info',
  'about',
  'why-ad-astra',
  'news',
  'organizatoriai',
  'partners'
]

const startTimer = () => {
  if (scrollTimer) clearTimeout(scrollTimer)

  scrollTimer = setTimeout(() => {
    // Only show hint if we're not at the last section
    if (currentSection < sections.length - 1) {
      setShowHint(true)
    }
  }, 10000) // Show after 10 seconds of no scrolling
}

const hideHint = () => {
  setShowHint(false)
  if (scrollTimer) {
    clearTimeout(scrollTimer)
    scrollTimer = null
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Hide hint when user scrolls
  if (Math.abs(currentScrollY - lastScrollY) > 50) {
    hideHint()
    lastScrollY = currentScrollY
  }

  // Determine current section
  const windowHeight = window.innerHeight
  const scrollProgress = currentScrollY + windowHeight / 2

  currentSection = Math.floor(scrollProgress / windowHeight)
  currentSection = Math.max(0, Math.min(currentSection, sections.length - 1))

  // Restart timer after scroll stops
  startTimer()
}

const scrollToNext = () => {
  hideHint()

  const nextSectionIndex = Math.min(currentSection + 1, sections.length - 1)
  const nextSectionId = sections[nextSectionIndex]
  const nextSection = document.getElementById(nextSectionId)

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  // Start timer immediately
  startTimer()

  // Add scroll listener with throttling
  let ticking = false
  const throttledScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', throttledScroll, { passive: true })

  // Hide hint on user interaction
  document.addEventListener('click', hideHint)
  document.addEventListener('keydown', hideHint)
  document.addEventListener('touchstart', hideHint, { passive: true })
})

onUnmounted(() => {
  if (scrollTimer) clearTimeout(scrollTimer)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', hideHint)
  document.removeEventListener('keydown', hideHint)
  document.removeEventListener('touchstart', hideHint)
})
</script>

<style scoped>
.scroll-hint-enter-active,
.scroll-hint-leave-active {
  transition: all 0.3s ease-out;
}

.scroll-hint-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.scroll-hint-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
</style>
