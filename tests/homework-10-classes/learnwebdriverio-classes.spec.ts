import { test, expect } from "@playwright/test";
import { RegisterPage } from "./conduitApp/pages/RegisterPage";
import { HomePage } from "./conduitApp/pages/HomePage";
import { ArticlePage } from "./conduitApp/pages/ArticlePage";
import { faker } from "@faker-js/faker";

test(
  "1-LD choose article by tag",
  { tag: ["@regression", "@smoke"] },
  async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
    const articlePage = new ArticlePage(page);
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
