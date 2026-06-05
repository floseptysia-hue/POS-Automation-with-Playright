import { Page } from "@playwright/test";

export class VerificationPage {

  constructor(
    private page: Page
  ) {}

  async openVerificationMenu(
    module: string
  ) {

    await this.page
      .locator("a")
      .filter({
        hasText: new RegExp(`^${module}$`)
      })
      .click();

  }
  async clickDetail() {

    await this.page
      .getByRole("link", {
        name: "Lihat Detail"
      })
      .first()
      .click();

  }

  async approve() {
    await this.page.waitForTimeout(3000);
    await this.page
      .getByRole("button", {
        name: "Setujui"
      })
      .click();

  }

  async reject() {
    await this.page
      .getByRole("button", {
        name: "Tolak"
      })
      .click();
  }

  async inputRejectReason(
    reason: string
  ) {

    await this.page
      .getByPlaceholder(
        "Tulis alasan penolakan di sini"
      )
      .fill(reason);

  }

  async submitReject() {
    await this.page
      .getByRole("button", {
        name: "Kirim"
      })
      .click();
  }
}