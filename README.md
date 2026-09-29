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

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
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
| S1-R8 | Stage 1 commit pushed to GitHub | [Stage 1 commit](https://github.com/Mushy17/NutriTrack/commit/7612b52) | Check the Stage 1 commit in the repository history |ge 1 commit pushed to GitHub | [Stage 1 commit](PERMALINK_COMMIT) | Check the commit history |
