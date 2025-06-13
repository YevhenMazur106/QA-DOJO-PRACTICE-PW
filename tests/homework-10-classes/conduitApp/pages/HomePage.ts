import { Locator, Page } from "@playwright/test";

export class HomePage {
  page: Page;
  globalFeedTabLocator: Locator;
  yourFeedTabLocator: Locator;
  demoTagLocator: Locator;
  articleLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalFeedTabLocator = this.page.locator(
      '//a[contains(text(),"Global Feed")]'
    );
    this.yourFeedTabLocator = this.page.locator(
      '//a[contains(text(),"Your Feed")]'
    );
    this.demoTagLocator = this.page.locator('//a[@href="/tag/demo"]');
    this.articleLocator = this.page.locator(
      '//h1[@data-qa-type="preview-title"]'
    );
  }
  async openYourFeedTab() {
    await this.yourFeedTabLocator.click();
  }

  async openGlobalFeedTab() {
    await this.globalFeedTabLocator.click();
  }

  async filterArticlesByDemoTag() {
    await this.demoTagLocator.click();
  }

  async selectArticle() {
    await this.articleLocator.nth(0).click();
  }
}
