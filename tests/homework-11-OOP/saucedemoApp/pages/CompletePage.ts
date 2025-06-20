import { Page, Locator } from "@playwright/test";

export class CompletePage {
  private page: Page;
  successImageLocator: Locator;
  completeHeaderTextLocator: Locator;
  private completeTextLocator: Locator;
  backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successImageLocator = this.page.locator(
      '//img[@data-test="pony-express"]'
    );
    this.completeHeaderTextLocator = this.page.locator(
      '//h2[@data-test="complete-header"]'
    );
    this.backHomeButton = this.page.getByRole("button", { name: "Back Home" });
  }
}
