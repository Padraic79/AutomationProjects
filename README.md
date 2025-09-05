# Automation Projects

Welcome to my Automation Projects repository! This repo is designed to showcase my skills in modern test automation, API testing, and framework design using industry-standard tools like Playwright and Postman. It is structured for clarity, scalability, and real-world relevance.

## Projects & Structure

### 1. `docs/` (Live Demo Site)

Live demo site for Playwright UI automation, hosted on GitHub Pages:

### 2. `playwright-projects/`

Multi-project Playwright automation suite, organized for scalability:

### 3. `selenium-projects/`

Selenium automation suite for learning and comparison:

### 4. `postman-projects/`

Robust API tests using Postman collections:

## About This Repository

This repository is a work in progress and will be continuously updated with new projects, features, and improvements. My goal is to demonstrate:

## Why Explore This Repo?

## For Reviewers

If you are interested in test automation, quality assurance, or software development, this repository offers a wealth of information and examples. Feedback and suggestions are always welcome!

**Key skills demonstrated:**

# Automation Projects Portfolio

A showcase of modern test automation, UI and API testing, and framework design using Playwright, Selenium, and Postman. Built for real-world scenarios, best practices, and continuous learning.

---

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

---

---

**Key skills demonstrated:** Playwright (TypeScript/JavaScript), Selenium, API automation, Node.js, CI/CD, and more.
Thank you for visiting my Automation Projects repo!

— Padraic Doyle
