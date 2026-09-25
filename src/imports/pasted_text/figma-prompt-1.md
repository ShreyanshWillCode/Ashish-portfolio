# FIGMA MAKE — PIXEL-PERFECT WEBSITE IMPLEMENTATION PROMPT

You are implementing a production-ready website from the attached Figma design and reference PNG images.

IMPORTANT:
The attached Figma design is the SINGLE SOURCE OF TRUTH for the visual design.

DO NOT redesign it.
DO NOT reinterpret it.
DO NOT simplify it.
DO NOT make your own layout decisions when the Figma design already provides the answer.
DO NOT replace elements with approximate alternatives.
DO NOT use generic spacing, typography, colors, proportions, or components.

Your job is to reproduce the Figma design as accurately as possible in a live, functional website.

==================================================
1. PRIMARY OBJECTIVE
==================================================

Create an exact visual reproduction of the attached Figma design.

The final browser rendering should visually match the Figma design at the same viewport dimensions.

Treat the following as authoritative:

1. Figma frame dimensions
2. Figma layer positions
3. Figma Auto Layout properties
4. Figma constraints
5. Figma typography
6. Figma colors
7. Figma borders
8. Figma corner radii
9. Figma shadows
10. Figma images/assets
11. Figma spacing
12. Figma component structure
13. Attached PNG screenshots/reference images

The PNG is a visual comparison reference.

If there is any conflict between your assumptions and the Figma design, ALWAYS follow the Figma design.

==================================================
2. DO NOT "IMPROVE" THE DESIGN
==================================================

This is extremely important.

Do NOT:

- redesign the UI
- modernize the UI
- change typography
- change colors
- change spacing
- change proportions
- change section heights
- change image sizes
- change card sizes
- change alignment
- add gradients
- add shadows that are not present
- remove whitespace
- make the layout more symmetrical
- replace unusual positioning with a "cleaner" layout
- substitute components
- invent responsive behavior that contradicts the design

Even if something looks unusual, reproduce it exactly.

The goal is:

Figma design → browser

NOT:

Figma design → your interpretation → browser

==================================================
3. FIRST ANALYZE THE FIGMA DESIGN
==================================================

Before writing the implementation, inspect the entire Figma design carefully.

Identify:

- every section
- every frame
- every component
- every text layer
- every image
- every icon
- every button
- every divider
- every decorative element
- every absolute-positioned element
- every Auto Layout relationship
- every gap
- every padding value
- every alignment
- every typography property
- every responsive constraint

Build an internal representation of the design before coding.

Do not start by guessing CSS.

==================================================
4. USE ACTUAL FIGMA VALUES
==================================================

When a value exists in Figma, use that exact value.

For example:

If Figma says:

width: 1194px

use:

width: 1194px

Do not automatically change it to:

width: 1200px

If Figma says:

padding: 72px 0 64px

use exactly that.

If Figma says:

font-size: 70.64px

do not round it to:

70px

If Figma says:

letter-spacing: -1.553px

do not replace it with:

-1.5px

Preserve decimal values wherever they materially affect visual accuracy.

==================================================
5. TYPOGRAPHY
==================================================

Typography must be reproduced exactly.

For every text layer determine:

- font family
- font weight
- font size
- line height
- letter spacing
- text transform
- text alignment
- text color
- width
- maximum width
- wrapping behavior

Do NOT substitute a similar font if the actual font is available.

If the exact font is not available, identify the closest available font only as a fallback.

Do not modify the font merely because the browser rendering looks unusual.

Text wrapping is part of the design.

Therefore preserve:

- explicit widths
- line heights
- font metrics
- letter spacing
- whitespace
- line breaks

==================================================
6. LAYOUT
==================================================

Reproduce the exact spatial relationships from Figma.

Do not blindly convert everything into responsive flexbox/grid.

Use:

- CSS Grid
- Flexbox
- absolute positioning
- relative positioning
- transforms

wherever necessary to reproduce the actual design.

If an element intentionally overflows its parent in the Figma design, preserve that behavior.

If an element is positioned independently, do not force it into a normal document flow just because it is easier to code.

The visual result is more important than implementation convenience.

==================================================
7. IMAGES AND ASSETS
==================================================

Use the actual assets from the Figma design whenever available.

DO NOT:

- replace images with Unsplash images
- generate random replacement images
- use placeholder images
- change image aspect ratios
- crop images differently
- alter image positioning

Preserve:

- aspect ratio
- object-fit
- object-position
- border radius
- dimensions
- cropping
- opacity
- filters

If an image is displayed as grayscale, reproduce the grayscale treatment.

If an image has a specific overlay, reproduce it.

==================================================
8. COLORS
==================================================

Extract colors directly from Figma.

Do not approximate colors by eye.

Preserve exact:

- background colors
- text colors
- accent colors
- borders
- dividers
- overlays
- opacity

For example, if the design uses:

#F2EFE8

use exactly:

#F2EFE8

Do not replace it with a visually similar beige.

==================================================
9. SPACING
==================================================

Spacing must match Figma.

Pay particular attention to:

- section padding
- container padding
- card padding
- grid gaps
- text gaps
- image gaps
- heading spacing
- divider spacing
- footer spacing
- vertical rhythm

Do not normalize spacing into a design system unless the Figma file itself does so.

Different sections may intentionally use different spacing.

==================================================
10. COMPONENTIZATION
==================================================

Create reusable React components where appropriate.

However:

DO NOT allow component abstraction to change the visual output.

Reusable components must accept the exact visual properties required by each Figma instance.

Example:

<ServiceCard
  number="01"
  title="PODCAST EDITS"
  image={...}
  description="..."
/>

The component should reproduce the exact Figma card dimensions and typography.

==================================================
11. RESPONSIVE DESIGN
==================================================

Desktop must match the provided Figma design EXACTLY.

Do not modify the desktop layout to make it "more responsive".

For tablet and mobile:

derive responsive behavior from the Figma design if mobile/tablet frames exist.

If mobile designs are provided, treat them as equally authoritative.

If a mobile design is NOT provided:

create responsive behavior while preserving the visual hierarchy, typography, spacing relationships, and proportions of the desktop design.

Do not arbitrarily redesign the mobile version.

==================================================
12. VIEWPORT ACCURACY
==================================================

The website must be tested at the exact dimensions of the Figma frame.

For example, if the Figma frame is:

1440 × 5800

then compare the website at:

1440 × 5800

Do not judge visual accuracy from an arbitrary browser viewport.

For every section:

Figma screenshot
        ↓
Browser screenshot
        ↓
Pixel comparison
        ↓
Fix differences
        ↓
Repeat

==================================================
13. SCROLLING
==================================================

The complete page must scroll naturally.

Do not artificially compress sections.

Preserve the exact vertical rhythm of the Figma design.

If the Figma design contains long editorial sections, large typography, overlapping elements, or large whitespace, preserve them.

Do not reduce the page height just to make it shorter.

==================================================
14. ANIMATIONS
==================================================

Animations must enhance the existing design without changing its static appearance.

If the design includes scroll interactions:

use:

GSAP + ScrollTrigger

or an equivalent robust implementation.

Animations should be driven by scroll progress where appropriate.

Do NOT introduce:

- random animations
- excessive parallax
- unnecessary scaling
- bouncing
- flashy effects
- generic fade-in animations everywhere

The initial/static state must match the Figma design exactly.

==================================================
15. INTERACTION
==================================================

Buttons, navigation, cards and links should be functional.

However, functionality must not alter the visual design.

Preserve:

- button dimensions
- typography
- borders
- hover states
- cursor behavior
- transitions
- spacing

If the Figma design contains a navigation menu, reproduce its structure exactly.

==================================================
16. HEADER / NAVIGATION
==================================================

Reproduce the header exactly.

Pay attention to:

- logo position
- navigation spacing
- typography
- buttons
- icons
- alignment
- header height
- horizontal margins
- vertical positioning

Do not use a generic navbar component.

The navbar must visually match the Figma design.

==================================================
17. SECTION-BY-SECTION IMPLEMENTATION
==================================================

Implement the page section by section.

For each section:

1. Identify the Figma frame.
2. Determine its exact dimensions.
3. Reproduce the container.
4. Reproduce typography.
5. Reproduce images.
6. Reproduce spacing.
7. Reproduce borders/dividers.
8. Reproduce positioning.
9. Reproduce interactions.
10. Compare against the PNG.
11. Correct discrepancies.

Do not move to the next section until the current section is visually accurate.

==================================================
18. IMPORTANT EXAMPLE FROM THE DESIGN
==================================================

For the "OUR EDITING EXPERTISE" section, preserve the exact Figma measurements rather than approximating them.

The design uses:

Background:
#F2EFE8

Accent:
#E63228

Primary text:
#111111

The section uses the large:

OUR

headline and:

EDITING EXPERTISE

typography arrangement exactly as shown in Figma.

The four service cards must preserve:

- card dimensions
- border
- internal padding
- numbering
- image height
- title typography
- red accent line
- description typography
- spacing

Do NOT replace the four cards with a generic responsive card grid if that changes their dimensions or alignment.

==================================================
19. CODE QUALITY
==================================================

Use clean production-ready code.

Prefer:

React / Next.js
TypeScript
CSS modules or well-organized CSS
GSAP where necessary

Avoid:

- giant inline style objects
- duplicated CSS
- arbitrary magic numbers unrelated to Figma
- unnecessary libraries
- placeholder assets
- excessive component abstraction

But remember:

VISUAL ACCURACY > CODE SIMPLICITY.

If an unusual CSS value is required to match Figma, use it.

==================================================
20. CRITICAL VALIDATION LOOP
==================================================

After implementation, perform a visual audit.

For each section compare:

X position
Y position
Width
Height
Font size
Font weight
Line height
Letter spacing
Color
Border
Radius
Image crop
Image position
Spacing
Alignment

Fix every noticeable mismatch.

Do not stop at "looks close".

The target is:

PIXEL-ACCURATE REPRODUCTION.

==================================================
21. FINAL RULE
==================================================

DO NOT DESIGN.

DO NOT INTERPRET.

DO NOT APPROXIMATE.

DO NOT SUBSTITUTE.

REPRODUCE.

The attached Figma design and PNG reference are the source of truth.

The final website should look as though the Figma design itself has been converted into a functioning website.

When there is a choice between:

A) easier implementation
B) more accurate visual reproduction

ALWAYS choose B.

Start by inspecting the attached Figma design and PNG thoroughly, then implement the page section-by-section.