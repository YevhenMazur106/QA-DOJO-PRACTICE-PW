import { test, expect } from "@playwright/test";

test.describe("set of xPath locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("/ads/", (route) => {
      const url = route.request().url();
      if (url.includes("ads")) {
        return route.abort();
      }
      return route.continue();
    });
    await page.goto("https://demoqa.com/text-box");
  });

  test(
    "XP-1 text box",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      const nameInput = page.locator('//input[@id="userName"]');
      const emailInput = page.locator('//input[@id="userEmail"]');
      const currentAddress = page.locator('//textarea[@id="currentAddress"]');
      const permanentAddress = page.locator(
        '//textarea[@id="permanentAddress"]'
      );
      const submitBtn = page.locator('//button[@id="submit"]');
      const output = page.locator('//div[@id="output"]');

      await nameInput.fill("Tester");
      await emailInput.fill("Tester@gmail.com");
      await currentAddress.fill("Tester");
      await permanentAddress.fill("Tester");
      await submitBtn.click();
      await expect(output).toBeVisible();
    }
  );

  test(
    "XP-2 check box",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      const checkBoxTab = page.locator(
        '//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Check Box")]'
      );
      const plusBtn = page.locator('//button[@title="Expand all"]');
      const minusBtn = page.locator('//button[@title="Collapse all"]');
      const checkBoxCommands = page.locator(
        '//span[text()="Commands"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]'
      );
      const checkBoxReact = page.locator(
        '//span[text()="React"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]'
      );
      const checkBoxPublic = page.locator(
        '//span[text()="Public"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]'
      );
      const checkBoxExcelFile = page.locator(
        '//span[text()="Excel File.doc"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]'
      );
      const resultArea = page.locator('//div[@id="result"]');

      await checkBoxTab.click();
      await plusBtn.click();
      await minusBtn.click();
      await plusBtn.click();
      await checkBoxCommands.check();
      await checkBoxReact.check();
      await checkBoxPublic.check();
      await checkBoxExcelFile.check();
      await expect(resultArea).toBeVisible();
    }
  );

  test(
    "XP-3 radio buttons",
    { tag: ["@regression", "@smoke"] },
    async ({ page }) => {
      const radioButtonTab = page.locator(
        '//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Radio Button")]'
      );
      const yesRadioBnt = page.locator('//input[@id="yesRadio"]/parent::div');
      const resultArea = page.locator(
        '//span[@class="text-success"]/parent::p[contains(text(),"You have selected")]'
      );
      const impressiveRadioBtn = page.locator(
        '//input[@id="impressiveRadio"]/parent::div'
      );
      const noRadioBtn = page.locator('//input[@id="noRadio"]');

      await radioButtonTab.click();
      await yesRadioBnt.click();
      await expect(resultArea).toContainText("Yes");
      await impressiveRadioBtn.click();
      await expect(resultArea).toContainText("Impressive");
      await expect(noRadioBtn).toBeDisabled();
    }
  );

  test("XP-4 buttons", { tag: "@smoke" }, async ({ page }) => {
    const buttonsTab = page.locator(
      '//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Buttons")]'
    );
    const doubleClickBtn = page.locator('//button[@id="doubleClickBtn"]');
    const doubleClickMessage = page.locator('//p[@id="doubleClickMessage"]');
    const clickMeBtn = page.locator(
      '//div[@class="mt-4"]/*[text() = "Click Me"]'
    );
    const dynamicClickMessage = page.locator('//p[@id="dynamicClickMessage"]');

    await buttonsTab.click();
    await doubleClickBtn.dblclick();
    await expect(doubleClickMessage).toContainText(
      "You have done a double click"
    );
    await clickMeBtn.click();
    await expect(dynamicClickMessage).toContainText(
      "You have done a dynamic click"
    );
  });
});
