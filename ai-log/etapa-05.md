# Stage 5 – AI Usage Log

## Tools

- **ChatGPT:** Implementation guidance, React code examples, debugging assistance, and documentation support.
- **IntelliJ IDEA:** Source code editing and project management.
- **Browser Developer Tools:** Application testing and HTML attribute verification.

## Conversations

- Conversation link: https://chatgpt.com/share/6ae09a1d-0a64-83eb-b7af-f5a9de9a95e6

### Conversation 1 – Local State Management

**Asked:** How to implement local state management for the existing NutriTrack entries using React.

**Got:** Guidance for importing `useState`, defining `INITIAL_ENTRIES`, and initializing the entries state inside the `App` component.

**Changed or rejected:** Adapted the instructions to the existing component structure, which uses `function App()` and `export default App;`. The existing dashboard layout and calculations were preserved.

### Conversation 2 – Interactive Entry Components

**Asked:** How to implement checkbox interactions and entry deletion while preserving the existing design.

**Got:** Examples of immutable state updates using `map()` and `filter()`, event handlers in `App`, and callback props passed through `EntryList` to `EntryCard`.

**Changed or rejected:** Integrated the functionality into the existing components and reused the application's CSS classes. No additional entry creation functionality was introduced.

### Conversation 3 – Light and Dark Themes

**Asked:** How to implement a light/dark theme toggle according to the Stage 5 requirements.

**Got:** A solution using React state, `window.matchMedia()`, the HTML `data-theme` attribute, and CSS variables.

**Changed or rejected:** Kept the existing NutriTrack visual design and added theme-specific styling. Persistent theme storage was not implemented because it was not required.

### Conversation 4 – Testing and Validation

**Asked:** How to verify the interactive features and confirm that the application meets the Stage 5 requirements.

**Got:** Testing instructions for checkbox interactions, entry deletion, dynamic counters, empty state handling, theme switching, browser console inspection, ESLint, and production build.

**Changed or rejected:** Tested the functionality in the browser and confirmed that the interactions worked correctly. Both `npm run lint` and `npm run build` completed successfully.

## What I Learned / What Did Not Work

### What I Learned

- How to manage component data with React's `useState` hook.
- How controlled inputs synchronize their values with React state.
- How to update arrays immutably using `map()` and `filter()`.
- How to pass event handlers between components using props.
- How React automatically updates the interface when state changes.
- Why dashboard statistics should be derived from existing state instead of duplicated.
- How to implement theme switching with React state and CSS variables.
- How to test interactive behavior and validate a React application.

### What Did Not Work / Challenges

- The initial guidance used a different component declaration style. The instructions were adapted to the existing `App.jsx` structure.
- The existing interface needed additional controls without changing its established design.
- Entries and theme selection are not persistent after refreshing the page. This is expected behavior for the current implementation.

All required Stage 5 interactions were tested successfully.