# Stage 3: AI log

## Tools

- ChatGPT

## Conversations

- ChatGPT was used as a support tool during the initialization, implementation and testing of the React application using Vite for Stage 3.
- Conversation link: https://chatgpt.com/share/6ace1a35-c128-83eb-a837-ba0f6514a6f2

## Key requests

### 1. Initializing the React project with Vite

- Asked: I requested step-by-step guidance for initializing a React application with Vite inside the existing NutriTrack repository.
- Got: Instructions for creating the `frontend` directory, installing dependencies and starting the development server.
- Changed or rejected: I preserved the existing Git repository and moved the original HTML, CSS and JavaScript files into the `mockup` directory instead of creating a separate project.

### 2. Cleaning up the project and migrating the design

- Asked: I requested help removing the default Vite demonstration content and reusing the existing NutriTrack design.
- Got: Guidance for removing unnecessary files, updating the React entry point and moving the custom styles into `App.css`.
- Changed or rejected: I kept the custom dashboard design from Stage 1 instead of using the default Vite interface.

### 3. Implementing the React application

- Asked: I requested help adapting the existing NutriTrack data and dashboard to React using JSX.
- Got: An example of the main `App.jsx` component, including the entries array, dynamically calculated statistics and JSON data display.
- Changed or rejected: I reused the three sample entries from Stage 2 and calculated the dashboard values from the actual data instead of hardcoding them. Interactive entry cards and forms were left for Stage 4.

### 4. Testing the React application

- Asked: I requested guidance for verifying that the React application worked correctly and that the production build could be generated.
- Got: Instructions for running `npm run dev` and `npm run build`, as well as checking the application in the browser.
- Changed or rejected: I executed both commands locally and verified that the application displayed the NutriTrack interface and calculated statistics correctly.

### 5. Documentation and GitHub

- Asked: I requested help updating the README, preparing the Stage 3 checklist and publishing the changes to GitHub.
- Got: Suggestions for documenting the new project structure, adding permanent GitHub links and organizing the required commits.
- Changed or rejected: I adapted the documentation to the actual NutriTrack implementation, verified that `node_modules` and `dist` were excluded from Git and published the implementation and checklist in separate commits.

## What I learned / what did not work

I learned how Vite can be used to initialize and run a React application and how the project files are organized.

I also learned how JSX differs from regular HTML and how JavaScript data can be used to calculate and display values dynamically in React.

I understood how to reuse an existing CSS design when migrating a static website to React.

I learned the difference between running a development server with `npm run dev` and generating a production build with `npm run build`.

During the Git process, I encountered LF/CRLF line-ending warnings on Windows. I learned that these warnings do not prevent the files from being committed successfully.

Finally, I verified that the React application worked locally and that the Stage 3 implementation and documentation were successfully published to GitHub.