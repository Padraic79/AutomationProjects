# Automation Projects

Welcome to my Automation Projects repository! I've built this repo to showcase my skills in modern test automation, API testing, and framework design using industry-standard tools like Playwright, Selenium, and Postman. It's structured for clarity, scalability, and real-world relevance, and I'm continuously updating it with new projects and improvements.

## 📺 Live Demo Site

- **[View the Playwright Demo Site (GitHub Pages)](https://padraic79.github.io/AutomationProjects/)**
- All static content is served from the `/docs` folder.
- Backend API: [https://demo-site-backend-byds.onrender.com](https://demo-site-backend-byds.onrender.com)

## 🗂️ Repository Structure

- `docs/` — Static site for UI demo and Playwright testing (published via GitHub Pages)
- `backend/` — Node.js/Express/SQLite backend for authentication and API ([README](backend/README.md))
- `playwright-projects/` — Playwright automation suites for multiple projects
- `selenium-projects/` — Selenium automation and comparison guides
- `postman-projects/` — API test collections and documentation

## 🚀 How to Run Locally

**To view the live demo:**

- Visit [https://padraic79.github.io/AutomationProjects/](https://padraic79.github.io/AutomationProjects/)

**To enable login/register and API features locally:**

1. Clone the repo and run the backend:
   ```
   git clone https://github.com/Padraic79/AutomationProjects.git
   cd AutomationProjects/backend
   npm install
   npm start
   ```
2. (Optional) Update `API_BASE` in `docs/script.js` to `http://localhost:4000` if testing locally.
3. Serve the frontend with a local web server (e.g. `npx serve docs`).

## 🧪 Automated UI Tests (Playwright)

- Playwright tests target the live GitHub Pages site by default.
- To run tests:
  ```
  cd playwright-projects
  npm install
  npx playwright test
  ```
- See `playwright-projects/playwright.config.ts` for the baseURL (set to the live site).

## Features

- Modern UI and API automation (Playwright, Selenium, Postman)
- Scalable, maintainable framework design
- Real-world test scenarios and best practices
- Clean, well-documented code

## Why Explore This Repo?

I'm passionate about test automation and quality assurance. This repository demonstrates my ability to build robust frameworks, handle complex scenarios, and integrate tools for efficient testing. Whether you're a fellow QA engineer, a developer, or a hiring manager, I hope you find value in these examples.

## For Reviewers

If you're interested in test automation or software development, feedback and suggestions are always welcome! Feel free to reach out or open an issue.

**Key skills demonstrated:** Playwright (TypeScript/JavaScript), Selenium, API automation, Node.js, CI/CD, and more.

Thank you for visiting my Automation Projects repo!

— Padraic Doyle
