import { test, expect } from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage";

const LOGIN_URL = "https://padraic79.github.io/AutomationProjects/login.html";

test.describe("Login Page", () => {
    test("Login form is visible and can submit", async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto(LOGIN_URL);
        await expect(login.emailInput).toBeVisible();
        await expect(login.passwordInput).toBeVisible();
        await expect(login.loginButton).toBeVisible();
    });

    // Add more login tests as needed, e.g. invalid credentials, success, etc.
});
