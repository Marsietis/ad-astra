<script setup lang="ts">
import { computed } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

const programSchedule = computed(() => [
  {
    courtyard: t.value.vuGrandCourtyard,
    events: [
      { time: '13:00-13:50', event: t.value.rectorLecture },
      { time: '14:00-15:15', event: t.value.vuUpClose },
      { time: '15:20-16:00', event: t.value.studentLife },
      { time: '16:00-18:00', event: t.value.networkingFair },
      { time: '18:00-21:30', event: t.value.concert },
    ]
  },
  {
    courtyard: t.value.sarbiviusCourtyard,
    events: [
      { time: '14:00-14:55', event: t.value.studentsToStudentsPt1 },
      { time: '15:00-15:45', event: t.value.timeToAct },
      { time: '16:00-17:30', event: t.value.studentsToStudentsPt2 },
      { time: '17:30-18:00', event: t.value.aiDiscussion },
    ]
  },
  {
    courtyard: t.value.observatoryCourtyard,
    events: [
      { time: '14:00-16:00', event: t.value.workshopCycle },
      { time: '16:00-18:00', event: t.value.networkingFair },
    ]
  },
  {
    courtyard: t.value.sirwydasCourtyard,
    events: [
      { time: '14:00-15:00', event: t.value.prepareForSuccess },
      { time: '15:00-16:00', event: t.value.mobileBioclass },
      { time: '16:00-18:00', event: t.value.boardGames },
    ]
  },
])
</script>

<template>
  <section
    id="detailed-program"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center max-w-4xl mx-auto mb-12">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 lg:mb-8 uppercase">
          {{ t.programTitle }}
        </h2>
      </div>

      <!-- Program Schedule Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div
          v-for="(courtyardProgram, index) in programSchedule"
          :key="index"
          class="p-6 lg:p-8"
        >
          <!-- Courtyard Name -->
          <h3 class="text-2xl lg:text-3xl xl:text-4xl font-walsheim text-white mb-6 uppercase">
            {{ courtyardProgram.courtyard }}
          </h3>

          <!-- Events List -->
          <div class="space-y-4">
            <div
              v-for="(event, eventIndex) in courtyardProgram.events"
              :key="eventIndex"
            >
              <p class="text-sm sm:text-base lg:text-lg">
                <span class="text-primary font-bold">{{ event.time }}</span> <span class="text-white">{{ event.event }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

