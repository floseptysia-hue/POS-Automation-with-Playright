import { Page } from "@playwright/test";

export class DashboardPage {
  constructor(
    private page: Page
  ) { }

  async getActiveOutletCount(): Promise<number> {
    const value = await this.page
      .locator('[data-sentry-element="NumberFormat"]')
      .nth(1)
      .textContent();

    return Number(
      value?.replace(/\./g, "")
    );
  }
}