import { Page, Locator } from "playwright/test";

export class ProductsPage {

    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchBtn: Locator;
    readonly viewProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
        this.viewProduct = page.getByRole('link', { name: 'View Product' });

        this.searchBtn = page.locator('#submit_search');
    }

    async goto() {
        await this.page.goto('/products');
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchBtn.click();
    }

    async productList() {

        const texts = await this.page.locator('.productinfo').allInnerTexts();
        return texts.map(text => text.trim());
    }
    async acceptCookies() {
        const consentButton = this.page.locator('button:has-text("Consent")');
        if (await consentButton.isVisible()) {
            await consentButton.click();
        }
    }
}
