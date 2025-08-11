<script setup lang="ts">
import { onMounted } from 'vue'

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
</script>

<template>
  <div id="app"></div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #000000 0%, #000000 85%, #1a1a2e 95%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
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
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 70%, transparent 100%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.shape.triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid rgba(255,255,255,0.2);
}

.shape.square {
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.15);
  transform: rotate(15deg);
}

.shape.diamond {
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.2);
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

#app {
  position: relative;
  z-index: 1;
}
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: relative;
  z-index: 2;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
