import { test, expect } from "@playwright/test";
import { Login } from "../../PageObjects/Login";
import users from "../../data/users.json";



// Steps to follow from website to practice https://automationexercise.com/test_cases  , Test Case 2

test('Login User with correct email and password ', async ({ page }) => {

    //   Test Case 2: Login User with correct email and password

    //     1. Launch browser

    let login = new Login(page);

    // 2. Navigate to url 'http://automationexercise.com'
    await login.goto();

    // 3. Verify that home page is visible successfully
    expect(await login.getTitle()).toMatch("Automation Exercise");

    // 4. Click on 'Signup / Login' button
    await login.nav.goToSignupLogin();

    // 5. Verify 'Login to your account' is visible
    await expect(page.getByText('Login to your account')).toBeVisible();

    // 6. Enter correct email address and password
    await login.enterEmailLogin(users.validUser.email);
    await login.enterPasswordLogin(users.validUser.password);

    // 7. Click 'login' button
    await login.clickLogin();

    // 8. Verify that 'Logged in as username' is visible
    let first_name = users.validUser.username.split(" ")[0].toLocaleLowerCase();
    await expect(page.locator('a:has-text("Logged in as")')).toContainText(first_name);



    // Not deleting account as test will fail next time if user deleted, account deletion is test in testcase1.spec.ts

    // 9. Click 'Delete Account' button
    //await page.getByRole('link', { name: 'Delete Account' }).click();

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    //await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
});