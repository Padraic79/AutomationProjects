# Playwright-Portfolio

A modern end-to-end test automation suite for multiple web projects, including the [Automation Exercise](https://automationexercise.com/) demo site and custom demo sites hosted on GitHub Pages. Built with Playwright and the Page Object Model (POM) in TypeScript.

## Features

- Automated UI tests for multiple sites/projects
- Multi-project Playwright configuration for easy test targeting
- Page Object Model for maintainable, reusable code
- Test data management via fixtures
- TypeScript for type safety
- Playwright test runner and reporting

## Project Structure

```
playwright-portfolio/
├── rahulshetty/         # Tests and PageObjects for automationexercise.com
├── demo-site/           # Tests for custom demo site (hosted in docs/ for GitHub Pages)
├── personal-site/       # Tests and PageObjects for personal GitHub Pages site
├── playwright.config.ts # Playwright multi-project configuration
├── test-results/        # Playwright test output
├── playwright-report/   # HTML test reports
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

- **demo-site** and **personal-site** target web apps hosted on GitHub Pages. The `docs/` folder is used for deployment, as GitHub Pages serves static sites from this directory by default.
- The Playwright config uses a multi-project setup, allowing you to run tests for each site independently or all together.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install dependencies

```sh
npm install
```

### Run all tests (across all projects)

```sh
npx playwright test
```

### Run tests for a specific project

```sh
npx playwright test --project=personal-site
npx playwright test --project=rahulshetty
npx playwright test --project=demo-site
```

### Run tests in headed mode

```sh
npx playwright test --headed
```

### View HTML test report

```sh
npx playwright show-report
```

## Writing Tests

- Add new test files in the appropriate `tests/` directory for each project.
- Use Page Object classes from the corresponding `PageObjects/` folder for all page interactions.
- Store reusable test data in `data/` as JSON or TypeScript modules.

## Example Test (personal-site)

```typescript
import { test, expect } from "@playwright/test";
import { HomePage } from "../personal-site/PageObjects/HomePage";

test("Home page loads", async ({ page }) => {
	const home = new HomePage(page);
	await home.goto();
	await expect(await home.getTitle()).toMatch(/Automation Projects/);
});
```

## Best Practices

- Use locators with data attributes (e.g., `data-qa`) for stability
- Keep selectors and page logic in Page Object classes
- Use fixtures for test data, not hardcoded values
- Use `expect` assertions for all verifications

## Contributing

Pull requests and issues are welcome!

## License

MIT
