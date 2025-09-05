import { Page, Locator } from '@playwright/test';

export class FeaturesPage {
    readonly page: Page;
    readonly header: Locator;
    readonly dropdown: Locator;
    readonly modalButton: Locator;
    readonly fileUpload: Locator;
    readonly darkModeToggle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h2');
        this.dropdown = page.getByRole('button', { name: /dropdown/i });
        this.modalButton = page.getByRole('button', { name: /open modal/i });
        this.fileUpload = page.getByLabel(/file upload/i);
        this.darkModeToggle = page.getByLabel(/dark mode|theme/i);
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    // Add more feature interactions as needed
}
