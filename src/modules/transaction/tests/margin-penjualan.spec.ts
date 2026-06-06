import { test, expect } from "@playwright/test";
import { LoginPage } from "../../auth/pages/LoginPage";
import { authData } from "../../auth/test-data/auth.data";
import { TransaksiPenjualan } from "../pages/TransaksiPenjualan";
import { company } from "../../../core/company";
import { FinancialCalculator } from "../../../core/helpers/FinancialCalculator";
import { ExcelReport, MarginReportRow } from "../../../core/helpers/ExcelReport";

test("Verify Sales Margin Calculation",
  async ({ page }) => {
    test.skip(
      !company.features.transaction,
      "Transaction feature disabled"
    );

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.open(company.baseUrl);
    await loginPage.login(
      authData.validUser.username,
      authData.validUser.password
    );

    // Open transactio page
    const salesPage = new TransaksiPenjualan(page);
    await salesPage.openTransactionMenu("Transaksi");
    // Open Sales Page
    await salesPage.open();

    const rowCount = await salesPage.getRowsCount();
    expect(rowCount).toBeGreaterThan(0);
    const reportRows: MarginReportRow[] = [];
    console.log("Total Rows:", rowCount);

    for (let i = 0; i <= 5; i++) {
      const nominal = await salesPage.getNominal(i);
      const transactionDate = await salesPage.getTransactionDate(i);
      const paymentMethode = await salesPage.getPaymentMethode(i);
      const actualMargin = await salesPage.getMargin(i);
      let expectedMargin = 0;

      if (paymentMethode.toLowerCase() === "qris") {
        expectedMargin = FinancialCalculator.calculateMargin(
          nominal,
          company.fees.networkFeePercent,
          company.fees.paymentFeePercent,
          company.fees.serviceFee
        );
      }
      const isPassed = actualMargin === expectedMargin;
      console.log(`
        =================================================
        Date        : ${transactionDate}
        Method      : ${paymentMethode}
        Nominal     : ${nominal}
        UI Margin   : ${actualMargin}
        Expected    : ${expectedMargin}
        Status      : ${isPassed ? "PASS ✅" : "FAIL ❌"}
        =================================================
      `);
      
      // process to excell
      reportRows.push({
        date: transactionDate,
        method: paymentMethode,
        nominal,
        uiMargin: actualMargin,
        expectedMargin,
        status: isPassed
          ? "PASS"
          : "FAIL"
      });

      expect.soft(
        actualMargin,
        `Margin mismatch on ${transactionDate}`
      ).toBe(
        expectedMargin
      );
    }

    ExcelReport.generate(
      reportRows,
      "margin-penjualan",
      "Margin Penjualan"
    );
  }
);