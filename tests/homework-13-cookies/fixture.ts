import { test as base } from "@playwright/test";

type Fixtures = {};

export const test = base.extend({
  storageState: async ({ storageState }, use) => {
    await use(".auth/storage-state.json");
  },
});
export { base };
