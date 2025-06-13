import { Page } from "@playwright/test";

export function ArticlePage(page: Page) {
  this.titleInputLocator = page.locator('//input[@data-qa-id="editor-title"]');
  this.descriptionInputLocator = page.locator(
    '//input[@data-qa-id="editor-description"]'
  );
  this.inputLocator = page.locator(
    '//textarea[@placeholder="Write your article (in markdown)"]'
  );
  this.publishButtonLocator = page.locator(
    '//button[@data-qa-id="editor-publish"]'
  );
  this.waitForPrimaryButtonLocator = page.waitForSelector(
    '//button[@class="btn btn-sm btn-primary"]'
  );

  this.createArticle = async function (
    title: string,
    description: string,
    input: string,
    tags?: string
  ) {
    await this.titleInputLocator.fill(title);
    await this.descriptionInputLocator.fill(description);
    await this.inputLocator.fill(input);
    await this.publishButtonLocator.click();
    await this.waitForPrimaryButtonLocator;
  };
}
