import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

test('PW-Test1 Pagination', async ({ page }) => {
  await page.getByRole('link', { name: 'API' }).click();
  await page.getByRole('link', { name: 'Previous « Playwright Test' }).click();
  await expect(page.locator('h1')).toContainText('Playwright Test');
});
test('PW-Test2 "Get started" button ', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
});
test('PW-Test3 Redirect from side menu', async ({ page }) => {  
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'Migration' }).click();
  await page.getByRole('link', { name: 'Migrating from Puppeteer' }).click();
  await expect(page.locator('h1')).toContainText('Migrating from Puppeteer');
});
test('PW-Test4 Search', async ({ page }) => { 
  await page.getByRole('button', { name: 'Search (Command+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Assertions');
  await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue('Assertions');
  await page.getByRole('link', { name: 'Assertions', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Assertions');
});
test('PW-Test1 Redirect to homepage using logo', async ({ page }) => {   
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});