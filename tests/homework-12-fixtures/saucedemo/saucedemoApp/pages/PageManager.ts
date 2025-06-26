import { Page } from "@playwright/test";
import { ProductsPage } from "./ProductsPage";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";
import { CheckoutPage1 } from "./CheckoutPage1";
import { CheckoutPage2 } from "./CheckoutPage2";
import { CompletePage } from "./CompletePage";

export class PageManager {
  productsPage: ProductsPage;
  loginPage: LoginPage;
  cartPage: CartPage;
  checkoutPage1: CheckoutPage1;
  checkoutPage2: CheckoutPage2;
  completePage: CompletePage;
  constructor(page: Page) {
    this.productsPage = new ProductsPage(page);
    this.loginPage = new LoginPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage1 = new CheckoutPage1(page);
    this.checkoutPage2 = new CheckoutPage2(page);
    this.completePage = new CompletePage(page);
  }
}

// можна створити новий файл baseFixture і туди фікстуру з типом PageManager , потім імпортувати в тест і передавати лише 1 параметр в анатоцію pageManager , замість купи
// productsPage,
//   cartPage,
//   checkoutPage1,
//   checkoutPage2,
//   completePage,
//   loginPage,
