import { Page } from "@playwright/test";

export function RegistrationPage(page: Page) {
  this.usernameInputLocator = page.locator('//input[@placeholder="Username"]');
  this.emailInputLocator = page.locator('//input[@placeholder="Email"]');
  this.passwordInputLocator = page.locator('//input[@placeholder="Password"]');
  this.signUpButtonLocator = page.locator(
    "//button[contains(text(),'Sign up')]"
  );

  this.registerNewUser = async function (
    username: string,
    email: string,
    password: string
  ) {
    await this.usernameInputLocator.fill(username);
    await this.emailInputLocator.fill(email);
    await this.passwordInputLocator.fill(password);
    await this.signUpButtonLocator.click();
  };
}
