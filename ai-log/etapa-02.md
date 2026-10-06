# Stage 2: AI log

## Tools

- ChatGPT

## Conversations

- ChatGPT was used as a support tool during the implementation and testing of the JavaScript data logic for Stage 2.
- https://chatgpt.com/share/6ac4e00d-4e90-83ed-8188-d69315399438

## Key requests

### 1. Adapting Stage 2 to NutriTrack

- Asked: I requested help adapting the JavaScript requirements from the laboratory guide to the NutriTrack data model.
- Got: Suggestions for using an `entries` array, fixed entry types and functions adapted to meals and physical activities.
- Changed or rejected: I kept the three sample entries from Stage 1 and included the additional NutriTrack fields such as category, user, calories and date.

### 2. Implementing the data functions

- Asked: I requested guidance for implementing the required list, count, search, add, toggle and delete operations.
- Got: Examples using `map`, `filter`, `reduce`, the spread operator and validation.
- Changed or rejected: The functions and validation messages were adapted to the NutriTrack terminology and data model.

### 3. Testing the JavaScript logic

- Asked: I requested help organizing the browser console tests required for Stage 2.
- Got: A test structure grouped into reading, adding, updating/deleting and validation sections.
- Changed or rejected: I tested the functions manually in the browser console and verified the results after each implementation step.

## What I learned / what did not work

I learned how `map`, `filter` and `reduce` can be used to process arrays without modifying the original data.

I also learned why a new ID should be calculated using the maximum existing ID instead of the array length.

I tested that adding an entry creates a new array while the original `entries` array remains unchanged.

I also tested validation for an empty name and an invalid entry type using the browser console.