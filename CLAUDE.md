# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 15 landing page for StudySpot with an animated splash screen and gradient background. The application uses:

- **Next.js App Router** with TypeScript
- **Tailwind CSS v4** for styling with custom animations
- **Motion library** for animations
- **Custom Satoshi font** loaded from local assets

### Key Components Structure

- `src/app/page.tsx` - Main page with layered layout (background → splash → content)
- `components/SplashTransition.tsx` - Animated logo intro that transitions to top-left corner
- `components/MainContent.tsx` - Main content area (currently placeholder)
- `components/ui/background-gradient-animation.tsx` - Animated gradient background with mouse interaction

### Animation System

The app has a sophisticated animation system:
- **Background**: Animated gradient with 5 moving elements using CSS keyframes
- **Splash**: Logo starts centered, then transitions to top-left corner after 2 seconds
- **Interactive**: Mouse-following gradient effect in the background

### Font Configuration

Uses custom Satoshi font with both normal and italic variants loaded from `/public/assets/fonts/`. The font is configured in both `globals.css` and `tailwind.config.js`.

### Component Dependencies

- `cn()` utility from `lib/utils.ts` for combining Tailwind classes
- All components are client-side (`"use client"`) for interactivity
- Components use absolute positioning and z-index layering for proper stacking

## File Structure Notes

- Custom fonts in `/public/assets/fonts/`
- Logo assets in `/public/assets/logos/`
- Global styles include keyframe animations for gradient movement
- Tailwind config extends with custom animations and Satoshi font family