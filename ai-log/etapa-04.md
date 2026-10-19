# Stage 4: AI log

## Tools

- ChatGPT

## Conversations

- ChatGPT was used as a support tool during the implementation and testing of reusable React components for Stage 4.
- Conversation link: https://chatgpt.com/share/6ad5fdbe-13f8-83eb-b7ad-edfa4b774fbb

## Key requests

### 1. Adapting Stage 4 to NutriTrack

- Asked: I requested help adapting the React component requirements from the laboratory guide to the NutriTrack application.
- Got: Suggestions for creating two reusable components, `EntryCard` and `EntryList`, instead of the generic `TaskCard` and `TaskList` examples.
- Changed or rejected: I adapted the components to the NutriTrack data model, using meals, physical activities, calories, categories and completion status.

### 2. Implementing reusable React components

- Asked: I requested step-by-step guidance for replacing the JSON data representation with dynamically generated entry cards.
- Got: Examples of passing data through props, using `map()` to render multiple components and assigning a unique `key` based on each entry's ID.
- Changed or rejected: I reused the existing NutriTrack CSS classes and preserved the original dashboard design instead of creating a new interface.

### 3. Implementing conditional rendering

- Asked: I requested guidance for displaying an appropriate message when the entries array is empty and changing the appearance of completed entries.
- Got: Examples of conditional rendering using an early return and conditional CSS classes based on the `completed` property.
- Changed or rejected: I used the message "No entries available." and adapted the status labels to "Active" and "Completed".

### 4. Testing the React components

- Asked: I requested help verifying that the components rendered correctly and met the Stage 4 requirements.
- Got: Instructions for testing an empty array, changing an entry's completion status, checking the browser console and running the production build and ESLint checks.
- Changed or rejected: I tested the empty list using `slice(0, 0)` without deleting the original data. I also temporarily changed the completion status of the Morning Run entry and restored the original value after testing.

## What I learned / what did not work

I learned how to split a React interface into reusable components and how to pass information from a parent component to a child component using props.

I also learned how `map()` can generate multiple cards from an array without manually writing each card in JSX.

I understood why React requires a unique and stable `key` for elements rendered from an array and why the entry ID is preferable to the array index.

I learned how conditional rendering can display a message when the array is empty and how CSS classes can change dynamically based on an entry's completion status.

During testing, I verified that an empty array displayed the correct message and that the dashboard counters changed to zero. I also verified that changing the completion status of an entry updated its appearance and the active entries counter.

The browser console showed no React warnings or errors, and both `npm run build` and `npm run lint` completed successfully.