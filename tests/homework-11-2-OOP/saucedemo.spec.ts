import { test, expect } from "@playwright/test";
import { LoginPage } from "../../apps/saucedemoApp/pages/LoginPage";
import { ProductsPage } from "../../apps/saucedemoApp/pages/ProductsPage";
import { CartPage } from "../../apps/saucedemoApp/pages/CartPage";
import { CheckoutPage1 } from "../../apps/saucedemoApp/pages/CheckoutPage1";
import { CheckoutPage2 } from "../../apps/saucedemoApp/pages/CheckoutPage2";
import { CompletePage } from "../../apps/saucedemoApp/pages/CompletePage";
import { faker } from "@faker-js/faker";

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
      const cartPage = new CartPage(page);
      const checkoutPage1 = new CheckoutPage1(page);
      const checkoutPage2 = new CheckoutPage2(page);
      const completePage = new CompletePage(page);
      const item = productsPage.getProductItem("Sauce Labs Bike Light");
      const itemCart = cartPage.getProductItem("Sauce Labs Bike Light");

      await loginPage.loginUser(
        personalData.credentials.userName,
        personalData.credentials.password
      );
      await item.addToCardByName();
      await expect(productsPage.header.cartLinkLocator).toHaveText("1");
      await productsPage.header.clickOnCart();
      await expect(itemCart.getDescription()).toBeDefined();
      await cartPage.clickCheckoutButton();
      await checkoutPage1.fillPersonalInformation(
        personalData.firstName,
        personalData.lastName,
        personalData.zipCode
      );
      await checkoutPage1.clickContinueButton();
      await expect(await item.getItemPrice()).toEqual(
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
