import { test, expect } from '@playwright/test';

test.describe('set of xPath locators', ()=>{
  test.beforeEach(async ({ page }) => {
    await page.route('**/*', (route) => {
    const url = route.request().url();
    if (
     url.includes('ads')
     ) {
    return route.abort(); 
     }
    return route.continue(); 
  });        
    await page.goto('https://demoqa.com/text-box');
  });

  test('XP-1 text box', { tag: ["@regression", "@smoke"] }, async({ page }) => {
    await page.locator('//input[@id="userName"]').fill('Tester');
    await page.locator('//input[@id="userEmail"]').fill('Tester@gmail.com');
    await page.locator('//textarea[@id="currentAddress"]').fill('Tester');
    await page.locator('//textarea[@id="permanentAddress"]').fill('Tester');
    await page.locator('//button[@id="submit"]').click();
    await expect(page.locator('//div[@id="output"]')).toBeVisible();
  });

  test('XP-2 check box', { tag: ["@regression", "@smoke"]}, async({ page }) => {
    await page.locator('//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Check Box")]').click();
    await page.locator('//button[@title="Expand all"]').click();
    await page.locator('//button[@title="Collapse all"]').click();
    await page.locator('//button[@title="Expand all"]').click();
    await page.locator('//span[text()="Commands"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]').check();
    await page.locator('//span[text()="React"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]').check();
    await page.locator('//span[text()="Public"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]').check();
    await page.locator('//span[text()="Excel File.doc"]/ancestor::span[@class="rct-text"]//span[@class="rct-checkbox"]').check();
    await expect(page.locator('//div[@id="result"]')).toBeVisible();
  });

  test('XP-3 radio buttons', { tag: ["@regression", "@smoke"]}, async ({ page }) => {
    await page.locator('//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Radio Button")]').click();
    await page.locator('//input[@id="yesRadio"]/parent::div').click();
    await expect(page.locator('//span[@class="text-success"]/parent::p[contains(text(),"You have selected")]')).toContainText('Yes');
    await page.locator('//input[@id="impressiveRadio"]/parent::div').click();
    await expect(page.locator('//span[@class="text-success"]/parent::p[contains(text(),"You have selected")]')).toContainText('Impressive');
    await expect(page.locator('//input[@id="noRadio"]')).toBeDisabled();
  })

  test('XP-4 buttons', { tag: "@smoke" }, async({ page }) =>{
    await page.locator('//li[@id="item-1"]/parent::ul[@class="menu-list"]//span[contains(text(), "Buttons")]').click();
    await page.locator('//button[@id="doubleClickBtn"]').dblclick();
    await expect(page.locator('//p[@id="doubleClickMessage"]')).toContainText('You have done a double click');
    // await page.locator('//button[@id="MKn30"]').click();
    // await expect(page.locator('//p[@id="dynamicClickMessage"]')).toContainText('You have done a dynamic click');
  })

})