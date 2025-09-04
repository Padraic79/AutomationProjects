import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly header: Locator;
    readonly loginNav: Locator;
    readonly registerNav: Locator;
    readonly contactNav: Locator;
    readonly featuresNav: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator("h1");
        this.loginNav = page.locator("nav a", { hasText: "Login" });
        this.registerNav = page.locator("nav a", { hasText: "Register" });
        this.contactNav = page.locator("nav a", { hasText: "Contact" });
        this.featuresNav = page.locator("nav a", { hasText: "Features" });
    }

    async goto() {
        await this.page.goto("https://padraic79.github.io/AutomationProjects/");
    }

    async navigateTo(section: "Login" | "Register" | "Contact" | "Features") {
        switch (section) {
            case "Login":
                await this.loginNav.click();
                break;
            case "Register":
                await this.registerNav.click();
                break;
            case "Contact":
                await this.contactNav.click();
                break;
            case "Features":
                await this.featuresNav.click();
                break;
        }
    }
}
