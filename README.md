# Mini Malt

Mini Malt is a small React application inspired by the Malt.fr profile flow. It was built as a frontend exercise focused on global state management with Redux, client-side routing, and a simple profile editing experience.

The application includes:

- a home page
- a profile page
- a shared header with navigation and user summary
- a sidebar listing the current skills
- local persistence through `localStorage`

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Redux 5
- React Redux 9
- CSS

## Features

- Edit user first name and last name
- Edit skills as a comma-separated list
- Compute `fullName` from `firstName` and `lastName`
- Compute `skillsCount` from `skills`
- Display the current profile data across multiple pages
- Persist profile data in the browser with `localStorage`

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or pnpm

This project was built and verified with:

- Node `v25.9.0`
- pnpm `11.1.1`

### Installation

Install dependencies:

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

## Available Scripts

### Run the development server

```bash
pnpm dev
```

Or:

```bash
npm run dev
```

Vite will start a local development server and print the local URL in the terminal.

### Build for production

```bash
pnpm build
```

Or:

```bash
npm run build
```

The production build output is generated in the `dist/` directory.

### Preview the production build

```bash
pnpm preview
```

Or:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Header.jsx
    Sidebar.jsx
  pages/
    Home.jsx
    Profile.jsx
  store/
    reducers/
      index.js
      skillsReducer.js
      userReducer.js
    index.js
    localStorage.js
  App.jsx
  main.jsx
  styles.css
```

## Architecture Notes

- Routing is defined in `src/App.jsx`.
- The Redux store is configured in `src/store/index.js`.
- Reducers are split by domain: `userReducer` handles identity fields and `skillsReducer` handles the skills list.
- Persisted state is loaded and saved through `src/store/localStorage.js`.
- Derived values are recalculated instead of being blindly persisted, which avoids inconsistent state.

## Build Status

The project has been validated with:

```bash
npm run build
```

## Possible Improvements

- Add automated tests for reducers and form behavior
- Add a profile reset action
- Migrate to Redux Toolkit for a more modern Redux setup
- Improve form validation and UX feedback
