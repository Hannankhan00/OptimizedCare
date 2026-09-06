# Design System & Aesthetic Guidelines: Harley & Belgravia Clinical Trust

Whenever designing, building, or modifying any UI, components, pages, or styles in this repository, strictly adhere to the **Harley & Belgravia Clinical Trust** design specification defined in [DESIGN.md](file:///e:/My%20work/threeinone/DESIGN.md).

## Core Directives for Agent Execution
1. **Always Consult `DESIGN.md`:** Before generating or editing UI code, layouts, components, typography, color tokens, or spacing, reference the design rules in `DESIGN.md`.
2. **Brand & Style:** Embody Contemporary British Minimalism and Architectural Precision. Whitespace is a clinical and psychological buffer. Avoid loud neon colors, playful elastic animations, or generic designs.
3. **Palette Enforcement:**
   - Primary: Sovereign Navy (`#0A192F`)
   - Secondary: Polished Champagne Gold (`#C5A880`)
   - Tertiary: Cashmere Beige (`#E5D9C5`)
   - Canvas / Warm Parlour White: `#F7F5F0`
   - Clinical Pure White: `#FFFFFF`
   - Architectural Slate Borders: `#E2E8F0`
   - Secondary Muted Text: `#64748B`
   - Clinical Success: `#1E3A2F` / `#2D5A46`
   - Clinical Alert: `#7F1D1D`
4. **Typography & Numbers:** Use `Inter` with strict weight hierarchy (`400`, `500`, `600`). Always enable `tnum` (tabular numerals) for data, vitals, time, and pathology values. Eyebrows must use `label-caps` in uppercase with `letterSpacing: 0.08em`.
5. **Shapes & Radii:** 
   - Buttons, inputs, badges: `4px` (`0.25rem`)
   - Primary cards & modal containers: `8px` (`0.5rem`)
   - Large image enclosures / main panels: `12px` (`0.75rem`)
   - Never use full pills for functional buttons or inputs (pill max height `24px` only for status indicator chips).
6. **Elevation & Micro-interactions:** Use razor-sharp 1px borders (`#E2E8F0` or `#E5D9C5`) and micro-diffused shadows. Avoid heavy blurred dropshadows.
