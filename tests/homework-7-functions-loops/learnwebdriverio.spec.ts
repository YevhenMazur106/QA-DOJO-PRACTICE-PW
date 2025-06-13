import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("tests with functions and loop", () => {
  const fakeEmail = faker.internet.email();
  const timestamp = Date.now();
  const user = `user${timestamp}`;
  const password = "Password";

  const articleTitle = `New Title ${timestamp} `;
  const description = `New Description ${timestamp}`;
  const articleBody = `New body ${timestamp}`;

  const registerPage = "https://demo.learnwebdriverio.com/register";
  const openArticleDraft = async (page: Page) =>
    page.locator('//a[@href="/editor"]').click();
  async function registerNewUser(
    page: Page,
    name: string,
    email: string,
    password: string
  ) {
    await page.locator('//input[@placeholder="Username"]').fill(name);
    await page.locator('//input[@placeholder="Email"]').fill(email);
    await page.locator('//input[@placeholder="Password"]').fill(password);
    await page.locator("//button[contains(text(),'Sign up')]").click();
  }
  const createArticle = async (
    page: Page,
    title: string,
    description: string,
    input: string,
    tags?: string
  ) => {
    await page.locator('//input[@data-qa-id="editor-title"]').fill(title);
    await page
      .locator('//input[@data-qa-id="editor-description"]')
      .fill(description);
    await page
      .locator('//textarea[@placeholder="Write your article (in markdown)"]')
      .fill(input);
    await page.locator('//button[@data-qa-id="editor-publish"]').click();
    await page.waitForSelector('//button[@class="btn btn-sm btn-primary"]'); //додаю цей метод, оскільки в тесті створюю 3 статті підряд і сторінка не встигає за діями плейрайту
  };

  test(
    "DL-T1 create new articles",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      await page.goto(registerPage);
      await registerNewUser(page, user, fakeEmail, password);
      // await openArticleDraft(page);
      for (let i = 0; i < 3; i++) {
        await openArticleDraft(page);
        await createArticle(page, articleTitle, description, articleBody);
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
