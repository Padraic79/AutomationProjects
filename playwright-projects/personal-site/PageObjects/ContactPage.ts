import { Page, Locator } from '@playwright/test';

export class ContactPage {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByLabel('Name:');
        this.emailInput = page.getByLabel('Email:');
        this.messageInput = page.getByLabel('Message:');
        this.submitButton = page.getByRole('button', { name: /send|submit/i });
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async sendMessage(name: string, email: string, message: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.messageInput.fill(message);
        await this.submitButton.click();
    }
}
