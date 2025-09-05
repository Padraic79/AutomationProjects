import { test, expect } from "@playwright/test";
import { HomePage } from "../PageObjects/HomePage";

test.describe("Personal Site Smoke Tests", () => {
    test("Home page loads and header is visible", async ({ page }) => {
        const home = new HomePage(page);
        await home.goto();
        await expect(home.header).toHaveText("Playwright Demo Site");
    });

    test("Navigation to Login, Register, Contact, Features works", async ({ page }) => {
        const home = new HomePage(page);
        await home.goto();
        await home.navigateTo("Login");
        await expect(page.locator("h2")).toHaveText("Login");
        await home.navigateTo("Register");
        await expect(page.locator("h2")).toHaveText("Register");
        await home.navigateTo("Contact");
        await expect(page.locator("h2")).toHaveText("Contact Us");
        await home.navigateTo("Features");
        await expect(page.locator("h2")).toHaveText("Advanced Features");
    });
});
