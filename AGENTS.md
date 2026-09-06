<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Global Design System: Cavendish Stone & Clay

All UI generation, page construction, styling, and component authoring must adhere strictly to the design specifications defined in `DESIGN.md`.

## Mandatory Design Principles
- **Aesthetic:** Architectural Stone Minimalism. Warm, mineral, and precise — trust built through material honesty rather than metallic luxury cues.
- **Palette:**
  - Ink: `#211E1A` (Primary action surfaces, dominant text, framing — a warm near-black, not navy)
  - Clay: `#A85D3D` (The one decorative accent — prestige indicators, active accents, borders)
  - Sand: `#E4D6C0` (Warm fills, badges, tertiary borders)
  - Canvas / Parchment: `#F4F0E7` (Main background)
  - Pure Diagnostic White: `#FFFFFF` (Card surfaces, data cards)
  - Stone Borders: `#DDD3BF` (1px boundary lines)
  - Muted Stone: `#6B6457` (Secondary text, metadata, labels)
  - Semantic Success: `#1E3A2F` / `#2D5A46` | Semantic Alert: `#7A2E1F` / `#B23A22`
- **Typography:** `Fraunces` (serif, weight `500` only) for display/headline tiers; `Inter` (weights `400`, `500`, `600`) for every functional/body/UI surface. Tabular figures (`tnum`) for clinical vitals, measurements, timestamps, and numbers.
- **Corner Radii:** Buttons/inputs: `4px` (`0.25rem`), Cards: `8px` (`0.5rem`), Panels: `12px` (`0.75rem`). No pill shapes for buttons or inputs.
- **Layout & Spacing:** Architectural 8px grid. Desktop max width `1360px`, prose width `680px`. Generous padding (`1.5rem` to `2rem`).
