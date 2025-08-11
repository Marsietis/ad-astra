<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import logoUrl from '/src/assets/logo.png'

const adventureSection = ref<HTMLElement>()
const isAdventureVisible = ref(false)
const programSection = ref<HTMLElement>()
const isProgramVisible = ref(false)
const partnersSection = ref<HTMLElement>()
const isPartnersVisible = ref(false)

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
        if (entry.target === adventureSection.value) {
          isAdventureVisible.value = true
        } else if (entry.target === programSection.value) {
          isProgramVisible.value = true
        } else if (entry.target === partnersSection.value) {
          isPartnersVisible.value = true
        }
      }
    })
  }, observerOptions)

  if (adventureSection.value) {
    observer.observe(adventureSection.value)
  }
  if (programSection.value) {
    observer.observe(programSection.value)
  }
  if (partnersSection.value) {
    observer.observe(partnersSection.value)
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
        <div class="flex-1 max-w-3xl">
          <h1 class="text-yellow-500 text-7xl font-bold font-extrabold mb-16">AD ASTRA</h1>
          <div class="text-white text-6xl font-bold font-sans mb-2">VILNIAUS UNIVERSITETE</div>
          <div class="text-white text-6xl font-light font-sans mb-2">IN VILNIUS UNIVERISTY</div>
          <div class="text-white text-4xl font-light font-sans mb-2 mt-8">
            Studentų (-čių) integracijos festivalis
          </div>
          <div class="text-white text-4xl font-light font-sans">Students' Integration Festival</div>
          <div class="text-yellow-500 text-8xl font-extrabold font-sans mt-8">09.05</div>
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
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">Kas yra Ad Astra?</h2>
        <div class="text-white text-xl font-light font-sans mb-4 text-left">
          Jau 5 metus skaičiuojanti iniciatyva, pradėta 2020 m. Vilniaus universiteto Studentų
          atstovybės (VU SA) Universiteto bendruomenėje tapusi jau tradiciniu metiniu renginiu.
          Šventė pradėta kaip „Diskusijų festivalis“ užaugo į „Ad astra: Integracijos festivalis“
          išplėsdama savo ribas dabar įtraukiant ir mokslinius pranešimus, VU bendruomenės kontaktų
          mugę, koncertinę dalį bei kitos programinės dalys.
        </div>
        <div class="text-white text-xl font-light font-sans mb-4 text-left">
          Festivalis „Ad astra“ simboliškai paskutinis renginys žymintis naujų akademinių studijų
          metų pradžią. Kasmet besikeičiančioje programoje ką nors išsinešti atras ne tik
          primakursiai(-ės) ir naujieji bendruomenės nariai(-ės), bet ir kiekvienas iš 15 fakultetų
          ir daugiau Universiteto bendruomenės narys ir narė. Tad kviečiame nepraleisti progos ir
          kartu su mumis kilti ad astra (į žvaigždes)!
        </div>
      </div>
    </section>

    <section
      ref="programSection"
      class="content-section"
      :class="{ visible: isProgramVisible }"
    >
      <div class="content-container">
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">Festivalio zonos ir programa</h2>
        <div class="text-white text-xl font-light font-sans mb-6 text-left">
          Ad Astra festivalis atskleis savo duris keliose srityse, kur kiekvienas dalyvus galės rasti sau įdomių veiklų:
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">Mokslinių pranešimų zona</h3>
            <p class="text-white text-lg font-light">
              Studentai pristatys savo tyrimų darbus, projektus ir inovatyvius sprendimus. 
              Puiki galimybė sužinoti, kokius mokslinius pasiekimus daro mūsų bendruomenės nariai.
            </p>
          </div>
          
          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">Kontaktų mugė</h3>
            <p class="text-white text-lg font-light">
              Susipažinkite su organizacijomis, įmonėmis ir iniciatyvomis, kurios siūlo praktikos 
              vietas, darbo galimybes ir bendradarbiavimo projektus studentams.
            </p>
          </div>
          
          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">Diskusijų zona</h3>
            <p class="text-white text-lg font-light">
              Atviros diskusijos aktualiais studentų gyvenimo, mokslo ir bendruomenės klausimais. 
              Galimybė išreikšti savo nuomonę ir išgirsti kitų argumentus.
            </p>
          </div>
          
          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">Koncertinė dalis</h3>
            <p class="text-white text-lg font-light">
              Muzikiniai pasirodymai, kurie sukurs šventišką atmosferą ir suburs bendruomenę 
              bendram kultūriniam patyrimui.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="partnersSection"
      class="content-section"
      :class="{ visible: isPartnersVisible }"
    >
      <div class="content-container">
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">Partneriai</h2>
        <div class="text-white text-xl font-light font-sans mb-8 text-left">
          Ad Astra festivalis vyksta tik dėka nuolatinio partnerių palaikymo ir bendradarbiavimo. 
          Dėkojame visiems, kurie prisideda prie šios iniciatyvos sėkmės.
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="text-center">
            <div class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4">
              <div class="text-yellow-500 text-3xl font-bold">VU SA</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">Vilniaus universiteto Studentų atstovybė</h3>
            <p class="text-white text-sm font-light">Pagrindinis organizatorius ir festivalo iniciatorius</p>
          </div>
          
          <div class="text-center">
            <div class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4">
              <div class="text-yellow-500 text-3xl font-bold">VU</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">Vilniaus universitetas</h3>
            <p class="text-white text-sm font-light">Institucinis partneris ir festivalio šeimininkas</p>
          </div>
          
          <div class="text-center">
            <div class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4">
              <div class="text-yellow-500 text-2xl font-bold">Fakultetai</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">15 VU fakultetų</h3>
            <p class="text-white text-sm font-light">Aktyvūs dalyviai ir programos formuotojai</p>
          </div>
        </div>
        
        <div class="text-center">
          <div class="text-white text-lg font-light mb-4">
            Norite tapti partneru? Susisiekite su mumis ir kartu kurkime puikų renginį!
          </div>
          <div class="text-yellow-500 text-xl font-bold">kontaktai@adastra.vu.lt</div>
        </div>
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
