<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="sectionRef" class="content-section" :class="{ visible: isVisible }">
    <div class="content-container">
      <div class="content-centered">
        <h2 class="text-white text-7xl font-bold font-sans mb-8 text-center">
          {{ t.eventInfoTitle }}
        </h2>

        <!-- Event Details -->
        <div class="event-details-line">
          <div class="event-detail-item">
            <div class="event-label">{{ t.dateLabel }}</div>
            <div class="event-value">{{ t.eventDate }}</div>
          </div>
          <div class="event-detail-separator"></div>
          <div class="event-detail-item">
            <div class="event-label">{{ t.timeLabel }}</div>
            <div class="event-value">{{ t.eventTime }}</div>
          </div>
          <div class="event-detail-separator"></div>
          <div class="event-detail-item">
            <div class="event-label">{{ t.locationLabel }}</div>
            <div class="event-value">{{ t.eventLocation }}</div>
            <div class="event-subvalue">{{ t.eventAddress }}</div>
          </div>
        </div>

        <div class="text-gray-300 text-lg font-light italic text-center mt-8">
          {{ t.moreInfoSoon }}
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
  max-width: 1400px;
  width: 100%;
  text-align: center;
}

.content-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.event-details-line {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
}

.event-detail-separator {
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(255, 215, 0, 0.3), transparent);
  margin: 0 2rem;
  flex-shrink: 0;
}

.event-detail-item {
  text-align: center;
  min-width: 140px;
  flex: 1;
  max-width: 250px;
  padding: 0 1rem;
}

.event-label {
  color: #fbbf24;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.event-value {
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.event-subvalue {
  color: #d1d5db;
  font-size: 1.125rem;
  font-weight: 300;
}

.free-entry {
  color: #10b981;
  font-weight: 500;
}

@media (max-width: 768px) {
  .content-section {
    padding: 2rem 1rem;
  }

  .content-container h2 {
    font-size: 2rem;
  }

  .event-details-line {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .event-detail-separator {
    display: none;
  }

  .event-detail-item {
    min-width: auto;
  }
}
</style>
