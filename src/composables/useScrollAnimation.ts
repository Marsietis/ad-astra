import { ref, onMounted, onUnmounted } from 'vue'

let observer: IntersectionObserver | null = null
let shootingStarIntervalId: number | null = null

export function useScrollAnimation() {
  const sectionRef = ref<HTMLElement>()
  const isVisible = ref(false)

  const setupObserver = () => {
    if (!sectionRef.value) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const visibilityRef = (element as any).__visibilityRef
            if (visibilityRef) {
              visibilityRef.value = true
            }
          }
        })
      }, observerOptions)
    }

    // Store the visibility ref on the element for later retrieval
    ;(sectionRef.value as any).__visibilityRef = isVisible
    observer.observe(sectionRef.value)
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    if (observer && sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })

  return {
    sectionRef,
    isVisible,
  }
}

export function useBackgroundAnimations() {
  onMounted(() => {
    createStars()
    createShootingStars()
  })

  function createStars() {
    // Remove existing stars container if it exists
    const existingContainer = document.querySelector('.stars')
    if (existingContainer) {
      existingContainer.remove()
    }

    const starsContainer = document.createElement('div')
    starsContainer.classList.add('stars')
    document.body.appendChild(starsContainer)

    // Create regular dot stars with weighted size distribution
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement('div')

      // Weighted size distribution (realistic star field with more tiny stars)
      const rand = Math.random()
      let starSize
      if (rand < 0.15) starSize = 'star-nano'
      else if (rand < 0.35) starSize = 'star-micro'
      else if (rand < 0.5) starSize = 'star-tiny'
      else if (rand < 0.63) starSize = 'star-xs'
      else if (rand < 0.75) starSize = 'star-small'
      else if (rand < 0.84) starSize = 'star-sm-plus'
      else if (rand < 0.91) starSize = 'star-medium'
      else if (rand < 0.95) starSize = 'star-md-plus'
      else if (rand < 0.98) starSize = 'star-large'
      else if (rand < 0.995) starSize = 'star-lg-plus'
      else if (rand < 0.999) starSize = 'star-xl'
      else starSize = 'star-xxl'

      star.classList.add('star', starSize)
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      star.style.animationDelay = Math.random() * 4 + 's'

      starsContainer.appendChild(star)
    }

    // Create SVG stars using the star.svg file
    for (let i = 0; i < 30; i++) {
      const svgStar = document.createElement('div')
      svgStar.classList.add('star', 'star-svg')

      svgStar.style.left = Math.random() * 100 + '%'
      svgStar.style.top = Math.random() * 100 + '%'
      svgStar.style.animationDelay = Math.random() * 8 + 's'

      starsContainer.appendChild(svgStar)
    }

    // Create 5-point CSS stars
    for (let i = 0; i < 50; i++) {
      const fivePointStar = document.createElement('div')
      fivePointStar.classList.add('star', 'star-5point')

      fivePointStar.style.left = Math.random() * 100 + '%'
      fivePointStar.style.top = Math.random() * 100 + '%'
      fivePointStar.style.animationDelay = Math.random() * 5 + 's'

      starsContainer.appendChild(fivePointStar)
    }
  }

  function createShootingStars() {
    // Clear existing shooting star interval
    if (shootingStarIntervalId) {
      clearTimeout(shootingStarIntervalId)
      shootingStarIntervalId = null
    }

    const createShootingStar = () => {
      const shootingStar = document.createElement('div')
      shootingStar.classList.add('shooting-star')

      // Random direction: 0=left-to-right, 1=right-to-left, 2=top-to-bottom, 3=bottom-to-top
      const direction = Math.floor(Math.random() * 4)
      let startX, startY, deltaX, deltaY, rotation

      switch (direction) {
        case 0: // Left to right
          startX = Math.random() * -100 - 50
          startY = Math.random() * 100
          deltaX = 200 + Math.random() * 400
          deltaY = (Math.random() - 0.5) * 200
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 1: // Right to left
          startX = window.innerWidth + Math.random() * 100 + 50
          startY = Math.random() * 100
          deltaX = -(200 + Math.random() * 400)
          deltaY = (Math.random() - 0.5) * 200
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 2: // Top to bottom
          startX = Math.random() * 100
          startY = Math.random() * -100 - 50
          deltaX = (Math.random() - 0.5) * 200
          deltaY = 200 + Math.random() * 400
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 3: // Bottom to top
          startX = Math.random() * 100
          startY = window.innerHeight + Math.random() * 100 + 50
          deltaX = (Math.random() - 0.5) * 200
          deltaY = -(200 + Math.random() * 400)
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
      }

      shootingStar.style.left = startX + (direction < 2 ? 'px' : '%')
      shootingStar.style.top = startY + (direction >= 2 ? 'px' : '%')

      shootingStar.style.setProperty('--delta-x', deltaX + 'px')
      shootingStar.style.setProperty('--delta-y', deltaY + 'px')
      shootingStar.style.setProperty('--rotation', rotation + 'deg')

      document.body.appendChild(shootingStar)

      // Remove the shooting star after animation
      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.parentNode.removeChild(shootingStar)
        }
      }, 3000)
    }

    // Create shooting stars at regular intervals
    const shootingStarInterval = () => {
      createShootingStar()
      shootingStarIntervalId = setTimeout(shootingStarInterval, 5000 + Math.random() * 10000) // Every 2-5 seconds
    }

    // Start the first shooting star after a random delay
    shootingStarIntervalId = setTimeout(shootingStarInterval, Math.random() * 5000)
  }

}
