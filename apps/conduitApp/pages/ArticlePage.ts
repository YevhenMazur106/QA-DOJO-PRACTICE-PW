import { Locator, Page } from "@playwright/test";

export class ArticlePage {
  page: Page;
  tagsBarLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tagsBarLocator = this.page.locator('//ul[@data-qa-id="article-tags"]');
  }
}
