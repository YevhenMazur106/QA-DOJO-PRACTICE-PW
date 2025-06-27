import { expect } from "@playwright/test";
import { test } from "./fixtures";
import { createRegistrationData } from "./conduitApp/user-data";

test(
  "1-LD choose article by tag",
  { tag: ["@regression", "@smoke"] },
  async ({ page, registerPage, homePage, articlePage, context }) => {
    const userRegisterData = createRegistrationData;
    await page.goto("https://demo.learnwebdriverio.com/register");
    await registerPage.registerUser(
      userRegisterData.user,
      userRegisterData.email,
      userRegisterData.password
    );
    await expect(await page.locator('[data-qa-id="site-nav"]')).toContainText(
      userRegisterData.user.toLowerCase()
    );
    const state = await context.storageState({
      path: ".auth/storage-state.json",
    });
    console.log(state);
  }
);
// test.use({ storageState: ".auth/storage-state.json" });

test("test1 existing storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});
test("test2 existing storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});
test("test3 existing storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});
test("test4 existing storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});
test("test5 existing storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com");
});

test(
  "just new test",
  { tag: ["@regression", "@smoke"] },
  async ({ page, homePage, articlePage }) => {
    await homePage.openYourFeedTab();
    await expect(page).toHaveURL("https://demo.learnwebdriverio.com/my-feed");
    await homePage.openGlobalFeedTab();
    await homePage.filterArticlesByDemoTag("demo");
    await expect(page.locator('//h1[text() = "Demo Article"]')).toBeVisible();
    await homePage.selectArticle();
    await expect(articlePage.tagsBarLocator).toContainText("demo");
  }
);
