import { APIRequestContext, expect } from "@playwright/test";
import { Article } from "./ArticleTypes";

export class ArticleController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createArticle(articleData: Article, token: string) {
    const ArticleCreation = {
      article: articleData,
    };
    const response = await this.request.post(
      "https://conduit-api.learnwebdriverio.com/api/articles",
      {
        data: ArticleCreation,
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    await expect(response).toBeOK();

    return response;
  }
}
