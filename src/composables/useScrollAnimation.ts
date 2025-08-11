import { ref, onMounted, onUnmounted } from 'vue'

let observer: IntersectionObserver | null = null

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
    isVisible
  }
}

export function useBackgroundAnimations() {
  onMounted(() => {
    createStars()
    createShapes()
  })

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

    const shapes = ['circle']

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
}