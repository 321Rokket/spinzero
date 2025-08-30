# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 13+ application using the App Router, converted from the "Baosh" responsive HTML template. The project uses a YAML-driven architecture where schemas are the single source of truth for all content and configuration.

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Global app shell (header, footer, etc.)
│   └── page.tsx           # Homepage content
├── components/
│   ├── layout/            # App shell components
│   ├── sections/          # Reusable section components
│   └── ui/                # UI atoms
├── lib/                   # Utilities and YAML loader
schemas/                   # YAML schemas (source of truth)
├── site-structure.yaml    # Navigation and site config
├── content-sections.yaml  # Page content data
├── page-templates.yaml    # Page layout definitions
└── component-definitions.yaml # Component specifications
public/assets/             # Static assets from template
docs/                      # Architecture documentation
templates/                 # Original HTML templates (reference)
```

## Technology Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **CSS Framework**: Bootstrap 5 + Tailwind CSS 4
- **JavaScript Libraries**: jQuery 3.6.0, Swiper, AOS animations, GSAP
- **Data Management**: YAML schemas with js-yaml parser
- **Deployment**: Docker support via multi-stage Dockerfile

## Key Files
- `src/app/layout.tsx` - Global app shell with navigation and footer
- `src/app/page.tsx` - Homepage content
- `src/lib/yaml-loader.ts` - YAML parser with TypeScript interfaces
- `schemas/*.yaml` - All content and configuration (source of truth)
- `src/components/Scripts.tsx` - Sequential script loader for jQuery/vendor libs
- `next.config.ts` - Next.js configuration (ESLint ignored for build)

## Development Commands
```bash
npm run dev -- -p 3005    # Development server on port 3005
npm run build             # Production build
npm run lint              # ESLint checking
npm run start             # Production server
```

## Architecture Principles
1. **YAML-Driven**: All content and configuration in YAML schemas
2. **Component-Based**: Reusable components from templates
3. **Server-First**: Default to server components, use client only when needed
4. **Type-Safe**: TypeScript interfaces generated from YAML schemas

## Current Status
- **Pages Created**: 23/28 complete (see `docs/06-complete-page-checklist.md`)
- **Build Status**: ✅ Success - all pages generated as static (SSG)
- **Script Loading**: ✅ Fixed - jQuery loads sequentially before plugins
- **TypeScript**: ✅ No type errors
- **Architecture**: ✅ App shell properly separated in layout.tsx

## Known Issues
- ESLint warnings for `<a>` tags (should use Next.js `<Link>`)
- Image optimization warnings (should use Next.js `<Image>`)
- Need to extract reusable section components from templates

## GitHub Repository
Repository: https://github.com/321Rokket/spinzero
Branch: main