import { test, expect } from '@playwright/test';

test.describe('set of xPath locators', ()=>{
  test.beforeEach(async ({ page }) => {       
    await page.goto(redirectionLink);
  });
  const redirectionLink = 'https://coffee-cart.app/';
  const capuchinoCup = '[data-test="Cappuccino"]';
  const espressoCup = '[data-test="Espresso"]';
  const checkout = '[data-test="checkout"]';
  const cart = '#app';
  const mochaCup = '[data-test="Mocha"]';
  const latteCup = '[data-test="Cafe_Latte"]';
  const americanoCup = '[data-test="Americano"]';
  

    test('CC-Test1 Order coffee', { tag: "@smoke" }, async ({ page }) => {
      const nameInput = page.getByRole('textbox', { name: 'Name' })
      const emailInput = page.getByRole('textbox', { name: 'Email' })
      const promoCheckbox = page.getByRole('checkbox', { name: 'Promotion checkbox' })
      const submitBtn = page.getByRole('button', { name: 'Submit' })
      const resultBtn = page.getByRole('button', { name: 'Thanks for your purchase.' })
      
      await page.locator(espressoCup).click();
      await page.locator(checkout).click();
      await nameInput.fill('Zheka');
      await emailInput.fill('qwerty@gmail.com');
      await expect(emailInput).toHaveValue('qwerty@gmail.com');
      await expect(nameInput).toHaveValue('Zheka');
      await promoCheckbox.check();
      await submitBtn.click();
      await expect(resultBtn).toBeVisible();
      await expect(page.locator(cart)).toContainText('cart (0)');
      await expect(page.locator(checkout)).toContainText('Total: $0.00');
    });

    test('CC-Test2 Add extra cup', { tag: "@smoke" }, async ({ page }) => {
      const yesOfCourseBnt= page.getByRole('button', { name: 'Yes, of course!' });
      const cartListItem = page.getByRole('listitem');

      await page.locator(capuchinoCup).click();
      await page.locator(capuchinoCup).click();
      await page.locator(capuchinoCup).click();
      await yesOfCourseBnt.click();
      await expect(cartListItem.filter({ hasText: 'cart (4)' })).toBeVisible();
      await expect(page.locator(cart)).toContainText('cart (4)');
      });

    test('CC-Test3 Skip extra cup', { tag: "@smoke" }, async ({ page }) => {
      const skipPromoBtn = page.getByRole('button', { name: 'Nah, I\'ll skip.' })
      const cartListItem = page.getByRole('listitem');

      await page.locator(mochaCup).click();
      await page.locator(mochaCup).click();
      await page.locator(mochaCup).click();
      await skipPromoBtn.click();
      await expect(cartListItem.filter({ hasText: 'cart (3)' })).toBeVisible();
      });

    test('CC-Test4 Clear cart', { tag: "@smoke" }, async ({ page }) => {
      const cartPageLink = page.getByRole('link', { name: 'Cart page' })
      const removeAllMochaBtn = page.getByRole('button', { name: 'Remove all Mocha' })
      const noCoffeeBtn = page.getByText('No coffee, go add some.')
      
      await page.locator(mochaCup).click();
      await cartPageLink.click();
      await removeAllMochaBtn.click();
      await expect(noCoffeeBtn).toBeVisible();
      }); 

    test('CC-Test5 Add coffee with "Add one" button', { tag: "@smoke" }, async ({ page }) => {
      const cartListItem = page.getByRole('listitem');
      const totalAmountArea = page.getByText('Total')
      const addOneAmericanoBtn = page.getByRole('button', { name: 'Add one Americano' })

      await page.locator(americanoCup).click();
      await totalAmountArea.hover();
      await addOneAmericanoBtn.click();
      await expect(page.locator(checkout)).toContainText('Total: $14.00');
      await expect(cartListItem.filter({ hasText: 'cart (2)' })).toBeVisible();
      });  

    test('CC-Test6 Remove coffee with "Remove one" button', { tag: "@smoke" }, async ({ page }) => {
      const removeOneAmericanoBtn = page.getByRole('button', { name: 'Remove one Cafe Latte' })

      await page.locator(latteCup).click();
      await expect(page.locator(checkout)).toContainText('Total: $16.00');
      await page.locator(checkout).hover();
      await removeOneAmericanoBtn.click();
      await expect(page.locator(checkout)).toContainText('Total: $0.00');
      await expect(page.locator(cart)).toContainText('cart (0)');
      });
});
