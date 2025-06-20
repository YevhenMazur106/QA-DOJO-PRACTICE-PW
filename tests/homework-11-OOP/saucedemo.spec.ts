import { test, expect } from "@playwright/test";
import { LoginPage } from "./sausedemo-pages/LoginPage";
import { ProductsPage } from "./sausedemo-pages/ProductsPage";
import { BasePage } from "./sausedemo-pages/BasePage";
import { CartPage } from "./sausedemo-pages/CartPage";
import { CheckoutPage1 } from "./sausedemo-pages/CheckoutPage1";
import { faker } from "@faker-js/faker";
import { CheckoutPage2 } from "./sausedemo-pages/CheckoutPage2";
import { CompletePage } from "./sausedemo-pages/CompletePage";

test.describe("oop test", () => {
  const personalData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    zipCode: faker.address.zipCode("#####"),
    credentials: {
      userName: "standard_user",
      password: "secret_sauce",
    },
  };
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });
  test(
    "SD-1 buy goods happy pass",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      const productsPage = new ProductsPage(page);
      const basePage = new BasePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage1 = new CheckoutPage1(page);
      const checkoutPage2 = new CheckoutPage2(page);
      const completePage = new CompletePage(page);

      await loginPage.loginUser(
        personalData.credentials.userName,
        personalData.credentials.password
      );
      await productsPage.addItemToCard(1);
      await expect(basePage.header.cartLinkLocator).toHaveText("1");
      await basePage.header.clickOnCart();
      await expect(cartPage.itemNameLocator).toBeInViewport();
      await cartPage.clickCheckoutButton();
      await checkoutPage1.fillPersonalInformation(
        personalData.firstName,
        personalData.lastName,
        personalData.zipCode
      );
      await checkoutPage1.clickContinueButton();
      await expect(await productsPage.getItemPrice()).toEqual(
        await checkoutPage2.getItemTotalPrice()
      );
      await checkoutPage2.clickOnFinishButton();
      await expect(completePage.successImageLocator).toBeInViewport();
      await expect(completePage.completeHeaderTextLocator).toHaveText(
        "Thank you for your order!"
      );
      await expect(completePage.backHomeButton).toBeVisible();
    }
  );
});
