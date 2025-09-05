import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByLabel('Name:');
        this.emailInput = page.getByLabel('Email:');
        this.passwordInput = page.getByLabel('Password:');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async register(name: string, email: string, password: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }
}
