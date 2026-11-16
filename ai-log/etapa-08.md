# Stage 8 – AI Usage Log

## Tools

- **ChatGPT:** Step-by-step guidance for React Router integration, page organization, CSS Modules migration, debugging, testing, and documentation.
- **IntelliJ IDEA:** React component development, CSS editing, project restructuring, and terminal commands.
- **Browser Developer Tools:** Navigation testing, page inspection, API request verification, and CSS debugging.
- **React Router:** Client-side routing, navigation, dynamic URL parameters, and shared layouts.
- **json-server:** Mock REST API for retrieving entry lists and individual entry details.

## Conversations

- Conversation link: https://chatgpt.com/share/6afb026f-5094-83ed-92d6-ae3eea3f37a1

### Conversation 1 – Installing and Configuring React Router

**Asked:** How to implement the navigation requirements from the Stage 8 guide in NutriTrack.

**Got:** Instructions for installing `react-router-dom`, configuring `BrowserRouter`, and preparing the application for multiple pages.

**Changed or rejected:** Adapted the example routes to the NutriTrack data model. Fixed an initial missing `index.css` import by temporarily keeping the existing global stylesheet.

### Conversation 2 – Creating Shared Layout and Pages

**Asked:** How to create a reusable layout with navigation and separate pages without losing the existing dashboard.

**Got:** Implementations of `Layout.jsx`, `Layout.module.css`, `AboutPage.jsx`, and `NotFoundPage.jsx`, using `NavLink` and `Outlet`.

**Changed or rejected:** Preserved the existing NutriTrack branding and color scheme. Moved the original dashboard into `DashboardPage.jsx` and kept the existing analytics and entry management functionality.

### Conversation 3 – Implementing Entry Detail Pages

**Asked:** How to display individual meal and activity information using a dynamic route.

**Got:** Instructions for implementing `/entries/:id`, using `useParams()` and a new `fetchEntry(id)` API function.

**Changed or rejected:** Adapted the detail page to display NutriTrack-specific fields, including calories, category, entry type, date, user, and completion status.

### Conversation 4 – Handling Missing Entries and Unknown Routes

**Asked:** How to handle nonexistent entry IDs and invalid application URLs.

**Got:** Error handling for missing API resources and a custom 404 page with navigation back to the dashboard.

**Changed or rejected:** Used English-language messages matching the existing application interface. Verified that nonexistent entry IDs produce a visible error rather than a blank page.

### Conversation 5 – Making Entry Titles Navigable

**Asked:** How to open an entry's detail page by clicking its title in the dashboard.

**Got:** Instructions for converting entry titles into React Router `Link` components and adding the `data-testid="item-link"` attribute.

**Changed or rejected:** Preserved independent checkbox and Delete button functionality. Kept the existing entry card layout and interaction behavior.

### Conversation 6 – Migrating Styles to CSS Modules

**Asked:** How to split the existing global stylesheet into component-specific CSS Modules while preserving the NutriTrack design.

**Got:** Separate `.module.css` stylesheets for entry cards, forms, lists, layout, dashboard, and detail pages, together with a shared `index.css`.

**Changed or rejected:** Preserved the existing light/dark theme variables, responsive layouts, dashboard statistics, chart styling, and custom entry badges.

### Conversation 7 – Debugging CSS Migration

**Asked:** How to resolve CSS syntax errors and restore entry card styling after removing the old global stylesheet.

**Got:** Corrections for missing CSS selectors and updated React components using imported CSS Module classes.

**Changed or rejected:** Replaced legacy `className` strings with scoped `styles` references. Restored the original card layout without reintroducing the old `App.css` dependency.

### Conversation 8 – Testing and Verification

**Asked:** How to verify client-side navigation, detail page loading, error handling, and CSS Modules integration.

**Got:** Testing procedures for dashboard navigation, browser history, direct detail URLs, nonexistent entries, unknown routes, and automated evaluation attributes.

**Changed or rejected:** Retained the existing Stage 7 CRUD behavior and checked that styling and navigation changes did not interfere with persistent data operations.

## What I Learned / What Did Not Work

### What I Learned

- How React Router enables client-side navigation in a single-page application.
- How `BrowserRouter`, `Routes`, and `Route` define application navigation.
- How `NavLink` identifies the active page.
- How `Outlet` renders nested routes inside a shared layout.
- How `Link` navigates without reloading the entire document.
- How `useParams()` retrieves dynamic parameters from the URL.
- How to fetch a specific entry from the API using its ID.
- How to handle missing resources and unknown routes.
- How CSS Modules isolate styles to individual components.
- How to share color variables through a global stylesheet.
- How to preserve responsive design and light/dark themes during refactoring.
- Why automated testing attributes must remain stable when components are reorganized.

### What Did Not Work / Challenges

- The initial React Router configuration imported `index.css` before the file existed, causing a Vite import resolution error.
- Some CSS files initially contained missing selectors, resulting in syntax errors in IntelliJ IDEA.
- The original dashboard contained many global CSS classes that required migration into component-specific modules.
- Removing `App.css` initially caused the entry cards to lose their layout because `EntryCard.jsx` still used plain class names instead of CSS Module references.
- The entry card styling was restored by replacing the legacy class names with values imported from `EntryCard.module.css`.
- Running npm commands from the repository root produced an `ENOENT` error because `package.json` is located inside the `frontend` directory.
- The CSS migration required testing multiple pages and both themes to preserve the existing appearance.

Stage 8 routing, detail page navigation, missing-entry handling, and CSS Modules integration were implemented and tested during development.