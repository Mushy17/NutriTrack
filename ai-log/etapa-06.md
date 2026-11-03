# Stage 6 – AI Usage Log

## Tools

- **ChatGPT:** Step-by-step implementation guidance, API configuration, React integration, testing, and documentation.
- **IntelliJ IDEA:** Source code editing and terminal commands.
- **Browser Developer Tools:** HTTP request inspection, response status verification, and error testing.
- **json-server:** Local mock REST API for serving entry data.

## Conversations

- Conversation link: https://chatgpt.com/share/6ae9dcb1-8634-83eb-8b5c-d4bff0d821b7

### Conversation 1 – Setting Up the Mock API

**Asked:** How to configure a REST API for NutriTrack using the requirements from the Stage 6 guide.

**Got:** Instructions for installing `json-server@0.17.4`, creating `db.json`, and adding the `npm run api` script.

**Changed or rejected:** Adapted the example API resource from `/tasks` to `/entries` and preserved the existing NutriTrack data structure. Added two sample entries to reach the required minimum of five.

### Conversation 2 – Creating the API Service

**Asked:** How to separate HTTP requests from React components and configure the API URL.

**Got:** An implementation of `src/api.js` using `fetch()`, `async/await`, and `res.ok`, together with an `.env.example` file.

**Changed or rejected:** Used the function name `fetchEntries()` to match the application's domain. Kept all HTTP requests centralized in `api.js`.

### Conversation 3 – Loading Data with useEffect

**Asked:** How to replace hardcoded React data with asynchronously loaded API data.

**Got:** Instructions for initializing an empty entries array, adding loading and error state variables, and fetching data inside `useEffect()`.

**Changed or rejected:** Preserved the existing entry management functions, dashboard statistics, theme switching, and React component structure.

### Conversation 4 – Handling Loading and Error States

**Asked:** How to display appropriate messages while waiting for API data and when the server is unavailable.

**Got:** Conditional JSX rendering for loading, error, and successful responses, with corresponding CSS styling.

**Changed or rejected:** Adapted the messages and styles to the existing English-language NutriTrack interface and its light/dark themes.

### Conversation 5 – Testing the API Integration

**Asked:** How to verify API requests, simulate slow responses, and test server connection failures.

**Got:** Instructions for inspecting Fetch/XHR requests in Browser Developer Tools, stopping the API server to test error handling, and using a four-second delay to test loading behavior.

**Changed or rejected:** Confirmed that HTTP 304 responses represented successful cache validation rather than application errors. Verified that existing interactive functionality continued to work.

## What I Learned / What Did Not Work

### What I Learned

- How a REST API exposes application data through HTTP endpoints.
- How `json-server` generates API routes from a JSON file.
- How `fetch()`, `async`, and `await` work together.
- Why `res.ok` must be checked when processing HTTP responses.
- How `useEffect()` loads data when a React component mounts.
- How to handle loading, success, and error states.
- How environment variables configure API connections.
- Why API requests should be centralized in a dedicated service file.
- Why React development mode may generate two requests when Strict Mode is enabled.

### What Did Not Work / Challenges

- The initial React implementation contained hardcoded entries that needed to be moved into `db.json`.
- Browser Network inspection showed HTTP `304 Not Modified` responses instead of `200 OK`. This was expected behavior caused by HTTP cache validation.
- The loading message was difficult to observe because the local API responded quickly. A temporary four-second server delay was used for testing.
- Entry updates and deletions are currently local and are not persisted on the API server, as intended for Stage 6.

All required Stage 6 API integration tests were completed successfully.
