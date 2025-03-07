import { defineConfig } from "cypress";
import fs from "fs";

const envConfig = JSON.parse(fs.readFileSync("cypress.env.json", "utf-8"));

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: envConfig.baseApiUrl
  },
});
