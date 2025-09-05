import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../../PageObjects/HomePage";
import users from "../../data/users.json";
import { Contact } from "../../PageObjects/Contact";
import { Navbar } from "../../Components.ts/Navbar";

test('Contact Us Form', async ({ page }) => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    const homePage = new HomePage(page);
    await homePage.goto();

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Click on 'Contact Us' button
    await homePage.nav.goToContactUs();

    // 5. Verify 'GET IN TOUCH' is visible
    await expect(page.locator('h2:has-text("Get In Touch")')).toBeVisible();

    // 6. Enter name, email, subject and message
    let contactPage = new Contact(page);
    await contactPage.fillContactForm(
        users.validUser.username,
        users.validUser.email,
        users.validUser.subject,
        users.validUser.message
    );

    // 7. Upload file
    await contactPage.uploadFile("rahulshetty/tests/assets/sample.txt");
    page.on('dialog', dialog => dialog.accept());

    // 8. Click 'Submit' button
    await contactPage.submitForm();

    // 9. Click OK button
    // page.on('dialog', dialog => dialog.accept());
    // must be run before trigger action

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    await page.locator('div.status.alert.alert-success').waitFor({ state: 'visible' });
    await expect(page.locator('div.status.alert.alert-success')).toHaveText('Success! Your details have been submitted successfully.');

    // 11. Click 'Home' button and verify that landed to home page successfully
    let nav = new Navbar(page);
    await nav.goHome();
    await expect(page).toHaveTitle(/Automation Exercise/);
});