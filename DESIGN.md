---
name: Cavendish Stone & Clay
colors:
  surface: '#F7F4EC'
  surface-dim: '#D6C9B4'
  surface-bright: '#F7F4EC'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#EFEAE0'
  surface-container: '#EAE3D5'
  surface-container-high: '#E3DACB'
  surface-container-highest: '#DCD0BC'
  on-surface: '#211E1A'
  on-surface-variant: '#5A5347'
  inverse-surface: '#3A342B'
  inverse-on-surface: '#F7F4EC'
  outline: '#7A7365'
  outline-variant: '#CFC7B8'
  surface-tint: '#6B6459'
  primary: '#211E1A'
  on-primary: '#ffffff'
  primary-container: '#2A2620'
  on-primary-container: '#8C8271'
  inverse-primary: '#D9CFB8'
  secondary: '#8A4530'
  on-secondary: '#ffffff'
  secondary-container: '#E9C9AC'
  on-secondary-container: '#6B4A30'
  tertiary: '#211E1A'
  on-tertiary: '#ffffff'
  tertiary-container: '#241D14'
  on-tertiary-container: '#8C7F68'
  error: '#B23A22'
  on-error: '#ffffff'
  error-container: '#F6DCCF'
  on-error-container: '#7A2214'
  primary-fixed: '#ECE6D6'
  primary-fixed-dim: '#D9CFB8'
  on-primary-fixed: '#2A2620'
  on-primary-fixed-variant: '#4A4335'
  secondary-fixed: '#E9C9AC'
  secondary-fixed-dim: '#D2A67E'
  on-secondary-fixed: '#241A10'
  on-secondary-fixed-variant: '#4F3A22'
  tertiary-fixed: '#EFE6D6'
  tertiary-fixed-dim: '#D9CDB8'
  on-tertiary-fixed: '#241D14'
  on-tertiary-fixed-variant: '#4A4030'
  background: '#F4F0E7'
  on-background: '#211E1A'
  surface-variant: '#DCD0BC'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 62px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Fraunces
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 42px
    letterSpacing: -0.005em
  headline-xl:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.005em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.005em
  headline-md:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-xl:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
  space-4xl: 4rem
  space-5xl: 6rem
  space-6xl: 8rem
  gutter-mobile: 1rem
  gutter-tablet: 2rem
  gutter-desktop: 3rem
  max-width-content: 1360px
  max-width-prose: 680px
---

## Brand & Style

The visual identity trades the aristocratic navy-and-gold shorthand for private medicine in favour of something more tactile and specific: the stone facades, apothecary cabinetry, and warm plasterwork of Marylebone's Cavendish Square medical district. It is quieter than a "luxury" palette and more particular than a generic clinical blue — closer to a well-made pharmacy counter than a hotel lobby.

This design system targets discerning private patients and referring clinicians who read confidence in restraint, not ornament. Trust is built through material honesty — real stone tones, real ink, a single considered accent — rather than metallic accents that could belong to any premium brand.

To convey precision without coldness:
- The design movement is **Architectural Stone Minimalism**: warm, mineral neutrals framed by an near-black ink, punctuated by one desaturated clay accent.
- Whitespace remains an active clinical buffer, but warmed — parchment and stone rather than clinical blue-white.
- Layouts stay structured and rational; a single serif display face (Fraunces) is reserved for headlines to signal heritage and craft, while Inter continues to carry every functional, data-dense, and UI surface.
- Micro-interactions stay restrained and linear. No elastic bounce, no gradient sheen — confidence through material calm.

## Colors

The palette is built from one neutral family (warm stone, never mixed with cool grays) plus exactly one decorative accent. Success and alert remain distinct semantic hues so they are never confused with the brand accent.

- **Ink (`#211E1A` - Primary):** A near-black warm charcoal, not navy. The structural core for dominant headers, primary buttons, and framing. Reads as ink on paper rather than corporate blue.
- **Clay (`#A85D3D` - Secondary / the one accent):** A desaturated terracotta drawn from apothecary jars and Portland stone trim. Used for prestige indicators, active tab lines, key credentials, and the single recurring decorative accent. There is no second accent color anywhere in the system.
- **Sand (`#E4D6C0` - Tertiary):** Warm, muted fill for badge backgrounds and secondary interactive borders — a lighter step of the same stone family, never a different hue.
- **Neutral Backgrounds & Foundations:**
  - **Diagnostic White (`#FFFFFF`):** Card surfaces, data cards, input fields.
  - **Parchment Canvas (`#F4F0E7`):** The primary background — warm stone rather than blue-white, mitigating glare without feeling clinical-cold.
  - **Stone Borders (`#DDD3BF`):** Warm 1px boundary lines — replacing the old cool slate so every border shares the same underlying hue family as the background.
  - **Muted Stone Text (`#6B6457`):** Secondary metadata, captions, and legal disclosures.
- **Semantic Accents (intentionally distinct from Clay so they always read as status, never decoration):**
  - **Clinical Success (`#1E3A2F` / `#2D5A46`):** Deep botanical green, unchanged — verified results, confirmed appointments.
  - **Clinical Alert (`#7A2E1F` / `#B23A22`):** Warm garnet, shifted to sit comfortably beside Clay instead of clashing cool red against warm stone.

## Typography

Inter continues to carry every functional surface — labels, body copy, tabular data, forms, navigation. **Fraunces**, a soft-contrast serif with real optical warmth, is now reserved exclusively for display and headline tiers (`display-lg` through `headline-md`). This single pairing decision is what separates the system from a generic "Inter everywhere" AI layout: headlines read as considered editorial statements, while everything a patient has to scan or fill in stays in the hyper-legible sans.

- **Weight Hierarchy:** Fraunces headlines sit at `500` (Medium) only — never bold, letting size and the serif's natural warmth carry authority instead of weight. Inter continues to restrict itself to `400`/`500`/`600`.
- **Micro-Tracking & Numerals:** `tnum` stays enabled globally for clinical vitals, pathology markers, dosage data, and financial schedules.
- **Sub-headings & Eyebrows:** Eyebrow labels stay in Inter `label-caps`, uppercase, `letterSpacing: 0.08em`, set in Ink (`#211E1A`) or Clay (`#A85D3D`) — never in the serif, which is reserved for the headline it introduces.

## Layout & Spacing

Unchanged from the prior system — the architectural 8px grid, 1360px desktop container, and 680px prose measure were never the problem; the palette and typeface were. Preserving them keeps this a re-skin, not a rebuild.

- **Grid Architecture:**
  - **Desktop (≥ 1280px):** 12-column grid within a maximum width of `1360px`, `48px` (`3rem`) gutters.
  - **Tablet (768px - 1279px):** 8-column layout with `32px` (`2rem`) gutters.
  - **Mobile (< 768px):** 4-column layout with `16px` (`1rem`) gutters, collapsing multi-pane tables into stacked cards.
- **Rhythm & Padding:**
  - Component interiors use `space-xl` (`1.5rem`) and `space-2xl` (`2rem`) padding.
  - Section dividers use `space-4xl` to `space-5xl` vertical intervals.

## Elevation & Depth

Shadows are now tinted with Ink rather than navy, so depth reads as warm and grounded rather than cool and corporate.

- **Primary Surface Separation:** Razor-sharp 1px borders in Stone (`#DDD3BF`) or Sand (`#E4D6C0`).
- **Elevation Tiers:**
  - **Base Layer (Flat):** Canvas background in `#F4F0E7`.
  - **Tier 1 (Resting Cards):** `#FFFFFF` background, `1px` border (`#DDD3BF`), ambient shadow `0px 1px 3px rgba(33, 30, 26, 0.05), 0px 4px 8px rgba(33, 30, 26, 0.03)`.
  - **Tier 2 (Hover & Active):** `#FFFFFF` background, border shifts to Clay (`#A85D3D`), shadow `0px 4px 16px rgba(33, 30, 26, 0.08), 0px 1px 2px rgba(33, 30, 26, 0.05)`.
  - **Tier 3 (Modals & Overlays):** `#FFFFFF` surface with a deep ambient drop `0px 12px 36px rgba(33, 30, 26, 0.14), 0px 2px 6px rgba(33, 30, 26, 0.06)`. Backdrop is Ink at 55% opacity (`rgba(33, 30, 26, 0.55)`) with `blur(4px)`.

## Shapes

Unchanged: Level `1` (Soft) micro-radii.

- **Base Corner Radius (`0.25rem` / `4px`):** Buttons, inputs, badges.
- **Card & Modal Radius (`0.5rem` / `8px`):** Primary cards, dashboards.
- **Large Panels (`0.75rem` / `12px`):** Major layout groupings, image enclosures.
- **Pill Shapes:** Still forbidden for functional buttons and inputs. Reserved only for status indicators, capped at `24px` height.

## Components

### Buttons
- **Primary:** Background Ink (`#211E1A`), text white, radius `4px`. Hover shifts to `#3A342B`. Active tightens scale by 0.5%.
- **Secondary (Prestige/Consultation):** Background `#FFFFFF`, text Ink, `1px solid #A85D3D` border. Hover washes in `#F4F0E7`, text stays Ink.
- **Tertiary / Ghost:** No fill, text Ink, hover transitions to Clay with a `4px` underline offset.
- **Sizing:** `48px` (Large) / `40px` (Medium), minimum `24px` horizontal padding.

### Cards & Clinical Dossiers
- **Structure:** `#FFFFFF` with `1px solid #DDD3BF` border, `4px` or `8px` radius.
- **Header:** Eyebrow `label-caps` in `#6B6457` or `#A85D3D`, followed by a `headline-sm` (Inter, `600`) in `#211E1A` — sub-card titles stay in Inter; only page-level and section-level headlines use Fraunces.
- **Divider:** Hairline separator in `#EFE9DD`.
- **Padding:** Minimum `24px` (`1.5rem`), expanding to `32px` on desktop.

### Input Fields & Selectors
- **Resting:** `#FFFFFF` background, `1px solid #DDD3BF` border, `4px` radius, text `#211E1A`, label `#211E1A`. Height `44px`.
- **Focus:** Border transitions to `#211E1A` with an outer micro-ring `1px solid rgba(33, 30, 26, 0.15)`. No default browser blue ring anywhere in the system.
- **Helper Text:** `#6B6457` (`body-sm`).

### Checkboxes & Radio Buttons
- **Checkboxes:** `18px × 18px`, `2px` micro-radius. Unchecked border `#DDD3BF` on `#FFFFFF`. Checked fills `#211E1A` with a white tick.
- **Radio Buttons:** `18px` circular. Selected state: solid `#211E1A` outer ring, centered `8px` Clay (`#A85D3D`) dot.

### Chips & Accreditation Badges
- **Status Chips:** Height `24px`, horizontal padding `10px`, `label-caps`. Background `#F4F0E7`, border `1px solid #E4D6C0`, text `#211E1A`.
- **Verified Practitioner Badges:** Ink background, white text, `4px × 4px` Clay accent dot.

### Lists & Timelines
- **Consultation Schedules & Records:** Rows bordered `1px solid #DDD3BF`. Hover shifts background to `#F4F0E7`.
- **Timestamp / Pathology Values:** Tabular (`tnum`), right-aligned, `#211E1A` with supporting metrics in `#6B6457`.

### Medical Prescription & Pathology Indicators
- **Normal Range Badges:** `#1E3A2F` text over `#F0F5F2` fill, bordered `#D1E3D8` — unchanged, kept distinct from Clay.
- **Attention Required:** `#7A2214` text over `#FBF1EA` fill, bordered `#EFD9CC`.
