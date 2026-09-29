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

At the current stage, the project is in the planning phase.

Stage 1 will use only HTML and CSS and will be opened directly in a browser without a build step or server.

## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Project theme definition, data model design, application planning and guidance for the project setup |

Details per stage will be documented in the `ai-log/` folder.

## Status

- [ ] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: React initialization
- [ ] Later stages: interaction, API, server, database, authentication and Docker