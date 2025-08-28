import { Page, Locator } from '@playwright/test';
import { Navbar } from '../Components.ts/Navbar';
import { acceptCookies } from "../Components.ts/cookieConsent";

export class HomePage {
  readonly page: Page;
  readonly nav: Navbar;


  constructor(page: Page) {
    this.page = page;
    this.nav = new Navbar(page);
  }

  async goto() {
    await this.page.goto(`/`);
    await acceptCookies(this.page);
  }

  async getTitle() {
    return this.page.title();
  }


}
