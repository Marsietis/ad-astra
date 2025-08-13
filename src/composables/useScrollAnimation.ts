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
  // Store initial viewport dimensions to prevent jumps when browser bar appears/disappears
  let initialViewportWidth = 0
  let initialViewportHeight = 0
  
  onMounted(() => {
    // Capture initial viewport dimensions
    initialViewportWidth = window.innerWidth
    initialViewportHeight = window.innerHeight
    
    createStars()
    
    // Only create shooting stars if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      createShootingStars()
    }
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

    // Determine star count based on device capabilities using initial dimensions
    const isMobile = initialViewportWidth <= 768
    const starCount = isMobile ? 600 : 1000
    const svgStarCount = isMobile ? 15 : 30
    const fivePointStarCount = isMobile ? 25 : 50

    // Create regular dot stars with weighted size distribution
    for (let i = 0; i < starCount; i++) {
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
    for (let i = 0; i < svgStarCount; i++) {
      const svgStar = document.createElement('div')
      svgStar.classList.add('star', 'star-svg')

      svgStar.style.left = Math.random() * 100 + '%'
      svgStar.style.top = Math.random() * 100 + '%'
      svgStar.style.animationDelay = Math.random() * 8 + 's'

      starsContainer.appendChild(svgStar)
    }

    // Create 5-point CSS stars
    for (let i = 0; i < fivePointStarCount; i++) {
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

    // Create a container for shooting stars to prevent viewport overflow
    let shootingStarContainer = document.querySelector('.shooting-star-container') as HTMLElement
    if (!shootingStarContainer) {
      shootingStarContainer = document.createElement('div')
      shootingStarContainer.classList.add('shooting-star-container')
      shootingStarContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
      `
      document.body.appendChild(shootingStarContainer)
    }

    const createShootingStar = () => {
      const shootingStar = document.createElement('div')
      shootingStar.classList.add('shooting-star')

      // Random direction: 0=left-to-right, 1=right-to-left, 2=top-to-bottom, 3=bottom-to-top
      const direction = Math.floor(Math.random() * 4)
      let startX, startY, deltaX, deltaY, rotation

      // Use viewport units and ensure positions stay within container bounds
      const isMobile = initialViewportWidth <= 768
      const travelDistance = isMobile ? 150 : 300

      switch (direction) {
        case 0: // Left to right - start from left edge, travel right
          startX = -10 // Start just outside left edge (in vw)
          startY = Math.random() * 100 // Random Y position in viewport
          deltaX = travelDistance
          deltaY = (Math.random() - 0.5) * 100
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 1: // Right to left - start from right edge, travel left
          startX = 110 // Start just outside right edge (in vw)
          startY = Math.random() * 100 // Random Y position in viewport
          deltaX = -travelDistance
          deltaY = (Math.random() - 0.5) * 100
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 2: // Top to bottom - start from top edge, travel down
          startX = Math.random() * 100 // Random X position in viewport
          startY = -10 // Start just outside top edge (in vh)
          deltaX = (Math.random() - 0.5) * 100
          deltaY = travelDistance
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
        case 3: // Bottom to top - start from bottom edge, travel up
          startX = Math.random() * 100 // Random X position in viewport
          startY = 110 // Start just outside bottom edge (in vh)
          deltaX = (Math.random() - 0.5) * 100
          deltaY = -travelDistance
          rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          break
      }

      // Position the shooting star - the container's overflow:hidden will clip anything outside
      shootingStar.style.left = startX + 'vw'
      shootingStar.style.top = startY + 'vh'

      shootingStar.style.setProperty('--delta-x', deltaX + 'px')
      shootingStar.style.setProperty('--delta-y', deltaY + 'px')
      shootingStar.style.setProperty('--rotation', rotation + 'deg')

      shootingStarContainer.appendChild(shootingStar)

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
      const isMobile = initialViewportWidth <= 768
      const interval = isMobile ? 10000 + Math.random() * 15000 : 5000 + Math.random() * 10000
      shootingStarIntervalId = setTimeout(shootingStarInterval, interval)
    }

    // Start the first shooting star after page has loaded and settled
    const isMobile = initialViewportWidth <= 768
    const initialDelay = isMobile ? 15000 + Math.random() * 10000 : 10000 + Math.random() * 8000
    shootingStarIntervalId = setTimeout(shootingStarInterval, initialDelay)
  }

}
