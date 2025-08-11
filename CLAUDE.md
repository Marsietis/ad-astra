# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ad Astra is a Vue 3 + TypeScript web application for the Students' Integration Festival at Vilnius University. The project is built with Vite and uses Tailwind CSS for styling. It features animated star and shape backgrounds with a modern single-page layout showcasing event information.

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev        # Start development server with hot reload
```

### Build & Type Checking
```bash
npm run build      # Type-check and build for production (runs type-check + build-only)
npm run build-only # Build only (no type checking)
npm run type-check # Run TypeScript type checking
npm run preview    # Preview production build locally
```

### Code Quality
```bash
npm run lint       # Run ESLint with auto-fix
npm run format     # Format code with Prettier
```

## Architecture

### Tech Stack
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Vue Router** (configured but no routes defined yet)
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **ESLint + Prettier** for code quality

### Project Structure
```
src/
├── App.vue          # Main application component with animated landing page
├── main.ts          # Application entry point
├── assets/
│   ├── main.css     # Global styles (Tailwind imports)
│   └── logo.png     # Ad Astra logo
├── components/      # Reusable Vue components (empty)
├── router/
│   └── index.ts     # Vue Router setup (no routes configured)
└── views/           # Page components (empty)
```

### Key Features
- **Animated backgrounds**: Dynamically generated stars and geometric shapes with CSS animations
- **Scroll-triggered animations**: Intersection Observer API for content reveal
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **TypeScript integration**: Full type safety with Vue 3 Composition API

### Current Implementation
The application is currently a single-page promotional site with:
- Hero section with event branding and logo
- Animated star field background
- Floating geometric shapes
- Smooth scroll animations
- Content section explaining the festival

### Development Notes
- No test framework is currently configured
- Router is set up but no routes are defined
- Components and views directories are empty - all functionality is in App.vue
- Uses modern Vue 3 Composition API with `<script setup>` syntax
- Tailwind CSS is configured with PostCSS

## Making Sections Visible

The application uses Intersection Observer API for scroll-triggered animations. When adding new sections, follow these steps to make them visible:

### 1. Add Reactive Variables
In the `<script setup>` section, add two variables for each new section:
```typescript
const newSectionRef = ref<HTMLElement>()
const isNewSectionVisible = ref(false)
```

### 2. Update Intersection Observer Logic
Add the new section to the observer callback in `setupScrollAnimation()`:
```typescript
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ... existing conditions
      } else if (entry.target === newSectionRef.value) {
        isNewSectionVisible.value = true
      }
    }
  })
}, observerOptions)
```

### 3. Register Section with Observer
Add the section to be observed in `setupScrollAnimation()`:
```typescript
if (newSectionRef.value) {
  observer.observe(newSectionRef.value)
}
```

### 4. Template Setup
In the template, add the ref and visibility class binding:
```vue
<section
  ref="newSectionRef"
  class="content-section"
  :class="{ visible: isNewSectionVisible }"
>
  <!-- section content -->
</section>
```

### Required CSS Classes
Sections must use the `content-section` class which provides:
- Initial opacity: 0 and transform: translateY(50px)
- Transition animations for opacity and transform
- When `.visible` class is added, opacity becomes 1 and transform becomes translateY(0)

### Example Implementation
For a section called "eventLinks":
1. `const eventLinksSection = ref<HTMLElement>()`
2. `const isEventLinksVisible = ref(false)`
3. Add to observer callback and registration
4. Use `ref="eventLinksSection"` and `:class="{ visible: isEventLinksVisible }"` in template