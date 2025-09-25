# Site Discography Monorepo

This repository is organized into separate frontend and backend folders to keep concerns isolated and development workflows clean.

## Structure

- backend/
  - package.json
  - src/
    - index.js
- frontend/
  - package.json
  - public/
    - index.html
  - src/
    - main.js
- ideaSources/
  - sites.txt
  - vasiTziounis.png
- index.js (legacy root script; safe to ignore)
- package.json (root workspaces + scripts)

## Getting Started

- Start the backend:
  - npm run start:backend
- Start the frontend (static placeholder):
  - Open frontend/public/index.html directly in a browser, or run npm run start:frontend to execute the placeholder script.

## Notes

- The root package.json uses npm workspaces so you can manage dependencies per app. Install dependencies inside each workspace (frontend or backend) as needed.
- Keep shared code (types, utilities) in a new folder like `shared/` later if both sides need it.
