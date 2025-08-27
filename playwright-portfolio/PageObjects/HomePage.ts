import { Page, Locator } from '@playwright/test';
import { Navbar } from '../Components.ts/Navbar';

export class HomePage {
  readonly page: Page;
  readonly nav: Navbar;


  constructor(page: Page) {
    this.page = page;
    this.nav = new Navbar(page);
  }

  async goto() {
    await this.page.goto(`/`);
  }

  async getTitle() {
    return this.page.title();
  }

  async acceptCookies() {
    const consentButton = this.page.locator('button:has-text("Consent")');
    if (await consentButton.isVisible()) {
      await consentButton.click();
    }
  }
}
