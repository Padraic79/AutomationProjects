# Playwright vs Selenium: Test Automation Comparison

This document is my personal guide to understanding the key differences between Playwright and Selenium test setups—including drivers, variables, test runners, and overall architecture. I created it for my own learning and projects. It includes detailed examples, explanations, and extra notes to help me build my skills and remember important concepts as I work through real-world automation projects.

---

## 1. Setup & Installation

### Selenium Setup

```bash
npm install selenium-webdriver chromedriver
```

**Pros:**

- Mature ecosystem with extensive community support
- Works with multiple programming languages
- Can use existing browser drivers

**Cons:**

- Requires separate driver management
- More complex setup with multiple dependencies
- Driver version compatibility issues

### Playwright Setup

```bash
npm install @playwright/test
npx playwright install
```

**Pros:**

- Single command installs everything
- Built-in browser binaries (no external drivers needed)
- Auto-updates browser versions
- Works out of the box

**Cons:**

- Larger installation size due to bundled browsers
- Less flexible for custom browser versions

---

## 2. Drivers & Browser Control

### Selenium WebDriver

```javascript
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const driver = new Builder()
	.forBrowser("chrome")
	.setChromeOptions(new chrome.Options())
	.build();
```

**Key Points:**

- Requires ChromeDriver executable
- Manual driver lifecycle management
- Separate driver for each browser type

### Playwright Browser Context

```javascript
const { chromium } = require("@playwright/test");

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
```

**Key Points:**

- Built-in browser control
- Automatic driver management
- Browser contexts for isolation

### More Concepts: Selectors & Actions

**Selenium Locators:**

```javascript
// CSS Selector
await driver.findElement(By.css("button.submit"));

// XPath
await driver.findElement(By.xpath('//button[@class="submit"]'));

// ID
await driver.findElement(By.id("submit-btn"));
```

**Playwright Locators:**

```javascript
// CSS Selector
await page.locator("button.submit").click();

// Text-based selection
await page.getByText("Submit").click();

// Role-based selection
await page.getByRole("button", { name: "Submit" }).click();

// Data attributes (recommended)
await page.locator('[data-testid="submit-btn"]').click();
```

---

## 3. Test Runners

### Selenium with Jest

```javascript
const { Builder } = require("selenium-webdriver");

describe("Login Tests", () => {
	let driver;

	beforeEach(async () => {
		driver = new Builder().forBrowser("chrome").build();
	});

	afterEach(async () => {
		await driver.quit();
	});

	test("should login successfully", async () => {
		await driver.get("https://example.com");
		// ... test code
	});
});
```

### Playwright with Built-in Test Runner

```javascript
import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
	test("should login successfully", async ({ page }) => {
		await page.goto("https://example.com");
		// ... test code
	});
});
```

### More Concepts: Waits & Synchronization

**Selenium Waits:**

```javascript
// Implicit wait
await driver.manage().setTimeouts({ implicit: 5000 });

// Explicit wait
await driver.wait(until.elementLocated(By.id("submit-btn")), 10000);

// Fluent wait
await driver.wait(
	until.elementIsVisible(driver.findElement(By.id("submit-btn"))),
	10000
);
```

**Playwright Auto-waiting:**

```javascript
// Automatic waiting built-in
await page.locator("#submit-btn").click(); // Waits automatically

// Manual waits when needed
await page.waitForSelector("#submit-btn");
await page.waitForTimeout(1000);
```

---

## 4. Variables & Page Objects

### Selenium Page Object

```javascript
class LoginPage {
	constructor(driver) {
		this.driver = driver;
		this.usernameField = By.id("username");
		this.passwordField = By.id("password");
		this.loginButton = By.id("login-btn");
	}

	async enterUsername(username) {
		await this.driver.findElement(this.usernameField).sendKeys(username);
	}

	async enterPassword(password) {
		await this.driver.findElement(this.passwordField).sendKeys(password);
	}

	async clickLogin() {
		await this.driver.findElement(this.loginButton).click();
	}
}
```

### Playwright Page Object

```javascript
class LoginPage {
	constructor(page) {
		this.page = page;
		this.usernameField = page.locator("#username");
		this.passwordField = page.locator("#password");
		this.loginButton = page.locator("#login-btn");
	}

	async enterUsername(username) {
		await this.usernameField.fill(username);
	}

	async enterPassword(password) {
		await this.passwordField.fill(password);
	}

	async clickLogin() {
		await this.loginButton.click();
	}
}
```

### More Concepts: Test Data & Fixtures

**Selenium Test Data:**

```javascript
const testData = {
	validUser: { username: "test@example.com", password: "password123" },
	invalidUser: { username: "invalid@example.com", password: "wrong" },
};

test("login with valid credentials", async () => {
	const loginPage = new LoginPage(driver);
	await loginPage.enterUsername(testData.validUser.username);
	await loginPage.enterPassword(testData.validUser.password);
	await loginPage.clickLogin();
});
```

**Playwright Fixtures:**

```javascript
import { test as base } from "@playwright/test";

const test = base.extend({
	testData: async ({}, use) => {
		const data = {
			validUser: { username: "test@example.com", password: "password123" },
			invalidUser: { username: "invalid@example.com", password: "wrong" },
		};
		await use(data);
	},
});

test("login with valid credentials", async ({ page, testData }) => {
	const loginPage = new LoginPage(page);
	await loginPage.enterUsername(testData.validUser.username);
	await loginPage.enterPassword(testData.validUser.password);
	await loginPage.clickLogin();
});
```

---

## 5. Test Execution & Reporting

### Selenium Execution

```bash
# Run with Jest
npm test

# Run specific test
npm test -- --testNamePattern="login"

# Generate coverage
npm test -- --coverage
```

### Playwright Execution

```bash
# Run all tests
npx playwright test

# Run specific test
npx playwright test login.spec.ts

# Run with browser visible
npx playwright test --headed

# Generate HTML report
npx playwright show-report
```

### More Concepts: Error Handling & Debugging

**Selenium Error Handling:**

```javascript
try {
	await driver.findElement(By.id("nonexistent")).click();
} catch (error) {
	console.log("Element not found:", error.message);
	// Take screenshot for debugging
	const screenshot = await driver.takeScreenshot();
	// Save screenshot...
}
```

**Playwright Error Handling:**

```javascript
try {
	await page.locator("#nonexistent").click();
} catch (error) {
	console.log("Element not found:", error.message);
	// Take screenshot
	await page.screenshot({ path: "error-screenshot.png" });
}
```

---

## 6. Summary Table

| Feature                 | Selenium                 | Playwright                       |
| ----------------------- | ------------------------ | -------------------------------- |
| **Setup Complexity**    | High (drivers, versions) | Low (single command)             |
| **Browser Support**     | All major browsers       | Chromium, Firefox, WebKit        |
| **Auto-waiting**        | Manual waits required    | Built-in auto-waiting            |
| **Selector Strategies** | CSS, XPath, ID, Name     | CSS, Text, Role, Data attributes |
| **Screenshot/Video**    | Manual implementation    | Built-in support                 |
| **Mobile Testing**      | Limited                  | Built-in mobile emulation        |
| **API Testing**         | Separate tools needed    | Built-in request interception    |
| **Parallel Execution**  | Complex setup            | Simple configuration             |
| **Community Size**      | Very large               | Growing rapidly                  |
| **Learning Curve**      | Steeper                  | Gentler                          |

---

## 7. Which to Use?

### Choose Selenium if you:

- Need to support legacy browsers extensively
- Are working with an existing Selenium codebase
- Require specific browser versions not bundled with Playwright
- Need integration with older testing frameworks
- Have team members already experienced with Selenium

### Choose Playwright if you:

- Are starting a new project
- Want faster test execution and easier setup
- Need modern web features (shadow DOM, iframes, etc.)
- Want built-in screenshots, videos, and tracing
- Prefer TypeScript-first development
- Need mobile testing capabilities

---

## 8. Example: Full Test File Comparison

### Selenium Test File

```javascript
const { Builder, By, until } = require("selenium-webdriver");
const LoginPage = require("./pages/LoginPage");

describe("E-commerce Login", () => {
	let driver;
	let loginPage;

	beforeEach(async () => {
		driver = new Builder().forBrowser("chrome").build();
		loginPage = new LoginPage(driver);
	});

	afterEach(async () => {
		await driver.quit();
	});

	test("should login with valid credentials", async () => {
		await driver.get("https://example.com/login");

		await loginPage.enterUsername("user@example.com");
		await loginPage.enterPassword("password123");
		await loginPage.clickLogin();

		await driver.wait(until.urlContains("/dashboard"), 10000);
		expect(await driver.getCurrentUrl()).toContain("/dashboard");
	});
});
```

### Playwright Test File

```javascript
import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test.describe("E-commerce Login", () => {
	test("should login with valid credentials", async ({ page }) => {
		const loginPage = new LoginPage(page);

		await page.goto("https://example.com/login");

		await loginPage.enterUsername("user@example.com");
		await loginPage.enterPassword("password123");
		await loginPage.clickLogin();

		await expect(page).toHaveURL(/.*dashboard/);
	});
});
```

---

## 9. CI/CD Integration

### Selenium in CI/CD

```yaml
# GitHub Actions example
- name: Setup Chrome
  run: |
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list
    apt-get update && apt-get install -y google-chrome-stable

- name: Run Selenium tests
  run: npm test
```

### Playwright in CI/CD

```yaml
# GitHub Actions example
- name: Install Playwright
  run: npm ci

- name: Install browser binaries
  run: npx playwright install --with-deps

- name: Run Playwright tests
  run: npx playwright test
```

---

## 10. Practical Tips for Learning

- **Start simple:** Write basic tests that open a page and check the title.
- **Iterate:** Add more actions (clicks, form fills, assertions) as you learn.
- **Read docs:** Explore [Playwright docs](https://playwright.dev/docs/intro) and [Selenium docs](https://www.selenium.dev/documentation/webdriver/).
- **Experiment:** Try running tests in headed/headless mode, add waits, and handle errors.
- **Ask for help:** Use forums, GitHub issues, or Stack Overflow if you get stuck.
- **Show your work:** Document your learning and share your repo with others.
- **Practice regularly:** Set up a test project and add new test cases weekly.
- **Learn debugging:** Use browser dev tools and framework debugging features.
- **Study patterns:** Look at Page Object Model and other design patterns.

---

## 11. Common Beginner Mistakes & Solutions

### Mistake 1: Not waiting for elements

```javascript
// ❌ Wrong - Selenium
await driver.findElement(By.id("button")).click(); // May fail if not loaded

// ❌ Wrong - Playwright
await page.locator("#button").click(); // May fail if not loaded

// ✅ Correct - Selenium
await driver.wait(until.elementLocated(By.id("button")), 5000);
await driver.findElement(By.id("button")).click();

// ✅ Correct - Playwright
await page.locator("#button").waitFor();
await page.locator("#button").click();
// OR simply:
await page.locator("#button").click(); // Auto-waits by default
```

### Mistake 2: Using wrong selectors

```javascript
// ❌ Avoid - Selenium
await driver.findElement(By.xpath("//button[text()='Submit']")); // Brittle

// ❌ Avoid - Playwright
await page.locator('button:has-text("Submit")').click(); // Less reliable

// ✅ Better - Selenium
await driver.findElement(By.css('[data-testid="submit-btn"]'));

// ✅ Better - Playwright
await page.getByRole("button", { name: "Submit" }).click();
```

### Mistake 3: Not handling page loads

```javascript
// ❌ Wrong - Selenium
await driver.get("https://example.com");
await driver.findElement(By.id("button")).click(); // Page not loaded yet

// ❌ Wrong - Playwright
await page.goto("https://example.com");
await page.locator("#button").click(); // Page not loaded yet

// ✅ Correct - Selenium
await driver.get("https://example.com");
await driver.wait(until.elementLocated(By.id("button")), 10000);
await driver.findElement(By.id("button")).click();

// ✅ Correct - Playwright
await page.goto("https://example.com");
await page.locator("#button").click(); // Auto-waits for element
```

### Mistake 4: Not cleaning up resources

```javascript
// ❌ Wrong - Selenium
test("my test", async () => {
	const driver = new Builder().forBrowser("chrome").build();
	// ... test code
	// Driver never closed - memory leak!
});

// ❌ Wrong - Playwright
test("my test", async ({ page }) => {
	// ... test code
	// Browser context not closed properly
});

// ✅ Correct - Selenium
describe("Test Suite", () => {
	let driver;

	beforeEach(async () => {
		driver = new Builder().forBrowser("chrome").build();
	});

	afterEach(async () => {
		await driver.quit(); // Always cleanup
	});

	test("my test", async () => {
		// ... test code
	});
});

// ✅ Correct - Playwright
test("my test", async ({ page }) => {
	// ... test code
	// Playwright auto-cleans up after test
});
```

---

## Key Takeaways

1. **Playwright** is generally easier for modern web applications and new projects
2. **Selenium** offers more flexibility and broader browser support
3. Both frameworks have strong communities and extensive documentation
4. Choose based on your project requirements and team experience
5. Consider migration costs if switching from one to the other
6. Start with simple tests and gradually add complexity
7. Focus on reliable selectors and proper waits
8. Use Page Object Model for maintainable code
9. Always clean up resources (especially important in Selenium)
10. Learn from mistakes and study common patterns

---

**Use this document to explain your projects' architecture and your understanding of both frameworks.**
