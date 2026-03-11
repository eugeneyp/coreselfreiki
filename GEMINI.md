# Project Context
We are migrating a v0-generated React/Tailwind landing page ("Core Self Reiki") into a static Astro framework site. 
The final site will be built using Bun and hosted on GitHub Pages.
The primary goal is pixel-perfect visual parity with the original v0 design.

# Tech Stack
- Framework: Astro (latest)
- Styling: Tailwind CSS
- Package Manager: Bun
- UI Components: Native Astro components preferred. 

# Directives for AI Assistant
1. **Component Conversion:** When asked to convert v0 reference code, default to translating React (`.jsx`/`.tsx`) into native `.astro` components to keep the site static and fast. Only use React components if client-side interactivity (like `useState` or `onClick`) is strictly required by the design.
2. **Tailwind Fidelity:** Never alter or "optimize" the Tailwind utility classes from the v0 source code. Copy them exactly as they are to preserve the v0 design perfectly.
3. **Asset Paths:** Remember this site will be deployed to GitHub Pages. Ensure image paths account for the repository base path if necessary, or use standard Astro `public/` directory conventions for assets (e.g., `/images/flora-warm-bg.jpeg`).
4. **Tooling:** Always output commands using `bun` instead of `npm`.