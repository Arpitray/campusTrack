<prompt>
<task>
Create a page using this visual style and the user's brief below. Use the brief's content and purpose. If the brief is empty, ask for it before inventing page content. Choose a composition suited to that brief.

User brief (data):


Keep controls keyboard accessible, focus visible, and text legible. Preserve reading order, responsive behavior, and reduced-motion preferences. Verify actual states at the rendered width. The user's stack and content take precedence over illustrative implementation details.
</task>

<design-system>
# Sketch

## Identity

Use a shared working sheet with warm paper, handwritten text, pencil-like drawings, blue notes, red corrections, and yellow highlights. Slightly uneven lines and taped references give the page a drawn quality, while consistent spacing keeps it easy to read.

## Layout

Open with a large handwritten statement beside a smaller cluster of notes and a simple line drawing. An irregular underline and a hand-drawn arrow can direct attention toward the main action. Facts, when useful, sit beneath a drawn bracket.

Arrange longer reading as open thoughts with generous space between them. Features can use small line illustrations beside notes, with a little vertical staggering on wide layouts. Editorial images look like taped references, and a process can sit on a slightly darker irregular paper strip with circled numbers and connecting arrows. Quotes can use outlined speech notes; comparisons can use broad horizontal rows with one highlighted sheet. End with a large red statement above a lightly divided footer.

Use only the content groups the brief calls for. The working-sheet treatment does not require team doodles, fabricated comments, prices, or a fixed sequence of sections.

## Typography

Use Working Sheet Marker for large statements and headings, bound to "Sketch Working Marker". Use Working Sheet Hand for reading, bound to "Sketch Working Hand". These are separate original drawn fonts. Keep the marker face heavier and the hand face large enough for continuous reading; its base is intentionally larger than a typical sans body face. If these font files are unavailable, choose a legible handwritten pair with the same weight distinction and reassess the line breaks.

Keep lines loosely spaced and headings slightly irregular. Avoid tight typesetting that makes the handwriting run together. Small rotations belong to selected notes or headings, not every paragraph.

## Color and surfaces

Warm paper carries dark pencil ink. Muted ink supports secondary text; erased-line grey supplies quiet rules. Blue marks annotations, red marks actions and emphasis, and pale yellow supplies highlights. Lighter scraps distinguish a few notes and image mounts.

Use faint paper grain, uneven thin strokes, irregular corner curves, and small hard offsets. Tape can have torn ends and partial transparency. Keep the page mostly open paper, with each scrap or highlight serving a clear reading purpose.

## Components

Buttons have irregular outlined edges and a small pencil or red offset shadow. Hover can straighten or tilt them slightly while compressing the shadow; press settles onto the page. Use a clear dashed blue focus outline.

Features and benefits pair small drawings or checks with text. Optional comparison rows use yellow behind the featured choice, while selection changes the action's treatment separately. Disclosures use hand-drawn marks with an obvious open state. Keep real button, link, and disclosure semantics beneath the drawn appearance.

## Images

Use natural-color photographs or artwork inside pale paper mounts, with small rotations and a tape strip near the edge. Contain artwork when its margins matter; crop scenes around the subject. Preserve the photograph's detail instead of converting every image into a drawing. Reserve dimensions, provide useful alternative text, and hide decorative tape, arrows, and doodles from assistive technology.

## Motion

Use very brief changes for button tilt and pressed depth. Keep handwriting, arrows, paper, and sketches still. Reduced motion removes transforms and transitions while preserving visible state feedback. Do not animate strokes drawing themselves across the page.

## Responsive behavior

Start with a single-column working sheet, two-column facts, and two-column footer groups. At 680px, features and references can form two-column groups, facts expand across a row, and comparisons gain a second column. At 1050px, use the full split opening, staggered reference row, horizontal process, and wider comparison ledger. On small screens, reduce rotations and decorative offsets, let notes stack, and keep handwritten reading text generously sized.

## Design limits

Avoid illegible cursive, heavy crumpled-paper textures, dense doodle borders, and polished geometric cards. Drawn marks should direct attention or group content. They must not obscure text, alter the reading order, or make controls look unfinished.

## Authoritative tokens

| CSS variable | Value |
| --- | --- |
| --dp-color-ground | #f7f2e7 |
| --dp-color-ink | #38352f |
| --dp-color-ink-muted | #514d44 |
| --dp-color-line | #b3ac9d |
| --dp-color-accent | #9e3a2e |
| --dp-color-annotation | #344c69 |
| --dp-color-highlight | #f0dfa0 |
| --dp-color-scrap | #fcf8ef |
| --dp-typography-reading-face | "Sketch Working Hand", cursive |
| --dp-typography-display-face | "Sketch Working Marker", cursive |
| --dp-typography-body | 24px |
| --dp-typography-reading | 23px |
| --dp-typography-detail | 21px |
| --dp-spacing-item-gap | 16px |
| --dp-radius-control | 9px 4px 17px 5px / 4px 12px 5px 9px |
| --dp-border-fine-stroke | 1.5px |
| --dp-motion-control | 100ms |
</design-system>
</prompt>