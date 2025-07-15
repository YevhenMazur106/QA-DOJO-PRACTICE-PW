import test, { APIResponse, expect } from "@playwright/test";
import fs from "fs";
import { UserController } from "../../../apps/conduitApp/api/users/UserController";
import { ArticleController } from "../../../apps/conduitApp/api/articles/ArticleController";
import {
  Article,
  ArticleResponse,
} from "../../../apps/conduitApp/api/articles/ArticleTypes";
import { UserResponse } from "../../../apps/conduitApp/api/users/UserTypes";
import { request } from "http";

// згенерований копайлотом

test("get article - should return articles list", async ({ request }) => {
  // Arrange Act Assert(AAA) патерн для АПІ тестів

  // http ріквест
  const response: APIResponse = await request.get(
    "https://conduit-api.learnwebdriverio.com/api/articles?offset=0&limit=10"
  );
  // отримання json з респонсу
  const responseJson: ArticleResponse = await response.json();
  const responseText = await response.text();
  const responseBuffer = await response.body();
  // вбудовані методи масивів
  const dojoArticles = responseJson.articles.filter((value) =>
    value.tagList!.includes("dojo")
  );
  // проста перевірка
  expect(dojoArticles.length).toBeGreaterThan(1);
});

test("create user - user should be created", async ({ request }) => {
  const userController = new UserController(request);
  const requestBody = {
    email: "waw@gmail.com",
    password: "Password",
    username: "waw",
  };
  //Act
  const response = await userController.createUser(requestBody);

  //Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});

test("login as existed user - should get token", async ({ request }) => {
  //Arrange

  //Act
  const userController = new UserController(request);
  const requestBody = {
    email: "waw@gmail.com",
    password: "Password",
  };
  //Act
  const response = await userController.login(requestBody);
  //Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});

test("login as existed user - should be logged", async ({ request }) => {
  //Arrange

  //Act
  const userController = new UserController(request);
  const requestBody = {
    email: "waw@gmail.com",
    password: "Password",
  };
  //Act
  const response = await userController.login(requestBody);
  const state = await request.storageState();

  fs.writeFileSync(".auth/logged-user.json", JSON.stringify(state));

  //Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});

test("create article - should be created", async ({ request }) => {
  //Arrange
  const userController = new UserController(request);
  const articleController = new ArticleController(request);
  const loginResponse = await userController.login({
    email: "waw@gmail.com",
    password: "Password",
  });
  const token = await userController.getTokenFromResponse(loginResponse);

  const requestBody: Article = {
    title: "123",
    description: "qaz",
    body: "DAF",
    tagList: ["dojo"],
  };

  //Act
  const articleResponse = await articleController.createArticle(
    requestBody,
    token!
  );
  await expect(articleResponse).toBeOK();
});

test("edit article - article should be edited", async ({ request }) => {
  const userController = new UserController(request);
  const articleController = new ArticleController(request);
  const loginResponse = await userController.login({
    email: "waw@gmail.com",
    password: "Password",
  });
  const token = await userController.getTokenFromResponse(loginResponse);
  const requestBody: Article = {
    title: "Forman",
    description: "Firman",
    body: "Ford",
    tagList: ["hujojo"],
  };
  const articleResponse = await articleController.editArticle(
    requestBody,
    token!
  );
  await expect(articleResponse).toBeOK();
});

test("delete article - article should be deleted", async ({ request }) => {
  const userController = new UserController(request);
  const articleController = new ArticleController(request);
  const loginResponse = await userController.login({
    email: "waw@gmail.com",
    password: "Password",
  });
  const token = await userController.getTokenFromResponse(loginResponse);
  const articleResponse = await articleController.deleteArticle(
    "fog-z4vsug",
    token!
  );
  await expect(articleResponse).toBeOK;
});
