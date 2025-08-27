# Playwright-Portfolio

A modern end-to-end test automation suite for the [Automation Exercise](https://automationexercise.com/) demo site, built with Playwright and the Page Object Model (POM) in TypeScript.

## Features

- Automated UI tests for registration, login, and user flows
- Page Object Model for maintainable, reusable code
- Test data management via fixtures
- TypeScript for type safety
- Playwright test runner and reporting

## Project Structure

```
playwright-portfolio/
├── PageObjects/         # Page Object Model classes
├── data/               # Test data and fixtures
├── tests/              # Test specs
├── test-results/       # Playwright test output
├── playwright.config.ts# Playwright configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install dependencies

```sh
npm install
```

### Run all tests

```sh
npx playwright test
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

- Add new test files in the `tests/` directory.
- Use Page Object classes from `PageObjects/` for all page interactions.
- Store reusable test data in `data/` as JSON or TypeScript modules.

## Example Test

```typescript
import { test, expect } from "@playwright/test";
import { HomePage } from "../PageObjects/HomePage";

test("Home page loads", async ({ page }) => {
	const home = new HomePage(page);
	await home.goto();
	await expect(await home.getTitle()).toMatch(/Automation Exercise/);
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
