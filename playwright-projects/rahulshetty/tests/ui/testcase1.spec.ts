import { test, expect } from '@playwright/test';
import { HomePage } from "../../PageObjects/HomePage";
import { Signup } from "../../PageObjects/SignUp";



// Steps to follow from website to practice https://automationexercise.com/test_cases


test('Register User', async ({ page }) => {

    test.setTimeout(120000);
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    let homepage = new HomePage(page);
    await homepage.goto();





    // 3. Verify that home page is visible successfully
    //choose title, make sure something unique to homepage
    await expect(await homepage.getTitle()).toMatch(/Automation Exercise/);

    //4. Click on 'Signup / Login' button
    await homepage.nav.goToSignupLogin();

    // 5. Verify 'New User Signup!' is visible
    await expect(page.getByText('New User Signup!')).toBeVisible();

    // 6. Enter name and email address
    let signup = new Signup(page);
    await signup.goto();
    await signup.newUserName('Padraic Doyle');
    await signup.newUserEmail(`Padraic.Doyle${Date.now()}@example.com`);

    // 7. Click 'Signup' button
    await signup.clickSignup();

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    await signup.selectTitleMr();
    await signup.enterNameSignup('padraic doyle');
    await signup.enterEmailSignup('padraic.doyle@example.com');
    await signup.enterPasswordSignup('password123');

    await signup.enterDobSignup({ day: '1', month: '1', year: '1990' });

    // 10. Select checkbox 'Sign up for our newsletter!'
    await signup.newsletterCheckbox.check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    await signup.specialOffersCheckbox.check();


    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await signup.enterFirstName('padraic');
    await signup.enterLastName('doyle');
    await signup.enterCompany('Example Inc.');
    await signup.enterAddress('123 Main St');
    await signup.enterAddress2('Apt 4B');
    await signup.enterCountry('United States');
    await signup.enterState('California');
    await signup.enterCity('Los Angeles');
    await signup.enterZipcode('90001');
    await signup.enterMobileNumber('1234567890');

    // 13. Click 'Create Account button'

    await signup.createAccount();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
    // 15. Click 'Continue' button
    await page.getByText('Continue').click();
    // 16. Verify that 'Logged in as username' is visible
    await expect(page.locator('a:has-text("Logged in as")')).toContainText('Padraic');

    // 17. Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click()

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByRole('heading', { name: 'ACCOUNT DELETED!' })).toBeVisible();
});