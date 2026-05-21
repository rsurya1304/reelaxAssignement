# Pixel-Perfect React Dashboard Assignment

A high-fidelity, responsive implementation of the Reelax design assignment using React JS and Tailwind CSS.

## Live Demo

- **Hosted App:** [https://reelax-assignment-ashy-one.vercel.app](https://reelax-assignment-ashy-one.vercel.app)
- **GitHub Repository:** [https://github.com/rsurya1304/reelaxAssignement](https://github.com/rsurya1304/reelaxAssignement)

## Tech Stack & Key Choices

- **Build Engine:** Vite for fast development and optimized production bundles
- **Framework:** React JS with functional components
- **Styling:** Tailwind CSS with centralized custom design tokens
- **Icons:** Lucide React
- **State:** React hooks for search input, tabs, coupons, and mobile navigation
- **Architecture:** Modular component structure with reusable UI atoms and section-level components

## How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rsurya1304/reelaxAssignement.git
   cd reelaxAssignement
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the local app:**

   ```text
   http://127.0.0.1:5173
   ```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment Steps

1. Push the project to GitHub.
2. Open Vercel and select `Add New Project`.
3. Import the GitHub repository.
4. Use the default Vite settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click `Deploy`.

## Project Structure

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   └── sections/
├── hooks/
├── pages/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Implementation Summary

The app recreates the visible Figma checkout screen with a compact search/action header, billing details form, order summary card, wallet balance, coupon selection, total calculation, and payment action. Components are reusable, data is separated into utility constants, and the layout adapts across mobile, tablet, and desktop widths.
