import { chromium, expect, FullConfig } from "@playwright/test";
import { RegisterPage } from "./tests/homework-13-cookies/conduitApp/pages/RegisterPage";
import { createRegistrationData } from "./tests/homework-13-cookies/conduitApp/user-data";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
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
    path: ".auth/storage-state.json" as string,
  });
  await browser.close();
}
export default globalSetup;
