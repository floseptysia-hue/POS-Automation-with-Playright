import { defineConfig } from "@playwright/test";

export default defineConfig({

  testDir: "./src",

  timeout: 60000,

  retries: 1,

  reporter: [
    ["html"],
    ["list"]
  ],

  use: {

    headless: false,

    screenshot: "on",

    video: "on",

    trace: "on"

  }

});