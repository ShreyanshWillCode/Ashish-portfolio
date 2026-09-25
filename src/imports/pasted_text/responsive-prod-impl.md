# RESPONSIVE + FULLY FUNCTIONAL PRODUCTION IMPLEMENTATION

The visual design is already COMPLETE.

DO NOT redesign, restyle, simplify, or reinterpret the existing design.

Your task now is ONLY to transform the existing implementation into a fully responsive, interactive, production-ready website while preserving the existing desktop design exactly.

==================================================
1. SOURCE OF TRUTH
==================================================

The current Figma design is the source of truth.

The existing desktop implementation is already approved.

DO NOT change the approved desktop appearance unless a change is strictly required to make it responsive.

Do not alter:

- colors
- typography
- font weights
- section structure
- spacing
- images
- card designs
- visual hierarchy
- animations
- decorative elements
- desktop positioning

The desktop version must remain visually identical.

==================================================
2. RESPONSIVE DESIGN
==================================================

Make the entire website responsive across:

- 320px mobile
- 360px mobile
- 375px mobile
- 390px mobile
- 414px mobile
- 430px mobile
- 480px mobile
- 768px tablet
- 820px tablet
- 1024px laptop/tablet
- 1280px desktop
- 1440px desktop
- 1536px desktop
- 1920px large desktop

Also ensure it works correctly on intermediate widths that are not explicitly listed.

Do NOT create responsiveness by simply shrinking the desktop layout.

Elements must intelligently reflow.

==================================================
3. RESPONSIVE RULE

Use fluid layouts wherever possible.

Prefer:

- %
- vw
- rem
- clamp()
- min()
- max()
- CSS Grid
- Flexbox
- responsive aspect ratios

Avoid excessive fixed pixel positioning.

However:

IMPORTANT:

Do not replace exact desktop dimensions with fluid values if doing so changes the approved desktop design.

Use responsive CSS only where necessary.

==================================================
4. MOBILE LAYOUT
==================================================

On mobile:

- no horizontal scrolling
- no clipped content
- no overlapping text
- no elements extending outside the viewport
- no microscopic text
- no excessively large headings
- no broken images
- no fixed-width cards overflowing the screen
- no desktop navigation overflowing the screen

The layout should naturally become a mobile composition.

For example:

Desktop:

[Card] [Card] [Card] [Card]

Mobile:

[Card]
[Card]
[Card]
[Card]

But only change layouts where required by the available screen width.

Preserve the visual hierarchy and design language.

==================================================
5. TYPOGRAPHY
==================================================

Make typography responsive using clamp() where appropriate.

Example:

font-size: clamp(minimum, fluid-value, desktop-size);

Do NOT simply reduce every font size by the same percentage.

Large editorial headings should remain visually dominant.

Body text must remain readable.

Buttons and navigation must remain usable.

Prevent:

- text clipping
- unwanted word wrapping
- overlapping text
- awkward orphan lines
- headings extending outside viewport

Preserve the original typography at desktop.

==================================================
6. IMAGES / VIDEO / MOCKUPS
==================================================

All images and videos must resize proportionally.

Use:

width: 100%;
height: auto;

or:

aspect-ratio

where appropriate.

Use object-fit/object-position where necessary to preserve the intended crop.

Do NOT distort images.

Do NOT stretch phone mockups.

Do NOT crop important content.

Do NOT replace existing assets.

==================================================
7. CARDS
==================================================

Cards must automatically adapt to screen width.

Desktop:

Use the existing approved layout.

Tablet:

Reduce columns only when necessary.

Mobile:

Stack cards vertically or use the layout specified by the existing design.

Cards must never:

- overflow horizontally
- become too narrow
- overlap
- cause horizontal scrolling

Maintain the original:

- borders
- radius
- internal padding
- typography
- images
- spacing
- hierarchy

==================================================
8. NAVIGATION
==================================================

The desktop navigation must remain unchanged.

On smaller screens, create a proper responsive navigation.

Desktop:

Logo | Navigation | Actions

Mobile:

Logo | Menu button

Clicking the mobile menu should open a proper menu.

The menu must:

- be clickable
- be keyboard accessible
- have visible active/hover states
- close when a navigation item is selected
- close when the close button is clicked
- not create horizontal overflow
- preserve the existing visual style

Do not use browser-default styling.

==================================================
9. ALL BUTTONS MUST BE REAL
==================================================

Every button in the website must actually work.

Audit the entire page.

For every:

- CTA
- navigation item
- portfolio item
- service card
- contact button
- social icon
- arrow
- menu button
- toggle
- form button

determine its intended action.

Do not leave fake buttons such as:

<button>...</button>

that perform nothing.

If an element is visually a button, it must have an interaction.

==================================================
10. LINKS
==================================================

Make all links functional.

Internal navigation should use proper routes/anchors.

Example:

Home → homepage

Portfolio → portfolio section/page

About → about section

Contact → contact section

For section navigation use:

href="#section-id"

where appropriate.

External links must use proper URLs.

Do not use:

href="#"

unless the element genuinely has no destination.

==================================================
11. CONTACT FORM
==================================================

The contact form must be fully functional.

All input fields must be real HTML form controls.

Use:

<form>
<input>
<textarea>
<select>
<button>

where appropriate.

Every field must have:

- label
- name
- appropriate type
- placeholder where needed
- validation
- accessible error state

Example fields:

Name
Email
Phone (if present)
Project type
Message

Do not visually fake input boxes using divs.

==================================================
12. FORM VALIDATION
==================================================

Implement client-side validation.

Validate:

- required fields
- valid email format
- minimum message length where appropriate
- invalid values

Show errors without destroying the layout.

Example:

Invalid email
↓
clear inline error message

Valid input
↓
normal state

Do not use ugly browser-default alert dialogs.

==================================================
13. FORM SUBMISSION
==================================================

The form must have a real submission flow.

Do not pretend that the form has been submitted.

If no backend/email service has been configured yet:

Create the form architecture so that the submission endpoint can be connected cleanly.

Use a clearly defined function such as:

handleSubmit()

and isolate the API request.

Do NOT silently discard submitted data.

After successful submission show a proper success state.

Example:

MESSAGE SENT
Thank you — I'll get back to you shortly.

While submitting:

SENDING...

Disable the submit button temporarily to prevent duplicate submissions.

On failure:

Unable to send your message. Please try again.

==================================================
14. INPUT UX
==================================================

Inputs must have proper states:

Default
Hover
Focus
Filled
Invalid
Disabled
Submitting

Focus states must be visible.

Do not remove:

outline

or otherwise make keyboard navigation inaccessible.

Use:

:focus-visible

where appropriate.

==================================================
15. ACCESSIBILITY
==================================================

Make the website accessible.

Add:

- semantic HTML
- proper heading hierarchy
- labels for inputs
- alt text for images
- aria-label for icon-only buttons
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible mobile menu

Do not use clickable divs when a button or link is appropriate.

Use:

<button>

for actions.

Use:

<a>

for navigation.

==================================================
16. TOUCH INTERACTION
==================================================

Make the site comfortable on mobile.

Interactive elements should have a sufficiently large touch target.

Avoid tiny clickable icons.

Cards and buttons should respond naturally to touch.

Do not rely only on hover interactions because hover does not exist reliably on mobile.

==================================================
17. HOVER / INTERACTION STATES
==================================================

Where the desktop design contains interactive elements, implement appropriate:

hover
active
focus
pressed

states.

Keep transitions subtle and consistent with the existing design.

Do NOT invent flashy animations.

==================================================
18. SCROLL ANIMATIONS
==================================================

Preserve all existing animations.

Make them responsive.

Desktop animations can remain sophisticated.

On mobile:

- reduce excessive movement
- prevent horizontal overflow
- prevent large transforms from leaving viewport
- avoid expensive animations
- preserve the intended visual effect

Use:

prefers-reduced-motion

and provide a reduced-motion experience.

==================================================
19. RESPONSIVE SECTIONS
==================================================

Audit EVERY section individually.

Do not assume one responsive rule works for the whole page.

Check:

01 HERO
02 EDITING EXPERTISE
03 PODCAST PORTFOLIO
04 PORTFOLIO CONTENT
05 BASIC EDITS
06 MOTION GRAPHICS
07 COMMERCIAL EDITS
08 TESTIMONIALS
09 HOW IT WORKS
10 FEATURED WORK
11 CONTACT

For every section check:

- width
- height
- padding
- typography
- images
- cards
- alignment
- overflow
- interactions
- spacing

==================================================
20. HERO
==================================================

The hero must adapt intelligently.

Desktop composition must remain unchanged.

On mobile:

- heading must fit viewport
- supporting text must remain readable
- CTA must remain accessible
- image must scale correctly
- decorative elements must not overflow
- navigation must collapse properly
- avatars/social proof must remain readable

Do not simply scale the entire hero using transform: scale().

Actually reflow the layout.

==================================================
21. LARGE EDITORIAL TYPOGRAPHY
==================================================

The portfolio intentionally uses large typography.

Do not destroy this design language on mobile.

Use responsive typography such as:

clamp()

while maintaining the same visual hierarchy.

Example:

desktop:
very large headline

tablet:
large headline

mobile:
large but viewport-safe headline

Do not turn the editorial design into a generic corporate website.

==================================================
22. HORIZONTAL OVERFLOW
==================================================

This is a critical requirement.

There must be NO accidental horizontal page scrolling.

Test:

document.documentElement.scrollWidth
document.documentElement.clientWidth

They should match under normal conditions.

Find and fix overflow caused by:

- oversized typography
- absolute elements
- transforms
- fixed widths
- images
- cards
- grids
- animations
- navigation
- carousels

Do NOT solve every overflow problem with:

overflow-x: hidden;

That can hide actual layout bugs.

Fix the underlying element first.

Use overflow-x hidden only for intentional decorative overflow.

==================================================
23. RESPONSIVE BREAKPOINTS
==================================================

Use sensible breakpoints based on the actual layout rather than blindly using standard breakpoints.

Suggested starting points:

< 480px
Mobile

480–767px
Large mobile

768–1023px
Tablet

1024–1279px
Small desktop

1280px+
Desktop

But adjust these based on the actual design.

==================================================
24. PERFORMANCE
==================================================

The responsive implementation must remain performant.

Avoid:

- unnecessary re-renders
- excessive scroll listeners
- huge DOM structures
- duplicated components
- unnecessary JavaScript for CSS problems

Prefer CSS media queries for layout.

Use JavaScript only when interaction actually requires it.

Optimize images where possible without changing visual quality.

==================================================
25. FINAL FUNCTIONAL AUDIT
==================================================

After making the site responsive, test every interactive element.

Create a checklist:

[ ] Logo works
[ ] Navigation works
[ ] Mobile menu works
[ ] Every nav item works
[ ] Every CTA works
[ ] Portfolio links work
[ ] Service cards work if interactive
[ ] Social links work
[ ] Contact form works
[ ] Inputs accept text
[ ] Validation works
[ ] Submit works
[ ] Success state works
[ ] Error state works
[ ] Keyboard navigation works
[ ] Mobile touch interaction works
[ ] No dead buttons
[ ] No dead links
[ ] No horizontal overflow
[ ] No console errors

==================================================
26. VISUAL REGRESSION CHECK
==================================================

IMPORTANT:

After implementing responsiveness, compare the desktop version against the original Figma design again.

The desktop design must NOT have changed.

Check at:

1440px
1280px
1024px
768px
430px
390px
375px
360px
320px

At each size inspect:

- layout
- typography
- spacing
- images
- cards
- buttons
- navigation
- animations
- forms
- overflow

Fix every issue found.

==================================================
27. FINAL REQUIREMENT
==================================================

The finished website must satisfy BOTH:

A. PIXEL-ACCURATE DESIGN
The existing desktop Figma design remains unchanged.

AND

B. REAL WEBSITE FUNCTIONALITY
Every interactive element actually works.

The final result should feel like:

"the Figma design converted directly into a real responsive website"

—not a redesigned website inspired by the Figma design.

Do not stop after making the page responsive.

Perform the complete responsive + interaction + accessibility + functionality audit before considering the task complete.