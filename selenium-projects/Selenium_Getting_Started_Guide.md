# Selenium Projects: Getting Started Guide

This guide explains, step by step, how your Selenium automation project is set up, what each file does, and how it fits into a professional automation workflow. It is designed for beginners and is suitable for sharing with employers.

---

## 1. Project Overview

Your `selenium-projects` folder demonstrates how to automate browser tests for your personal demo site ([Automation Projects Demo](https://padraic79.github.io/AutomationProjects/)) using Selenium WebDriver, TypeScript, and the Page Object Model. This is a common approach in real-world test automation.

---

## 2. Folder Structure & File Purpose

```
selenium-projects/
├── PageObjects/
│   └── HomePage.ts
├── tests/
│   └── home.spec.ts
├── jest.config.js
└── README.md
```

### PageObjects/HomePage.ts

- **Purpose:** Encapsulates all interactions with the Home Page of your demo site.
- **Why:** The Page Object Model (POM) is a best practice that keeps your test code clean, maintainable, and reusable. All logic for interacting with the home page (like navigation and getting the title) is kept here.
- **Contents:**
  - Imports Selenium WebDriver.
  - Defines a `HomePage` class with methods to navigate to the site and get the page title.

### tests/home.spec.ts

- **Purpose:** Contains the actual test that uses Selenium to check if your demo site loads and the title is correct.
- **Why:** This is your automated test script. It uses Jest (a test runner) to organize and run the test.
- **Contents:**
  - Sets up Selenium WebDriver for Chrome in headless mode (no browser window).
  - Uses the `HomePage` Page Object to navigate and check the title.
  - Cleans up by closing the browser after the test.

### jest.config.js

- **Purpose:** Configures Jest to run TypeScript tests in this project.
- **Why:** Jest is a popular test runner for JavaScript/TypeScript. This config tells Jest to look for tests in the `tests/` folder and use TypeScript.
- **Contents:**
  - Specifies TypeScript preset and test environment.

### README.md

- **Purpose:** Explains what the project does and how to run the tests.
- **Why:** Good documentation is essential for employers and collaborators.
- **Contents:**
  - Project overview, prerequisites, install instructions, and how to run the tests.

---

## 3. How It Fits Into the Bigger Picture

- **Professional Automation:** Shows you can automate browser tests using industry-standard tools and patterns.
- **Projects Value:** Demonstrates your ability to use Selenium, organize code with POM, and run tests with Jest.
- **Integration:** Complements your Playwright projects, showing versatility with multiple frameworks.
- **CI/CD Ready:** The structure is suitable for integration into CI/CD pipelines for automated testing.

---

## 4. Step-by-Step: What Was Done

1. Created the `selenium-projects` folder and subfolders for PageObjects and tests.
2. Added a TypeScript Page Object (`HomePage.ts`) for your demo site.
3. Added a Jest-compatible Selenium test (`home.spec.ts`) that uses the Page Object.
4. Added a Jest config file for TypeScript test support.
5. Updated the README with clear instructions.
6. Removed old Python files for consistency.
7. Installed all required dependencies (`selenium-webdriver`, `jest`, `ts-jest`, `@types/jest`).

---

## 5. How to Run the Tests

1. Open a terminal in the `selenium-projects` folder.
2. Run:
   ```sh
   npm install
   npx jest
   ```
3. The test will launch Chrome in headless mode, navigate to your demo site, and check the page title.

---

## 6. Next Steps & Learning

- Try adding more Page Objects for other pages or features.
- Write more tests for different scenarios (login, forms, etc.).
- Integrate with CI/CD (GitHub Actions) for automated test runs.
- Explore Selenium documentation and tutorials for deeper learning.

---

## 7. Download This Guide

You can download this file as Markdown or convert it to PDF using online tools or VS Code extensions (e.g., Markdown PDF).

---

**Good luck with your Selenium journey!**
