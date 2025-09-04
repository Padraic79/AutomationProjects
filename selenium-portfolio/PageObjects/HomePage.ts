import { WebDriver } from 'selenium-webdriver';

export class HomePage {
    private driver: WebDriver;
    private url: string = 'https://padraic79.github.io/AutomationProjects/';

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async goto() {
        await this.driver.get(this.url);
    }

    async getTitle(): Promise<string> {
        return await this.driver.getTitle();
    }
}
