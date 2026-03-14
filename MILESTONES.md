# Milestones

## Tech Stack
- Language: JavaScript / JSX
- Framework(s): React (Vite), Tailwind CSS
- Database: None — static JSON file as data source
- Hosting/Infrastructure: Static site (e.g. Netlify, Vercel, GitHub Pages)

---

## Milestone 1 — Project Scaffold
**Goal:** Get a working Vite + React + Tailwind project running with basic routing and a health-check page.

**Tasks:**
- Initialise project with `npm create vite@latest` (React template)
- Install and configure Tailwind CSS
- Install React Router and set up basic route structure (`/`, `/plant/:id`, `/favourites`)
- Create a minimal placeholder component for each route
- Confirm app starts and navigates between placeholder pages

**Done when:**
- [ ] `npm run dev` starts without errors
- [ ] Tailwind utility classes apply correctly to a test element
- [ ] Navigating to `/`, `/plant/1`, and `/favourites` renders the correct placeholder component

---

## Milestone 2 — Data Layer & Plant List
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

---

## Milestone 3 — Plant Detail Page
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

---

## Milestone 4 — Search & Filter
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

---

## Milestone 5 — Favourites
**Goal:** Users can bookmark plants and view them on a dedicated Favourites page; bookmarks persist across page reloads.

**Tasks:**
- Add a favourite/bookmark toggle button to `PlantCard` and the detail page
- Store the list of favourited plant IDs in `localStorage`
- Build the `/favourites` page displaying only favourited plants as cards
- Allow unfavouriting from both the card and the Favourites page
- Show a prompt ("No favourites yet — start browsing!") when the list is empty

**Done when:**
- [ ] Clicking the favourite button on any plant card or detail page marks it as a favourite
- [ ] Favourites persist after a full page reload
- [ ] `/favourites` lists all bookmarked plants
- [ ] Removing a favourite updates both the Favourites page and the toggle state on the card/detail page

---

## Milestone 6 — Polish & Deploy
**Goal:** The app is visually polished, fully responsive, accessible, and deployed to a public URL.

**Tasks:**
- Review and refine Tailwind styling across all pages for visual consistency
- Ensure all interactive elements are keyboard-navigable and have appropriate ARIA labels
- Add a site header/nav with links to Home and Favourites (with a count badge)
- Optimise images (use appropriate sizing attributes, lazy loading)
- Deploy to a static host (Netlify, Vercel, or GitHub Pages)
- Smoke-test the deployed site

**Done when:**
- [ ] App is visually consistent and polished on mobile and desktop
- [ ] All buttons and links are keyboard accessible
- [ ] Header nav is present on all pages with a working favourites count badge
- [ ] App is live at a public URL and all routes work correctly on the deployed host
