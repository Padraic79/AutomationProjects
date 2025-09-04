import { Page, expect } from "@playwright/test";
import { Login } from "../PageObjects/Login";
import users from '../data/users.json';


export class loginComponent extends Login {

    readonly login: Login;

    constructor(page: Page) {
        super(page);
        this.login = new Login(page);
    }

    async loginUser(email: string, password: string) {
        let login = new Login(this.page);
        await login.goto();

        expect(await login.getTitle()).toMatch("Automation Exercise");
        await login.nav.goToSignupLogin();
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        await login.enterEmailLogin(users.validUser.email);
        await login.enterPasswordLogin(users.validUser.password);
        await login.clickLogin();



    }
}