Title: Project Scaffold — Vite, React, Tailwind & Routing

<details>
<summary>Original Spec</summary>

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

</details>


Technical Notes:
This is an infrastructure/scaffolding milestone with no user-facing features. Criteria are evaluated from a developer perspective. Tailwind must be configured via its PostCSS plugin (or Vite plugin) so utility classes compile correctly. React Router must be configured with a `BrowserRouter` (or equivalent) wrapping the route tree.


**GIVEN** the developer runs `npm run dev` in the project root
**WHEN** the command completes
**THEN** the development server starts without errors and the app is accessible in the browser

**GIVEN** a React component contains a Tailwind utility class (e.g. `bg-green-500`)
**WHEN** the component is rendered in the browser
**THEN** the Tailwind style is applied correctly to the element

**GIVEN** the app is running
**WHEN** the user navigates to `/`
**THEN** the placeholder Home component is rendered

**GIVEN** the app is running
**WHEN** the user navigates to `/plant/1`
**THEN** the placeholder Plant Detail component is rendered

**GIVEN** the app is running
**WHEN** the user navigates to `/favourites`
**THEN** the placeholder Favourites component is rendered

**GIVEN** the app is running
**WHEN** the user navigates to an undefined route (e.g. `/unknown`)
**THEN** **MANUAL REVIEW — no 404/fallback route behaviour is specified in this milestone; confirm whether a catch-all route is required**
