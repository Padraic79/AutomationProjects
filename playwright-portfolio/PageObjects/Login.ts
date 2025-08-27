import { Page, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class Login extends HomePage {
    readonly page: Page;
    readonly emailAddress: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailAddress = this.page.locator('[data-qa="login-email"]');
        this.password = this.page.locator('[data-qa="login-password"]');
        this.loginButton = this.page.locator('[data-qa="login-button"]');
    }

    async goto() {
        await this.page.goto(`/login`);
    }

    async getTitle() {
        return this.page.title();
    }

    async enterEmailLogin(email: string) {
        await this.emailAddress.fill(email);
    }

    async enterPasswordLogin(password: string) {
        await this.password.fill(password);

    }

    async clickLogin() {
        await this.loginButton.click();
    }



}
