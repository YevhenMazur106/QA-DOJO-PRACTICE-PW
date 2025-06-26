import { expect } from "@playwright/test";
import { test } from "./fixtures/baseFixture";
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
  test(
    "SD-1 buy goods happy pass",
    { tag: ["@regression", "@smoke", "@orderFlow"] },
    async ({
      productsPage,
      cartPage,
      checkoutPage1,
      checkoutPage2,
      completePage,
      loginPage,
    }) => {
      const item = productsPage.getProductItem("Sauce Labs Bike Light");
      const itemCart = cartPage.getProductItem("Sauce Labs Bike Light");

      await test.step("Login by standard user", async () => {
        await loginPage.loginUser(
          personalData.credentials.userName,
          personalData.credentials.password
        );
      });

      await test.step("Add item to card", async () => {
        await item.addToCardByName();
      });
      await test.step("Check that cart is not empty", async () => {
        await expect(productsPage.header.cartLinkLocator).toHaveText("1");
      });
      await test.step("Open cart", async () => {
        await productsPage.header.clickOnCart();
      });
      await test.step("Ensure that item was added", async () => {
        await expect(itemCart.getDescription()).toBeDefined();
      });
      await test.step("Fill information for checkout", async () => {
        await cartPage.clickCheckoutButton();
        await checkoutPage1.fillPersonalInformation(
          personalData.firstName,
          personalData.lastName,
          personalData.zipCode
        );
        await checkoutPage1.clickContinueButton();
      });
      await test.step("Check item price on checkout page", async () => {
        await expect(await item.getItemPrice()).toEqual(
          await checkoutPage2.getItemTotalPrice()
        );
      });
      await test.step("Complete purchase", async () => {
        await checkoutPage2.clickOnFinishButton();
      });
      await test.step("Check that purchasing was successful", async () => {
        await expect(completePage.successImageLocator).toBeInViewport();
        await expect(completePage.completeHeaderTextLocator).toHaveText(
          "Thank you for your order!"
        );
        await expect(completePage.backHomeButton).toBeVisible();
      });
    }
  );
});
