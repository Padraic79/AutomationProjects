import { Page, Locator } from "@playwright/test";
import { acceptCookies } from "../Components.ts/cookieConsent";


export class Signup {

    readonly page: Page;
    readonly titleMr: Locator;
    readonly titleMrs: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly dobDays: Locator;
    readonly dobMonths: Locator;
    readonly dobYears: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countryInput: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly subscribeEmail: Locator
    readonly subscribeEmailButton: Locator;
    readonly signupButton: Locator;
    readonly name: Locator;
    readonly email: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleMr = this.page.locator('#id_gender1');
        this.titleMrs = this.page.locator('#id_gender2');
        this.nameInput = this.page.locator('[data-qa="signup-name"]');
        this.emailInput = this.page.locator('[data-qa="signup-email"]');
        this.name = this.page.locator('[data-qa="name"]');
        this.email = this.page.locator('[data-qa="email"]');
        this.passwordInput = this.page.locator('[data-qa="password"]');
        this.dobDays = this.page.locator('[data-qa="days"]');
        this.dobMonths = this.page.locator('[data-qa="months"]');
        this.dobYears = this.page.locator('[data-qa="years"]');
        this.newsletterCheckbox = this.page.locator('#newsletter');
        this.specialOffersCheckbox = this.page.locator('#optin');
        this.firstNameInput = this.page.locator('[data-qa="first_name"]');
        this.lastNameInput = this.page.locator('[data-qa="last_name"]');
        this.companyInput = this.page.locator('[data-qa="company"]');
        this.addressInput = this.page.locator('[data-qa="address"]');
        this.address2Input = this.page.locator('[data-qa="address2"]');
        this.countryInput = this.page.locator('[data-qa="country"]');
        this.stateInput = this.page.locator('[data-qa="state"]');
        this.cityInput = this.page.locator('[data-qa="city"]');
        this.zipcodeInput = this.page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = this.page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = this.page.locator('[data-qa="create-account"]');
        this.subscribeEmail = this.page.locator('#subscribe-email');
        this.subscribeEmailButton = this.page.locator('#subscribe');
        this.signupButton = this.page.locator('[data-qa="signup-button"]');
    }

    async goto() {
        await this.page.goto(`/signup`);
    }

    async getTitle() {
        return this.page.title();
    }

    async newUserSignUp(name: string, email: string) {
        await this.goto();
        await acceptCookies(this.page);
        await this.newUserName(name)
        await this.newUserEmail(email)
        await this.clickSignup();
    }


    async selectTitleMr() {
        await this.titleMr.click();
    }

    async selectTitleMrs() {
        await this.titleMrs.click();
    }

    // the name field can be populated so check first
    async fillNameIfBlank(name: string) {
        const value = await this.name.inputValue();
        if (!value) {
            await this.name.fill(name);
        } else return
    }

    async enterNameSignup(name: string) {
        await this.fillNameIfBlank(name);
    }

    //email field can be populated so check first
    async fillEmailIfBlank(email: string) {
        const value = await this.email.inputValue();
        if (!value) {
            await this.email.fill(email);
        }
    }

    async newUserName(name: string) {
        await this.nameInput.fill(name);
    }

    async newUserEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterEmailSignup(email: string) {
        await this.fillEmailIfBlank(email);
    }

    async enterPasswordSignup(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterDobSignup(dob: { day: string; month: string; year: string }) {
        //explicit wait added as test was failing as element was not ready
        await this.dobDays.waitFor({ state: 'attached' });
        await this.dobDays.selectOption({ value: dob.day });
        await this.dobMonths.selectOption({ value: dob.month });
        await this.dobYears.selectOption({ value: dob.year });
    }

    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async enterCompany(company: string) {
        await this.companyInput.fill(company);
    }

    async enterAddress(address: string) {
        await this.addressInput.fill(address);
    }

    async enterAddress2(address2: string) {
        await this.address2Input.fill(address2);
    }

    async enterCountry(country: string) {
        await this.countryInput.selectOption({ value: country });
    }

    async enterState(state: string) {
        await this.stateInput.fill(state);
    }

    async enterCity(city: string) {
        await this.cityInput.fill(city);
    }

    async enterZipcode(zipcode: string) {
        await this.zipcodeInput.fill(zipcode);
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async createAccount() {
        await this.createAccountButton.click();
    }

    async clickSignup() {
        await this.signupButton.click();
    }
}
