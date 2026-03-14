# Acceptance Criteria

## Overview
A web-based plant dictionary for general audiences and plant enthusiasts. Users can browse, search, and filter plants — each with an image, description, latin name, and uses — and bookmark favourites locally in their browser. All plant data is loaded from a static JSON file.

## Target User
General public, hobbyists, and gardeners who want an easy-to-use reference for identifying and learning about plants.

## Tech Stack
- Language: JavaScript / JSX
- Framework(s): React (Vite), Tailwind CSS
- Database: None — static JSON file as data source
- Hosting/Infrastructure: Static site (e.g. Netlify, Vercel, GitHub Pages)

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

## Out of Scope
- User accounts or authentication.
- Server-side rendering or a backend API.
- User-submitted plant data or editing.
- Native mobile app.
