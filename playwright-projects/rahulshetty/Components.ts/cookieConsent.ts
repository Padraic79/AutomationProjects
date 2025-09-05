import { Page } from "@playwright/test";

export async function acceptCookies(page: Page) {
    const consentButton = page.locator('button:has-text("Consent")');
    if (await consentButton.isVisible()) {
        await consentButton.click();
    }
};