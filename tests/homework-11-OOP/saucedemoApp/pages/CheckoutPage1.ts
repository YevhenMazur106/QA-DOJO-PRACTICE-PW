import { Page, Locator } from "@playwright/test";

export class CheckoutPage1 {
  private page: Page;
  private firstNameInputLocator: Locator;
  private lastNameInputLocator: Locator;
  private zipCodeInputLocator: Locator;
  private cancelButtonLocator: Locator;
  private continueButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInputLocator = this.page.getByPlaceholder("First Name");
    this.lastNameInputLocator = this.page.getByPlaceholder("Last Name");
    this.zipCodeInputLocator = this.page.getByPlaceholder("Zip/Postal Code");
    this.cancelButtonLocator = this.page.getByRole("button", {
      name: "Go back Cancel",
    });
    this.continueButtonLocator = this.page.getByRole("button", {
      name: "Continue",
    });
  }

  async fillPersonalInformation(
    firstName: string,
    lastName: string,
    zipCode: string
  ) {
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
    await this.zipCodeInputLocator.fill(zipCode);
  }

  async clickContinueButton() {
    await this.continueButtonLocator.click();
  }
}
