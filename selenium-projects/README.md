# Selenium Projects

I've created this Selenium projects to demonstrate my foundational skills in test automation using Selenium WebDriver with TypeScript and the Page Object Model. While I prefer modern tools like Playwright for new projects, Selenium has taught me a lot about browser automation basics, and I'm proud of how I've applied best practices here.

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
- I'm excited to show how Selenium can still be effective for simpler automation tasks.

## 🌐 Part of the Automation Projects

- See the root [README.md](../README.md) for a full overview and comparison with Playwright automation.

## License

MIT
