# Plant Dictionary


# Hypothesis

> 👥 Written by: Lydia

## 🧑‍💼 As a:

General public member, hobbyist, or gardener who wants an easy-to-use reference for identifying and learning about plants.

## 🎯 I want:

A web-based plant dictionary where I can browse, search, and filter plants — each with an image, description, latin name, and uses — and bookmark my favourites locally in my browser.

## 💡 So that:

I can quickly look up plants, learn about their uses, and keep a personal reference of the ones I care about most, without needing an account.

## ✨ Context

A web-based plant dictionary for general audiences and plant enthusiasts. Users can browse, search, and filter plants — each with an image, description, latin name, and uses — and bookmark favourites locally in their browser. All plant data is loaded from a static JSON file.

---

# Requirements Specification

> 👥 Written by: Jack
>
> Approved by: Lydia

## Functional Requirements

1. The user can browse a paginated or scrollable list of all plants.
2. Each plant card in the list displays the plant's common name, latin name, and thumbnail image.
3. The user can click a plant card to view its full detail page.
4. The detail page displays the plant's image, common name, latin name, description, and uses.
5. The user can search plants by common name or latin name using a text input.
6. The user can filter plants by one or more use categories (e.g. medicinal, culinary, ornamental).
7. Search and filter can be used simultaneously.
8. The user can bookmark/favourite a plant from its card or detail page.
9. Favourites are persisted in the browser's localStorage (no account required).
10. The user can view a dedicated Favourites page or section listing all bookmarked plants.
11. The user can remove a plant from their favourites.
12. All plant data (name, latin name, description, image URL/path, uses) is loaded from a local JSON file.

## Non-Functional Requirements

- The app must be fully responsive (mobile, tablet, desktop).
- The app must load and remain functional without an internet connection (aside from any externally hosted images).
- Search results should update in real time as the user types.
- The codebase should be easy for a solo developer to maintain and extend with new plant entries.

## KPIs

- 100% of plant entries in `plants.json` render correctly in the browser with no missing fields.
- Search results update with no perceptible delay as the user types (real-time filtering).
- The app loads and is fully functional offline (no network dependency for core features).
- The app is fully usable on mobile, tablet, and desktop viewports.
- Favourites persist correctly across page reloads for 100% of bookmarked plants.

## Existing Functionality

This is a brand new project — nothing existing.

---

# Functional Specification

> 👥 Specification
>
> Written by: Claude
>
> Approved by: Jack

## Milestone 1 — Project Scaffold

A working Vite + React + Tailwind project is initialised with React Router configured for three routes: `/` (plant list), `/plant/:id` (detail), and `/favourites`. Each route renders a placeholder component, confirming the dev server, Tailwind, and routing all function correctly before feature work begins.

## Milestone 2 — Data Layer & Plant List

The JSON data schema is defined (`id`, `commonName`, `latinName`, `description`, `imageUrl`, `uses: []`) and populated with at least 5 sample entries. A data utility exposes the plant list to the app. The home page renders a responsive grid of `PlantCard` components, each showing the plant's thumbnail, common name, and latin name.

## Milestone 3 — Plant Detail Page

The `/plant/:id` route looks up a plant by ID and renders its full detail: image, common name, latin name, description, and a list of uses. A back-navigation link returns the user to the plant list. Visiting an unknown ID displays a graceful "Plant not found" message.

## Milestone 4 — Search & Filter

A search input above the plant grid filters cards in real time by common name or latin name. Use categories are extracted from the JSON and displayed as toggleable filter chips; multiple filters can be active simultaneously. Search text and active filters combine to narrow results together. A "No results found" message appears when nothing matches.

## Milestone 5 — Favourites

A bookmark toggle is added to each `PlantCard` and the detail page. Favourited plant IDs are stored in `localStorage` so they persist across page reloads. The `/favourites` route lists all bookmarked plants as cards, with the ability to unfavourite from both the list and detail views. An empty state prompt is shown when no plants are bookmarked.

## Milestone 6 — Polish & Deploy

Tailwind styling is reviewed and refined for visual consistency across all pages. All interactive elements are made keyboard-navigable with appropriate ARIA labels. A site-wide header/nav links to Home and Favourites (with a live count badge). Images are optimised with sizing attributes and lazy loading. The app is deployed to a static host (Netlify, Vercel, or GitHub Pages) and smoke-tested.

## Definition of Done

- [ ] App is visually consistent and polished on mobile and desktop
- [ ] All buttons and links are keyboard accessible
- [ ] Header nav is present on all pages with a working favourites count badge
- [ ] App is live at a public URL and all routes work correctly on the deployed host

---

# Risks

- **Mislabelled plants causing harm or death** — incorrect common names, latin names, or uses in `plants.json` could lead users to misidentify a plant with serious or fatal consequences. All plant data must be verified against authoritative botanical sources before publication. Consider adding a disclaimer on the site.

---

# Test Requirements

> 👥 Written by: Claude
>
> Approved by: Jack
>
> Tested by: Jack

**Milestone 1 — Scaffold**
- [ ] `npm run dev` starts without errors
- [ ] Tailwind utility classes apply correctly to a test element
- [ ] Navigating to `/`, `/plant/1`, and `/favourites` renders the correct placeholder component

**Milestone 2 — Data Layer & Plant List**
- [ ] `plants.json` is loaded and all entries render as cards on the home page
- [ ] Cards display image, common name, and latin name
- [ ] Layout is responsive across mobile and desktop viewports

**Milestone 3 — Plant Detail Page**
- [ ] Clicking any plant card navigates to its detail page
- [ ] Detail page shows all fields: image, common name, latin name, description, uses
- [ ] Visiting `/plant/invalid-id` shows a graceful "Plant not found" message

**Milestone 4 — Search & Filter**
- [ ] Typing in the search box filters the plant list in real time
- [ ] Selecting one or more use filters further narrows the results
- [ ] Search and filters work together correctly
- [ ] "No results found" message appears when the combined filters match nothing

**Milestone 5 — Favourites**
- [ ] Clicking the favourite button on any plant card or detail page marks it as a favourite
- [ ] Favourites persist after a full page reload
- [ ] `/favourites` lists all bookmarked plants
- [ ] Removing a favourite updates both the Favourites page and the toggle state on the card/detail page

**Milestone 6 — Polish & Deploy**
- [ ] App is visually consistent and polished on mobile and desktop
- [ ] All buttons and links are keyboard accessible
- [ ] Header nav is present on all pages with a working favourites count badge
- [ ] App is live at a public URL and all routes work correctly on the deployed host

## Test Results

> To be completed after testing phase. Include pass/fail status for each of the above requirements.
