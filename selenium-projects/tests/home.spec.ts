import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import { HomePage } from '../PageObjects/HomePage';

// jest.setTimeout(30000); // Increase timeout to 30 seconds - removed as Jest not used

let driver: any;
let home: HomePage;

beforeAll(async () => {
    const options = new Options();
    options.addArguments('--headless');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    home = new HomePage(driver);
}, 30000); // Also set timeout for beforeAll

afterAll(async () => {
    if (driver) {
        await driver.quit();
    }
});

test('Home page should load and have correct title', async () => {
    await home.goto();
    const title = await home.getTitle();
    expect(title).toMatch(/Playwright Demo Site/);
});
