import { Page, Locator } from "@playwright/test";
import { ProductsPage } from "./ProductsPage";

export class CartPage extends ProductsPage {
  private checkoutButtonLocator: Locator;
  private continueShoppingButtonLocator: Locator;
  private removeButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButtonLocator = this.page.getByRole("button", {
      name: "Checkout",
    });
    this.continueShoppingButtonLocator = this.page.getByRole("button", {
      name: "Go back Continue Shopping",
    });
    this.removeButtonLocator = this.page.getByRole("button", {
      name: "Remove",
    });
  }

  async clickCheckoutButton() {
    await this.checkoutButtonLocator.click();
  }

  private async returnToShopping() {
    await this.continueShoppingButtonLocator.click();
  }

  private async deleteItemButton(i: number = 0) {
    await this.removeButtonLocator.nth(i).click();
  }
}
