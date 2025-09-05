import { test, expect } from "@playwright/test";
import users from '../../data/users.json';
import { Signup } from "../../PageObjects/SignUp";

test('Register user with existing email', async ({ page }) => {
    let signup = new Signup(page);
    await signup.newUserSignUp(users.validUser.username, users.validUser.email)
    await expect(page.locator('text=Email Address already exist!')).toBeVisible();
});