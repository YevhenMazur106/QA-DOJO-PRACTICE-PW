import { test as base, chromium, expect } from "@playwright/test";
import fs from "fs";
import { RegisterPage } from "./conduitApp/pages/RegisterPage";
import { createRegistrationData } from "./conduitApp/user-data";

export const test = base.extend({
  storageState: async ({ browser }, use) => {
    const storageStatePath = ".auth/storage-state.json";

    const isExist = fs.existsSync(storageStatePath);

    if (!isExist) {
      const page = await browser.newPage();
      const userData = createRegistrationData;
      const registerPage = new RegisterPage(page);
      await page.goto("https://demo.learnwebdriverio.com/register");
      await registerPage.registerUser(
        userData.user,
        userData.email,
        userData.password
      );
      await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
        userData.user
      );

      await page.context().storageState({ path: storageStatePath as string });

      await page.close();
    }

    await use(storageStatePath);
  },
});

// import { test as base, chromium, expect } from "@playwright/test";
// import fs from "fs";
// import { createRandomUserData } from "../../globalSetup";
// import { RegistrationPage } from "../../apps/condulitApp/pages/RegisterPage";

// export const test = base.extend({
//   storageState: async ({ browser }, use) => {
//     const storageStatePath = ".auth/storage-state.json";

//     const isExist = fs.existsSync(storageStatePath);

//     if (!isExist) {
//       const page = await browser.newPage();
//       const userData = createRandomUserData();
//       const registerPage = new RegistrationPage(page);
//       await page.goto("https://demo.learnwebdriverio.com/register");
//       await registerPage.registerUser(userData);
//       await expect(page.locator('[data-qa-id="site-nav"]')).toContainText(
//         userData.username
//       );

//       await page.context().storageState({ path: storageStatePath as string });

//       await page.close();
//     }

//     await use(storageStatePath);
//   },
// });
