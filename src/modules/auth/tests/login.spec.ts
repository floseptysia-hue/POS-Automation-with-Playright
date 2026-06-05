import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { company } from "../../../core/company";
import { authData } from "../test-data/auth.data";

test("Login Success", async ({ page }) => {
  test.skip(
    !company.features.login,
    "Verification feature disabled"
  );

  const loginPage = new LoginPage(page);

  await loginPage.open(
    company.baseUrl
  );

  await loginPage.login(
    authData.validUser.username,
    authData.validUser.password
  );
});