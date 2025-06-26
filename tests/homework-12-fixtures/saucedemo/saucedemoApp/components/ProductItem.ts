import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

class ItemLocator {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  getProductTileByName = (productName: string) =>
    this.page
      .getByRole("link", { name: productName })
      .locator('xpath=ancestor::*[@data-test="inventory-item"]');

  getAddToCardButtonByName = (productName: string) =>
    this.getProductTileByName(productName).getByRole("button", {
      name: "Add to cart",
    });

  gerRemoveButtonByName = (productName: string) =>
    this.getProductTileByName(productName).getByRole("button", {
      name: "Remove",
    });

  getDescriptionLocator = (productName: string) =>
    this.getProductTileByName(productName).locator(
      '//div[@data-test="inventory-item-desc"]'
    );

  getItemPrice = (productName: string) =>
    this.getProductTileByName(productName).locator(
      'xpath=//div[@data-test="inventory-item-price"]'
    );
}

export class ProductItem extends BaseComponent {
  locators: ItemLocator = new ItemLocator(this.page);
  productName: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
  }

  async addToCardByName() {
    await this.locators.getAddToCardButtonByName(this.productName).click();
  }

  async removeToCardByName() {
    await this.locators.gerRemoveButtonByName(this.productName).click();
  }

  async getDescription() {
    return this.locators.getDescriptionLocator(this.productName).textContent();
  }

  async getItemPrice() {
    const fullItemPrice = await this.locators
      .getItemPrice(this.productName)
      .innerText();
    const itemPrice = fullItemPrice.split("$")[1];
    return itemPrice;
  }
}

export class CartItem extends BaseComponent {
  locators: ItemLocator = new ItemLocator(this.page);
  productName: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
  }

  async removeToCardByName() {
    await this.locators.gerRemoveButtonByName(this.productName).click();
  }

  async getDescription() {
    return this.locators.getDescriptionLocator(this.productName).innerText();
  }

  async getItemPrice() {
    return this.locators.getItemPrice(this.productName).textContent();
  }
}
