import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class Footer extends BasePage {
  private twitterLinkLocator: Locator;
  private facebookLinkLocator: Locator;
  private linkedinLinkLocator: Locator;

  constructor(page: Page) {
    super(page);
  }

  async clickOnTwitter() {}
  async clickOnFacebook() {}
  async clickOnLinkedin() {}
}
