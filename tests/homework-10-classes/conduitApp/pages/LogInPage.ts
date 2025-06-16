import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  emailInputLocator: Locator;
  passwordInputLocator: Locator;
  signInBtnLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInputLocator = this.page.locator('//input[@placeholder="Email"]');
    this.passwordInputLocator = this.page.locator(
      '//input[@placeholder="Password"]'
    );
    this.signInBtnLocator = this.page.locator(
      "//button[contains(text(),'Sign in')]"
    );
  }

  async loginUser(email: string, password: string) {
    await this.emailInputLocator.fill(email);
    await this.passwordInputLocator.fill(password);
    await this.signInBtnLocator.click();
  }
}
