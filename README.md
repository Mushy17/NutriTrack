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

Open `index.html` directly in a modern web browser.

No build step or server is required for Stage 1.

## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Project theme definition, data model design, application planning and guidance for the project setup |

Details per stage will be documented in the `ai-log/` folder.

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

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: React initialization
- [ ] Later stages: interaction, API, server, database, authentication and Docker

## Stage 1 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L1-L48) | Read the project description, data model, sample data and run instructions |
| S1-R2 | AI usage section | [README.md](https://github.com/Mushy17/NutriTrack/blob/9bfdae98ca8a085e4fd442a2aaf4fb36b1041fa2/README.md#L49-L55) | Read the AI usage section |
| S1-R3 | AI log for Stage 1 | [ai-log/etapa-01.md](https://github.com/Mushy17/NutriTrack/blob/7612b52/ai-log/etapa-01.md#L1-L37) | Read the Stage 1 AI log |
| S1-R4 | Header, form with text field and fixed list, 3 cards with project data | [index.html](https://github.com/Mushy17/NutriTrack/blob/7612b52/index.html#L15-L133) | Open `index.html` and check the header, form and three NutriTrack entries |
| S1-R5 | Finished card looks different | [style.css](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L195-L201) | Check the `.done` styles and the completed first card |
| S1-R6 | 2 columns on desktop, 1 column below 700 px | [desktop layout](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L54-L63), [responsive layout](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L226-L232) | Resize the browser below 700 px and check that the layout changes to one column |
| S1-R7 | Visible keyboard focus and readable dark theme | [keyboard focus](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L220-L222), [dark theme](https://github.com/Mushy17/NutriTrack/blob/7612b52/style.css#L236-L253) | Navigate with Tab and test the system dark theme |
| S1-R8 | Stage 1 commit pushed to GitHub | [Stage 1 commit](https://github.com/Mushy17/NutriTrack/commit/7612b52) | Check the Stage 1 commit in the repository history |

## Stage 2 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S2-R1 | JavaScript file is linked and console tests run when the page loads | [index.html](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/index.html#L299), [console tests](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L112-L157) | Open `index.html`, then open the browser console and check that the test sections are displayed |
| S2-R2 | Data array contains at least 3 entries with unique id, name, state and fixed type | [entries.js](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L1-L33) | Check the three sample entries and their `id`, `name`, `completed` and `type` fields |
| S2-R3 | List, count, search, add, toggle and delete functions are implemented | [entries.js](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L34-L107) | Check `listNames`, `countActive`, `searchByName`, `addEntry`, `toggleCompleted` and `deleteEntry` |
| S2-R4 | Adding rejects an empty name and an invalid fixed type | [validation](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L60-L82), [validation tests](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L154-L157) | Open the browser console and check the error messages for an empty name and `InvalidType` |
| S2-R5 | Adding an entry does not modify the original array | [immutable add](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L84-L95), [immutability test](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/entries.js#L123-L134) | Check that the new list has 4 entries while the original `entries` array still has 3 |
| S2-R6 | README contains the Stage 2 description and the Stage 2 AI log is documented | [README.md](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/README.md#L56-L68), [ai-log/etapa-02.md](https://github.com/Mushy17/NutriTrack/blob/8cf9d2b653d4699f2c23176c07c7fa1920254aff/ai-log/etapa-02.md#L1-L36) | Read the Stage 2 documentation and AI usage log |
| S2-R7 | Stage 2 implementation commit is pushed to GitHub | [Stage 2 commit](https://github.com/Mushy17/NutriTrack/commit/3c463b0) | Check the `Stage 2: data logic in JavaScript` commit in the repository history |
