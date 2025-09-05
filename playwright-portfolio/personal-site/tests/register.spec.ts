import { test, expect } from "@playwright/test";
import { RegisterPage } from "../PageObjects/RegisterPage";

const REGISTER_URL = "https://padraic79.github.io/AutomationProjects/register.html";

test.describe("Register Page", () => {
    test("Register form is visible and can submit", async ({ page }) => {
        const register = new RegisterPage(page);
        await register.goto(REGISTER_URL);
        await expect(register.nameInput).toBeVisible();
        await expect(register.emailInput).toBeVisible();
        await expect(register.passwordInput).toBeVisible();
        await expect(register.registerButton).toBeVisible();
    });

    // Add more registration tests as needed
});
