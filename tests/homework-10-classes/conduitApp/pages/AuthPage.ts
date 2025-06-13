import { Locator, Page } from "@playwright/test";

export class AuthPage {
  page: Page;
  usernameInputLocator: Locator;
  emailInputLocator: Locator;
  passwordInputLocator: Locator;
  signInBtnLocator: Locator;
  signUpButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputLocator = this.page.locator(
      '//input[@placeholder="Username"]'
    );
    this.emailInputLocator = this.page.locator('//input[@placeholder="Email"]');
    this.passwordInputLocator = this.page.locator(
      '//input[@placeholder="Password"]'
    );
    this.signInBtnLocator = this.page.locator(
      "//button[contains(text(),'Sign in')]"
    );
    this.signUpButtonLocator = this.page.locator(
      "//button[contains(text(),'Sign up')]"
    );
  }
  async registerUser(username: string, email: string, password: string) {
    await this.usernameInputLocator.fill(username);
    await this.emailInputLocator.fill(email);
    await this.passwordInputLocator.fill(password);
    await this.signUpButtonLocator.click();
  }

  async loginUser(email: string, password: string) {
    await this.emailInputLocator.fill(email);
    await this.passwordInputLocator.fill(password);
    await this.signInBtnLocator.click();
  }
}
