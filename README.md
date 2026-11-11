# NutriTrack

NutriTrack is a web application for tracking daily nutrition and physical activity.
Users can record meals and workouts, monitor their progress, and create custom recipes.

## Data model

The main list contains daily nutrition and physical activity entries.

| Field | Type | Notes |
|---|---|---|
| name | text | Required, max 100 characters |
| completed | boolean | Shows whether a meal was consumed or an activity was completed; default false |
| type | fixed values | Meal, Activity |
| category | relation | Examples: Breakfast, Lunch, Dinner, Snack, Cardio, Strength |
| user | relation | The owner of the entry |
| calories | number | Calories consumed or burned |
| date | date | Date of the entry |

Additional fields may be added later depending on the entry type, such as protein, carbohydrates, fat, duration or distance.

## Sample data

The following sample entries will be used throughout the project:

1. **Greek Yogurt Breakfast**
    - Status: completed
    - Type: Meal
    - Category: Breakfast
    - Calories: 420 kcal

2. **Morning Run**
    - Status: active
    - Type: Activity
    - Category: Cardio
    - Calories burned: 320 kcal

3. **Vegetable Pasta Lunch**
    - Status: active
    - Type: Meal
    - Category: Lunch
    - Calories: 650 kcal

## Custom Recipes

NutriTrack will also include a separate custom recipes module.
Users will be able to create recipes with ingredients, quantities and nutritional information and later use saved recipes when adding meals to their daily nutrition log.


## How to run

### Stage 1 and 2 - Static Mockup

Open `mockup/index.html` directly in a modern web browser.

No build step or server is required for the static mockup.

### Stage 3 - React Application

The current NutriTrack application is built with React and Vite.

Requirements:
- Node.js
- npm

From the project root, run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually:

http://localhost:5173/

To create a production build, run:

```bash
npm run build
```

The generated files are stored in `frontend/dist/`.


## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Project theme definition, data model design, application planning and guidance for the project setup |

Details per stage will be documented in the `ai-log/` folder.

| ID | Requirement | Evidence (exact code lines) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [Description](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L1-L4), [Data model](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L5-L17), [Sample data](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L18-L38), [How to run](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/README.md#L44-L48) | Read the project description, data model, sample entries and instructions for opening the static mockup. |
| S1-R2 | AI usage section | [README.md – AI usage](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L49-L55) | Verify that AI support is documented in the README. |
| S1-R3 | AI log for Stage 1 | [ai-log/etapa-01.md](https://github.com/Mushy17/NutriTrack/blob/7612b52/ai-log/etapa-01.md#L1-L33) | Read the Stage 1 AI log and the documented prompts and decisions. |
| S1-R4 | Header, form with text field and fixed list, three project-specific cards | [Header](https://github.com/Mushy17/NutriTrack/blob/7612b52/index.html#L15-L25), [Form](https://github.com/Mushy17/NutriTrack/blob/7612b52/index.html#L31-L55), [Three entries](https://github.com/Mushy17/NutriTrack/blob/7612b52/index.html#L61-L125) | Open the original Stage 1 index.html and inspect the structure and sample entries. |
| S1-R5 | Completed card has a distinct appearance | [Completed card markup](https://github.com/Mushy17/NutriTrack/blob/7612b52/index.html#L65-L83), [CSS .done rules](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L195-L202) | Verify the first entry has the done class, a struck-through title and completed styling. |
| S1-R6 | Two-column desktop layout and one column below 700 px | [Desktop grid](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L54-L63), [Mobile breakpoint](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L226-L233) | Resize the browser viewport below 700 px. |
| S1-R7 | Visible keyboard focus and readable system dark theme | [Focus visible](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L220-L223), [Dark-mode variables](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L236-L254) | Navigate using Tab and test operating-system dark mode. |
| S1-R8 | Stage 1 implementation commit was pushed to GitHub | [Stage 1 implementation commit](https://github.com/Mushy17/NutriTrack/commit/7612b52) | Open the GitHub commit and verify its implementation files. |

## Stage 2: data logic

Plain JavaScript, no DOM. `entries.js` contains the NutriTrack data array and the functions used to read and modify the data.

The implemented operations include:
- listing entry names;
- counting active entries;
- searching entries by name;
- adding entries with validation;
- toggling the completed state;
- deleting entries.

All operations are implemented without modifying the original array. Results and validation messages are printed in the browser console (F12).


| ID | Requirement | Evidence (exact code lines) | How to check |
|---|---|---|---|
| S2-R1 | JavaScript file is linked and console tests run on page load | [Script inclusion](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/index.html#L299), [Console tests](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L110-L157) | Open the static index.html and inspect the browser console after loading. |
| S2-R2 | Array with at least three entries and the mandatory fields | [Three sample entries](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L1-L33) | Verify unique IDs and the name, completed, and type fields. |
| S2-R3 | List, count, search, add, toggle and delete functions | [listNames](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L34-L36), [countActive](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L38-L40), [searchByName](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L42-L48), [addEntry](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L60-L96), [toggleCompleted](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L98-L104), [deleteEntry](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L106-L108) | Inspect the six function definitions and verify their console-test results. |
| S2-R4 | Adding an entry rejects empty names and invalid types | [Name validation](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L71-L74), [Type validation](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L75-L78), [Console tests](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L155-L157) | Confirm the console displays validation messages for an empty name and InvalidType. |
| S2-R5 | Adding an entry does not modify the original array | [Immutable add using spread](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L85-L96), [Original vs new list test](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L124-L135) | Compare the four-entry result with the unchanged original three-entry array. |
| S2-R6 | README and Stage 2 AI log are completed | [README – Stage 2](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/README.md#L56-L68), [AI log – Stage 2](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/ai-log/etapa-02.md#L1-L36) | Review the Stage 2 explanation and AI usage log. |
| S2-R7 | Stage 2 implementation commit was pushed to GitHub | [Stage 2 implementation commit](https://github.com/Mushy17/NutriTrack/commit/3c463b0) | Verify the implementation commit in the GitHub history. |

## Stage 3: Vite and React Project

NutriTrack has been migrated from a static HTML/CSS application to a React application initialized with Vite.

The React application is located in the `frontend/` directory, while the original files from Stages 1 and 2 are preserved in `mockup/`.

### Implemented features

- Initialized the React project using Vite and ESLint.
- Installed the required dependencies using npm.
- Removed the default Vite demonstration files.
- Reused the custom NutriTrack CSS design from Stage 1.
- Migrated the entries array from Stage 2 into `App.jsx`.
- Implemented dynamically calculated dashboard statistics:
   - Total entries
   - Active entries
   - Calories consumed
   - Calories burned
- Displayed the entries as formatted JSON using `JSON.stringify()`.
- Successfully tested the development server with `npm run dev`.
- Successfully verified the production build with `npm run build`.

### Project Structure

- `mockup/` - Original HTML, CSS and JavaScript files.
- `frontend/` - React application created with Vite.
- `frontend/src/App.jsx` - Main React component and entry data.
- `frontend/src/App.css` - Reused NutriTrack styles.
- `frontend/src/main.jsx` - React application entry point.
- `ai-log/` - AI assistance documentation.

### Next Steps

Stage 4 will replace the JSON representation with reusable React components and introduce user interactions.


| ID | Requirement | Evidence (exact code lines) | How to check |
|---|---|---|---|
| S3-R1 | Vite development server starts with npm run dev | [package.json – Vite scripts](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/package.json#L6-L10) | From frontend/, run npm install and npm run dev. |
| S3-R2 | NutriTrack name and dashboard counters are calculated from data | [Derived calculations](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.jsx#L33-L47), [App title](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.jsx#L49-L57), [Rendered counters](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.jsx#L73-L92) | Modify sample data temporarily and check the dashboard calculations. |
| S3-R3 | React app uses sample entries from README | [App.jsx – Initial entries](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.jsx#L1-L32) | Compare the array with the three README entries. |
| S3-R4 | Stage 1 visual design is reused in the React application | [App.css – Color variables](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.css#L5-L32), [Header styles](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.css#L60-L74), [Dashboard cards](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/src/App.css#L227-L249) | Compare the React styles and NutriTrack visual identity with the static mockup. |
| S3-R5 | node_modules and build output are ignored; production build is available | [.gitignore – Exclusions](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/.gitignore#L10-L12), [Build script](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/frontend/package.json#L7-L9) | Verify node_modules and dist are ignored and run npm run build. |
| S3-R6 | README Stage 3 section and AI usage log are complete | [README – Stage 3](https://github.com/Mushy17/NutriTrack/blob/ad41e3565c4ef87e1ea583bd5667254d5dd70f36/README.md#L127-L157), [Completed AI log – Stage 3](https://github.com/Mushy17/NutriTrack/blob/64645634a3036b1c2c8e386b78d591f5551f26a9/ai-log/etapa-03.md#L1-L49) | Read the Stage 3 documentation and complete AI log; the file was empty at the implementation commit and filled later. |
| S3-R7 | Stage 3 implementation commit is published | [Stage 3 implementation commit](https://github.com/Mushy17/NutriTrack/commit/ad41e3565c4ef87e1ea583bd5667254d5dd70f36) | Open the implementation commit on GitHub. |

## Stage 4: Components Rendered from Data

In Stage 4, the JSON representation from Stage 3 was replaced with reusable React components that dynamically render NutriTrack entries.

### Implemented Features

- Created `EntryCard.jsx` to display a single nutrition or activity entry.
- Created `EntryList.jsx` to render the entire entries array.
- Used React props to pass data between components.
- Used `map()` to generate entry cards dynamically.
- Used `key={entry.id}` to uniquely identify each rendered card.
- Implemented conditional rendering for an empty list.
- Displayed different visual styles for active and completed entries.
- Preserved the custom NutriTrack design from Stage 1.

### React Components

- `EntryCard` receives a single entry through props and displays its name, type, category, calories and completion status.
- `EntryList` receives the entire entries array and renders one `EntryCard` component for each entry.

### Testing

The following tests were completed successfully:

- Verified that all three sample entries render correctly.
- Verified that an empty array displays the appropriate message.
- Verified that dashboard statistics update when the array is empty.
- Verified that changing an entry's completion status updates its appearance.
- Verified that the browser console contains no React warnings or errors.
- Successfully executed `npm run build` and `npm run lint`.

### Next Steps

Stage 5 will introduce React local state and event handling to make the entries interactive.


| ID | Requirement | Evidence (exact code lines) | How to check |
|---|---|---|---|
| S4-R1 | At least two reusable React components in src/Components/ | [EntryCard component](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryCard.jsx#L16-L20), [EntryList component](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryList.jsx#L3-L3) | Verify both files export React components. |
| S4-R2 | EntryCard receives and displays entry data through props | [EntryCard – Props and content](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryCard.jsx#L16-L47) | Verify that name, type, category, calories, and completion status come from entry. |
| S4-R3 | EntryList renders entries using map() and key={entry.id} | [EntryList – map and key](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryList.jsx#L12-L21) | Verify the map() call, stable key and browser console. |
| S4-R4 | Empty list shows an explicit message | [EntryList – Empty state](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryList.jsx#L3-L10) | Temporarily pass an empty array and check for No entries available. |
| S4-R5 | Completed status changes card styling | [EntryCard – Conditional class](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryCard.jsx#L22-L23), [EntryCard – Status text](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/Components/EntryCard.jsx#L42-L47), [App.css – Completed styling](https://github.com/Mushy17/NutriTrack/blob/b4b19523dd40d69eb28a7197755c2cfd28fbf98f/frontend/src/App.css#L670-L680) | Change completed in the array and check the title and status appearance. |
| S4-R6 | Stage 4 README section and AI usage log are completed | [README – Stage 4](https://github.com/Mushy17/NutriTrack/blob/64645634a3036b1c2c8e386b78d591f5551f26a9/README.md#L169-L197), [AI log – Stage 4](https://github.com/Mushy17/NutriTrack/blob/64645634a3036b1c2c8e386b78d591f5551f26a9/ai-log/etapa-04.md#L1-L42) | Read the documented implementation and AI usage log. |
| S4-R7 | Stage 4 implementation commit is published | [Stage 4 implementation commit](https://github.com/Mushy17/NutriTrack/commit/b4b19523dd40d69eb28a7197755c2cfd28fbf98f) | Verify the GitHub implementation commit. |

## Stage 5 – Local State and Events

Stage 5 introduces interactive functionality using React state and event handlers.

### Implemented Features

- **Local state management:** Entries are stored in the `App` component using React's `useState` hook.
- **Toggle entry status:** Users can mark entries as completed or active using controlled checkboxes.
- **Delete entries:** Users can remove individual entries using the Delete button.
- **Dynamic dashboard:** Total entries, active entries, calories consumed, and calories burned are recalculated automatically.
- **Empty state:** A dedicated message appears when all entries have been deleted.
- **Theme switching:** Users can switch between light and dark modes using a button in the application header.
- **System theme detection:** The initial theme follows the operating system's color scheme preference.

### React State and Events

The application uses immutable state updates:

- `map()` updates the completion status of an entry.
- `filter()` removes an entry from the list.
- Event handlers are passed from `App` to `EntryList` and `EntryCard` through props.

Dashboard statistics are derived from the entries array rather than stored in separate state variables.

### Theme Management

The selected theme is managed through React state and applied using the `data-theme` attribute on the HTML element.

CSS variables are used to define the appearance of the light and dark themes.

Theme preferences and entries are stored only in local React state. Changes are reset when the page is refreshed.

### Validation

The following functionality was tested successfully:

- Toggling an entry between active and completed.
- Updating the active entries counter.
- Deleting entries and updating dashboard statistics.
- Displaying the empty state when no entries remain.
- Switching between light and dark themes.
- Updating the `data-theme` HTML attribute.
- Checking the browser console for errors.
- Running `npm run lint` successfully.
- Running `npm run build` successfully.


## Stage 5 Checklist

| ID | Requirement | Evidence (Exact Code Lines) | Verification |
|---|---|---|---|
| S5-R1 | The entries list is managed using React `useState` in `App`. | [App.jsx – State initialization (L44–L45)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L44-L45) | Verify that `entries` is initialized from `INITIAL_ENTRIES` using `useState`. |
| S5-R2 | Entries can be toggled between active and completed, with an updated visual status. | [App.jsx – handleToggle (L47–L55)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L47-L55), [EntryCard.jsx – Controlled checkbox (L28–L34)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/Components/EntryCard.jsx#L28-L34) | Toggle a checkbox and verify the completion status, card appearance, and active entries counter. |
| S5-R3 | Entries can be deleted using a button. | [App.jsx – handleDelete (L57–L61)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L57-L61), [EntryCard.jsx – Delete button (L70–L77)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/Components/EntryCard.jsx#L70-L77), [EntryList.jsx – Empty state (L4–L10)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/Components/EntryList.jsx#L4-L10) | Delete an entry and verify that it disappears. Delete all entries to verify the empty state. |
| S5-R4 | Dashboard counters are derived directly from the entries state. | [App.jsx – Derived statistics (L70–L81)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L70-L81) | Verify that total entries, active entries, calories consumed, and calories burned update automatically without separate counter states. |
| S5-R5 | State updates are immutable. | [App.jsx – Immutable map update (L47–L55)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L47-L55), [App.jsx – Immutable filter update (L57–L61)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L57-L61) | Confirm that `map()` and object spreading are used for toggling, and `filter()` is used for deletion. |
| S5-R6 | Light/dark theme switching uses React state and the HTML `data-theme` attribute. | [App.jsx – Theme initialization (L37–L45)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L37-L45), [App.jsx – Theme handler (L63–L68)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L63-L68), [App.jsx – Toggle button (L97–L104)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.jsx#L97-L104), [App.css – Dark theme variables (L975)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/frontend/src/App.css#L975) | Switch themes and verify the interface colors, button label, and `data-theme` attribute in browser Developer Tools. |
| S5-R7 | The application has no console errors, and README and AI usage log are completed. | [README.md – Stage 5 Documentation (L241)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/README.md#L241), [ai-log/etapa-05.md – AI Usage Log (L1)](https://github.com/Mushy17/NutriTrack/blob/e8970676f37e6272e77d2839c78fb0d81a334683/ai-log/etapa-05.md#L1) | Confirm that no browser console errors occur and that `npm run lint` and `npm run build` complete successfully. |
| S5-R8 | The Stage 5 implementation commit is published on GitHub. | [Stage 5 – Implementation commit](https://github.com/Mushy17/NutriTrack/commit/e8970676f37e6272e77d2839c78fb0d81a334683) | Verify that the commit is available in the GitHub repository history. |


## Stage 6 – Data from a Mock API

Stage 6 introduces asynchronous data loading using a REST API powered by `json-server`.

The application's entries are no longer hardcoded in React. Instead, they are stored in `frontend/db.json` and retrieved through HTTP requests.

### Implemented Features

- **Mock REST API:** Uses `json-server@0.17.4` to expose NutriTrack entries.
- **External data source:** Five sample entries are stored in `db.json`.
- **HTTP requests:** Uses `fetch()`, `async/await`, and response validation through `res.ok`.
- **API service layer:** All HTTP requests are centralized in `src/api.js`.
- **Environment configuration:** The API URL can be configured using `VITE_API_URL`.
- **React lifecycle:** Uses `useEffect()` to fetch data when the application mounts.
- **Loading state:** Displays `Loading entries...` while waiting for the server.
- **Error handling:** Displays an explanatory message when the API is unavailable.
- **Existing functionality:** Preserves entry toggling, deletion, dashboard statistics, and light/dark themes.

### Running the Application

The application requires two terminals.

**Terminal 1 – Start the API**

```bash
cd frontend
npm run api
```

API endpoint: `http://localhost:3001/entries`

**Terminal 2 – Start React**

```bash
cd frontend
npm run dev
```

Frontend: `http://localhost:5173`

Both servers must be running for the application to load entries successfully.

### Project Structure

```text
frontend/
├── db.json
├── .env.example
├── package.json
└── src/
    ├── api.js
    ├── App.jsx
    ├── App.css
    └── Components/
        ├── EntryList.jsx
        └── EntryCard.jsx
```

### API Configuration

The API base URL is read from the `VITE_API_URL` environment variable.

The `.env.example` file documents the default API address:

```dotenv
VITE_API_URL=http://localhost:3001
```

### Loading States

The application handles three possible states:

1. **Loading:** The request is in progress.
2. **Success:** Entries are displayed after a successful response.
3. **Error:** A message explains that the server could not be reached.

### Validation

The following tests were completed successfully:

- Retrieved five entries from the `/entries` endpoint.
- Verified the API requests in Browser Developer Tools.
- Confirmed that responses with HTTP status `304 Not Modified` are handled successfully through browser caching.
- Verified the error message after stopping the API server.
- Verified the loading message using a simulated four-second delay.
- Confirmed that entry toggling, deletion, statistics, and theme switching still work.

**Note:** Entry toggling and deletion remain local to React state. Changes are not persisted to `db.json` and are reset when the page is refreshed. Server-side persistence will be introduced in Stage 7.

## Stage 6 Checklist

| ID | Requirement | Evidence (Exact Code Lines) | How to Check |
|---|---|---|---|
| S6-R1 | The mock API starts using `npm run api` and exposes JSON data. | [package.json – API script (L6–L11)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/package.json#L6-L11), [db.json – Sample entries (L1–L54)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/db.json#L1-L54) | Run `npm run api` and open `http://localhost:3001/entries`. Verify that five entries are returned. |
| S6-R2 | Entry data is no longer hardcoded in React. | [App.jsx – Empty initial state (L12–L16)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L12-L16), [App.jsx – API data loading (L17–L43)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L17-L43) | Confirm that `entries` starts as an empty array and is populated using data retrieved from the API. |
| S6-R3 | A loading message is displayed while waiting for API data. | [App.jsx – Loading state (L14)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L14), [App.jsx – Loading message (L146–L150)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L146-L150) | Start the API with `--delay 4000` and refresh the page. Verify that `Loading entries...` appears before the list. |
| S6-R4 | An explanatory error message is displayed when the API is unavailable. | [App.jsx – Error handling (L27–L34)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L27-L34), [App.jsx – Error message (L151–L157)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/App.jsx#L151-L157) | Stop `npm run api` and refresh the application. Verify that an error message appears instead of a blank page. |
| S6-R5 | HTTP requests are centralized in `api.js`, and the API URL is configurable through an environment variable. | [api.js – API configuration (L1–L2)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/api.js#L1-L2), [api.js – fetch and response validation (L4–L12)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/src/api.js#L4-L12), [.env.example – API URL (L1–L2)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/frontend/.env.example#L1-L2) | Verify that `fetch()` and `res.ok` are implemented in `api.js` and that `VITE_API_URL` is documented. |
| S6-R6 | The README contains Stage 6 documentation, and the AI usage log is completed. | [README.md – Stage 6 (L267–L347)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/README.md#L267-L347), [ai-log/etapa-06.md – AI Usage Log (L1–L63)](https://github.com/Mushy17/NutriTrack/blob/531d2abb9489dbcaa3792686dae3d321bdd03b9c/ai-log/etapa-06.md#L1-L63) | Read the implementation documentation, setup instructions, testing results, and AI usage log. |
| S6-R7 | The Stage 6 implementation is committed and published on GitHub. | [Stage 6 – Implementation commit](https://github.com/Mushy17/NutriTrack/commit/531d2abb9489dbcaa3792686dae3d321bdd03b9c) | Verify that the implementation commit is available in the repository history. |

**Stage 6 implementation commit:** `531d2abb9489dbcaa3792686dae3d321bdd03b9c`

**Validation status:** All Stage 6 requirements have been implemented and tested successfully.

## Stage 7: Form and Validation

NutriTrack now supports full CRUD operations through a mock REST API powered by JSON Server.

Users can create new meal and activity entries directly from a controlled React form. The form validates required fields, limits entry names to 100 characters, and accepts only positive whole numbers for calories.

All changes are persisted through the API:
- **GET** retrieves existing entries.
- **POST** creates and saves new entries.
- **PATCH** updates the completion status of an entry.
- **DELETE** permanently removes an entry.

The application updates its React state only after the server confirms a successful operation. While a new entry is being saved, the submit button is disabled to prevent duplicate submissions. If saving fails, the entered values remain available and an error message is displayed.

A `tw.json` configuration file and standardized `data-testid` attributes support automated evaluation.

The existing NutriTrack dashboard, weekly analytics, and light/dark theme remain available.


## Stage 7 Checklist

| ID | Requirement | Evidence (Exact Code Lines) | How to Check |
|---|---|---|---|
| S7-R1 | The entry form is controlled: every field uses value and onChange. | [EntryForm.jsx – Form state (L8–L13)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L8-L13), [Controlled inputs (L96–L151)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L96-L151) | Inspect the form component and verify that text, select, and number inputs use React state with value and onChange. |
| S7-R2 | Submitting an empty entry name displays a validation error without sending an API request. | [EntryForm.jsx – Validation (L22–L42)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L22-L42), [Submit validation (L44–L56)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L44-L56), [Error message (L153–L161)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L153-L161) | Submit the form with an empty name. Verify that an error appears and no POST request is sent in Network. |
| S7-R3 | New entries are saved through POST, displayed in the list, and persist after page refresh. | [api.js – POST request (L28–L34)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/api.js#L28-L34), [App.jsx – handleAddEntry (L110–L115)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/App.jsx#L110-L115) | Add a valid meal or activity, refresh the application, and verify that the new entry remains in the list and in db.json. |
| S7-R4 | Entry completion updates and deletion are persisted using PATCH and DELETE. | [App.jsx – handleToggle (L74–L94)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/App.jsx#L74-L94), [App.jsx – handleDelete (L95–L107)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/App.jsx#L95-L107), [api.js – PATCH and DELETE (L35–L48)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/api.js#L35-L48) | Toggle an entry and refresh to verify persistence. Delete a test entry and refresh to confirm it does not reappear. |
| S7-R5 | The submit button is disabled while saving, and form values are cleared only after successful submission. | [EntryForm.jsx – Saving state and submit handling (L44–L82)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L44-L82), [Disabled submit button (L162–L169)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L162-L169) | Start json-server with --delay 3000 and verify that the button shows Saving... and becomes disabled. Stop the API and submit to confirm that entered values remain available. |
| S7-R6 | The repository contains tw.json and all required data-testid attributes for automated evaluation. | [tw.json – Evaluation configuration (L1–L10)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/tw.json#L1-L10), [EntryForm.jsx – Form attributes (L91–L169)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryForm.jsx#L91-L169), [EntryCard.jsx – Card attributes (L21–L77)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryCard.jsx#L21-L77), [EntryList.jsx – Empty state (L3–L9)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/Components/EntryList.jsx#L3-L9), [App.jsx – Loading and error attributes (L378–L393)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/frontend/src/App.jsx#L378-L393) | Open the browser console and inspect document.querySelectorAll('[data-testid]'). Verify the required attributes and the resource, title, done, and sample fields in tw.json. |
| S7-R7 | README includes Stage 7 documentation and the AI usage log is completed. | [README.md – Stage 7 documentation (L356–L370)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/README.md#L356-L370), [ai-log/etapa-07.md – AI Usage Log (L1–L77)](https://github.com/Mushy17/NutriTrack/blob/b5327e71f191a933b9378b2541eabf756e3d2215/ai-log/etapa-07.md#L1-L77) | Read the Stage 7 implementation description, AI conversations, decisions, challenges, and learning outcomes. |
| S7-R8 | The Stage 7 implementation commit is published on GitHub. | [Stage 7 – Implementation commit](https://github.com/Mushy17/NutriTrack/commit/b5327e71f191a933b9378b2541eabf756e3d2215) | Open the GitHub commit and verify that the Stage 7 implementation files are published. |

**Stage 7 implementation commit:** `b5327e71f191a933b9378b2541eabf756e3d2215`

**Validation status:** Stage 7 implementation and CRUD persistence have been verified. Automated evaluation attributes are present.


## Status

- [x] Stage 1: Static HTML and CSS mockup
- [x] Stage 2: JavaScript data model and immutable operations
- [x] Stage 3: React application setup with Vite
- [x] Stage 4: React components and props
- [x] Stage 5: State management and user interactions
- [x] Stage 6: Data fetching from a mock REST API
- [x] Stage 7: Form and validation with persistent CRUD operations


