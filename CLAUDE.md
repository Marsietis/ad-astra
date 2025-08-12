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
- **Tailwind CSS is configured with PostCSS - ALWAYS USE TAILWIND CLASSES**

## Styling Guidelines

### IMPORTANT: Use Tailwind CSS
- **ALWAYS use Tailwind utility classes** instead of custom CSS
- **Avoid writing custom styles** unless absolutely necessary for animations or very specific needs
- **Use Tailwind's design system** for spacing, colors, typography, and layout
- **Responsive design** should use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:)

### Typography Classes to Use
- **Headings**: `text-4xl lg:text-5xl xl:text-6xl font-bold` (responsive sizing)
- **Body text**: `text-lg lg:text-xl` for main content
- **Secondary text**: `text-base lg:text-lg` for descriptions
- **Colors**: `text-white`, `text-amber-400`, `text-gray-200`, `text-gray-400`

### Layout Classes to Use
- **Containers**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Wide containers**: `max-w-screen-2xl mx-auto px-2 sm:px-4`
- **Sections**: `min-h-screen flex items-center justify-center py-16 lg:py-20`
- **Grids**: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`

### Spacing Classes to Use
- **Margins**: `mb-4`, `mb-6`, `mb-8`, `mt-8`, `mt-12`
- **Padding**: `p-4`, `p-6`, `p-8`, `px-8 py-6`
- **Gaps**: `gap-4`, `gap-6`, `gap-8`, `gap-12`

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

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

**CRITICAL: ALWAYS USE TAILWIND CSS CLASSES - DO NOT WRITE CUSTOM CSS UNLESS ABSOLUTELY NECESSARY**