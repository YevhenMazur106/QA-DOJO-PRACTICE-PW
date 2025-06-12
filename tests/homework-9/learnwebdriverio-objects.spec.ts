import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { RegistrationPage } from "../homework-9/condulitApp/pages/RegisterPage";
import { ArticlePage } from "../homework-9/condulitApp/pages/ArticlePage";

test.describe("tests with functions and loop", () => {
  const fakeEmail = faker.internet.email();
  const timestamp = Date.now();
  const userName = `user${timestamp}`;

  const articleData = {
    articleTitle: `New Title ${timestamp} `,
    description: `New Description ${timestamp}`,
    articleBody: `New body ${timestamp}`,
  };

  const userRegistrationData = {
    name: userName,
    email: fakeEmail,
    password: "Password",
  };

  const registerPage = "https://demo.learnwebdriverio.com/register";
  const openArticleDraft = async (page: Page) =>
    page.locator('//a[@href="/editor"]').click();

  test(
    "DL-T1 create new articles",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      await page.goto(registerPage);
      const registrationPage = new RegistrationPage(page);
      await registrationPage.registerNewUser(
        userRegistrationData.name,
        userRegistrationData.email,
        userRegistrationData.password
      );
      await openArticleDraft(page);
      for (let i = 0; i < 3; i++) {
        await openArticleDraft(page);
        const articlePage = new ArticlePage(page);
        await articlePage.createArticle(
          articleData.articleTitle,
          articleData.description,
          articleData.articleBody
        );
      }
      await page
        .getByRole("link", { name: `user${timestamp}` })
        .first()
        .click();
      await expect(
        page.locator('//*[@data-qa-type="article-preview"][1]')
      ).toBeVisible();
      await expect(
        page.locator('//*[@data-qa-type="article-preview"][2]')
      ).toBeVisible();
      await expect(
        page.locator('//*[@data-qa-type="article-preview"][3]')
      ).toBeVisible();
    }
  );
});
