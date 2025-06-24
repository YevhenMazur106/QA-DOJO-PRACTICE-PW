import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class Header extends BasePage {
  private menuLocator: Locator;
  cartLinkLocator: Locator;

  constructor(page: Page) {
    super(page);
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
