import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { test } from "./fixtures";

test(
  "1-LD choose article by tag",
  { tag: ["@regression", "@smoke"] },
  async ({ page, registerPage, homePage, articlePage }) => {
    const fakeEmail = faker.internet.email();
    const timestamp = Date.now();
    const user = `user${timestamp}`;

    await page.goto("https://demo.learnwebdriverio.com/register");
    await registerPage.registerUser(user, fakeEmail, "Password");
    await expect(page.locator('//h1[text() = "conduit"]')).toContainText(
      "conduit"
    );
    await homePage.openYourFeedTab();
    await expect(page).toHaveURL("https://demo.learnwebdriverio.com/my-feed");
    await homePage.openGlobalFeedTab();
    await homePage.filterArticlesByDemoTag("demo");
    await expect(page.locator('//h1[text() = "Demo Article"]')).toBeVisible();
    await homePage.selectArticle();
    await expect(articlePage.tagsBarLocator).toContainText("demo");
  }
);
