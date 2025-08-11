<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="content-section" :class="{ visible: isVisible }">
    <div class="content-container">
      <h2 class="text-white text-7xl font-bold font-sans mb-8 text-left">{{ t.programTitle }}</h2>
      <div class="text-white text-xl font-light font-sans mb-6 text-left">
        {{ t.programDescription }}
      </div>

      <div class="program-cards">
        <div class="program-card card-1">
          <div class="card-content bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.scientificZone }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.scientificZoneDesc }}
            </p>
          </div>
        </div>

        <div class="program-card card-2">
          <div class="card-content bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.contactFair }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.contactFairDesc }}
            </p>
          </div>
        </div>

        <div class="program-card card-3">
          <div class="card-content bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.discussionZone }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.discussionZoneDesc }}
            </p>
          </div>
        </div>

        <div class="program-card card-4">
          <div class="card-content bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 class="text-yellow-500 text-2xl font-bold mb-4">{{ t.concertPart }}</h3>
            <p class="text-white text-lg font-light">
              {{ t.concertPartDesc }}
            </p>
          </div>
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
  max-width: 1100px;
  text-align: left;
}

.program-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
}

.program-card {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.program-card:hover {
  transform: translateY(-10px);
}

.card-1 {
  transform: translateY(0px);
}

.card-2 {
  transform: translateY(40px);
}

.card-3 {
  transform: translateY(20px);
}

.card-4 {
  transform: translateY(60px);
}

.card-content {
  position: relative;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
}

.card-content:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
}

.card-content::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.1), transparent, rgba(255, 215, 0, 0.1));
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-content:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .content-section {
    padding: 2rem 1rem;
  }

  .content-container h2 {
    font-size: 2rem;
    text-align: center;
  }
  
  .content-container {
    text-align: center;
  }

  .program-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-1,
  .card-2,
  .card-3,
  .card-4 {
    transform: translateY(0px);
  }

  .program-card:hover {
    transform: translateY(-5px);
  }
}
</style>