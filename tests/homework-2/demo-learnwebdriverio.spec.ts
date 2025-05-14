import { test, expect } from '@playwright/test';

test.describe('tests set for auth page', ()=>{
  test('DL-T1 registeration', { tag: ["@regression", "@smoke"] }, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    await page.locator('//input[@placeholder="Username"]').fill('Zheka4');
    await page.locator('//input[@placeholder="Email"]').pressSequentially('xixubrubruma-2272@yopmail.com', { delay: 100});
    await page.locator('//input[@placeholder="Password"]').fill('qwerty');
    await page.locator("//button[contains(text(),'Sign up')]").click();
    await expect(page.getByRole('link', { name: 'zheka4' })).toContainText('zheka4');
  }) 
  test('DL-T2 login', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('//input[@placeholder="Email"]').pressSequentially('xixubrubruma-2272@yopmail.com', { delay: 100});
    await page.locator('//input[@placeholder="Password"]').fill('qwerty');
    await page.locator("//button[contains(text(),'Sign in')]").click();
    await expect(page.getByRole('link', { name: 'zheka4' })).toContainText('zheka4');
  })
  test('DL-T3 login with incorrect credentials', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('//input[@placeholder="Email"]').pressSequentially('xixubrubruma-2272@yopmail.com', { delay: 100});
    await page.locator('//input[@placeholder="Password"]').fill('qwertys');
    await page.locator("//button[contains(text(),'Sign in')]").click();
    await expect(page.locator('//ul[@class="error-messages"]/li')).toContainText('email or password is invalid');
  })
  test('DL-T4 Register with existed user', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    await page.locator('//input[@placeholder="Username"]').fill('Zheka4');
    await page.locator('//input[@placeholder="Email"]').pressSequentially('xixubrubruma-2272@yopmail.com', { delay: 100});
    await page.locator('//input[@placeholder="Password"]').fill('qwerty');
    await page.locator("//button[contains(text(),'Sign up')]").click();
    await expect(page.locator('//ul[@class="error-messages"]/li[1]')).toContainText('username is already taken.');
    await expect(page.locator('//ul[@class="error-messages"]/li[2]')).toContainText('email is already taken.');
  })
  test('DL-T4 redirects with "Have an account?" and "Need an account?" links ', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.getByRole('link', { name: 'Need an account?' }).click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/register');
    await page.getByRole('link', { name: 'Have an account?' }).click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  })
})