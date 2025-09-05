// Components/Navbar.ts
import { Locator, Page } from '@playwright/test';

export class Navbar {
    readonly page: Page;
    readonly home: Locator;
    readonly products: Locator;
    readonly cart: Locator;
    readonly signupLogin: Locator;
    readonly testcases: Locator;
    readonly apitesting: Locator;
    readonly videotutorials: Locator;
    readonly contactus: Locator;

    constructor(page: Page) {
        this.page = page;
        //this.home = this.page.locator('.nav.navber-nav > a', { name: 'Home' });
        this.home = page.locator('.nav.navbar-nav a:has-text("Home")');
        this.products = this.page.getByRole('link', { name: 'Products' });
        this.cart = this.page.getByRole('link', { name: 'Cart' });
        this.signupLogin = this.page.getByRole('link', { name: 'Signup / Login' });
        this.testcases = this.page.getByRole('link', { name: 'Test Cases' });
        this.apitesting = this.page.getByRole('link', { name: 'API Testing' });
        this.videotutorials = this.page.getByRole('link', { name: 'Video Tutorials' });
        this.contactus = this.page.getByRole('link', { name: 'Contact Us' });
    }

    async goHome() {
        await this.home.click();
    }
    async goToProducts() {
        await this.products.click();
    }
    async goToCart() {
        await this.cart.click();
    }
    async goToSignupLogin() {
        await this.signupLogin.click();
    }
    async goToTestCases() {
        await this.testcases.click();
    }
    async goToApiTesting() {
        await this.apitesting.click();
    }
    async goToVideoTutorials() {
        await this.videotutorials.click();
    }
    async goToContactUs() {
        await this.contactus.click();
    }


}
