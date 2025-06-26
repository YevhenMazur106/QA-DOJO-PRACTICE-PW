import { test as base } from "@playwright/test";
import { ProductsPage } from "../saucedemoApp/pages/ProductsPage";
import { CartPage } from "../saucedemoApp/pages/CartPage";
import { CheckoutPage1 } from "../saucedemoApp/pages/CheckoutPage1";
import { CheckoutPage2 } from "../saucedemoApp/pages/CheckoutPage2";
import { CompletePage } from "../saucedemoApp/pages/CompletePage";
import { LoginPage } from "../saucedemoApp/pages/LoginPage";

type Pages = {
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage1: CheckoutPage1;
  checkoutPage2: CheckoutPage2;
  completePage: CompletePage;
  loginPage: LoginPage
};

export const test = base.extend<Pages>({
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);

    await use(productsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
  checkoutPage1: async ({ page }, use) => {
    const checkoutPage1 = new CheckoutPage1(page);

    await use(checkoutPage1);
  },
  checkoutPage2: async ({ page }, use) => {
    const checkoutPage2 = new CheckoutPage2(page);

    await use(checkoutPage2);
  },
  completePage: async ({ page }, use) => {
    const completePage = new CompletePage(page);

    await use(completePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  page: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");

    await use(page);
  },
});
export { base };

