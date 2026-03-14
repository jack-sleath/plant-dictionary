Title: Search & Filter — Real-Time Text Search and Use Category Filters

<details>
<summary>Original Spec</summary>

**Goal:** Users can search by name and filter by use category; results update in real time.

**Tasks:**
- Add a search input above the plant grid; filter cards by common name or latin name as the user types
- Extract all unique use values from the JSON and render them as filter toggles/chips
- Allow multiple use filters to be active simultaneously (AND or OR logic — choose one and document it)
- Combine search text and active filters so both work at the same time
- Show a "no results" message when nothing matches

**Done when:**
- [ ] Typing in the search box filters the plant list in real time
- [ ] Selecting one or more use filters further narrows the results
- [ ] Search and filters work together correctly
- [ ] "No results found" message appears when the combined filters match nothing

</details>


Technical Notes:
Filter chips are derived dynamically from the unique values in all `uses` arrays across `plants.json` — they are not hard-coded. The AND/OR logic for multiple active filters must be decided and documented before implementation. **MANUAL REVIEW — AND vs OR filter logic is explicitly left undecided in the milestone spec; confirm which should be implemented.**


**GIVEN** the user is on the home page
**WHEN** the user types a search term into the search input
**THEN** the plant card grid updates in real time to show only plants whose common name or latin name contains the search term (case-insensitive)

**GIVEN** the user has typed a search term
**WHEN** the user clears the search input
**THEN** all plant cards are shown again

**GIVEN** the home page has loaded
**WHEN** the user views the filter chips area
**THEN** one chip is displayed for each unique use value found across all plant entries in `plants.json`

**GIVEN** the user clicks one filter chip
**WHEN** the chip is active
**THEN** only plants that include that use category are shown

**GIVEN** the user has activated multiple filter chips simultaneously
**WHEN** the chips are active
**THEN** the results reflect the **MANUAL REVIEW — AND vs OR logic** chosen for this feature

**GIVEN** the user has both a search term entered and one or more filter chips active
**WHEN** the plant list renders
**THEN** only plants matching both the search term and the active filters are shown

**GIVEN** the search term and/or active filters produce no matching plants
**WHEN** the plant list renders
**THEN** a "No results found" message is displayed and no plant cards are shown

**GIVEN** the user deactivates all filter chips and clears the search input
**WHEN** the plant list renders
**THEN** all plant cards are shown again
