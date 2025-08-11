<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    ref="sectionRef"
    class="content-section event-links-section"
    :class="{ visible: isVisible }"
  >
    <div class="content-container">
      <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">
        {{ t.newsTitle }}
      </h2>
      <div class="text-white text-xl font-light font-sans mb-8 text-left">
        {{ t.newsDescription }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div
          class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm text-center hover:bg-gray-800/40 transition-all duration-300"
        >
          <div class="mb-6">
            <svg
              class="w-16 h-16 mx-auto text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </div>
          <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.facebookEvent }}</h3>
          <p class="text-white text-lg font-light mb-6">
            {{ t.facebookEventDesc }}
          </p>
          <a
            href="https://www.facebook.com/events/ad-astra-2025/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/25 hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 group"
          >
            {{ t.viewEvent }}
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>

        <div
          class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm text-center hover:bg-gray-800/40 transition-all duration-300"
        >
          <div class="mb-6">
            <svg
              class="w-16 h-16 mx-auto text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
          <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.vusaWebsite }}</h3>
          <p class="text-white text-lg font-light mb-6">
            {{ t.vusaWebsiteDesc }}
          </p>
          <a
            href="https://www.vusa.lt/renginiai/ad-astra-2025/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/25 hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 group"
          >
            {{ t.readMore }}
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
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