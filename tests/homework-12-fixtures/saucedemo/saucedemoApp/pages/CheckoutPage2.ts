import { Page, Locator } from "@playwright/test";
import { ProductsPage } from "./ProductsPage";

export class CheckoutPage2 extends ProductsPage {
  private paymentInformationLocator: Locator;
  private shippingInformationLocator: Locator;
  private itemTotalPriceLocator: Locator;
  private cancelButton: Locator;
  private finishButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.itemTotalPriceLocator = this.page.locator(
      '//div[@data-test="subtotal-label"]'
    );
    this.finishButtonLocator = this.page.getByRole("button", {
      name: "Finish",
    });
  }

  async getItemTotalPrice() {
    const itemTotalPriceText = await this.itemTotalPriceLocator.innerText();
    const price = itemTotalPriceText.split("$")[1];
    return price;
  }

  async clickOnFinishButton() {
    await this.finishButtonLocator.click();
  }
}
