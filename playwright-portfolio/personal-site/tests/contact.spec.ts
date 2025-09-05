import { test, expect } from "@playwright/test";
import { ContactPage } from "../PageObjects/ContactPage";

const CONTACT_URL = "https://padraic79.github.io/AutomationProjects/contact.html";

test.describe("Contact Page", () => {
    test("Contact form is visible and can submit", async ({ page }) => {
        const contact = new ContactPage(page);
        await contact.goto(CONTACT_URL);
        await expect(contact.nameInput).toBeVisible();
        await expect(contact.emailInput).toBeVisible();
        await expect(contact.messageInput).toBeVisible();
        await expect(contact.submitButton).toBeVisible();
        await page.pause()
    });

    // Add more contact form tests as needed
});
