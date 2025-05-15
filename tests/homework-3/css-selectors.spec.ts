import { test, expect } from '@playwright/test';

test.describe('tests set for auth page', ()=>{
  test('DL-T1 registeration', { tag: ["@regression", "@smoke"] }, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    await page.locator('[placeholder="Username"]').fill('shmester');
    await page.locator('[placeholder="Email"]').pressSequentially('geiprouttatoixu-8459@yopmail.com', { delay: 100});
    await page.locator('[placeholder="Password"]').fill('qwerty');
    await page.locator(".btn-primary").click();
    await expect(page.locator('[href="/@shmester/"][class="nav-link"]')).toContainText('shmester');
  }) 
  test('DL-T2 login', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('[placeholder="Email"].form-control').pressSequentially('geiprouttatoixu-8459@yopmail.com', { delay: 100});
    await page.locator('[placeholder="Password"].form-control').fill('qwerty');
    await page.locator(".btn-primary").click();
    await expect(page.locator('[href="/@shmester/"][class="nav-link"]')).toContainText('shmester');
  })
  test('DL-T3 login with incorrect credentials', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('[placeholder="Email"]').pressSequentially('geiprouttatoixu-8459@yopmail.com', { delay: 100});
    await page.locator('[placeholder="Password"]').fill('qwertys');
    await page.locator(".btn-primary").click();
    await expect(page.locator('[class="error-messages"] li')).toContainText('email or password is invalid');
  })
  test('DL-T4 Register with existed user', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/register');
    await page.locator('[placeholder="Username"][class*="control"]').fill('shmester');
    await page.locator('[placeholder="Email"][class~="form-control"]').pressSequentially('geiprouttatoixu-8459@yopmail.com', { delay: 100});
    await page.locator('[placeholder="Password"][class^="form"]').fill('qwerty');
    await page.locator('[class*="primary"]').click();
    await expect(page.locator('[class="error-messages"] li:nth-child(1)')).toContainText('username is already taken.');
    await expect(page.locator('[class="error-messages"] li:nth-child(2)')).toContainText('email is already taken.');
  })
  test('DL-T4 redirects with "Have an account?" and "Need an account?" links ', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('[class="text-xs-center"] [href="/register"]').click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/register');
    await page.locator('[class="text-xs-center"] [href="/login"]').click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  })
})