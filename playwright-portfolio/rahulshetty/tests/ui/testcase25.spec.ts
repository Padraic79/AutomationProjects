import { test, expect } from "@playwright/test";
import { acceptCookies } from "../../Components.ts/cookieConsent";

test('Verify Scroll Up using "Arrow" button and scroll down', async ({ page }) => {

    // 1. Launch browser
    // const page = await browser.newPage();

    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com');
    acceptCookies(page);
    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Scroll down page to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // 5. Verify 'SUBSCRIPTION' is visible
    await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

    // 6. Click on arrow at bottom right side to move upward
    const arrowUp = page.locator('#scrollUp');
    await arrowUp.click();

    // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

    await expect(
        page.getByRole('heading', { level: 2, name: 'Full-Fledged practice website for Automation Engineers' }).first()
    ).toBeVisible({ timeout: 10000 });
});