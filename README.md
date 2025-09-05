# Automation Projects

Welcome to my Automation Projects repository! This repo is designed to showcase my skills in modern test automation, API testing, and framework design using industry-standard tools like Playwright and Postman. It is structured for clarity, scalability, and real-world relevance.

## Projects & Structure

### 1. `docs/` (Live Demo Site)

Live demo site for Playwright UI automation, hosted on GitHub Pages:

### 2. `playwright-portfolio/`

Multi-project Playwright automation suite, organized for scalability:

### 3. `selenium-portfolio/`

Selenium automation suite for learning and comparison:

### 4. `postman-portfolio/`

Robust API tests using Postman collections:

## About This Repository

This repository is a work in progress and will be continuously updated with new projects, features, and improvements. My goal is to demonstrate:

## Why Explore This Repo?

## For Employers & Reviewers

If you are a potential employer or collaborator, I invite you to explore the code, structure, and documentation. I am passionate about automation, quality, and continuous improvement. Feedback and suggestions are always welcome!

**Key skills demonstrated:**

# Automation Projects Portfolio

> A showcase of modern test automation, UI and API testing, and framework design using Playwright, Selenium, and Postman. Built for real-world scenarios, best practices, and continuous learning.

---

## 📺 Live Demo Site

- **[View the Playwright Demo Site (GitHub Pages)](https://padraic79.github.io/AutomationProjects/)**
- Explore interactive forms, advanced UI features, and accessibility best practices.
- All static content is served from the `/docs` folder.

## 🗂️ Repository Structure

- `docs/` — Static site for UI demo and Playwright testing (published via GitHub Pages)
- `backend/` — Node.js/Express/SQLite backend for authentication and API (run locally)
- `playwright-portfolio/` — Playwright automation suites for multiple projects
- `selenium-portfolio/` — Selenium automation and comparison guides
- `postman-portfolio/` — API test collections and documentation

## 🚀 How to Run Locally

**To view the live demo:**

- Visit [https://padraic79.github.io/AutomationProjects/](https://padraic79.github.io/AutomationProjects/)

**To enable login/register and API features:**

1. Clone the repo and run the backend:
   ```
   git clone https://github.com/Padraic79/AutomationProjects.git
   cd AutomationProjects/backend
   npm install
   npm start
   ```
2. Open the live demo site in your browser. The frontend will connect to your local backend for authentication.

---

## � Portfolio Demo & Employer Guide

**Live Demo:**

- Frontend: [https://padraic79.github.io/AutomationProjects/](https://padraic79.github.io/AutomationProjects/)
- Backend API: [https://demo-site-backend-byds.onrender.com](https://demo-site-backend-byds.onrender.com)

**Try it out:**

- Register and log in with a real account (demo backend, safe for test data)
- Explore the UI/UX, protected routes, and logout features

**Automated UI Tests:**

- Playwright tests target the live GitHub Pages site by default
- To run tests:
  ```
  cd playwright-portfolio
  npm install
  npx playwright test
  ```
- See `playwright-portfolio/playwright.config.ts` for the baseURL (set to the live site)

**For Local Development:**

- You can run the backend locally (Node.js/Express/SQLite)
- Update `API_BASE` in `docs/script.js` to `http://localhost:4000` if needed
- Serve the frontend with a local web server (e.g. `npx serve docs`)

**For Employers:**

- This repo demonstrates a real-world, production-ready CI/CD pipeline
- All tests and features work against the live deployed site
- See Playwright PageObjects and test structure in `playwright-portfolio/tests/`

---

---

**Key skills demonstrated:** Playwright (TypeScript/JavaScript), Selenium, API automation, Node.js, CI/CD, and more.
Thank you for visiting my Automation Projects repo!

— Padraic Doyle
