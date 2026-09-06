<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Global Design System: Harley & Belgravia Clinical Trust

All UI generation, page construction, styling, and component authoring must adhere strictly to the design specifications defined in `DESIGN.md`.

## Mandatory Design Principles
- **Aesthetic:** Contemporary British Minimalism & Architectural Precision. Subdued, authoritative, prestigious, and clinically pristine.
- **Palette:**
  - Sovereign Navy: `#0A192F` (Primary action surfaces, dominant text, framing)
  - Polished Champagne Gold: `#C5A880` (Prestige indicator, active accents, borders)
  - Cashmere Beige: `#E5D9C5` (Warm fills, badges, tertiary borders)
  - Canvas / Parlour White: `#F7F5F0` (Main background)
  - Pure Diagnostic White: `#FFFFFF` (Card surfaces, data cards)
  - Slate Borders: `#E2E8F0` (1px boundary lines)
  - Muted Slate: `#64748B` (Secondary text, metadata, labels)
  - Semantic Success: `#1E3A2F` / `#2D5A46` | Semantic Alert: `#7F1D1D`
- **Typography:** `Inter` font, weights `400`, `500`, `600` only. Tabular figures (`tnum`) for clinical vitals, measurements, timestamps, and numbers.
- **Corner Radii:** Buttons/inputs: `4px` (`0.25rem`), Cards: `8px` (`0.5rem`), Panels: `12px` (`0.75rem`). No pill shapes for buttons or inputs.
- **Layout & Spacing:** Architectural 8px grid. Desktop max width `1360px`, prose width `680px`. Generous padding (`1.5rem` to `2rem`).
