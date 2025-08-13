<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'

const { currentLanguage, toggleLanguage } = useTranslations()
</script>

<template>
  <div class="language-toggle-container">
    <button
      @click="toggleLanguage"
      class="language-toggle"
      :aria-label="currentLanguage === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių kalbą'"
    >
      <div class="language-option" :class="{ active: currentLanguage === 'lt' }">
        <img src="@/assets/lt.svg" alt="LT" class="language-flag" />
        <span class="language-code">LT</span>
      </div>
      <div class="language-divider"></div>
      <div class="language-option" :class="{ active: currentLanguage === 'en' }">
        <img src="@/assets/uk.svg" alt="GB" class="language-flag" />
        <span class="language-code">EN</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.language-toggle-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  animation: none !important;
  transition: none !important;
}

@media (max-width: 1024px) {
  .language-toggle-container {
    top: 2rem;
    right: 1rem;
    z-index: 10000;
    transform: translateY(-50%);
  }
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: none !important;
  transition: none !important;
}

.language-toggle:hover {
  background: rgba(0, 0, 0, 0.9);
  border-color: rgba(255, 193, 7, 0.5);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
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
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
}

.language-code {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .language-toggle-container {
    top: 2rem;
    right: 1rem;
    transform: translateY(-50%);
  }
  
  .language-option {
    padding: 0.4rem 0.8rem;
    gap: 0.4rem;
  }
  
  .language-flag {
    width: 14px;
    height: 14px;
  }
  
  .language-code {
    font-size: 0.75rem;
  }
}
</style>