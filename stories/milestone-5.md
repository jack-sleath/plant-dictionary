Title: Favourites — Bookmark Toggle, Persistence & Dedicated Favourites Page

<details>
<summary>Original Spec</summary>

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

</details>


Technical Notes:
Favourited plant IDs are stored as a list in `localStorage` (no backend or user account involved). The favourite toggle button must appear on both the `PlantCard` component (home page and favourites page) and the plant detail page. The toggle state must be derived from `localStorage` on mount so it is consistent across page reloads and navigation.


**GIVEN** the user is on the home page viewing a plant card
**WHEN** the user clicks the favourite toggle button on a card
**THEN** that plant is added to the user's favourites and the toggle reflects the favourited state

**GIVEN** the user is on a plant detail page
**WHEN** the user clicks the favourite toggle button
**THEN** that plant is added to the user's favourites and the toggle reflects the favourited state

**GIVEN** the user has favourited one or more plants
**WHEN** the user reloads the page
**THEN** all previously favourited plants remain favourited (persisted via localStorage)

**GIVEN** the user navigates to `/favourites`
**WHEN** one or more plants have been favourited
**THEN** only the favourited plants are displayed as cards on the page

**GIVEN** the user is on the `/favourites` page
**WHEN** the user clicks the favourite toggle on a plant card to remove it
**THEN** that plant is removed from the favourites list and no longer appears on the Favourites page

**GIVEN** the user removes a plant from favourites on the Favourites page
**WHEN** the user navigates back to the home page
**THEN** the favourite toggle on that plant's card reflects the unfavourited state

**GIVEN** the user has not favourited any plants (or has removed all favourites)
**WHEN** the user navigates to `/favourites`
**THEN** the prompt "No favourites yet — start browsing!" is displayed

**GIVEN** a plant is favourited from the detail page
**WHEN** the user navigates to the home page
**THEN** the favourite toggle on that plant's card reflects the favourited state
