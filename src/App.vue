<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import logoUrl from '/src/assets/logo.png'

const adventureSection = ref<HTMLElement>()
const isAdventureVisible = ref(false)
const programSection = ref<HTMLElement>()
const isProgramVisible = ref(false)
const eventLinksSection = ref<HTMLElement>()
const isEventLinksVisible = ref(false)
const partnersSection = ref<HTMLElement>()
const isPartnersVisible = ref(false)

type Language = 'lt' | 'en'
const currentLanguage = ref<Language>('lt')

const translations = {
  lt: {
    subtitle: 'VILNIAUS UNIVERSITETE',
    description: 'Studentų (-čių) integracijos festivalis',
    whatIsAdAstra: 'Kas yra Ad Astra?',
    aboutText1:
      'Jau 5 metus skaičiuojanti iniciatyva, pradėta 2020 m. Vilniaus universiteto Studentų atstovybės (VU SA) Universiteto bendruomenėje tapusi jau tradiciniu metiniu renginiu. Šventė pradėta kaip „Diskusijų festivalis" užaugo į „Ad astra: Integracijos festivalis" išplėsdama savo ribas dabar įtraukiant ir mokslinius pranešimus, VU bendruomenės kontaktų mugę, koncertinę dalį bei kitos programinės dalys.',
    aboutText2:
      'Festivalis „Ad astra" simboliškai paskutinis renginys žymintis naujų akademinių studijų metų pradžią. Kasmet besikeičiančioje programoje ką nors išsinešti atras ne tik primakursiai(-ės) ir naujieji bendruomenės nariai(-ės), bet ir kiekvienas iš 15 fakultetų ir daugiau Universiteto bendruomenės narys ir narė. Tad kviečiame nepraleisti progos ir kartu su mumis kilti ad astra (į žvaigždes)!',
    programTitle: 'Festivalio zonos ir programa',
    programDescription:
      'Ad Astra festivalis atskleis savo duris keliose srityse, kur kiekvienas dalyvus galės rasti sau įdomių veiklų:',
    scientificZone: 'Mokslinių pranešimų zona',
    scientificZoneDesc:
      'Studentai pristatys savo tyrimų darbus, projektus ir inovatyvius sprendimus. Puiki galimybė sužinoti, kokius mokslinius pasiekimus daro mūsų bendruomenės nariai.',
    contactFair: 'Kontaktų mugė',
    contactFairDesc:
      'Susipažinkite su organizacijomis, įmonėmis ir iniciatyvomis, kurios siūlo praktikos vietas, darbo galimybes ir bendradarbiavimo projektus studentams.',
    discussionZone: 'Diskusijų zona',
    discussionZoneDesc:
      'Atviros diskusijos aktualiais studentų gyvenimo, mokslo ir bendruomenės klausimais. Galimybė išreikšti savo nuomonę ir išgirsti kitų argumentus.',
    concertPart: 'Koncertinė dalis',
    concertPartDesc:
      'Muzikiniai pasirodymai, kurie sukurs šventišką atmosferą ir suburs bendruomenę bendram kultūriniam patyrimui.',
    newsTitle: 'Sekite naujienas ir atnaujinimus',
    newsDescription:
      'Būkite informuoti apie paskutines žinias, programos pakeitimus ir svarbius pranešimus apie Ad Astra festivalį.',
    facebookEvent: 'Facebook renginys',
    facebookEventDesc:
      'Prisijunkite prie oficialaus Facebook renginio puslapio, kur rasite naujausią informaciją, galėsite bendrauti su kitais dalyviais ir gauti svarbius pranešimus.',
    viewEvent: 'Peržiūrėti renginį',
    vusaWebsite: 'VU SA svetainė',
    vusaWebsiteDesc:
      'Aplankykite oficialų Ad Astra puslapį VU SA svetainėje, kur rasite detalų programos aprašą, dalyvių informaciją ir oficialius dokumentus.',
    readMore: 'Skaityti daugiau',
    partnersTitle: 'Partneriai',
    partnersDescription:
      'Ad Astra festivalis vyksta tik dėka nuolatinio partnerių palaikymo ir bendradarbiavimo. Dėkojame visiems, kurie prisideda prie šios iniciatyvos sėkmės.',
    vusaPartner: 'Vilniaus universiteto Studentų atstovybė',
    vusaPartnerDesc: 'Pagrindinis organizatorius ir festivalo iniciatorius',
    vuPartner: 'Vilniaus universitetas',
    vuPartnerDesc: 'Institucinis partneris ir festivalio šeimininkas',
    facultiesPartner: '15 VU fakultetų',
    facultiesPartnerDesc: 'Aktyvūs dalyviai ir programos formuotojai',
    partnershipText: 'Norite tapti partneru? Susisiekite su mumis ir kartu kurkime puikų renginį!',
    contactEmail: 'kontaktai@adastra.vu.lt',
  },
  en: {
    subtitle: 'IN VILNIUS UNIVERSITY',
    description: "Students' Integration Festival",
    whatIsAdAstra: 'What is Ad Astra?',
    aboutText1:
      'An initiative that has been running for 5 years, started in 2020 by the Vilnius University Student Representation (VU SA) and has become a traditional annual event in the University community. The celebration started as a "Discussion Festival" and grew into "Ad astra: Integration Festival" expanding its scope to now include scientific presentations, VU community contact fair, concert program and other program parts.',
    aboutText2:
      'The "Ad astra" festival is symbolically the last event marking the beginning of a new academic year. In the annually changing program, not only first-year students and new community members will find something to take away, but also every member of the 15 faculties and more University community members. So we invite you not to miss the opportunity and join us in rising ad astra (to the stars)!',
    programTitle: 'Festival Zones and Program',
    programDescription:
      'The Ad Astra festival will open its doors in several areas where each participant can find interesting activities:',
    scientificZone: 'Scientific Presentations Zone',
    scientificZoneDesc:
      'Students will present their research work, projects and innovative solutions. A great opportunity to learn about the scientific achievements of our community members.',
    contactFair: 'Contact Fair',
    contactFairDesc:
      'Meet organizations, companies and initiatives that offer internships, job opportunities and collaboration projects for students.',
    discussionZone: 'Discussion Zone',
    discussionZoneDesc:
      'Open discussions on current student life, science and community issues. An opportunity to express your opinion and hear other arguments.',
    concertPart: 'Concert Program',
    concertPartDesc:
      'Musical performances that will create a festive atmosphere and bring the community together for a shared cultural experience.',
    newsTitle: 'Follow News and Updates',
    newsDescription:
      'Stay informed about the latest news, program changes and important announcements about the Ad Astra festival.',
    facebookEvent: 'Facebook Event',
    facebookEventDesc:
      'Join the official Facebook event page where you can find the latest information, interact with other participants and receive important announcements.',
    viewEvent: 'View Event',
    vusaWebsite: 'VU SA Website',
    vusaWebsiteDesc:
      'Visit the official Ad Astra page on the VU SA website where you can find detailed program descriptions, participant information and official documents.',
    readMore: 'Read More',
    partnersTitle: 'Partners',
    partnersDescription:
      'The Ad Astra festival takes place only thanks to the constant support and cooperation of partners. We thank everyone who contributes to the success of this initiative.',
    vusaPartner: 'Vilnius University Student Representation',
    vusaPartnerDesc: 'Main organizer and festival initiator',
    vuPartner: 'Vilnius University',
    vuPartnerDesc: 'Institutional partner and festival host',
    facultiesPartner: '15 VU Faculties',
    facultiesPartnerDesc: 'Active participants and program developers',
    partnershipText:
      "Want to become a partner? Contact us and let's create a great event together!",
    contactEmail: 'contact@adastra.vu.lt',
  },
}

const t = computed(() => translations[currentLanguage.value])

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'lt' ? 'en' : 'lt'
}

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
        } else if (entry.target === eventLinksSection.value) {
          isEventLinksVisible.value = true
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
  if (eventLinksSection.value) {
    observer.observe(eventLinksSection.value)
  }
  if (partnersSection.value) {
    observer.observe(partnersSection.value)
  }
}
</script>

<template>
  <div id="app">
    <!-- Language Toggle Button -->
    <div class="language-toggle-container">
      <button
        @click="toggleLanguage"
        class="language-toggle"
        :aria-label="currentLanguage === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių kalbą'"
      >
        <div class="language-option" :class="{ active: currentLanguage === 'lt' }">
          <span class="language-flag">🇱🇹</span>
          <span class="language-code">LT</span>
        </div>
        <div class="language-divider"></div>
        <div class="language-option" :class="{ active: currentLanguage === 'en' }">
          <span class="language-flag">🇬🇧</span>
          <span class="language-code">EN</span>
        </div>
      </button>
    </div>

    <main class="hero-section">
      <div class="hero-content">
        <div class="flex-1 max-w-3xl">
          <h1 class="text-yellow-500 text-7xl font-bold font-extrabold mb-16">AD ASTRA</h1>
          <div class="text-white text-6xl font-bold font-sans mb-2">{{ t.subtitle }}</div>
          <div class="text-white text-4xl font-light font-sans mb-2 mt-8">
            {{ t.description }}
          </div>
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
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">
          {{ t.whatIsAdAstra }}
        </h2>
        <div class="text-white text-xl font-light font-sans mb-4 text-left">
          {{ t.aboutText1 }}
        </div>
        <div class="text-white text-xl font-light font-sans mb-4 text-left">
          {{ t.aboutText2 }}
        </div>
      </div>
    </section>

    <section ref="programSection" class="content-section" :class="{ visible: isProgramVisible }">
      <div class="content-container">
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">{{ t.programTitle }}</h2>
        <div class="text-white text-xl font-light font-sans mb-6 text-left">
          {{ t.programDescription }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.scientificZone }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.scientificZoneDesc }}
            </p>
          </div>

          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.contactFair }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.contactFairDesc }}
            </p>
          </div>

          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.discussionZone }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.discussionZoneDesc }}
            </p>
          </div>

          <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.concertPart }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.concertPartDesc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="eventLinksSection"
      class="content-section event-links-section"
      :class="{ visible: isEventLinksVisible }"
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
              class="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              {{ t.viewEvent }}
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
              class="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              {{ t.readMore }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section ref="partnersSection" class="content-section" :class="{ visible: isPartnersVisible }">
      <div class="content-container">
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">{{ t.partnersTitle }}</h2>
        <div class="text-white text-xl font-light font-sans mb-8 text-left">
          {{ t.partnersDescription }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="text-center">
            <div
              class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
            >
              <div class="text-yellow-500 text-3xl font-bold">VU SA</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">
              {{ t.vusaPartner }}
            </h3>
            <p class="text-white text-sm font-light">
              {{ t.vusaPartnerDesc }}
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
            >
              <div class="text-yellow-500 text-3xl font-bold">VU</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">{{ t.vuPartner }}</h3>
            <p class="text-white text-sm font-light">
              {{ t.vuPartnerDesc }}
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm h-32 flex items-center justify-center mb-4"
            >
              <div class="text-yellow-500 text-2xl font-bold">Fakultetai</div>
            </div>
            <h3 class="text-white text-xl font-bold mb-2">{{ t.facultiesPartner }}</h3>
            <p class="text-white text-sm font-light">{{ t.facultiesPartnerDesc }}</p>
          </div>
        </div>

        <div class="text-center">
          <div class="text-white text-lg font-light mb-4">
            {{ t.partnershipText }}
          </div>
          <div class="text-yellow-500 text-xl font-bold">{{ t.contactEmail }}</div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="copyright">
            <p>&copy; VU SA 2025</p>
          </div>
          <div class="social-links">
            <a
              href="https://www.facebook.com/VilniausUniversitetoStudentuAtstovybe"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vu_sa/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="mailto:kontaktai@adastra.vu.lt" class="social-link">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </a>
            <a
              href="https://www.vu.lt/studentu-atstovybe"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
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

.footer {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .social-links {
    justify-content: center;
  }
}

/* Language Toggle Styles */
.language-toggle-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

.language-toggle {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.language-toggle:hover {
  background: rgba(0, 0, 0, 0.9);
  border-color: rgba(255, 193, 7, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.7);
}

.language-option.active {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.2);
}

.language-option:not(.active):hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.05);
}

.language-divider {
  width: 1px;
  height: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 0.25rem;
}

.language-flag {
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.language-code {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .language-toggle-container {
    top: 1rem;
    right: 1rem;
  }
  
  .language-option {
    padding: 0.4rem 0.8rem;
    gap: 0.4rem;
  }
  
  .language-flag {
    font-size: 0.875rem;
  }
  
  .language-code {
    font-size: 0.75rem;
  }
}
</style>
