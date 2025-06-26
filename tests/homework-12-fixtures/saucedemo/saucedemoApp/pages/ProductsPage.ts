import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductItem } from "../components/ProductItem";

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  getProductItem(productName: string) {
    return new ProductItem(this.page, productName);
  }
}
