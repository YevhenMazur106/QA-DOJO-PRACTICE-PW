import { test, expect, Page } from "@playwright/test";
import { AuthPage } from "./conduitApp/pages/AuthPage";
import { HomePage } from "./conduitApp/pages/HomePage";
import { ArticlePage } from "./conduitApp/pages/ArticlePage";

test("choose article by tag", async ({ page }) => {
  const authPage = new AuthPage(page);
  const homePage = new HomePage(page);
  const articlePage = new ArticlePage(page);

  await page.goto("https://demo.learnwebdriverio.com/login");
  await authPage.loginUser("qwerty@gmail.com", "Password");
  await homePage.openYourFeedTab();
  await homePage.openGlobalFeedTab();
  await homePage.filterArticlesByDemoTag();
  await homePage.selectArticle();
  await expect(articlePage.tagsBarLocator).toContainText("demo");
});
