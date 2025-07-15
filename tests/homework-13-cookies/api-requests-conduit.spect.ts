import test, { APIResponse } from "@playwright/test";

test("get article - should return articles list", async ({ request }) => {
  const response: APIResponse = await request.get(
    "https://conduit-api.learnwebdriverio.com/api/articles?offset=0&limit=10"
  );

  const responseJson = await response.json();

  console.log(responseJson);
});
