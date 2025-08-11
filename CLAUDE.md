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