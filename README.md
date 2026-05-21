# Reelax Assignment

A responsive React dashboard implementation for the Reelax frontend assignment. The project is built with Vite, React, Tailwind CSS, functional components, React hooks, and Lucide React icons.

## Tech Stack

- React JS with Vite
- Tailwind CSS with custom design tokens
- Lucide React icons
- Functional components and hooks
- Semantic, responsive dashboard layout

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment

1. Push the project to a GitHub repository.
2. Open Vercel and choose `Add New Project`.
3. Import the repository.
4. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click `Deploy`.

## Architecture

The application is split into reusable UI atoms, navigation components, layout components, page-level composition, hooks, and utility data. Dashboard content is data-driven through `src/utils/constants.js`, making it simple to update labels, metrics, rows, and navigation without touching layout code.

## Responsive Strategy

- Mobile uses a slide-out sidebar and single-column content.
- Tablet uses compact cards and adaptive grids.
- Desktop uses a fixed sidebar, sticky header, four-column metrics, and a two-column analytics area.

## Notes

The Figma link may require account access. Design tokens are centralized in `tailwind.config.js` so exact colors, spacing, radii, and shadows from Figma Inspect can be adjusted quickly when those values are available.
