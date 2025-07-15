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

  async editArticle(articleData: Article, token: string) {
    const ArticleEdition = {
      article: articleData,
    };
    const response = await this.request.put(
      "https://conduit-api.learnwebdriverio.com/api/articles/123-zdm2go",
      {
        data: ArticleEdition,
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    return response;
  }
  async deleteArticle(slug: string, token: string) {
    const response = await this.request.delete(
      `https://conduit-api.learnwebdriverio.com/api/articles/${slug}`,
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    return response;
  }
}
