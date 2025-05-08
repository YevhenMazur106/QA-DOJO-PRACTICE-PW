import { test, expect } from '@playwright/test';

test('CC-Test1 Order coffee', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('');
  await page.getByRole('textbox', { name: 'Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name' }).fill('Zheka');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('qwerty@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('qwerty@gmail.com');
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Zheka');
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('button', { name: 'Thanks for your purchase.' })).toBeVisible();
  await expect(page.locator('#app')).toContainText('cart (0)');
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});

test('CC-Test2 Add extra cup', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Cappuccino"]').click();
    await page.locator('[data-test="Cappuccino"]').click();
    await page.locator('[data-test="Cappuccino"]').click();
    await page.getByRole('button', { name: 'Yes, of course!' }).click();
    await expect(page.getByRole('listitem').filter({ hasText: 'cart (4)' })).toBeVisible();
    await expect(page.locator('#app')).toContainText('cart (4)');
  });

test('CC-Test3 Skip extra cup', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Mocha"]').click();
    await page.locator('[data-test="Mocha"]').click();
    await page.locator('[data-test="Mocha"]').click();
    await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
    await expect(page.getByRole('listitem').filter({ hasText: 'cart (3)' })).toBeVisible();
  });

test('CC-Test4 Clear cart', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Mocha"]').click();
    await page.getByRole('link', { name: 'Cart page' }).click();
    await page.getByRole('button', { name: 'Remove all Mocha' }).click();
    await expect(page.getByText('No coffee, go add some.')).toBeVisible();
  }); 

test('CC-Test5 Add second coffee with "Add one" button', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Americano"]').click();
    await page.getByText('Total').hover();
    await page.getByRole('button', { name: 'Add one Americano' }).click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $14.00');
    await expect(page.getByRole('listitem').filter({ hasText: 'cart (2)' })).toBeVisible();
  });  

test('CC-Test6 Remove coffee with "Remove one" button', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Cafe_Latte"]').click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $16.00');
    await page.locator('[data-test="checkout"]').hover();
    await page.getByRole('button', { name: 'Remove one Cafe Latte' }).click();
    await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
    await expect(page.locator('#app')).toContainText('cart (0)');
  });



