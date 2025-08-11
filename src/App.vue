<script setup lang="ts">
import EventPoster from './components/EventPoster.vue'
</script>

<template>
  <div id="app">
    <EventPoster />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #000000 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 160px 30px, #ffffff, transparent),
    radial-gradient(1px 1px at 200px 90px, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 240px 50px, #ffffff, transparent),
    radial-gradient(1px 1px at 280px 20px, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 320px 80px, #ffffff, transparent),
    radial-gradient(2px 2px at 360px 40px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 400px 70px, #ffffff, transparent),
    radial-gradient(2px 2px at 440px 20px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 480px 60px, #ffffff, transparent),
    radial-gradient(2px 2px at 520px 90px, rgba(255,255,255,0.7), transparent),
    radial-gradient(1px 1px at 560px 30px, #ffffff, transparent),
    radial-gradient(1px 1px at 600px 80px, rgba(255,255,255,0.8), transparent),
    radial-gradient(2px 2px at 640px 50px, #ffffff, transparent),
    radial-gradient(1px 1px at 680px 10px, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 720px 70px, #ffffff, transparent),
    radial-gradient(2px 2px at 760px 40px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 800px 80px, #ffffff, transparent),
    radial-gradient(2px 2px at 840px 20px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 880px 60px, #ffffff, transparent),
    radial-gradient(1px 1px at 920px 90px, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 960px 30px, #ffffff, transparent),
    radial-gradient(1px 1px at 1000px 70px, rgba(255,255,255,0.9), transparent),
    radial-gradient(2px 2px at 1040px 50px, #ffffff, transparent),
    radial-gradient(1px 1px at 1080px 10px, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 1120px 80px, #ffffff, transparent),
    radial-gradient(2px 2px at 1160px 40px, rgba(255,255,255,0.8), transparent);
  background-repeat: repeat;
  background-size: 1200px 100px;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  background: white;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star-small {
  width: 6px;
  height: 6px;
}

.star-medium {
  width: 10px;
  height: 10px;
}

.star-large {
  width: 14px;
  height: 14px;
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
