---
name: Renan Garcia
description: Personal site of a senior front-end engineer: a dark, blunt record of shipped work with one acid signal color.
colors:
  primary: "hsl(74 100% 61%)"
  primary-foreground: "hsl(240 4% 4.5%)"
  background: "hsl(240 4% 4.5%)"
  foreground: "hsl(60 9% 92%)"
  popover: "hsl(240 4% 8%)"
  secondary: "hsl(240 4% 15%)"
  muted-foreground: "hsl(60 2% 63%)"
  border: "hsl(240 4% 17%)"
  destructive: "hsl(0 62.8% 30.6%)"
  destructive-foreground: "hsl(0 85.7% 97.3%)"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 11rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  none: "0px"
spacing:
  gutter: "1rem"
  section-sm: "3.5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  case-row-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.none}"
    padding: "2.5rem 1.5rem"
  skill-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    padding: "1rem 0"
  chip:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.625rem"
---

# Design System: Renan Garcia

## Overview

**Creative North Star: "The Signal Dossier"**

The site reads as a case file kept in the dark. Near-black surfaces, hairline rules and monospace metadata set the frame, and one acid lime signal marks only what the visitor should act on or read first. The personality is direct and technical. Nothing is rounded, nothing glows, and the headline does the work that imagery would do on other portfolios.

The density is editorial and scan-first. Each section is separated by a 1px rule rather than by card chrome, so a recruiter can move from the hero to the case files to the contact path in one pass on a phone or a laptop. Type is large where it carries proof (the name, the case titles) and small where it carries metadata (roles, stacks, company names).

The current build is dark-only (`color-scheme: dark`). The visual language is set by the existing code; no light theme is defined.

**Key Characteristics:**
- Dark near-black field with off-white text and a single lime accent.
- Square geometry: every radius token resolves to 0.
- Hairline rules divide content; surfaces stay flat.
- Monospace for metadata, grotesk for everything a visitor reads as copy.

## Colors

A two-tone system: near-black and off-white carry the page, and one acid lime carries emphasis.

### Primary
- **Acid Signal Lime** (`hsl(74 100% 61%)`, approximately #D1FF38): the only accent. Used for the primary CTA fill, the accent word in the hero headline, the current nav item, the `renan.garcia` logo mark, the focus ring, the text-selection colour, the skills band fill and the hovered case-file row fill.

### Secondary
- **Graphite Fill** (`hsl(240 4% 15%)`): the secondary, muted and accent fill token. Defined for secondary surfaces; the drawer handle uses it.

### Neutral
- **Ink Black** (`hsl(240 4% 4.5%)`): page background and the text colour on the primary CTA.
- **Paper Off-White** (`hsl(60 9% 92%)`): primary text on the background.
- **Ash Grey** (`hsl(60 2% 63%)`): muted-foreground for mono labels, roles, stacks and company names.
- **Rule Grey** (`hsl(240 4% 17%)`): the 1px border and input stroke.
- **Popover Ink** (`hsl(240 4% 8%)`): the popover surface, one step above the page background.
- **Alert Red** (`hsl(0 62.8% 30.6%)`, with `destructive-foreground` `hsl(0 85.7% 97.3%)`): reserved for form error text. It is defined but is dark for text on Ink Black (see Don'ts).

### Named Rules
**The Single Signal Rule.** Lime marks action and emphasis only: the CTA, the headline accent, current navigation, the skills band and the hovered case row. It never becomes body colour or a second accent.

## Typography

**Display Font:** Space Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Space Grotesk (same family)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A grotesk with tight tracking for display, paired with a monospace that reads as metadata. The pairing says "engineer writing about shipped work": the headline is the claim, the mono is the evidence.

### Hierarchy
- **Display** (700, `clamp(3.5rem, 11vw, 11rem)`, line-height 0.86, tracking -0.05em): the hero headline only.
- **Headline** (700, `clamp(2.25rem, 5vw, 4.5rem)`, line-height 1, tracking -0.04em): section titles such as "Cases".
- **Title** (700, `clamp(2rem, 4vw, 3rem)`, line-height 1.05, tracking -0.03em): case-file titles.
- **Body** (400, 1.125rem, line-height 1.5): descriptions and copy, at a measure of about 36rem (`max-w-152`).
- **Label** (JetBrains Mono, 0.875rem or 0.75rem, uppercase where it labels): role line, nav, stacks, company names and footer meta.

### Named Rules
**The Mono Evidence Rule.** Metadata, labels and proof tags are set in JetBrains Mono. Grotesk carries claims; mono carries the facts about them.

## Layout

A single centred container: 1rem side gutters, full width up to 1400px, then capped at 1400px. Sections use 3.5rem vertical padding on phones and 6rem from the md breakpoint (768px). The hero splits into a text column and a CTA group from md up; below that everything stacks. Case rows are a two-part flex row that wraps to a single column on phones. The header wraps its nav onto a second line on narrow widths.

## Elevation & Depth

The code uses no box shadows. Depth is conveyed by 1px rules that divide sections and by inverted fills on hover (the case row and the chips flip to lime or to Ink). No elevation tokens are defined.

## Shapes

Square everywhere: `--radius` is 0, so buttons, chips, inputs and rows have hard corners. Strokes are 1px. Recurring marks are typographic: `[H]`, `[W]`, `[B]` menu keys and a `→` before the primary CTA label.

## Components

### Buttons
- **Character:** solid and direct.
- **Shape:** 0px radius, 3rem minimum height, 0 1.5rem padding.
- **Primary:** Acid Lime fill with Ink text, bold. Hover drops to 90% opacity.
- **Outline (contact):** transparent with a 1px Paper border. Hover turns the border and text lime.

### Chips
- **Style:** 1px Rule border, Ash text, mono 0.75rem, padding 0.25rem by 0.625rem.
- **Hover (inside a case row):** border and text invert to Ink on the lime row.

### Cards / Containers
- **Case file row:** a full-width link with a 1px bottom rule. The hover state fills the row with lime and inverts the text to Ink. No card chrome, no shadow.

### Inputs / Fields
- **Style:** transparent background, 1px Rule stroke, 1rem by 0.75rem padding, text-base.
- **Focus:** the stroke shifts to lime.
- **Error:** a mono alert line beneath the field in the destructive token.

### Navigation
- **Style:** mono, uppercase, 0.875rem. Hover and current page turn lime. Keyboard shortcuts appear as `[H]`, `[W]`, `[B]` before each label.
- **Mobile:** the link list wraps to a full-width row beneath the logo.

## Do's and Don'ts

### Do:
- **Do** keep every radius at 0px; the token resolves to zero.
- **Do** reserve Acid Lime for the roles listed in the Single Signal Rule.
- **Do** set metadata and labels in JetBrains Mono.
- **Do** separate sections with 1px Rule borders rather than cards or shadows.

### Don't:
- **Don't** add a second accent colour; the lime is the only accent in the code.
- **Don't** introduce rounded corners on buttons, chips, inputs or rows.
- **Don't** use Alert Red as text on Ink Black at its current lightness; it is low contrast and needs a lighter value before it is used for error copy.
