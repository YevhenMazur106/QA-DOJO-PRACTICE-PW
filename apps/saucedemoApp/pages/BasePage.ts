import { Page, Locator } from "@playwright/test";
import { Header } from "../../../tests/homework-11-OOP/saucedemoApp/components/Header1";

export abstract class BasePage {
  protected page: Page;
  header: Header;
  // private footer: Footer;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }

  async reload() {
    await this.page.reload();
  }
}

