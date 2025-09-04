import { Locator, Page } from "@playwright/test";
import { acceptCookies } from "../Components.ts/cookieConsent";
import { Navbar } from "../Components.ts/Navbar";
import path from "path";

export class Contact {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly fileInput: Locator;
    readonly submitButton: Locator;
    readonly subscribe: Locator;
    readonly subscribeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator("input[name='name']");
        this.emailInput = page.locator("input[name='email']");
        this.subjectInput = page.locator("input[name='subject']");
        this.messageInput = page.locator("textarea[name='message']");
        this.fileInput = page.locator("input[type='file']");
        this.submitButton = page.locator("[data-qa='submit-button']");
        this.subscribe = page.locator("#subscribe_email");
        this.subscribeBtn = page.locator("#subscribe");
    }

    async goto() {
        await this.page.goto("http://automationexercise.com/contact_us");
        await acceptCookies(this.page);
    }

    async fillContactForm(name: string, email: string, subject: string, message: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
        //await this.subscribe.fill(subscribe);
    }

    async uploadFile(fileName: string) {

        await this.fileInput.setInputFiles(fileName);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}


;