# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Start dev server**: `npm run dev` - Runs on port 9169
- **Build for production**: `npm run build`
- **Start production server**: `npm run start` - Runs on port 9169
- **Export static site**: `npm run export`

### Code Quality
- **Lint code**: `npm run lint` - Next.js linting
- **Format code**: `npm run biome-write` - Uses Biome formatter with 2-space indentation and double quotes

## Architecture

This is a **Magic Portfolio** built with Next.js 15, React 19, and Once UI design system. It's a portfolio template for designers and developers featuring MDX content support.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: Once UI Design System v1.4.27
- **React**: v19.0.0
- **TypeScript**: v5.8.3 with strict mode
- **Styling**: SCSS modules with Sass v1.86.3
- **MDX**: @mdx-js/loader and next-mdx-remote for content
- **Formatter**: Biome v1.9.4

### Key Directories
- `src/app/` - Next.js app router pages
  - `blog/posts/*.mdx` - Blog post content files
  - `work/projects/*.mdx` - Work project content files
  - `[slug]/page.tsx` - Dynamic route handlers for MDX content
- `src/components/` - React components with SCSS modules
- `src/resources/` - Core configuration
  - `once-ui.config.ts` - UI theming, routes, fonts, effects, protected routes
  - `content.tsx` - Site content, personal info, social links
- `src/types/` - TypeScript type definitions
- `public/images/` - Static assets including OG images

### Content Management
- **Blog/Work**: Create new `.mdx` files in respective directories with frontmatter
- **Routes**: Enable/disable pages via `routes` object in `once-ui.config.ts`
- **Protected routes**: Configure password protection in `protectedRoutes` (set password in `.env` as `PAGE_ACCESS_PASSWORD`)
- **Personalization**: Update `person` object in `content.tsx` with your information
- **Base URL**: Update `baseURL` in `once-ui.config.ts` for production SEO (currently: https://demo.magic-portfolio.com)

### Styling Configuration
- **Theme**: Configured in `style` object (dark/light/system)
- **Colors**: Brand, accent, and neutral palettes
- **Fonts**: Google Fonts (Geist and Geist Mono) with custom CSS variables
- **Effects**: Customizable visual effects (dots, grid, gradient, mask, lines)
- **Data Visualization**: Chart styling via `dataStyle` config

### Key Features
- MDX-based content with gray-matter for frontmatter parsing
- Automatic OG image generation via `/api/og/generate` route
- Password-protected routes with cookie-based authentication
- Newsletter integration with Mailchimp configuration
- Social sharing buttons with configurable platforms
- Responsive gallery component
- Timezone-based location display
- Schema.org structured data for SEO