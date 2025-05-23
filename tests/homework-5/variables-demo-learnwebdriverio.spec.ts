import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

test.describe('tests set for auth page', ()=>{
  const fakeEmail = faker.internet.email();
  const registerPage = 'https://demo.learnwebdriverio.com/register'
  const loginPage = 'https://demo.learnwebdriverio.com/login'
  const usernameInput = '//input[@placeholder="Username"]'
  const emailInput = '//input[@placeholder="Email"]'
  const passwordInput = '//input[@placeholder="Password"]'
  const signUpBtn = "//button[contains(text(),'Sign up')]"
  const signInBtn = "//button[contains(text(),'Sign in')]"
  const errorMessage = '//ul[@class="error-messages"]/li'
  const errorMessage1SignUp = '//ul[@class="error-messages"]/li[1]'
  const errorMessage2SignUp = '//ul[@class="error-messages"]/li[2]'
  const profileName = '//ul[@data-qa-id="site-nav"]/li[4]'


  test('DL-T1 registeration', { tag: ["@regression", "@smoke"] }, async({page}) => {
    await page.goto(registerPage)
    await page.locator(usernameInput).fill('fakeusername2');
    await page.locator(emailInput).pressSequentially(fakeEmail, { delay: 100});
    await page.locator(passwordInput).fill('qwerty');
    await page.locator(signUpBtn).click();
    await expect(page.locator(profileName)).toContainText('fakeusername2');
  }) 

  test('DL-T2 login', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto(loginPage)
    await page.locator(emailInput).pressSequentially('fellolenitri-3812@yopmail.com', { delay: 100});
    await page.locator(passwordInput).fill('qwerty');
    await page.locator(signInBtn).click();
    await expect(page.locator(profileName)).toContainText('zheka8');
  })

  test('DL-T3 login with incorrect credentials', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto(loginPage)
    await page.locator(emailInput).pressSequentially('fellolenitri-3812@yopmail.com', { delay: 100});
    await page.locator(passwordInput).fill('qwertys');
    await page.locator(signInBtn).click();
    await expect(page.locator(errorMessage)).toContainText('email or password is invalid');
  })

  test('DL-T4 Register with existed user', { tag: ["@regression", "@smoke"]}, async({page}) => {
    await page.goto(registerPage)
    await page.locator(usernameInput).fill('Zheka8');
    await page.locator(emailInput).pressSequentially('fellolenitri-3812@yopmail.com', { delay: 100});
    await page.locator(passwordInput).fill('qwerty');
    await page.locator(signUpBtn).click();
    await expect(page.locator(errorMessage1SignUp)).toContainText('username is already taken.');
    await expect(page.locator(errorMessage2SignUp)).toContainText('email is already taken.');
  })
  
  test('DL-T4 redirects with "Have an account?" and "Need an account?" links ', { tag: ["@regression", "@smoke"]}, async({page}) => {
    const registerPageLink = page.getByRole('link', { name: 'Need an account?' })
    const loginPageLink = page.getByRole('link', { name: 'Have an account?' })

    await page.goto(registerPage)
    await loginPageLink.click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
    await registerPageLink.click();
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/register');
  })
})