import { test as base } from "@playwright/test";
import { ArticlePage } from "../conduit/conduitApp/pages/ArticlePage";
import { HomePage } from "./conduitApp/pages/HomePage";
import { LoginPage } from "./conduitApp/pages/LogInPage";
import { RegisterPage } from "./conduitApp/pages/RegisterPage";

type Pages = {
  articlePage: ArticlePage;
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
};

export const test = base.extend<Pages>({
  articlePage: async ({ page }, use) => {
    const articlePage = new ArticlePage(page);

    await use(articlePage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);

    await use(registerPage);
  },
});
export { base };
