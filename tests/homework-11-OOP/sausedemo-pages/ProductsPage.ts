import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  private productSortingLocator: Locator;
  private addToCartButton: Locator;
  private itemPriceLocator: Locator;
  itemNameLocator: Locator;
  private itemDescriptionLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.productSortingLocator = this.page.getByRole("combobox", {
      name: "Name (A to Z)",
    });
    this.addToCartButton = this.page.getByRole("button", {
      name: "Add to cart",
    });
    this.itemPriceLocator = this.page.locator(
      '//div[@data-test="inventory-item-price"]'
    );
    this.itemNameLocator = this.page.locator(
      '//div[@data-test="inventory-item-name"]'
    );
    this.itemDescriptionLocator = this.page.locator(
      '//div[@data-test="inventory-item-desc"]'
    );
  }

  async addItemToCard(i: number = 0) {
    await this.addToCartButton.nth(i).click();
  }

  async selectProduct(i: number = 0) {
    await this.itemNameLocator.nth(i).click();
  }
  async getItemPrice(i: number = 0) {
    const priceText = await this.itemPriceLocator.nth(i).textContent();
    return priceText?.trim().replace("$", "") ?? "";
  }

  async getItemDescription(i: number = 0) {
    const itemDescription = await this.itemDescriptionLocator
      .nth(i)
      .textContent();
    return itemDescription;
  }
}
