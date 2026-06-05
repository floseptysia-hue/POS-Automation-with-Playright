import { test, expect } from "@playwright/test";

import { LoginPage } from "../../auth/pages/LoginPage";
import { VerificationPage } from "../pages/Verification";
import { DashboardPage } from "../../dashboard/pages/DashboardPage";

import { company } from "../../../core/company";
import { authData } from "../../auth/test-data/auth.data";

test(
  "Approve Verification Register",
  async ({ page }) => {

    test.skip(
      !company.features.verification,
      "Verification feature disabled"
    );

    const loginPage = new LoginPage(page);

    await loginPage.open(company.baseUrl);

    await loginPage.login(
      authData.validUser.username,
      authData.validUser.password
    );

    const dashboardPage = new DashboardPage(page);

    const activeBefore = await dashboardPage.getActiveOutletCount();

    const verificationPage = new VerificationPage(page);

    await verificationPage.openVerificationMenu("Verifikasi");

    await verificationPage.clickDetail();

    await verificationPage.approve();

    await page.waitForLoadState("networkidle");

    await verificationPage.openVerificationMenu("Beranda");

    await page.reload();
  
    await page.waitForLoadState(
      "networkidle"
    );
    const activeAfter = await dashboardPage.getActiveOutletCount();

    expect(activeAfter).toBe(activeBefore + 1);
  }
);