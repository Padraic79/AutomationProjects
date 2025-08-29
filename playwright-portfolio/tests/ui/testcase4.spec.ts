import { test, expect } from "@playwright/test";
import { loginComponent } from "../../Components.ts/loginComponent";
import users from '../../data/users.json';



test('Logout User', async ({ page }) => {

    //1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    // 8. Verify that 'Logged in as username' is visible

    //Created component to do steps 1 to 8 above
    let login = new loginComponent(page);

    await login.loginUser(users.validUser.email, users.validUser.password);
    let first_name = users.validUser.username.split(" ")[0].toLocaleLowerCase();
    await expect(page.locator('a:has-text("Logged in as")')).toContainText(first_name);

    // 9. Click 'Logout' button
    await page.getByRole('link', { name: 'Logout' }).click();
    // 10. Verify that user is navigated to login page
    await expect(page).toHaveURL('https://automationexercise.com/login');

});