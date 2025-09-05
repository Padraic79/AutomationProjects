# Backend API (Node.js/Express/SQLite)

This backend provides authentication and API endpoints for the Playwright Demo Site.

## Features

- User registration and login (JWT-based authentication)
- SQLite database for persistent storage
- CORS enabled for frontend integration

## Running Locally

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:

   ```
   npm start
   ```

   By default, runs on http://localhost:4000

3. (Optional) Update the frontend `API_BASE` in `docs/script.js` to point to your local backend if testing locally.

## Endpoints

- `POST /api/register` — Register a new user
- `POST /api/login` — Log in and receive a JWT

## Deployment

- Production backend is deployed on Render: [https://demo-site-backend-byds.onrender.com](https://demo-site-backend-byds.onrender.com)

## Notes

- For demo purposes only. Do not use for sensitive data.
- See main repo README for full-stack setup and live demo links.
