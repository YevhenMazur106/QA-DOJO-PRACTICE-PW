import { test as base, expect } from "@playwright/test";
import fs from "fs";
import { RegisterPage } from "./conduitApp/pages/RegisterPage";
import { createRegistrationData } from "./conduitApp/user-data";

type Fixtures = {};

export const shmest = base.extend({
  storageState: async ({ browser }, use) => {
    const storageStatePath = ".auth/storage-state.json";

    if (!fs.existsSync(storageStatePath)) {
      const page = await browser.newPage();
      const registerPage = new RegisterPage(page);
      const userRegistrationData = createRegistrationData;
      await page.goto("https://demo.learnwebdriverio.com/register");
      await registerPage.registerUser(
        userRegistrationData.user,
        userRegistrationData.email,
        userRegistrationData.password
      );
      await expect(await page.locator('[data-qa-id="site-nav"]')).toContainText(
        userRegistrationData.user.toLowerCase()
      );
      await page.context().storageState({
        path: storageStatePath as string,
      });
      await browser.close();
    }
    await use(storageStatePath);
  },
});
export { base };
