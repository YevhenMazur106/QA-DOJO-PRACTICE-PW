import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  private usernameInputLocator: Locator;
  private passwordInputLocator: Locator;
  private loginBtnLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputLocator = this.page.getByPlaceholder("Username");
    this.passwordInputLocator = this.page.getByPlaceholder("Password");
    this.loginBtnLocator = this.page.getByRole("button");
  }

  async loginUser(username: string, password: string) {
    await this.usernameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.loginBtnLocator.click();
  }
}
