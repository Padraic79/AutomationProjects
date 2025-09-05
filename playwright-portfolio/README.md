# Playwright Projects

End-to-end test automation for multiple web projects, including:

- [Automation Exercise](https://automationexercise.com/)
- [Personal Demo Site (GitHub Pages)](https://padraic79.github.io/AutomationProjects/)

Built with Playwright, TypeScript, and the Page Object Model (POM).

---

## 🚀 Features

- Automated UI tests for multiple sites/projects
- Multi-project Playwright configuration for easy test targeting
- Page Object Model for maintainable, reusable code
- Test data management via fixtures
- TypeScript for type safety
- Playwright test runner and reporting
- API testing using Postman collections (see `../postman-projects`)

## 📁 Project Structure

```
playwright-projects/
├── rahulshetty/
│   ├── assets/
│   ├── Components.ts/
│   ├── data/
│   ├── PageObjects/
│   └── tests/
│       ├── api/
│       ├── assets/
│       └── ui/
├── personal-site/
│   ├── PageObjects/
│   └── tests/
├── playwright.config.ts
├── playwright-report/
├── test-results/
├── tsconfig.json
├── package.json
├── README.md
```

- **personal-site/**: Playwright tests for the [live demo site](https://padraic79.github.io/AutomationProjects/). The frontend is static, but login/register features require running the backend locally (see repo root README).
- **rahulshetty/**: Tests for the Automation Exercise site, using best practices and POM.
- Multi-project config: Run tests for each project independently or all together.

## 🧪 API Testing with Postman

- See `../postman-portfolio` for API test collections and documentation.

## 🏁 Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Run all Playwright tests:
   ```
   npx playwright test
   ```
3. Run tests for a specific project:
   ```
   npx playwright test --project=personal-site
   ```

## 💡 For Employers & Reviewers

- Demonstrates:
  - Modern Playwright automation (multi-project, POM, fixtures)
  - Integration with a live demo site (GitHub Pages)
  - Clean, maintainable code and structure

---

Feedback and suggestions are welcome!

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Postman (for API testing)

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
