<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()

const isMenuOpen = ref(false)
const activeSection = ref('hero')

const navigationItems = computed(() => [
  { id: 'hero', label: t.value.navHome, href: '#hero' },
  { id: 'current-events', label: t.value.navCurrentEvent, href: '#current-events' },
  { id: 'detailed-program', label: t.value.navProgram, href: '#detailed-program' },
  { id: 'map', label: t.value.navMap, href: '#map' },
  { id: 'teams-links', label: t.value.navInterpretation, href: '#teams-links' },
  { id: 'event-info', label: t.value.navEvent, href: '#event-info' },
  { id: 'about', label: t.value.navAbout, href: '#about' },
  { id: 'why-ad-astra', label: t.value.navWhy, href: '#why-ad-astra' },
  { id: 'news', label: t.value.navNews, href: '#news' },
  { id: 'organizatoriai', label: t.value.navOrganizers, href: '#organizatoriai' },
  // { id: 'partners', label: t.value.navPartners, href: '#partners' },
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // Close menu after navigation
  isMenuOpen.value = false
}

const handleScroll = () => {
  // Find active section
  const sections = navigationItems.value.map((item) =>
    document.getElementById(item.id.replace('#', ''))
  )
  const scrollPosition = window.scrollY + 100

  // Default to hero if at the top
  if (window.scrollY < 50) {
    activeSection.value = 'hero'
  } else {
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop <= scrollPosition) {
        activeSection.value = navigationItems.value[i].id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Mobile Navigation -->
  <nav class="lg:hidden fixed top-0 left-0 right-0 z-[9999] bg-black/90 backdrop-blur-md border-b border-white/20 shadow-lg">
    <div class="flex items-center justify-between px-4 py-3">
      <!-- Hamburger Menu Button -->
      <button
        @click="toggleMenu"
        class="p-2 text-white hover:text-amber-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-amber-400/50 bg-white/5 hover:bg-white/10"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMenuOpen"
      >
        <svg
          class="w-7 h-7 transition-transform duration-200"
          :class="{ 'rotate-90': isMenuOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2.5"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Spacer for language toggle positioning -->
      <div></div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      class="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden"
      :class="[
        isMenuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
      ]"
    >
      <div class="px-4 py-2">
        <button
          v-for="item in navigationItems"
          :key="item.id"
          @click="scrollToSection(item.href)"
          class="block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium"
          :class="[
            activeSection === item.id
              ? 'text-amber-400 bg-amber-400/10 border-l-2 border-amber-400'
              : 'text-white hover:text-amber-400 hover:bg-white/5'
          ]"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>

  <!-- Spacer to prevent content from going under fixed nav -->
  <div class="lg:hidden h-16"></div>
</template>

<style scoped>
/* Smooth transitions for mobile menu */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
