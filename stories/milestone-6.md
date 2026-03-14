Title: Polish & Deploy — Accessibility, Navigation Header & Live Deployment

<details>
<summary>Original Spec</summary>

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

</details>


Technical Notes:
This is a polish and deployment milestone. The site header/nav is a new component added to the shared layout. The favourites count badge reads from the same localStorage state as the Favourites feature. Image optimisation uses HTML `width`/`height` attributes and the `loading="lazy"` attribute — no build-time image processing is implied. Deployment target is one of: Netlify, Vercel, or GitHub Pages (choice to be made during implementation).


**GIVEN** a user visits the app on a mobile viewport
**WHEN** they navigate between pages
**THEN** all pages are visually consistent and content is not clipped or overflowing

**GIVEN** a user visits the app on a desktop viewport
**WHEN** they navigate between pages
**THEN** all pages are visually consistent and layout is appropriate for large screens

**GIVEN** the user navigates to any page in the app
**WHEN** the page renders
**THEN** a site header/nav is visible containing a link to Home and a link to Favourites

**GIVEN** the user has favourited N plants
**WHEN** the user views the header/nav on any page
**THEN** the Favourites link displays a count badge showing N

**GIVEN** the user favourites or unfavourites a plant
**WHEN** the header/nav is visible
**THEN** the favourites count badge updates to reflect the new count

**GIVEN** all interactive elements (buttons, links, filter chips, favourite toggles)
**WHEN** the user navigates the app using only the keyboard (Tab, Enter, Space)
**THEN** every interactive element is reachable and activatable via keyboard

**GIVEN** all interactive elements
**WHEN** inspected with an accessibility tool
**THEN** each element has an appropriate ARIA label or visible text label

**GIVEN** the app is deployed to a static host
**WHEN** the user visits the public URL
**THEN** the home page loads without errors

**GIVEN** the app is deployed to a static host
**WHEN** the user navigates to `/favourites` and `/plant/:id` via the public URL
**THEN** both routes render correctly without 404 errors

**GIVEN** the user loads the app on the deployed host
**WHEN** all plant images load
**THEN** images use `loading="lazy"` and have explicit `width` and `height` attributes set

**GIVEN** the app is deployed
**WHEN** the user performs a smoke test of all core user journeys (browse, search, filter, view detail, favourite, view favourites)
**THEN** all journeys complete without errors on the deployed host
