<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logoUrl from '/src/assets/logo.png'

const adventureSection = ref<HTMLElement>()
const isAdventureVisible = ref(false)

onMounted(() => {
  createStars()
  createShapes()
  setupScrollAnimation()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

let observer: IntersectionObserver | null = null

function createStars() {
  const starsContainer = document.createElement('div')
  starsContainer.classList.add('stars')
  document.body.appendChild(starsContainer)

  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div')
    const sizes = ['star-tiny', 'star-small']
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)]

    star.classList.add('star', randomSize)
    star.style.left = Math.random() * 100 + '%'
    star.style.top = Math.random() * 100 + '%'
    star.style.animationDelay = Math.random() * 4 + 's'

    starsContainer.appendChild(star)
  }
}

function createShapes() {
  const shapesContainer = document.createElement('div')
  shapesContainer.classList.add('background-shapes')
  document.body.appendChild(shapesContainer)

  const shapes = ['circle', 'triangle', 'square', 'diamond']

  for (let i = 0; i < 8; i++) {
    const shape = document.createElement('div')
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)]

    shape.classList.add('shape', randomShape)
    shape.style.left = Math.random() * 100 + '%'
    shape.style.top = Math.random() * 100 + '%'
    shape.style.animationDelay = Math.random() * 10 + 's'

    shapesContainer.appendChild(shape)
  }
}

function setupScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isAdventureVisible.value = true
      }
    })
  }, observerOptions)

  if (adventureSection.value) {
    observer.observe(adventureSection.value)
  }
}

function scrollToAdventure() {
  adventureSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div id="app">
    <main class="hero-section">
      <div class="hero-content">
        <div class="flex-1 max-w-2xl">
          <h1 class="text-yellow-500 text-7xl font-bold font-extrabold mb-8">AD ASTRA</h1>
          <p class="text-xl mb-8 leading-relaxed opacity-90">
            Journey to the stars begins here. Explore the infinite possibilities that await beyond
            our world.
          </p>
          <button
            class="bg-gradient-to-r from-white via-yellow-300 to-orange-500 text-gray-800 font-semibold py-4 px-8 rounded-full text-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/40 relative overflow-hidden"
            @click="scrollToAdventure"
          >
            Start Your Journey
          </button>
        </div>
        <div class="flex-1 flex justify-center items-center max-w-lg min-h-96">
          <img
            :src="logoUrl"
            alt="Ad Astra Logo"
            class="w-full max-w-md h-auto drop-shadow-lg object-contain"
          />
        </div>
      </div>
      <div class="scroll-indicator"></div>
    </main>

    <section
      ref="adventureSection"
      class="content-section"
      :class="{ visible: isAdventureVisible }"
    >
      <div class="content-container">
        <h2>Your Adventure Awaits</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #000000 0%, #000000 85%, #1a1a2e 95%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: twinkle 4s ease-in-out infinite alternate;
}

.star:nth-child(2n) {
  animation-delay: -1s;
}

.star:nth-child(3n) {
  animation-delay: -2s;
}

.star:nth-child(4n) {
  animation-delay: -0.5s;
}

.star:nth-child(5n) {
  animation-delay: -1.5s;
}

@keyframes twinkle {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.star-tiny {
  width: 2px;
  height: 2px;
}

.star-small {
  width: 4px;
  height: 4px;
}

.background-shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.05;
  animation: subtle-float 30s ease-in-out infinite;
}

.shape.circle {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 100%
  );
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.shape.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid rgba(255, 255, 255, 0.2);
}

.shape.square {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  transform: rotate(15deg);
}

.shape.diamond {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
}

.shape:nth-child(2n) {
  animation-duration: 25s;
  animation-direction: reverse;
}

.shape:nth-child(3n) {
  animation-duration: 30s;
}

.shape:nth-child(4n) {
  animation-duration: 18s;
  animation-direction: reverse;
}

@keyframes subtle-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

#app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  grid-template-columns: none !important;
}

body {
  display: block !important;
  place-items: initial !important;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator::before {
  content: '↓';
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.5);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

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

.content-container h2 {
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-container p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.8;
}

@media (min-width: 1200px) {
  .hero-content {
    max-width: 1400px;
    gap: 6rem;
  }

  .hero-text {
    max-width: 700px;
  }

  .hero-text h1 {
    font-size: 4rem;
  }

  .hero-logo {
    max-width: 600px;
  }

  .hero-logo img {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-section,
  .content-section {
    padding: 2rem 1rem;
  }

  .content-container h2 {
    font-size: 2rem;
  }
}
</style>
