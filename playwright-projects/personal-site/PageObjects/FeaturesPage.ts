import { Page, Locator } from '@playwright/test';

export class FeaturesPage {
    readonly page: Page;
    readonly header: Locator;
    readonly dropdown: Locator;
    readonly dropdownResult: Locator;
    readonly cookieBanner: Locator;
    readonly acceptCookies: Locator;
    readonly cookieStatus: Locator;
    readonly sessionBtn: Locator;
    readonly sessionToken: Locator;
    readonly clearSession: Locator;
    readonly addRowBtn: Locator;
    readonly demoTable: Locator;
    readonly modalButton: Locator;
    readonly modal: Locator;
    readonly closeModal: Locator;
    readonly fileUpload: Locator;
    readonly filePreview: Locator;
    readonly tooltipBtn: Locator;
    readonly tooltip: Locator;
    readonly darkModeToggle: Locator;
    readonly themeLabel: Locator;
    readonly showSpinner: Locator;
    readonly spinner: Locator;
    readonly spinnerResult: Locator;
    readonly lsKey: Locator;
    readonly lsValue: Locator;
    readonly lsSet: Locator;
    readonly lsGet: Locator;
    readonly lsRemove: Locator;
    readonly lsResult: Locator;
    readonly showToast: Locator;
    readonly toast: Locator;
    readonly announceBtn: Locator;
    readonly ariaLive: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h2');
        this.dropdown = page.locator('#demo-dropdown');
        this.dropdownResult = page.locator('#dropdown-result');
        this.cookieBanner = page.locator('#cookie-banner');
        this.acceptCookies = page.locator('#accept-cookies');
        this.cookieStatus = page.locator('#cookie-status');
        this.sessionBtn = page.locator('#generate-session');
        this.sessionToken = page.locator('#session-token');
        this.clearSession = page.locator('#clear-session');
        this.addRowBtn = page.locator('#add-row');
        this.demoTable = page.locator('#demo-table');
        this.modalButton = page.locator('#open-modal');
        this.modal = page.locator('#modal');
        this.closeModal = page.locator('#close-modal');
        this.fileUpload = page.locator('#file-upload');
        this.filePreview = page.locator('#file-preview');
        this.tooltipBtn = page.locator('#tooltip-btn');
        this.tooltip = page.locator('#tooltip');
        this.darkModeToggle = page.locator('#theme-toggle');
        this.themeLabel = page.locator('#theme-label');
        this.showSpinner = page.locator('#show-spinner');
        this.spinner = page.locator('#spinner');
        this.spinnerResult = page.locator('#spinner-result');
        this.lsKey = page.locator('#ls-key');
        this.lsValue = page.locator('#ls-value');
        this.lsSet = page.locator('#ls-set');
        this.lsGet = page.locator('#ls-get');
        this.lsRemove = page.locator('#ls-remove');
        this.lsResult = page.locator('#ls-result');
        this.showToast = page.locator('#show-toast');
        this.toast = page.locator('#toast');
        this.announceBtn = page.locator('#announce-btn');
        this.ariaLive = page.locator('#aria-live');
    }

    async goto(url: string) {
        await this.page.goto(url);
    }
}
