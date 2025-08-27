import { test, expect } from "@playwright/test";
import { Login } from '../PageObjects/Login'
import users from '../data/users.json';

//negative test
test('Login user with incorrect email and password', async ({ page }) => {

    // 1. Launch browser
    let login = new Login(page);
    // 2. Navigate to url 'http://automationexercise.com'
    await login.goto();
    await login.acceptCookies();

    // 3. Verify that home page is visible successfully
    expect(await login.getTitle()).toMatch("Automation Exercise");

    // 4. Click on 'Signup / Login' button
    await login.nav.goToSignupLogin();

    // 5. Verify 'Login to your account' is visible
    await expect(page.getByText('Login to your account')).toBeVisible();

    // 6. Enter incorrect email address and password
    await login.enterEmailLogin(users.invalidUser.email);
    await login.enterPasswordLogin(users.invalidUser.password);


    // 7. Click 'login' button
    await login.clickLogin();

    // 8. Verify error 'Your email or password is incorrect!' is visible
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

});