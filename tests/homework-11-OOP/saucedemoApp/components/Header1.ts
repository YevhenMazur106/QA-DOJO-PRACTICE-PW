import { Locator, Page } from "@playwright/test";

export class Header {
  page: Page;
  private menuLocator: Locator;
  cartLinkLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuLocator = this.page.getByRole("button", { name: "Open Menu" });
    this.cartLinkLocator = this.page.locator(
      '//a[@data-test="shopping-cart-link"]'
    );
  }

  async openMenu() {
    await this.menuLocator.click();
  }

  async clickOnCart() {
    await this.cartLinkLocator.click();
  }
}
