<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Global Design System: Optimized Care

All UI generation, page construction, styling, and component authoring must adhere strictly to the design specifications defined in `DESIGN.md`.

## Mandatory Design Principles
- **Aesthetic:** Minimalist Glass-Tactile & Precision Biotech Optimization. Modern British healthcare, clinical excellence, and Apple-grade consumer hardware aesthetics.
- **Palette:**
  - Primary: `#29A34A` / `#006b29` (Vibrant Bio-Green — active states, catalysts, health milestones)
  - Secondary: `#0878B9` / `#00639a` (Precision Clinical Blue — authority, diagnostics, interactive indicators)
  - Tertiary: `#071A26` (Deep Imperial Navy — anchor blocks, secondary buttons, footers)
  - Neutral Primary: `#102027` / `#0d1e25` (Deep Slate Carbon — authoritative body text)
  - Canvas: `#F7F9F8` / `#f4faff` (Serene Off-White — eye comfort)
  - Diagnostic Pure White: `#FFFFFF` (Card surfaces, data consoles)
  - Borders: `#E2E8F0` / `#E9EEF0` (Whisper-thin 1px borders)
  - Outline / Muted: `#6e7a6c` / `#bdcaba`
- **Typography:**
  - `Space Grotesk` (weights `500`, `600`, `700`) for display hero, headlines, status labels, and telemetry metrics.
  - `Plus Jakarta Sans` (weights `400`, `500`, `600`) for body text, clinical reports, and medical narratives.
  - Tabular figures (`tnum`) for clinical vitals, measurements, timestamps, and numbers.
- **Corner Radii:**
  - Buttons, badges, chips, tags: Full pill (`9999px` / `rounded-full`)
  - Standard cards & input surfaces: `32px` (`2rem` / `rounded-lg`)
  - Hero containers & nested modules: `48px` (`3rem` / `rounded-xl`)
- **Layout & Spacing:** Asymmetric 12-column responsive fluid grid. Max layout width `1440px`. Rhythmic vertical cadence with 4rem to 6rem vertical spacing.

