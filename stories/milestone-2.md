Title: Data Layer & Plant List — JSON Schema, Data Utility & Card Grid

<details>
<summary>Original Spec</summary>

**Goal:** Define the JSON data structure, load it into the app, and display a responsive grid of plant cards.

**Tasks:**
- Define and document the JSON schema (`id`, `commonName`, `latinName`, `description`, `imageUrl`, `uses: []`)
- Add at least 5 sample plant entries to `plants.json`
- Write a data utility to import and expose the plant list
- Build a `PlantCard` component (thumbnail, common name, latin name)
- Build the home page (`/`) as a responsive grid of `PlantCard` components

**Done when:**
- [ ] `plants.json` is loaded and all entries render as cards on the home page
- [ ] Cards display image, common name, and latin name
- [ ] Layout is responsive across mobile and desktop viewports

</details>


Technical Notes:
`plants.json` is a local static file imported directly by the data utility (no fetch/network call required). The JSON schema requires each entry to have: `id`, `commonName`, `latinName`, `description`, `imageUrl`, and `uses` (array). The grid layout must reflow between mobile and desktop using Tailwind responsive breakpoints.


**GIVEN** the app loads the home page at `/`
**WHEN** `plants.json` contains at least 5 plant entries
**THEN** one `PlantCard` is rendered for each entry in the file

**GIVEN** a `PlantCard` is rendered
**WHEN** the user views the card
**THEN** the card displays the plant's thumbnail image, common name, and latin name

**GIVEN** the home page is viewed on a mobile viewport
**WHEN** the page renders
**THEN** the plant card grid stacks into a single or two-column layout appropriate for small screens

**GIVEN** the home page is viewed on a desktop viewport
**WHEN** the page renders
**THEN** the plant card grid displays multiple columns appropriate for large screens

**GIVEN** a plant entry in `plants.json` is missing the `imageUrl` field
**WHEN** its card is rendered
**THEN** **MANUAL REVIEW — behaviour for missing image URLs is not specified; confirm whether a placeholder image or fallback should be shown**

**GIVEN** `plants.json` contains zero entries
**WHEN** the home page loads
**THEN** **MANUAL REVIEW — empty state behaviour for the plant list is not specified in this milestone; confirm whether a message should be shown**
