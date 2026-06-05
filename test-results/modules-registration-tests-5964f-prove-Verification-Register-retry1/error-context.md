# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/registration/tests/approve-register.spec.ts >> Approve Verification Register
- Location: src/modules/registration/tests/approve-register.spec.ts:10:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Lihat Detail' }).first()

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class VerificationPage {
  4  | 
  5  |   constructor(
  6  |     private page: Page
  7  |   ) {}
  8  | 
  9  |   async openVerificationMenu(
  10 |     module: string
  11 |   ) {
  12 | 
  13 |     await this.page
  14 |       .locator("a")
  15 |       .filter({
  16 |         hasText: new RegExp(`^${module}$`)
  17 |       })
  18 |       .click();
  19 | 
  20 |   }
  21 |   async clickDetail() {
  22 | 
  23 |     await this.page
  24 |       .getByRole("link", {
  25 |         name: "Lihat Detail"
  26 |       })
  27 |       .first()
> 28 |       .click();
     |        ^ Error: locator.click: Test ended.
  29 | 
  30 |   }
  31 | 
  32 |   async approve() {
  33 |     await this.page.waitForTimeout(3000);
  34 |     await this.page
  35 |       .getByRole("button", {
  36 |         name: "Setujui"
  37 |       })
  38 |       .click();
  39 | 
  40 |   }
  41 | 
  42 |   async reject() {
  43 |     await this.page
  44 |       .getByRole("button", {
  45 |         name: "Tolak"
  46 |       })
  47 |       .click();
  48 |   }
  49 | 
  50 |   async inputRejectReason(
  51 |     reason: string
  52 |   ) {
  53 | 
  54 |     await this.page
  55 |       .getByPlaceholder(
  56 |         "Tulis alasan penolakan di sini"
  57 |       )
  58 |       .fill(reason);
  59 | 
  60 |   }
  61 | 
  62 |   async submitReject() {
  63 |     await this.page
  64 |       .getByRole("button", {
  65 |         name: "Kirim"
  66 |       })
  67 |       .click();
  68 |   }
  69 | }
```