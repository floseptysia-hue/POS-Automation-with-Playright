import { test } from "@playwright/test";
import { LoginPage } from "../../auth/pages/LoginPage";
import { VerificationPage } from "../pages/Verification";
import { company } from "../../../core/company";
import { authData } from "../../auth/test-data/auth.data";

test(
  "Reject Verification Register",
  async ({ page }) => {
    test.skip(
      !company.features.verification,
      "Verification feature disabled"
    );

    const loginPage =
      new LoginPage(page);

    await loginPage.open(
      company.baseUrl
    );

    await loginPage.login(
      authData.validUser.username,
      authData.validUser.password
    );

    const verificationPage = new VerificationPage(page);

    await verificationPage.openVerificationMenu("Verifikasi");

    await verificationPage.clickDetail();

    await verificationPage.reject();

    await verificationPage.inputRejectReason(
      "Data merchant tidak sesuai"
    );

    await verificationPage.submitReject();

  }
);