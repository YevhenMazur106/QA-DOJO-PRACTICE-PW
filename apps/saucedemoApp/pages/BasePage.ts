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

// class Header {
//   protected page: Page;
//   private menuLocator: Locator;
//   cartLinkLocator: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.menuLocator = this.page.getByRole("button", { name: "Open Menu" });
//     this.cartLinkLocator = this.page.locator(
//       '//a[@data-test="shopping-cart-link"]'
//     );
//   }

//   async openMenu() {
//     await this.menuLocator.click();
//   }

//   async clickOnCart() {
//     await this.cartLinkLocator.click();
//   }
// }

// class Footer {
//   protected page: Page;
//   private twitterLinkLocator: Locator;
//   private facebookLinkLocator: Locator;
//   private linkedinLinkLocator: Locator;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async clickOnTwitter() {}
//   async clickOnFacebook() {}
//   async clickOnLinkedin() {}
// }
