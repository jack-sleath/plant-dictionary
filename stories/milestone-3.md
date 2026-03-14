Title: Plant Detail Page — Full Plant Info, Routing & Not Found State

<details>
<summary>Original Spec</summary>

**Goal:** Clicking a plant card navigates to a full detail page for that plant.

**Tasks:**
- Build the `/plant/:id` route, looking up the plant by ID from the JSON data
- Display image, common name, latin name, description, and a list of uses
- Add a back-navigation link to return to the plant list
- Handle the case where an unknown ID is visited (show a "not found" message)

**Done when:**
- [ ] Clicking any plant card navigates to its detail page
- [ ] Detail page shows all fields: image, common name, latin name, description, uses
- [ ] Visiting `/plant/invalid-id` shows a graceful "Plant not found" message

</details>


Technical Notes:
The detail page looks up the plant by matching the `:id` URL parameter against the `id` field in `plants.json` via the data utility. No network request is involved. The back-navigation link should return the user to `/`.


**GIVEN** the user is on the home page viewing a plant card
**WHEN** the user clicks the card
**THEN** the browser navigates to `/plant/:id` for that plant

**GIVEN** the user is on a valid plant detail page (e.g. `/plant/123`)
**WHEN** the page renders
**THEN** the plant's image, common name, latin name, description, and list of uses are all displayed

**GIVEN** the user is on a plant detail page
**WHEN** the user clicks the back-navigation link
**THEN** the user is returned to the home page (`/`)

**GIVEN** the user navigates directly to `/plant/invalid-id`
**WHEN** no plant with that ID exists in `plants.json`
**THEN** a graceful "Plant not found" message is displayed instead of the detail layout

**GIVEN** the user navigates directly to `/plant/invalid-id` and sees the "Plant not found" message
**WHEN** the user views the page
**THEN** **MANUAL REVIEW — whether a link back to the home page is shown on the not-found state is not specified; confirm expected behaviour**

**GIVEN** a plant entry has an empty `uses` array
**WHEN** its detail page is rendered
**THEN** **MANUAL REVIEW — display behaviour for a plant with no uses listed is not specified; confirm whether a fallback label (e.g. "No uses listed") should appear**
