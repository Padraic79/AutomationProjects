# Selenium Portfolio

End-to-end test automation for the [Automation Projects Demo Site](https://padraic79.github.io/AutomationProjects/) using Selenium WebDriver, TypeScript, and the Page Object Model (POM).

---

## 📁 Structure

```
selenium-projects/
├── PageObjects/
│   └── HomePage.ts
├── tests/
│   └── home.spec.ts
├── jest.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- Google Chrome browser
- ChromeDriver (managed by selenium-webdriver)

### Install dependencies

```sh
npm install
```

### Run the test

```sh
npx jest
```

## 💡 About

- The test checks that the home page loads and the title contains "Automation Projects".
- The Page Object Model is used for maintainability and scalability.
- Jest is used as the test runner for TypeScript tests.

## 🌐 Part of the Automation Projects Portfolio

- See the root [README.md](../README.md) for a full overview and comparison with Playwright automation.

## License

MIT
