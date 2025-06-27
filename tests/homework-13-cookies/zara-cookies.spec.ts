import test from "@playwright/test";

//CRUD create, read, update, delete
test("get cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  const cookies = await context.cookies();

  //   cookies[0].value // стукаємось в конкретну куку

  //   for (const coolie of cookies) // перебераєм кукі циклом

  console.log(cookies);
});

test("add cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  await context.addCookies([
    {
      name: "ak_shmookie",
      value: "homework cookies",
      domain: ".zara.com",
      path: "/",
      expires: 1751014713.04418,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);
  const cookies = await context.cookies();
  console.log(cookies);
});

test("clear cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  await context.addCookies([
    {
      name: "ak_shmookie",
      value: "homework cookies",
      domain: ".zara.com",
      path: "/",
      expires: 1751014713.04418,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);
  let cookies = await context.cookies();
  console.log(cookies);

  await context.clearCookies({ name: "ak_shmookie" });
  cookies = await context.cookies();
  console.log(cookies);
});

test("edit  cookies", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/", { waitUntil: "commit" });

  await context.addCookies([
    {
      name: "ak_shmookie",
      value: "homework cookies",
      domain: ".zara.com",
      path: "/",
      expires: 1751014713.04418,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ]);
  let cookies = await context.cookies();
  const cookie = cookies.find((value) => value.name === "ak_shmookie");
  cookie!.value = "NEW homework cookies shmookies";
  await context.clearCookies({ name: "ak_shmookie" });
  await context.addCookies([cookie!]);

  cookies = await context.cookies();
  console.log(cookies);
});
