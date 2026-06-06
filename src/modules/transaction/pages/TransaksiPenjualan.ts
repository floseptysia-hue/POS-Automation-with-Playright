import { Page } from "@playwright/test";

export class TransaksiPenjualan {

  constructor(
    private page: Page
  ) {}

  async openTransactionMenu(module: string) {
    await this.page
      .locator("a")
      .filter({
        hasText: new RegExp(`^${module}$`)
      })
      .click();

  }

  async open() {
    await this.page.click(
      "text=Penjualan"
    );
  }

  async getRowsCount() {
    return await this.page
      .locator("tbody tr")
      .count();
  }

  async getTransactionDate(rowIndex: number): Promise<string> {
    return await this.page
      .locator("tbody tr")
      .nth(rowIndex)
      .locator("td")
      .nth(0)
      .innerText();
  }

  async getPaymentMethode(rowIndex: number): Promise<string> {
    return await this.page
      .locator("tbody tr")
      .nth(rowIndex)
      .locator("td")
      .nth(7)
      .innerText();
  }

  async getNominal(rowIndex: number): Promise<number> {
    const text = await this.page
        .locator("tbody tr")
        .nth(rowIndex)
        .locator("td")
        .nth(8)
        .innerText();

    return Number(
      text
        .replace("Rp", "")
        .replace(/\./g, "")
        .trim()
    );
  }

  async getMargin(rowIndex: number): Promise<number> {
    const text = await this.page
        .locator("tbody tr")
        .nth(rowIndex)
        .locator("td")
        .nth(9)
        .innerText();

    return Number(
      text
        .replace("Rp", "")
        .replace(/\./g, "")
        .trim()
    );
  }
}